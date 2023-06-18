import { r as redirect } from "../../../../chunks/index.js";
const load = async () => {
  throw redirect(302, "/");
};
const actions = {
  logout({ cookies }) {
    console.log("** /logout logout +page.server.js **");
    cookies.set("session", "", {
      path: "/",
      expires: /* @__PURE__ */ new Date(0)
    });
    throw redirect(302, "login");
  }
};
export {
  actions,
  load
};
