/*// Seleccionar el menú y los botones de abrir y cerrar
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
/*const closeMenuBtn = document.querySelector(".close-menu");
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
/*closeMenuBtn.addEventListener("click", toggleMenu);

// Agregar un escuchador de evento a cada elemento del menú
menuItems.forEach(item => {
  // Oculta el menú cuando se hace clic en una opción
  item.addEventListener("touchstart", hideMenu);
});*/

// Selecciona el menú y el botón de abrir
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const menuItems = document.querySelectorAll(".menu li");

// Función para alternar la clase que muestra/oculta el menú
function toggleMenu(event) {
  if(event){
    event.preventDefault();//evita que se abra y cierre el boton del menu inmediatamente
  }
  menu.classList.toggle("menu_opened");
}

// Función para ocultar el menú
function hideMenu() {
  menu.classList.remove("menu_opened");
}

// Usa eventos "click" y "touchstart" para abrir el menú
openMenuBtn.addEventListener("click", toggleMenu);
openMenuBtn.addEventListener("touchstart", toggleMenu);

// Agrega un escuchador de evento a cada elemento del menú para ocultar el menú
menuItems.forEach(item => {
  // Oculta el menú cuando se hace clic o se toca una opción
  item.addEventListener("click", function(event){
    hideMenu();
    navigateToSection(event.target.getAttribute("href"));//Permite navegar a la sección seleccionada del menu
  });
  item.addEventListener("touchstart", function(event){
    event.preventDefault();
    hideMenu();
    navigateToSection(event.target.getAttribute("href"));
  });
});

// Función para navegar a la sección
function navigateToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
// Agrega un event listener al documento para cerrar el menú al tocar cualquier parte de la pantalla
document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && event.target !== openMenuBtn) {
    hideMenu();
  }
});

