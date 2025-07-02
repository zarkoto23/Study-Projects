import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import {get} from "../requester.js"
import { baseItemsUrl } from "../links.js";
import { del } from "../requester.js";

const mainEl = document.querySelector("#main-element");

export default async function showDetails(ctx) {

  
  const id=ctx.params.id
  try{
  const result= await get(`${baseItemsUrl}/${id}`)
  render(detailsTemplate(result,id), mainEl);

  }catch(err){
    alert(err.message)
  }
}

function detailsTemplate(result,id) {
  const isOwner=result._ownerId===localStorage.getItem('userId')
  return html`

    <section id="details">
      <div id="details-wrapper">
        <div>
          <img id="details-img" src="${result.imageUrl}" alt="example1" />
          <p id="details-model">${result.model}</p>
        </div>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="details-price">Price: €${result.price}</p>
            <p class="details-condition">Condition: ${result.condition}</p>
            <p class="details-weight">Weight: ${result.weight}g</p>
            <p class="drone-description">
              ${result.description}
            </p>
            <p class="phone-number">Phone: ${result.phone}</p>
          </div>
          ${isOwner? html`<div class="buttons">
            <a href="/edit/${result._id}" id="edit-btn">Edit</a>
            <a href="" id="delete-btn" @click=${(e)=>onDelete(e,id)}>Delete</a>
          </div>`: ''}

          
        </div>
      </div>
    </section>
  `;
}

async function onDelete(e,id) {
  e.preventDefault()
  const conf=confirm('Are you sure?')
  if (conf){
    try{
  const result=await del(`${baseItemsUrl}/${id}`)
  console.log(result);
  
  page.redirect('/dashboard')
  }catch(err){
  alert(err.message)
}
}
}