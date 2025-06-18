import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import userUtil from "../userUtil.js";
import { get, host } from "../request.js";

const navEl = document.querySelector("header");

export async function showNav() {
  const token = userUtil.getToken();

  render(navTemplate(token), navEl);
}

function navTemplate(token) {
  return html`
    <a id="logo" href="/"
      ><img id="logo-img" src="./images/show_logo.png" alt="logo" />
    </a>
    <nav>
      <div>
        <a href="/dashboard">TV Shows</a>
        <a href="#">Search</a>
      </div>

      ${token
        ? html` <div class="user">
            <a href="/create">Add Show</a>
            <a href="#" @click=${onLogout}>Logout</a>
          </div>`
        : html`
            <div class="guest">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
          `}
    </nav>
  `;
}

async function onLogout() {
  
    await get(`${host}users/logout`);

    userUtil.removeUser();
    page.redirect("/");
  
}
