import page from "../../node_modules/page/page.mjs";
import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { get, host } from "../requester.js";
import userUtil from "../userUtil.js";

const mainEl=document.querySelector('main')

export async function showDetails(ctx){
const id=ctx.params.id

try{
  const result=await get(`${host}/data/tattoos/${id}`)
  render(detailsTemplate(result), mainEl)

}catch(err){
  err.message
}
}


function detailsTemplate(result){
  const userId=userUtil.getUserId()
  
  return html` 
   <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src=${result.imageUrl}
              alt="example1"
            />
            <div>
              <div id="info-wrapper">
                <p id="details-type">${result.type}</p>
                <div id="details-description">
                  <p id="user-type">${result.userType}</p>
                  <p id="description">
                    ${result.description}
                  </p>
                </div>
                <h3>Like tattoo:<span id="like">0</span></h3>
                ${result._ownerId===userId? html`
                <!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                  <a href="/edit/${result._id}" id="edit-btn">Edit</a>
                  <a href="#" id="delete-btn">Delete</a>
                </div>

                  `:'' }

                  <!--Bonus - Only for logged-in users ( not authors )-->
                  <!-- <a href="#" id="like-btn">Like</a> -->
              </div>
            </div>
          </div>
        </section>
  `

}