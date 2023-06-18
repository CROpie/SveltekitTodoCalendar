// import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/database';

export const actions = {
	addProjectToDB: async (event) => {
		console.log('** /testapi/project addProjectToDB +page.server.js **');
		const data = await event.request.formData();
		const projectName = data.get('projectName');
		const userID = parseInt(data.get('userID'));

		const result = await db.Project.create({
			data: { projectName, username: { connect: { id: userID } } }
		});
		return result;
	},
	removeProjectFromDB: async (event) => {
		console.log('** /testapi/project removeProjectFromDB +page.server.js **');
		const data = await event.request.formData();
		const projectID = parseInt(data.get('projectID'));

		const result = await db.Project.delete({
			where: { id: parseInt(projectID) }
		});
		return result;
	}
};
