import { html, render } from "../../node_modules/lit-html/lit-html.js";
import  page  from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("main");

export default async function showHome() {
  render(homeTemplate(), mainEl);
}

function homeTemplate() {
  
  return html`
      <!-- Home page -->

        <section id="home">
          <h1>
            Dive into our world of cutting-edge technologies and out-of-the-box
            ideas designed to make Mother Nature smile again. From quirky
            gadgets to serious solutions, we're here to show you that saving the
            planet can be as exciting as it is essential. Join us in our mission
            to turn "green" into more than just a color - it's a lifestyle!
          </h1>
          <img id="home-img" src="./images/logo.png" alt="home-img" />
        </section>
  `;
}
