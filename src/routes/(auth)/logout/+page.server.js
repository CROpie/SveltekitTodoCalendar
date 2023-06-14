import { redirect } from '@sveltejs/kit';

// since we don't visit this page, auto redirect
export const load = async () => {
	throw redirect(302, '/');
};

export const actions = {
	logout({ cookies }) {
		console.log('** /logout logout +page.server.js **');
		// eat the cookie
		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});

		// redirect the user
		throw redirect(302, 'login');
	}
};
