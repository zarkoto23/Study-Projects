import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { baseItemsAvailableUrl } from "../links.js";
import { get } from "../requester.js";

const mainEl = document.querySelector("main");

export default async function showDashboard() {
  try {
    const result = await get(baseItemsAvailableUrl);
    render(dashboardTemplate(result), mainEl);

    return result;
  } catch (err) {
    alert(err.message);
  }
}

function dashboardTemplate(result) {
  return html`
    <h3 class="heading">Marketplace</h3>
    <section id="dashboard">
      ${result.map(
        (element) => html`
          <div class="drone">
            <img src="${element.imageUrl}" alt="example1" />
            <h3 class="model">${element.model}</h3>
            <div class="drone-info">
              <p class="price">Price: €${element.price}</p>
              <p class="condition">Condition: ${element.condition}</p>
              <p class="weight">Weight: ${element.weight}g</p>
            </div>
            <a class="details-btn" href="/details/${element._id}">Details</a>
          </div>
        `
      )}
    </section>

    ${result.length === 0
      ? html`<h3 class="no-drones">No Drones Available</h3>`
      : ""}
  `;
}
