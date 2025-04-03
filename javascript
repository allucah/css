 // header menu 

 const navMenu = document.getElementById("nav-menu"),
       navToggle = document.getElementById("nav-toggle"),
       navClose = document.getElementById("nav-close");

 // Abrir Menu
 if (navToggle) {
   navToggle.addEventListener("click", () => {
     navMenu.classList.add("show-menu");
   });
 }

 // Fechar Menu
 if (navClose) {
   navClose.addEventListener("click", () => {
     navMenu.classList.remove("show-menu");
   });
 
 }

