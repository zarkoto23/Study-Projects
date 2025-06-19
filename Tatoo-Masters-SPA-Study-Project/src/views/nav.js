import page from "../../node_modules/page/page.mjs";
import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { get, host } from "../requester.js";
import userUtil from "../userUtil.js";

const hearerEl=document.querySelector('header')

export async function showNav(ctx, next){

render(navTemplate(), hearerEl)
next()
}

function navTemplate(){
  const token=userUtil.getToken()


  return html` 
  <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt="logo" />
        </a>
        <nav>
          <a href="/dashboard">Collection</a>

          <!-- Logged-in users -->
           ${token? html `
          <div class="user">
            <a href="/create">Add Tattoo</a>
            <a @click=${onLogout} id="logout" href="#">Logout</a>
          </div>`:
          
          html`
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </nav>`}
  `

}
async function onLogout(e){
  e.preventDefault()

  try{
    await get(`${host}/users/logout`)
    userUtil.removeUser()
    page.redirect('/')
  }catch(err){
    alert(err.message)
  }
}
