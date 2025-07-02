import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { host, get, put } from "../request.js";

const mainEl = document.querySelector("main");

export async function showEdit(ctx) {
  const id = ctx.params.id;
  try {
    const result = await get(`${host}data/shows/${id}`);
    render(editTemplate(result), mainEl);
    console.log((result));
    
    
    ;
    
  } catch (err) {
    alert(err.message);
  }
}

function editTemplate(result) {
  return html`
    <section id="edit">
      <div class="form">
        <h2>Edit Show</h2>
        <form @submit=${(e)=>onEdit(e, result._id)} class="edit-form">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="TV Show title"
            .value=${result.title}
          />
          <input
            type="text"
            name="image-url"
            id="imageUrl"
            placeholder="Image URL"
            .value=${result.imageUrl}

          />
          <input type="text" name="genre" id="genre" placeholder="Genre" .value=${result.genre} />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            .value=${result.country}

          />
          <textarea
            id="details"
            name="details"
            placeholder="Details"

            rows="2"
            cols="10"
          >${result.details}</textarea>
          <button type="submit">Edit Show</button>
        </form>
      </div>
    </section>
  `;
}

async function onEdit(e,id){
  e.preventDefault()
const formData = Object.fromEntries(new FormData(e.currentTarget));


const data = {
  ...formData,
  imageUrl: formData['image-url']
};
delete data['image-url'];


  for(let key in data){
    if(data[key].trim()===''){
      alert('All field Reqired!')
      return
    }
  }

  try{
    const result=await put(`${host}data/shows/${id}`,data)
    console.log(data)


    page.redirect(`/details/${id}`)


  }catch(err){
    return alert(err.message)
  }
}
