const hamburgerBtn = document.getElementById("hamburger-menu");
const menu = document.querySelector(".menu--closed");

hamburgerBtn.addEventListener("click", function() {
  menu.classList.toggle("menu--open");
});
