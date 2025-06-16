import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { get, put } from "../requester.js";
import { baseItemsUrl } from "../links.js";

const mainEl = document.querySelector("#main-element");

export default async function showEdit(ctx) {
  const id = ctx.params.id;
  try {
    const result = await get(`${baseItemsUrl}/${id}`);
    render(editTemplate(result,id), mainEl);
  } catch (err) {
    alert(err.message);
  }
}

function editTemplate(result,id) {
  return html`
    <section id="edit">
      <div class="form form-item">
        <h2>Edit Offer</h2>
        <form @submit=${(e)=>onEdit(e, id)} class="edit-form">
          <input
            type="text"
            name="model"
            id="model"
            value="${result.model}"
          />
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value="${result.imageUrl}"
          />
          <input type="number" name="price" id="price" value="${result.price}" />
          <input type="number" name="weight" id="weight" value="${result.weight}" />
          <input
            type="number"
            name="phone"
            id="phone"
           value="${result.phone}"
          />
          <input
            type="text"
            name="condition"
            id="condition"
            value="${result.condition}"
          />
          <textarea
            name="description"
            id="description"
          >${result.description}</textarea>
          <button type="submit">Edit</button>
        </form>
      </div>
    </section>
  `;
}


async function onEdit(e,id){
  e.preventDefault()

  const droneData=Object.fromEntries(new FormData(e.currentTarget))
  
   for(let key in droneData){
    if(droneData[key].trim()===''){
      alert('All fields required!')
      return
    }
   }

   try{
   const result= await put(`${baseItemsUrl}/${id}`, droneData)
   page.redirect(`/details/${id}`)
   }catch(err){
    alert(err.message)
   }
   
    


}
