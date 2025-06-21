import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import {get} from "../requester.js"
import { baseItemsUrl } from "../links.js";
import { del } from "../requester.js";

const mainEl = document.querySelector("main");

export default async function showDetails(ctx) {

  
  const id=ctx.params.id
  try{
  const result= await get(`${baseItemsUrl}/${id}`)
  render(detailsTemplate(result,id), mainEl);

  }catch(err){
    alert(err.message)
  }
}

function detailsTemplate(result, id) {
  const userId = localStorage.getItem("userId");
  const isOwner = result._ownerId === userId;
  const isLoggedIn = !!userId;

  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${result.imageUrl} alt="example1" />
        <div>
          <p id="details-type">${result.type}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">${result.description}</p>
              <p id="more-info">${result.learnMore}</p>
            </div>
          </div>
          <h3>Like Solution: <span id="like">0</span></h3>

          <div id="action-buttons">
            ${isLoggedIn
              ? isOwner
                ? html`
                    <a href="/edit/${id}" id="edit-btn">Edit</a>
                    <a
                      @click=${(e) => onDelete(e, id)}
                      href="javascript:void(0)"
                      id="delete-btn"
                      >Delete</a
                    >
                  `
                : html`<a href="#" id="like-btn">Like</a>`
              : null}
          </div>
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