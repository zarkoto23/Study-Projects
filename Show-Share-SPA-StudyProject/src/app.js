import page from "../node_modules/page/page.mjs";

import { showNav } from "./views/nav.js";
import { showHome } from "./views/home.js";
import { showCreate } from "./views/create.js";
import { showDashboard } from "./views/dashboard.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showSearch } from "./views/search.js";


page("*", (ctx, next) => {
  showNav();
  next();
});
page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/edit/:id", showEdit);
page("/details/:id", showDetails);        
page("/dashboard", showDashboard);
page("/search", showSearch);


page();
