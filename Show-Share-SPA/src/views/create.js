import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { post,host } from "../request.js";

const mainEl = document.querySelector("main");

export async function showCreate() {
  render(createTemplate(), mainEl);
}

function createTemplate() {
  return html`
    <section id="create">
      <div class="form">
        <h2>Add Show</h2>
        <form @submit=${onCreate} class="create-form">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="TV Show title"
          />
          <input
            type="text"
            name="image-url"
            id="image-url"
            placeholder="Image URL"
          />
          <input type="text" name="genre" id="genre" placeholder="Genre" />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
          />
          <textarea
            id="details"
            name="details"
            placeholder="Details"
            rows="2"
            cols="10"
          ></textarea>
          <button type="submit">Add Show</button>
        </form>
      </div>
    </section>
  `;
}


async function onCreate(e){
e.preventDefault()

const formData = Object.fromEntries(new FormData(e.currentTarget));


const data = {
  ...formData,
  imageUrl: formData['image-url']
};
delete data['image-url'];

for(let key in data){
  if (data[key].trim()===''){
    alert('All fields required!')
    return
  }
  
}

try{
  const result=await post(`${host}data/shows`,data)
  console.log(data);
  
  page.redirect('/dashboard')

}catch(err){
  alert(err.message)
}



}