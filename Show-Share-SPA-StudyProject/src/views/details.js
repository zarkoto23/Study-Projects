import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import userUtil from "../userUtil.js";
import { host,get, del } from "../request.js";

const mainEl = document.querySelector("main");

export async function showDetails(ctx) {
  const id=ctx.params.id
  const token=userUtil.getToken()
  
  try{
    const result= await get(`${host}data/shows/${id}`)
    render(detailsTemplate(id,result), mainEl);

    
  }catch(err){
    alert(err.message)
  }
  
}

function detailsTemplate(id, result) {


  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${result.imageUrl} alt="example1" />
        <div id="details-text">
          <p id="details-title">${result.title}</p>
          <div id="info-wrapper">
            <div id="description">
              <p id="details-description">
                ${result.details}
              </p>
            </div>
          </div>

          ${result._ownerId===userUtil.getUserId()? html`
          <div id="action-buttons">
            <a href="/edit/${result._id}" id="edit-btn">Edit</a>
            <a @click=${(e)=>onDelete(e,result._id)} href="" id="delete-btn">Delete</a>
          </div>
          `:''}
        </div>
      </div>
    </section>
  `;
}



function onDelete(e, id){
  e.preventDefault()
  const conf=confirm('Are you sure?')

  if(conf){
try{
  const result=del(`${host}data/shows/${id}`)
  page.redirect('/dashboard')
}catch(err){
  alert(err.message)
}

  }

}
