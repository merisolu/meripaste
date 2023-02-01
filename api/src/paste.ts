import { Schema, model } from 'mongoose';

interface IPaste {
	_id: string;
	content: string;
	createdAt: Date;
	expiresAt: Date;
}

const pasteSchema = new Schema<IPaste>({
	_id: { type: String, required: true },
	content: {
		type: String,
		immutable: true,
		required: [true, 'Paste cannot be empty.'],
		minlength: [1, 'Paste cannot be empty.'],
		maxlength: [4096, 'Paste too long.']
	},
	createdAt: {
		type: Date,
		immutable: true,
		required: true,
	},
	expiresAt: {
		type: Date,
		immutable: true,
		expires: 0,
		required: true,
	}
});

export const Paste = model<IPaste>('Paste', pasteSchema);
