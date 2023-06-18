import { r as redirect } from "../../chunks/index.js";
import { d as db } from "../../chunks/database.js";
const load = async ({ locals }) => {
  console.log("** / load +page.server.js** ");
  if (!locals.user) {
    console.log("No one is currently logged in.");
    throw redirect(302, "/login");
  }
  console.log("User is logged in. Retrieving data.");
  const projectList = await db.Project.findMany({
    where: { userID: parseInt(locals.user.id) }
  });
  const todoList = await db.Todo.findMany({
    where: { userID: parseInt(locals.user.id) }
  });
  return { userData: locals.user, projectList, todoList };
};
export {
  load
};
