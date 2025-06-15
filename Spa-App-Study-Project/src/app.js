import page from "../node_modules/page/page.mjs";

import showNav from "./views/nav.js";

import showCreate from "./views/createAdd.js";
import showDashboard from "./views/dashboardMarket.js";
import showDetails from "./views/details.js";
import showEdit from "./views/edit.js";
import showHome from "./views/home.js";
import showLogin from "./views/login.js";
import showRegister from "./views/register.js";

page("*", (ctx, next) => {
  showNav();
  next();
});
page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/edit/:id", showEdit);
page("/dashboard", showDashboard);
page("/details/:id", showDetails);

page();


