import { r as redirect, f as fail } from "../../../../chunks/index.js";
import bcrypt from "bcryptjs";
import { d as db } from "../../../../chunks/database.js";
const login = async ({ cookies, request }) => {
  console.log("** /login login +page.server.js **");
  const data = await request.formData();
  const username = data.get("username");
  if (username === "default") {
    const authUser2 = await createDefaultData(username);
    cookies.set("session", authUser2.userAuthToken, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30
    });
    console.log("default user created. Redirecting.");
    throw redirect(302, "/");
  }
  const password = data.get("password");
  if (!username || !password) {
    console.log("invalid entry");
    return fail(400, { invalid: true });
  }
  let user = await db.User.findUnique({
    where: { username }
  });
  if (user) {
    const userPassword = await bcrypt.compare(password, user.passwordHash);
    if (!userPassword) {
      console.log("fail password");
      return fail(400, { credentials: true });
    }
  }
  if (!user) {
    console.log("Creating new user.");
    user = await db.User.create({
      data: { username, passwordHash: await bcrypt.hash(password, 10), userAuthToken: username }
    });
  }
  const authUser = await db.User.update({
    where: { username: user.username },
    data: { userAuthToken: crypto.randomUUID() }
  });
  cookies.set("session", authUser.userAuthToken, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30
  });
  console.log("user authenticated. Redirecting.");
  throw redirect(302, "/");
};
const actions = { login };
async function createDefaultData(username) {
  console.log("Making Default...");
  let defaultExist = await db.user.findUnique({
    where: { username }
  });
  if (defaultExist) {
    console.log('deleting user "default"');
    await db.User.delete({
      where: { id: parseInt(defaultExist.id) }
    });
  }
  let authUser = await db.User.create({
    data: { username, userAuthToken: crypto.randomUUID(), passwordHash: "fakepassword" }
  });
  const projectIDList = await addDefaultProjectsToDB(authUser);
  await addDefaultTodosToDB(authUser, projectIDList);
  return authUser;
}
async function addDefaultProjectsToDB(authUser) {
  const projectList = ["Lab Duties", "Catalysis"];
  let projectIDList = [];
  for (let project of projectList) {
    const projectEntry = await db.Project.create({
      data: { projectName: project, username: { connect: { id: authUser.id } } }
    });
    projectIDList.push(parseInt(projectEntry.id));
  }
  return projectIDList;
}
async function addDefaultTodosToDB(authUser, projectIDList) {
  const todoList = createTodoList(projectIDList);
  for (let todo of todoList) {
    await db.Todo.create({
      data: {
        todoName: todo.todoName,
        dueDate: todo.dueDate,
        notes: todo.notes,
        project: { connect: { id: todo.projectID } },
        username: { connect: { id: authUser.id } }
      }
    });
  }
}
function createDynamicDates() {
  const dynamicDates = [];
  const intervalList = [-5, 3, 0, 1, 30, 0, 10, 0, 2, 4];
  const today = /* @__PURE__ */ new Date();
  let todayObj = {
    year: today.getFullYear(),
    month: today.getMonth(),
    date: today.getDate()
  };
  for (let i = 0; i < 10; i++) {
    dynamicDates[i] = dateObjToString(newDateFromInterval(todayObj, intervalList[i]));
  }
  return dynamicDates;
}
function newDateFromInterval(dateObj, interval) {
  let newDateObj = structuredClone(dateObj);
  newDateObj.date = parseInt(newDateObj.date) + interval;
  const newDate = new Date(newDateObj.year, newDateObj.month, newDateObj.date);
  let roundedNewDateObj = {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
    date: newDate.getDate()
  };
  return roundedNewDateObj;
}
function dateObjToString(dateObj) {
  let month2dec = (parseInt(dateObj.month) + 1).toString().padStart(2, 0);
  let date2dec = parseInt(dateObj.date).toString().padStart(2, 0);
  const dateString = `${dateObj.year}-${month2dec}-${date2dec}`;
  return dateString;
}
function createTodoList(projectIDList) {
  const dynamicDates = createDynamicDates();
  const todoList = [
    {
      projectID: projectIDList[1],
      todoName: "Mitsunobu reaction",
      dueDate: dynamicDates[0],
      notes: "Didn't run under nitrogen last time and it was still fine. Repeat reaction to make more starting material"
    },
    {
      projectID: projectIDList[0],
      todoName: "Waste Disposal",
      dueDate: dynamicDates[1],
      notes: "Take down the TLC plates too"
    },
    {
      projectID: projectIDList[0],
      todoName: "Wash glassware",
      dueDate: dynamicDates[2],
      notes: "Make sure to put in the oven in preparation for tomorrow's reaction"
    },
    {
      projectID: projectIDList[0],
      todoName: "Waste Solvent Disposal",
      dueDate: dynamicDates[3],
      notes: "Make sure to bring back some empty carboys (if available)"
    },
    {
      projectID: projectIDList[1],
      todoName: "BCl3/AlCl3 reaction",
      dueDate: dynamicDates[4],
      notes: "Enough material for a 1g scale reaction"
    },
    {
      projectID: projectIDList[1],
      todoName: "Liquid Nitrogen",
      dueDate: dynamicDates[5],
      notes: "Asada has been doing freeze-pump-thaw cycles recently, so need to fill it to the brim"
    },
    {
      projectID: projectIDList[1],
      todoName: "Sonogashira coupling",
      dueDate: dynamicDates[6],
      notes: "Use the fresh alkyne when it arrives"
    },
    {
      projectID: projectIDList[0],
      todoName: "Dry Ice",
      dueDate: dynamicDates[7],
      notes: "Be sure to dispose of the plastic inside the container before filling it"
    },
    {
      projectID: projectIDList[1],
      todoName: "Chemical delivery",
      dueDate: dynamicDates[8],
      notes: "May need to order more AlCl3 soon"
    },
    {
      projectID: projectIDList[0],
      todoName: "Fume Hood Maintenance",
      dueDate: dynamicDates[9],
      notes: "Won't be able to use the fume hood on this day"
    }
  ];
  return todoList;
}
export {
  actions
};
