import page from "../../node_modules/page/page.mjs";
import {html, render} from "../../node_modules/lit-html/lit-html.js"

const mainEl=document.querySelector('main')

export async function showDashboard(){

render(dashboardTemplate(), mainEl)
}

function dashboardTemplate(){
  return html` 
   <h2>Collection</h2>
        <section id="tattoos">
          <!-- Display a div with information about every post (if any)-->
          <div class="tattoo">
            <img src="./images/mad bunny.png" alt="example1" />
            <div class="tattoo-info">
              <h3 class="type">The Mad Bunny</h3>
              <span>Uploaded by </span>
              <p class="user-type">Tattoo Artist</p>
              <a class="details-btn" href="#">Learn More</a>
            </div>
          </div>
          <div class="tattoo">
            <img src="./images/japanese dragon.png" alt="example2" />
            <div class="tattoo-info">
              <h3 class="type">Japanese Dragon</h3>
              <span>Uploaded by </span>
              <p class="user-type">Tattoo Enthusiast</p>
              <a class="details-btn" href="#">Learn More</a>
            </div>
          </div>
          <div class="tattoo">
            <img src="./images/trash polka.png" alt="example3" />
            <div class="tattoo-info">
              <h3 class="type">Trash Polka</h3>
              <span>Uploaded by </span>
              <p class="user-type">First Time in Tattoo</p>
              <a class="details-btn" href="#">Learn More</a>
            </div>
          </div>
        </section>
        <!-- Display an h2 if there are no posts -->
        <h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>
  `

}
