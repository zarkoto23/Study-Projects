// import page from "../../node_modules/page/page.mjs";
import { render, html } from "../../node_modules/lit-html/lit-html.js";

const mainEl = document.querySelector("main");

export async function showSearch() {
  render(searchTemplate(), mainEl);
}




function searchTemplate(){
     return html` <section id="search">

        <div class="form">
          <h2>Search</h2>
          <form @submit=${onSearch} class="search-form">
            <input
              type="text"
              name="search"
              id="search-input"
            />
            <button class="button-list">Search</button>
          </form>
        </div>
        <h4>Results:</h4>
          <div class="search-result">
         <p class="no-result">There is no TV show with this title</p>
          <!--If there are matches display a div with information about every show-->
          <div class="show">
            <img src="./images/westworld.jpg" alt="example1" />
            <div class="show">
              <h3 class="title">Westworld</h3>
              <p class="genre">Genre: Science Fiction</p>
              <p class="country-of-origin">Country of Origin: United States</p>
              <a class="details-btn" href="#">Details</a>
            </div>
          </div>
          </div>
                </section>
               `
}

function onSearch(e){
  e.preventDefault()
  const dataQuery=new FormData(e.currentTarget)
  const queryStr=dataQuery.get('search').trim()
  if(queryStr.length===0){
    return alert('Empty Input!')
  }

  const respone=



  

}