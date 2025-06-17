import page from "../../node_modules/page/page.mjs"
import {render, html} from "../../node_modules/lit-html/lit-html.js"

const mainEl=document.querySelector('main')

export async function showCreate(){


  render(createTemplate(), mainEl)
  
}

function createTemplate(){

  return html`
  <!-- Create Page (Only for logged-in users) -->
        <section id="create">
          <div class="form">
            <h2>Add Show</h2>
            <form class="create-form">
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
            <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre"
          />
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
  `
}