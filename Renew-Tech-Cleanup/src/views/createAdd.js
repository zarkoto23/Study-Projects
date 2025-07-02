import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { post } from "../requester.js";
import { baseItemsUrl } from "../links.js";
import { showError } from "../notification.js";

const mainEl = document.querySelector("main");

export default async function showCreate() {
  render(createTemplate(), mainEl);
}

function createTemplate() {
  return html`
   <!-- Create Page (Only for logged-in users) -->
        <section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Solution</h2>
            <form @submit=${onCreate} class="create-form">
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Solution Type"
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
              <textarea
                id="more-info"
                name="more-info"
                placeholder="more Info"
                rows="2"
                cols="10"
              ></textarea>
              <button type="submit">Add Solution</button>
            </form>
          </div>
        </section>
  `;
}

async function onCreate(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.currentTarget));

  for (let key in data) {
    if (data[key].trim() === "") {
      showError("All fields required!");
      return;
    }
  }

    data.imageUrl = data["image-url"];
  delete data["image-url"];

  data.learnMore = data["more-info"];
  delete data["more-info"];
  try {
    const result = await post(baseItemsUrl,data);
    page.redirect("/dashboard");
    console.log(result);
  } catch (err) {
    showError(err.message);
  }
}
