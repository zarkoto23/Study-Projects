import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("#main-element");

export default async function showDetails() {
  render(detailsTemplate(), mainEl);
}

function detailsTemplate() {
  return html`
    <!-- Details page -->

    <section id="details">
      <div id="details-wrapper">
        <div>
          <img id="details-img" src="./images/avata2.jpg" alt="example1" />
          <p id="details-model">DJI Avata</p>
        </div>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="details-price">Price: €450</p>
            <p class="details-condition">Condition: New</p>
            <p class="details-weight">Weight: 410g</p>
            <p class="drone-description">
              The DJI Avata is an innovative FPV (First-Person View) drone
              designed for immersive flying experiences. With a compact and
              robust design, it features a 4K camera capable of capturing
              stunning aerial footage at 60 fps. Equipped with advanced
              stabilization technology, the Avata ensures smooth video even in
              dynamic environments.
            </p>
            <p class="phone-number">Phone: 0987654321</p>
          </div>
          <!--Edit and Delete are only for creator-->
          <div class="buttons">
            <a href="" id="edit-btn">Edit</a>
            <a href="" id="delete-btn">Delete</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
