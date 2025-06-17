import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";

const mainEl = document.querySelector("main");

export async function showHome() {
  render(homeTemplate(), mainEl);
}

function homeTemplate() {
  return html`
    <section id="home">
      <img id="home-img" src="./images/show_logo.png" alt="home-img" />
      <h1>
        Welcome to ShowShare, the ultimate platform for TV enthusiasts!
        Discover, discuss, and share your favorite TV shows with a community
        that loves great content just as much as you do. Find hidden gems. Your
        next binge-worthy series is just a click away!
      </h1>
    </section>
  `;
}
