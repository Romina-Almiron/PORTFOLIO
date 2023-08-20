/* ESCRITURA DINAMICA */
const textoEscritura = document.getElementById('texto-escritura');

// Texto completo que se muestra
const textoCompleto = "Desarrolladora Frontend";

// Variable para almacenar la posición actual del texto
let posicion = 0;

// Intervalo de tiempo entre cada caracter
const intervalo = 100;

// Función que se ejecutará para agregar un nuevo caracter al texto
function escribirTexto() {
  // Verifica si se ha alcanzado el final del texto
  if (posicion < textoCompleto.length) {
    // Texto actual y agregar el siguiente caracter
    textoEscritura.textContent += textoCompleto.charAt(posicion);

    // Incrementa la posición para el siguiente caracter
    posicion++;

    // Configura la función para que se llame nuevamente después del intervalo de tiempo
    setTimeout(escribirTexto, intervalo);
  }
}
// Inicia la función para comenzar la escritura automática
escribirTexto();

/* MOVIMIENTOS DE HABILIDADES*/
let currentRotationElement = null; // Elemento que está actualmente en rotación

function startRotation(element) {
  if (currentRotationElement !== null) {
    currentRotationElement.classList.remove('rotating'); // Detiene la rotación del elemento anterior
  }
  currentRotationElement = element;
  element.classList.add('rotating'); // Inicia la rotación en el elemento actual
}
