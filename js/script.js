const menuBtn = document.getElementById("menu-btn");
const navbarItems = document.getElementById("navbar-items");
menuBtn.onclick = function(){
    menuBtn.classList.toggle("ativado");
    navbarItems.classList.toggle("navbar-items-abrir");
}