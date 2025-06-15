import { html, render } from "../../node_modules/lit-html/lit-html.js";
import  page from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("main");

export default async function showDashboard() {
  render(dashboardTemplate(), mainEl);
}

function dashboardTemplate() {
  return html`
    <h3 class="heading">Marketplace</h3>
    <section id="dashboard">



    <div class="drone">
        <img src="./images/avata2.jpg" alt="example1" />
        <h3 class="model">DJI Avata</h3>
        <div class="drone-info">
          <p class="price">Price: €450</p>
          <p class="condition">Condition: New</p>
          <p class="weight">Weight: 410g</p>
        </div>
        <a class="details-btn" href="#">Details</a>
      </div>
      <div class="drone">
        <img src="./images/inspire3.jpg" alt="example1" />
        <h3 class="model">DJI Inspire 3</h3>
        <div class="drone-info">
          <p class="price">Price: €9999</p>
          <p class="condition">Condition: Used</p>
          <p class="weight">Weight: 3995g</p>
        </div>
        <a class="details-btn" href="#">Details</a>
      </div>
      <div class="drone">
        <img src="./images/mini3.png" alt="example1" />
        <h3 class="model">DJI Mini 3 Pro</h3>
        <div class="drone-info">
          <p class="price">Price: €520</p>
          <p class="condition">Condition: New</p>
          <p class="weight">Weight: 249g</p>
        </div>
        <a class="details-btn" href="#">Details</a>
      </div>
    </section>




    <h3 class="no-drones">No Drones Available</h3>
  `;
}
