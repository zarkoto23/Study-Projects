import page from "../../node_modules/page/page.mjs";
import {html, render} from "../../node_modules/lit-html/lit-html.js"

const hearerEl=document.querySelector('header')

export async function showNav(ctx, next){

render(navTemplate(), hearerEl)
next()
}

function navTemplate(){
  return html` 
  <a id="logo" href="#"
          ><img id="logo-img" src="./images/logo.png" alt="logo" />
        </a>
        <nav>
          <a href="/dashboard">Collection</a>

          <!-- Logged-in users -->
          <div class="user">
            <a href="/create">Add Tattoo</a>
            <a id="logout" href="#">Logout</a>
          </div>

          <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="register">Register</a>
          </div>
        </nav>
  `

}
