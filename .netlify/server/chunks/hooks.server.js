import { d as db } from "./database.js";
const handle = async ({ event, resolve }) => {
  console.log("** handle +hooks.server.js **");
  const session = event.cookies.get("session");
  if (!session) {
    return await resolve(event);
  }
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { username: true, id: true }
  });
  if (user) {
    event.locals.user = {
      name: user.username,
      id: user.id
    };
  }
  return await resolve(event);
};
export {
  handle
};
