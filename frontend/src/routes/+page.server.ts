import { error, redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export const actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();
		const contentEntry = formData.get('content');

		if (!contentEntry)
			throw error(422, 'Missing paste content.');

		const content = contentEntry.toString();

		const response: Response =
			await fetch(`${process.env.API_ROOT}/pastes`, {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({ content: content })
			});

		const json = await response.json();

		if (!response.ok)
			throw error(422, json.error);

		throw redirect(303, `/${json.id}`);
	}
};
