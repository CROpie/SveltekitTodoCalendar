import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/database';

const login = async ({ cookies, request }) => {
	console.log('** /login login +page.server.js **');
	const data = await request.formData();
	const username = data.get('username');
	let user = await db.user.findUnique({
		where: { username }
	});

	// print on the form that name is a required field
	if (!username) {
		return fail(400, { invalid: true });
	}

	// check if the user exists in the database
	if (!user) {
		console.log('Creating new user.');
		await db.user.create({
			data: { username, userAuthToken: username }
		});
		// get the newly created user using a temp userAuthToken
		user = await db.user.findUnique({
			where: { username }
		});
	}

	// generate and store a userAuthToken to use as a cookie
	const authUser = await db.user.update({
		where: { username: user.username },
		data: { userAuthToken: crypto.randomUUID() }
	});

	cookies.set('session', authUser.userAuthToken, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 30
	});

	console.log('user authenticated. Redirecting.');
	throw redirect(302, '/');
};

export const actions = { login };
