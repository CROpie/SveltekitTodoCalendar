import { db } from '$lib/database';

export const handle = async ({ event, resolve }) => {
	console.log('** handle +hooks.server.js **');
	// try to retrieve the session cookie
	const session = event.cookies.get('session');

	// no logged in user so do the usual thing
	if (!session) {
		return await resolve(event);
	}

	// find the user that matches the cookie
	// select means only certain values are retrieved
	const user = await db.user.findUnique({
		where: { userAuthToken: session },
		select: { username: true, id: true }
	});

	// store in event.locals to be used in load functions
	if (user) {
		event.locals.user = {
			name: user.username,
			id: user.id
		};
	}

	return await resolve(event);
};
