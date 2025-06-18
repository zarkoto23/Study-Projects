import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { get, host } from "../request.js";

const mainEl = document.querySelector("main");

export async function showDashboard() {
  try {
    const result = await get(`${host}data/shows?sortBy=_createdOn%20desc`);
    render(dashboardTemplate(result), mainEl);
    console.log(result);
  } catch (err) {
    alert(err.message);
  }
}

function dashboardTemplate(result) {
  return result.length > 0
    ? html`
        <h2>Users Recommendations</h2>
        <section id="shows">
          <div class="show">
            <img src="./images/vikings.jpg" alt="example1" />
            <div class="show-info">
              <h3 class="title">Vikings</h3>
              <p class="genre">Genre: Historical Drama</p>
              <p class="country-of-origin">Country of Origin: Canada</p>
              <a class="details-btn" href="#">Details</a>
            </div>
          </div>
          <div class="show">
            <img src="./images/westworld.jpg" alt="example1" />
            <div class="show-info">
              <h3 class="title">Westworld</h3>
              <p class="genre">Genre: Science Fiction</p>
              <p class="country-of-origin">Country of Origin: United States</p>
              <a class="details-btn" href="#">Details</a>
            </div>
          </div>
          <div class="show">
            <img src="./images/friends.jpg" alt="example1" />
            <div class="show-info">
              <h3 class="title">Friends</h3>
              <p class="genre">Genre: Comedy</p>
              <p class="country-of-origin">Country of Origin: United States</p>
              <a class="details-btn" href="#">Details</a>
            </div>
          </div>
        </section>
      `
    : html` <h2 id="no-show">No shows Added.</h2> `;
}
