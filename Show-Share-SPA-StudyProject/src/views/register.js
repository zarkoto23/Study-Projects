import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { host, post } from "../request.js";
import userUtil from "../userUtil.js";

const mainEl = document.querySelector("main");

export async function showRegister() {
  render(registerTemplate(), mainEl);
}

function registerTemplate() {
  return html`
    <section id="register">
      <div class="form">
        <h2>Register</h2>
        <form @submit=${onRegister} class="register-form">
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

async function onRegister(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));
  for (let key in data) {
    if (data[key].trim() === "") {
      return alert("All fields reqired!");
    }
  }

  if (data.password !== data["re-password"]) {
    return alert("Passwords not match!");
  }

  try {
    const result = await post(`${host}users/register`, data);
    console.log(result);

    userUtil.setUser(result);
    page.redirect("/");
  } catch (err) {
    return alert(err.message);
  }
}
