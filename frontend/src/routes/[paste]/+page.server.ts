import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	let response: Response;

	try {
		response =
			await fetch(`${process.env.API_ROOT}/pastes/${params.paste}`);
	}
	catch {
		throw error(503, 'Unable to connect to the API.');
	}

	if (response.ok) {
		try {
			const paste = await response.json();
			return { paste };
		}
		catch {
			throw error(500, 'API sent invalid data.');
		}
	}

	if (response.status === 404)
		throw error(404, 'The requested paste was not found in the database.');

	throw error(500, 'Internal server error.');
}) satisfies PageServerLoad;
