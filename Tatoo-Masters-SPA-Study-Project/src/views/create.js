import page from "../../node_modules/page/page.mjs";
import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { host, post } from "../requester.js";

const mainEl=document.querySelector('main')

export async function showCreate(){

  render(createTemplate(), mainEl)
}

function createTemplate(){
  return html` 
   <section id="create">
          <div class="form">
            <h2>Add tattoo</h2>
            <form @submit = ${onCreate} class="create-form">
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Tattoo Type"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
              ></textarea>
              <select id="user-type" name="user-type">
                <option value="" disabled selected>Select your role</option>
                <option value="Tattoo Artist">Tattoo Artist</option>
                <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                <option value="First Time in Tattoo">
                  First Time in Tattoo
                </option>
                <option value="Tattoo Collector">Tattoo Collector</option>
              </select>
              <button type="submit">Add tattoo</button>
            </form>
          </div>
        </section>
  `

}

async function onCreate(e){

  e.preventDefault()

  

  const formData=Object.fromEntries(new FormData(e.currentTarget))
    const data = {
    ...formData,
    imageUrl: formData['image-url'],
    userType: formData['user-type']
  };

  delete data['image-url'];
  delete data['user-type'];

  
  for(let key in data){


    if (!data[key] || data[key].trim() === ''){
      alert('All fields required!')
      return
    }
  
}
  if (!data["userType"]) {
  alert("Please select your role!");
  return;
  }


  

  try{
    
    const result=await post(`${host}/data/tattoos`,data)
    page.redirect('/dashboard')
    return result
  }catch(err){
    alert(err.message)
  }

}