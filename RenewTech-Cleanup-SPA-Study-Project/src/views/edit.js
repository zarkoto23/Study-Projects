import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { get, put } from "../requester.js";
import { baseItemsUrl } from "../links.js";

const mainEl = document.querySelector("main");

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
   <!-- Edit Page (Only for logged-in users) -->
        <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Edit Solution</h2>
            <form @submit=${(e)=>onEdit(e,id)} class="edit-form">
              <input
                type="text"
                name="type"
                id="type"
                value=${result.type}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                value=${result.imageUrl}
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
              >${result.description}</textarea>
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
              >${result.learnMore}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>

  `;
}


async function onEdit(e,id){
  e.preventDefault()

  const data=Object.fromEntries(new FormData(e.currentTarget))
  
    data.imageUrl = data["image-url"];
  delete data["image-url"];

  data.learnMore = data["more-info"];
  delete data["more-info"];

   for(let key in data){
    if(data[key].trim()===''){
      alert('All fields required!')
      return
    }
   }


   try{
   const result= await put(`${baseItemsUrl}/${id}`, data)
   page.redirect(`/details/${id}`)
   }catch(err){
    alert(err.message)
   }
   
    


}
