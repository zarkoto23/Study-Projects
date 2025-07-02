import page from "../../node_modules/page/page.mjs";
import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { host, post } from "../requester.js";
import userUtil from "../userUtil.js";

const mainEl=document.querySelector('main')

export async function showLogin(){

render(loginTemplate(), mainEl)
}

function loginTemplate(){
  return html` 
  <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onLogin} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
  `

}

async function onLogin(e){
  e.preventDefault()

  const data=Object.fromEntries(new FormData(e.currentTarget))
  for (let key in data){
    if(data[key].trim()===''){
      alert('All fields required')
      return
    }
  }

  try{
    const result = await post(`${host}/users/login`,data)
    userUtil.setUser(result)
    page.redirect('/dashboard')
    
  }catch(err){
    alert(err.message)
  }
}