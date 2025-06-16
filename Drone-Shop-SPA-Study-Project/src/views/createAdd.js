import { html, render } from "../../node_modules/lit-html/lit-html.js";
import  page  from "../../node_modules/page/page.mjs";
import { post } from "../requester.js";
import { baseItemsUrl } from "../links.js";

const mainEl = document.querySelector("main");

export default async function showCreate() {
  render(createTemplate(), mainEl);
}

function createTemplate() {
  return html`
    <section id="create">
      <div class="form form-item">
        <h2>Add Drone Offer</h2>
        <form @submit=${onCreate} class="create-form">
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Drone Model"
          />
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="Image URL"
          />
          <input type="number" name="price" id="price" placeholder="Price" />
          <input type="number" name="weight" id="weight" placeholder="Weight" />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone Number for Contact"
          />
          <input
            type="text"
            name="condition"
            id="condition"
            placeholder="Condition"
          />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    </section>
  `;
}


async function onCreate(e){
  e.preventDefault()

  const droneData=Object.fromEntries(new FormData(e.currentTarget))
  
   for(let key in droneData){
    if(droneData[key].trim()===''){
      alert('All fields required!')
      return
    }
   }

   try{
   const result= await post(baseItemsUrl, droneData)
   page.redirect('/dashboard')
   console.log(result);
   }catch(err){
    alert(err.message)
   }
   
    


}
