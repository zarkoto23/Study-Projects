import { html, render } from "../../node_modules/lit-html/lit-html.js";
import  page  from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("main");

export default async function showHome() {
  render(homeTemplate(), mainEl);
}

function homeTemplate() {
  
  return html`
    <section id="hero">
      <p>
        Discover the best deals on drones! Buy, sell, and trade top-quality
        drones with ease on Drone Deals - your trusted marketplace for all
        things drone.
      </p>
    </section>
  `;
}
