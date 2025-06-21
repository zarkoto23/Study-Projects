import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import userService from "../userService.js";
import { getToken } from "../util.js";

const mainEl = document.querySelector("header");

export default async function showNav() {
  render(navTemplate(), mainEl);
}

function navTemplate() {
  const token = getToken();

return html`
    <!-- Navigation -->
    <a id="logo" href="/">
      <img id="logo-img" src="./images/logo2.png" alt="logo" />
    </a>
    <nav>
      <div>
        <a href="/dashboard">Solutions</a>
      </div>

      ${token
        ? html`
            <!-- Logged-in users -->
            <div class="user">
              <a href="/create">Add Solution</a>
              <a href="javascript:void(0)" @click=${onLogout}>Logout</a>
            </div>
          `
        : html`
            <!-- Guest users -->
            <div class="guest">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
          `}
    </nav>
  `;
}

async function onLogout(){
  
  try{await userService.logout()
  page.redirect('/')
  }catch{
    alert('unsuccessfull logout')
    return
  }
}
