// Seleccionar el menú y los botones de abrir y cerrar
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
/*const closeMenuBtn = document.querySelector(".close-menu");*/
const menuItems = document.querySelectorAll(".menu li");

// Función para alternar la clase que muestra/oculta el menú
function showMenu() {
  menu.classList.add("menu_opened");
}
// Función para ocultar el menú
function hideMenu() {
  menu.classList.remove("menu_opened");
}
/*function toggleMenu() {
  menu.classList.toggle("menu_opened");
}
// Función para ocultar el menú
function hideMenu() {
  menu.classList.remove("menu_opened");
}*/

/*openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);*/

// Agregar un escuchador de evento al botón de abrir menú
openMenuBtn.addEventListener("touchstart", showMenu);

// Agregar un escuchador de evento al documento para cerrar el menú al tocar en cualquier lugar
document.addEventListener("touchstart", function (event) {
  // Verificar si el usuario tocó fuera del menú o el botón de abrir
  if (event.target !== menu && event.target !== openMenuBtn) {
    hideMenu(); // Ocultar el menú
  }
});

// Agregar escuchadores de evento táctil a cada elemento del menú para cerrar el menú al tocar una opción
menuItems.forEach(item => {
  item.addEventListener("touchstart", hideMenu);
});
/*
// Agregar un escuchador de evento a cada elemento del menú
menuItems.forEach(item => {
  // Oculta el menú cuando se hace clic en una opción
  item.addEventListener("click", hideMenu);
});*/