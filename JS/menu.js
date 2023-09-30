// Seleccionar el menú y los botones de abrir y cerrar
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
/*const closeMenuBtn = document.querySelector(".close-menu");*/
const menuItems = document.querySelectorAll(".menu li");

// Función para alternar la clase que muestra/oculta el menú

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}
// Función para ocultar el menú
function hideMenu() {
  menu.classList.remove("menu_opened");
}
openMenuBtn.addEventListener("touchstart", toggleMenu);
/*openMenuBtn.addEventListener("click", toggleMenu);*/
/*closeMenuBtn.addEventListener("click", toggleMenu);*/

// Agregar un escuchador de evento a cada elemento del menú
menuItems.forEach(item => {
  // Oculta el menú cuando se hace clic en una opción
  item.addEventListener("touchstart", hideMenu);
});
/*
// Seleccionar el menú y el botón de abrir
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const menuItems = document.querySelectorAll(".menu li");

// Función para alternar la clase que muestra/oculta el menú
function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

// Función para ocultar el menú
function hideMenu() {
  menu.classList.remove("menu_opened");
}

// Usar eventos "click" y "touchstart" para abrir el menú
openMenuBtn.addEventListener("click", toggleMenu);
openMenuBtn.addEventListener("touchstart", toggleMenu);

// Agregar un escuchador de evento a cada elemento del menú para ocultar el menú
menuItems.forEach(item => {
  // Oculta el menú cuando se hace clic o se toca una opción
  item.addEventListener("click", hideMenu);
  item.addEventListener("touchstart", hideMenu);
});*/

