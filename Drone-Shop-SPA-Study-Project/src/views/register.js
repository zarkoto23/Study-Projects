import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import userService from "../userService.js";

const mainEl = document.querySelector("#main-element");

export default async function showRegister() {
  render(registerTemplate(), mainEl);
}

function registerTemplate() {
  return html`
    <section id="register">
      <div class="form">
        <h2>Register</h2>
        <form @submit=${registerUser} class="register-form">
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
          />
          <input
            type="password"
            name="re-password"
            id="repeat-password"
            placeholder="repeat password"
          />
          <button type="submit">register</button>
          <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
      </div>
    </section>
  `;
}

async function registerUser(e) {
  e.preventDefault();

  const userData = Object.fromEntries(new FormData(e.currentTarget));
  console.log(userData);
  if (userData.password !== userData["re-password"]) {
    alert("Passwords don't match");
    return;
  }

  try {
    const result = await userService.register(userData);

    page.redirect("/");
  } catch (err) {
    alert(err.message);
    return;
  }
}
