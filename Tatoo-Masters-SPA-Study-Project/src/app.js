import page from "../node_modules/page/page.mjs"
import {html, render} from "../node_modules/lit-html/lit-html.js"

import { showHome } from "./views/home.js"
import { showCreate } from "./views/create.js"
import { showDashboard } from "./views/dashboard.js"
import { showEdit } from "./views/edit.js"
import { showDetails } from "./views/details.js"
import { showLogin } from "./views/login.js"
import { showNav } from "./views/nav.js"
import { showRegister } from "./views/register.js"



page('*',showNav)

page('/',showHome)
page('/create',showCreate)
page('/dashboard',showDashboard)
page('/login',showLogin)
page('/register',showRegister)
page('/details/:id',showDetails)
page('/edit/:id',showEdit)

page()

showHome()




