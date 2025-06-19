import page from "../../node_modules/page/page.mjs";
import {html, render} from "../../node_modules/lit-html/lit-html.js"

const mainEl=document.querySelector('main')

export async function showDetails(){

render(detailsTemplate(), mainEl)
}

function detailsTemplate(){
  return html` 
   <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src="./images/japanese dragon.png"
              alt="example1"
            />
            <div>
              <div id="info-wrapper">
                <p id="details-type">Japanese Dragon</p>
                <div id="details-description">
                  <p id="user-type">Tattoo Artist</p>
                  <p id="description">
                    A majestic Japanese dragon wrapped in swirling clouds and
                    flames, symbolizing strength, wisdom, and protection.
                  </p>
                </div>
                <h3>Like tattoo:<span id="like">0</span></h3>
                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                  <a href="#" id="edit-btn">Edit</a>
                  <a href="#" id="delete-btn">Delete</a>

                  <!--Bonus - Only for logged-in users ( not authors )-->
                  <a href="#" id="like-btn">Like</a>
                </div>
              </div>
            </div>
          </div>
        </section>
  `

}