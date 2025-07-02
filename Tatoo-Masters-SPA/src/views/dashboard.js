import { html, render } from "../../node_modules/lit-html/lit-html.js";
import service from "../services.js";

const mainEl = document.querySelector("main");

export async function showDashboard() {
  try{
    const result = await service.getAll();
    
     render(dashboardTemplate(result), mainEl);
     

  }catch(err){
    alert(err.message)
  }
}

function dashboardTemplate(result) {
  return html`
    <h2>Collection</h2>
    <section id="tattoos">
      <!-- Display a div with information about every post (if any)-->
      ${result.length > 0
        ? result.map(
            (el) => html`
              <div class="tattoo">
                <img src=${el.imageUrl} alt="example1" />
                <div class="tattoo-info">
                  <h3 class="type">${el.type}</h3>
                  <span>Uploaded by </span>
                  <p class="user-type">${el.userType}</p>
                  <a class="details-btn" href="/details/${el._id}">Learn More</a>
                </div>
              </div>
            `
          )
        : html`
            <!-- Display an h2 if there are no posts -->
            <h2 id="no-tattoo">
              Collection is empty, be the first to contribute
            </h2>
          `}
    </section>
  `;
}
