import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";


const mainEl = document.querySelector("main");

export default async function showCreate() {
  render(createTemplate(), mainEl);
}

function createTemplate() {
  return html`
   
  `;
}

async function onCreate(e) {
  e.preventDefault();


}
