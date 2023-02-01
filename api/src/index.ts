import { nanoid } from 'nanoid';
import express, { Express, Request, Response } from 'express';
import { connect, MongooseError } from 'mongoose';
import { Paste } from './paste';
import { crlf, LF } from 'crlf-normalize';

// Start DB connection with Mongoose.
connect(`${process.env.DB_COLLECTION_URL}`, { authSource: 'admin' });

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

// List synopsis, creation time and expiration time of the 5 most recent pastes.
app.get('/api/pastes/recent', async (req: Request, res: Response) => {
	Paste.aggregate([{
		$project: {
			contentSubstring: { $substrCP: [ '$content', 0, 50 ] },
			createdAt: 1,
			expiresAt: 1
		}
	}])
		.sort({ createdAt: -1 })
		.limit(5)
		.then(pastes => {
			res.send(pastes.map(paste => ({
				id: paste._id,
				synopsis: paste.contentSubstring,
				createdAt: paste.createdAt,
				expiresAt: paste.expiresAt
			})));
		})
		.catch(() => res.sendStatus(500));
});

// Query a specific paste by its id.
app.get('/api/pastes/:id', async (req: Request, res: Response) => {
	Paste.findById(req.params.id)
		.then(paste => {
			if (paste)
				res.send({
					id: paste._id,
					content: paste.content,
					createdAt: paste.createdAt,
					expiresAt: paste.expiresAt
				});
			else
				res.sendStatus(404);
		})
		.catch(err => res.send(err));
});

// Post new paste.
app.post('/api/pastes', async (req: Request, res: Response) => {
	if (req.headers['content-type'] !== 'application/json') {
		res.status(422).send({ errors: 'Invalid content type.' });
		return;
	}

	const paste = new Paste({
		_id: nanoid(10),
		content: crlf(req.body.content, LF),
		createdAt: Date.now(),
		expiresAt: Date.now() + 1000 * 60 * 60 // one hour
	});

	paste.save()
		.then(() => res.send({
			id: paste._id,
			expireAt: paste.expiresAt
		}))
		.catch(err => {
			// Pass validation errors to the frontend.
			if (err.name === 'ValidationError') {
				const validationErrors: MongooseError[]
					= Object.values(err.errors);

				const messages =
					validationErrors.map(
						(e) => e.message
					);

				res.status(422).send({
					error: messages[0]
				});
			}
			else
				res.sendStatus(500);
		});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
