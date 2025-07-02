// import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";
import { get, host } from "../request.js";

const mainEl = document.querySelector("main");

export async function showSearch(searchedEl) {
  render(searchTemplate(), mainEl);
}

function searchTemplate() {
  return html`
    <section id="search">
      <div class="form">
        <h2>Search</h2>
        <form @submit=${onSearch} class="search-form">
          <input type="text" name="search" id="search-input" />
          <button class="button-list">Search</button>
        </form>
      </div>
      <h4>Results:</h4>
    </section>
  `;
}

async function onSearch(e) {
  e.preventDefault();
  const dataQuery = new FormData(e.currentTarget);
  const queryStr = dataQuery.get("search").trim();
  if (queryStr.length === 0) {
    return alert("Empty Input!");
  }

  try {
    const result = await get(
      `${host}data/shows?where=title%20LIKE%20%22${queryStr}%22`
    );
    render(template(result), mainEl);

    e.target.reset();
  } catch (err) {
    alert(err.message);
  }
}

function template(result) {
  return html`
<section id="search">
      <div class="form">
        <h2>Search</h2>
        <form @submit=${onSearch} class="search-form">
          <input type="text" name="search" id="search-input" />
          <button class="button-list">Search</button>
        </form>
      </div>
      <h4>Results:</h4>
      
    </section>

${
  result.length === 0
    ? html`<div class="search-result">
        <p class="no-result">There is no TV show with this title</p>
      </div>`
    : result.map(
        (el) => html` <div class="show">
          <img src=${el.imageUrl} alt="example1" />
          <div class="show">
            <h3 class="title">${el.title}</h3>
            <p class="genre">Genre: ${el.genre}</p>
            <p class="country-of-origin">Country of Origin: ${el.country}</p>
            <a class="details-btn" href="/details/${el._id}">Details</a>
          </div>
        </div>`
      )
}
      </div>`;
}
