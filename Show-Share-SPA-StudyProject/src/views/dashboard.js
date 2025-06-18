import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { get, host } from "../request.js";

const mainEl = document.querySelector("main");

export async function showDashboard() {
  try {
    const result = await get(`${host}data/shows?sortBy=_createdOn%20desc`);

    render(dashboardTemplate(result), mainEl);
  } catch (err) {
    alert(err.message);
  }
}

function dashboardTemplate(result) {
  return result.length > 0
    ? html`
        <h2>Users Recommendations</h2>
        <section id="shows">
          ${result.map(
            (el) =>
              html` <div class="show">
                <img src=${el.imageUrl} alt="example1" />
                <div class="show-info">
                  <h3 class="title">${el.title}</h3>
                  <p class="genre">Genre: ${el.genre}</p>
                  <p class="country-of-origin">
                    Country of Origin: ${el.country}
                  </p>
                  <a class="details-btn" href="/details/${el._id}">Details</a>
                </div>
              </div>`
          )}
        </section>
      `
    : html` <h2>Users Recommendations</h2>
    <h2 id="no-show">No shows Added.</h2> `;
}
