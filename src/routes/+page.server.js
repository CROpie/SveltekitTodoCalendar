import { redirect } from '@sveltejs/kit';
import { db } from '$lib/database';

export const load = async ({ locals }) => {
	console.log('** / load +page.server.js** ');
	if (!locals.user) {
		console.log('No one is currently logged in.');
		throw redirect(302, '/login');
	}

	console.log('User is logged in. Retrieving data.');
	const projectList = await db.Project.findMany({
		where: { userID: parseInt(locals.user.id) }
	});
	const todoList = await db.Todo.findMany({
		where: { userID: parseInt(locals.user.id) }
	});
	return { userData: locals.user, projectList, todoList };
};
