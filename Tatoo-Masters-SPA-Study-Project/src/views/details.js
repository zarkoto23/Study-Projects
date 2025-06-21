import page from "../../node_modules/page/page.mjs";
import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { del, get, host } from "../requester.js";
import userUtil from "../userUtil.js";
import likeUtils from "../likesUtil.js";

const mainEl=document.querySelector('main')

export async function showDetails(ctx){
const id=ctx.params.id
const userId=userUtil.getUserId()
const totalLikes= await likeUtils.totalLikes(ctx)
const isAlready=await likeUtils.isAlreadyLiked(ctx)
const isLoged=likeUtils.haveLoggedUser()
console.log((isAlready));

try{
  const result=await get(`${host}/data/tattoos/${id}`)
  render(detailsTemplate(result,ctx,userId, totalLikes,isAlready,isLoged), mainEl)

}catch(err){
  err.message
}
}




function detailsTemplate(result,ctx,userId, totalLikes,isAlready,isLoged){
 
  
  
  return html` 
  <section id="details">
    <div id="details-wrapper">
      <img
        id="details-img"
        src=${result.imageUrl}
        alt="example1"
      />
      <div>
        <div id="info-wrapper">
          <p id="details-type">${result.type}</p>
          <div id="details-description">
            <p id="user-type">${result.userType}</p>
            <p id="description">
              ${result.description}
            </p>
          </div>
          <h3>Like tattoo:<span id="like">${totalLikes}</span></h3>
          <div id="action-buttons">
            ${result._ownerId === userId
              ? html`
                  <!--Edit and Delete are only for creator-->
                  <a href="/edit/${result._id}" id="edit-btn">Edit</a>
                  <a href="#" @click=${(e) => onDelete(e, ctx)} id="delete-btn">Delete</a>
                `
              : !isAlready&&isLoged
              ? html`
                  <div>
                    <a @click=${(e) => onLike(e, ctx)} href="/details/${ctx.params.id}" id="like-btn">Like</a>
                  </div>
                `
              : ''
            }
          </div> 
        </div>
      </div>
    </div>
  </section>
`;


}

async function onDelete(e, ctx){

  e.preventDefault()
  const isOk=confirm('Are You Sure?')
  if(isOk){
  try{const result=await del(`${host}/data/tattoos/${ctx.params.id}`)
  page.redirect('/dashboard')
}catch(err){
 alert(err.message)
}
  }
  else{return}
  
}

async function onLike(e,ctx){
  e.preventDefault()
try{const result= await likeUtils.likeTattoo(ctx)
  page.redirect(`/details/${ctx.params.id}`)
  // showDetails(ctx)
  
 
}catch(err){
  alert(err.message)
}
}