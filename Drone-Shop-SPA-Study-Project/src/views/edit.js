import { html, render } from "../../node_modules/lit-html/lit-html.js";
import  page  from "../../node_modules/page/page.mjs";

const mainEl = document.querySelector("#main-element");

export default async function showEdit() {
  render(editTemplate(), mainEl);
}

function editTemplate() {
  return html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
      <div class="form form-item">
        <h2>Edit Offer</h2>
        <form class="edit-form">
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
          <button type="submit">Edit</button>
        </form>
      </div>
    </section>
  `;
}
