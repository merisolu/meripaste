import { error } from '@sveltejs/kit';

export async function load() {
	let response;

	try {
		response = await fetch(`${process.env.API_ROOT}/pastes/recent`);
	}
	catch {
		return {
			error: {
				message: 'Unable to connect to API.'
			}
		};
	}

	if (response.status !== 200)
		throw error(500, 'Internal server error.');

	try {
		const data = await response.json();
		return { pastes: data };
	}
	catch {
		throw error(500, 'API sent invalid data.');
	}
}
