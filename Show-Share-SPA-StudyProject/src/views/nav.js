import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navEl = document.querySelector("header");

export async function showNav() {
  render(navTemplate(), navEl);
}

function navTemplate() {
  return html`
    <!-- Navigation -->
    <a id="logo" href="#"
      ><img id="logo-img" src="./images/show_logo.png" alt="logo" />
    </a>
    <nav>
      <div>
        <a href="#">TV Shows</a>
        <a href="#">Search</a>
      </div>

      <!-- Logged-in users -->
      <div class="user">
        <a href="#">Add Show</a>
        <a href="#">Logout</a>
      </div>

      <!-- Guest users -->
      <div class="guest">
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </nav>
  `;
}
