import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { get, host, put } from "../requester.js";
import userUtil from "../userUtil.js";

const mainEl = document.querySelector("main");

export async function showEdit(ctx) {
  const id = ctx.params.id;

  try {
    const result = await get(`${host}/data/tattoos/${id}`);
    console.log(result);

    render(editTemplate(result, id), mainEl);
  } catch (err) {
    err.message;
  }
}

function editTemplate(result, id) {
  return html`
    <section id="edit">
      <div class="form">
        <h2>Edit tattoo</h2>
        <form @submit=${(e) => onEdit(e, id)} class="edit-form">
          <input type="text" name="type" id="type" value=${result.type} />
          <input
            type="text"
            name="image-url"
            id="image-url"
            value=${result.imageUrl}
          />
          <textarea id="description" name="description" rows="2" cols="10">
  ${result.description}</textarea
          >
          <select id="user-type" name="user-type">
            <option value="" disabled>Select your role</option>
            <option
              value="Tattoo Artist"
              ?selected=${result.userType === "Tattoo Artist"}
            >
              Tattoo Artist
            </option>
            <option
              value="Tattoo Enthusiast"
              ?selected=${result.userType === "Tattoo Enthusiast"}
            >
              Tattoo Enthusiast
            </option>
            <option
              value="First Time in Tattoo"
              ?selected=${result.userType === "First Time in Tattoo"}
            >
              First Time in Tattoo
            </option>
            <option
              value="Tattoo Collector"
              ?selected=${result.userType === "Tattoo Collector"}
            >
              Tattoo Collector
            </option>
          </select>
          <button type="submit">Edit</button>
        </form>
      </div>
    </section>
  `;
}

async function onEdit(e, id) {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.currentTarget));
  const data = {
    ...formData,
    imageUrl: formData["image-url"],
    userType: formData["user-type"],
  };

  delete data["image-url"];
  delete data["user-type"];

  for (let key in data) {
    if (!data[key] || data[key].trim() === "") {
      alert("All fields required!");
      return;
    }
  }
  if (!data["userType"]) {
    alert("Please select your role!");
    return;
  }

  try {
    const result = await put(`${host}/data/tattoos/${id}`, data);
    page.redirect(`/details/${id}`);
    return result;
  } catch (err) {
    alert(err.message);
  }
}
