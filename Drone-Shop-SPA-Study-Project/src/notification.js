import page from "../node_modules/page/page.mjs"

export function showError(msg) {
  const errorBoxEl=document.querySelector('.notification')
  const spanEl=document.querySelector('.msg')


  errorBoxEl.style.display='block'
  spanEl.textContent=msg
  console.log('hui');

  setTimeout(() => {
    errorBoxEl.style.display='none'
    page.redirect('/dashboard')
  }, 3000);
  
}


  // <section id="notifications">
  //   <div id="errorBox" class="notification">
  //     <span class="msg">MESSAGE</span>
  //   </div>
  // </section>
  // <div id="wrapper"></div>