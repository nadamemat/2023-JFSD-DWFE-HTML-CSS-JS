var imagen = document.getElementById("fotoPerfil");

// Agregar el evento click a la imagen para llamar a la función toggleSize
imagen.addEventListener("click", toggleSize);

// Variable para determinar si la imagen está agrandada o no
var isAgrandada = false;

function toggleSize() {
    if (isAgrandada) {
        achicarImagen();
        isAgrandada = false;
    } else {
        agrandarImagen();
        isAgrandada = true;
    }
}

function agrandarImagen() {
    var imagen = document.getElementById("fotoPerfil");
    var currentWidth = imagen.width;
    var currentHeight = imagen.height;

    // Incrementa el tamaño de la imagen en un 10%
    imagen.width = currentWidth * 1.1;
    imagen.height = currentHeight * 1.1;
}

function achicarImagen() {
    var imagen = document.getElementById("fotoPerfil");
    var currentWidth = imagen.width;
    var currentHeight = imagen.height;

    // Reduce el tamaño de la imagen en un 10%
    imagen.width = currentWidth * 0.9;
    imagen.height = currentHeight * 0.9;
}




//---------------------------------------------------------------------------//

// Función para alternar el modo nocturno/diurno
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }
  
  // Evento click para el botón
  const modoBtn = document.getElementById("modoBtn");
  modoBtn.addEventListener("click", toggleDarkMode);

//---------------------------------------------------------------------------//

  //Funcion Boton que te lleva al la url de las empresas que trabaje
  document.addEventListener('DOMContentLoaded', function () {

    // Obtenemos los botones por su ID
    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    const boton3 = document.getElementById('boton3');
  
    // evento de clic para el botón 1
    boton1.addEventListener('click', function () {
      window.location.href = 'https://www.enelamericas.com/en/aboutus/a201609-costanera.html'; 
    });
  
    // evento de clic para el botón 2
    boton2.addEventListener('click', function () {
      window.location.href = 'https://www.easy.com.ar/'; 
    });
      // evento de clic para el botón 3
    boton3.addEventListener('click', function () {
        window.location.href = 'https://grupomasa.com.ar/masa-argentina-sa/'; 
      });
  });