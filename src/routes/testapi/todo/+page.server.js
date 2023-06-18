import { db } from '$lib/database';

export const actions = {
	addTodoToDB: async (event) => {
		console.log('** /testapi/todo addTodoToDB +page.server.js **');
		const data = await event.request.formData();
		const todoName = data.get('todoName');
		const notes = data.get('notes');
		const userID = parseInt(data.get('userID'));
		const projectID = parseInt(data.get('projectID'));
		const dueDate = data.get('dueDate');

		const result = await db.Todo.create({
			data: {
				todoName,
				dueDate,
				notes,
				username: { connect: { id: userID } },
				project: { connect: { id: projectID } }
			}
		});
		return result;
	},
	removeTodoFromDB: async (event) => {
		console.log('** /testapi/todo removeTodoFromDB +page.server.js **');
		const data = await event.request.formData();
		const todoID = parseInt(data.get('todoID'));
		const result = await db.Todo.delete({
			where: { id: todoID }
		});
		return result;
	},
	modifyTodoInDB: async (event) => {
		console.log('** /testapi/todo modifyTodoInDB +page.server.js **');
		const data = await event.request.formData();
		const todoName = data.get('todoName');
		const dueDate = data.get('dueDate');
		const notes = data.get('notes');
		const todoID = parseInt(data.get('todoID'));
		// const userID = parseInt(data.get('userID'));
		// const projectID = parseInt(data.get('projectID'));

		const result = await db.Todo.update({
			where: { id: todoID },
			data: {
				todoName,
				dueDate,
				notes
				// username: { connect: { id: userID } },
				// project: { connect: { id: projectID } }
			}
		});
		return result;
	}
};
