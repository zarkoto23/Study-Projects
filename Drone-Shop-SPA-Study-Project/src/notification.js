export function showError(msg) {
  const sectionEl = document.querySelector("#notifications");
  const errorBoxEl = document.querySelector("#errorBox");
  const spanEl = document.querySelector(".msg");

  sectionEl.style.display = "block";
  errorBoxEl.style.display = "block";
  spanEl.textContent = msg;

  setTimeout(() => {
    sectionEl.style.display = "none";
    errorBoxEl.style.display = "none";
  }, 3000);
}

// <section id="notifications">
//     <div id="errorBox" class="notification">
//       <span class="msg"></span>
//     </div>
//   </section>
