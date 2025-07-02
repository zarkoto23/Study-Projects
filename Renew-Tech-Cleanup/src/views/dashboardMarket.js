import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { baseItemsAvailableUrl } from "../links.js";
import { get } from "../requester.js";

const mainEl = document.querySelector("main");

export default async function showDashboard() {
  try {
    const result = await get(baseItemsAvailableUrl);
    console.log(result);
    
    render(dashboardTemplate(result), mainEl);

    return result;
  } catch (err) {
    alert(err.message);
  }
}

function dashboardTemplate(result) {
  return html`
    <!-- Dashboard page -->
    <h2>Solutions</h2>

    ${result.length > 0 
      ? html`
        <section id="solutions">
          ${result.map((e) => html` 
            <!-- Display a div with information about every post (if any) -->
            <div class="solution">
              <img src=${e.imageUrl} alt="example3" />
              <div class="solution-info">
                <h3 class="type">${e.type}</h3>
                <p class="description">
                  ${e.description}
                </p>
                <a class="details-btn" href="/details/${e._id}">Learn More</a>
              </div>
            </div>
          `)}
        </section>
      `
      : html`
        <!-- Display an h2 if there are no posts -->
        <h2 id="no-solution">No Solutions Added.</h2>
      `}
  `;
}


