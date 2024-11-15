// Lista de títulos
const titulos = ["Pulsa aqui", "Hola", "¿Has visto la fecha que es?", "si, un mes ya", "desde una banda improvisada", "hasta un circuito de carreras", "nos hemos secado las lagrimas el uno al otro", "y se que alguna vez te hecho cabrear un poquito", "pero quiero que sepas","que me has hecho la persona mas feliz del mundo","y que espero que este sea el primer de infinitos meses mas","te quiero <3","porcierto tienes que ver naruto"];

let indice = 0;

// Función para cambiar el título al hacer clic
function cambiarTitulo() {
  indice++;
  const titulo = document.getElementById("titulo");
  const gatoArriba = document.getElementById("gato-arriba");
  const gatoAbajo = document.getElementById("gato-abajo");

  if (indice < titulos.length) {
    titulo.textContent = titulos[indice];
  }

  // Mostrar imágenes de gatos al llegar al índice 11
  if (indice === 11) {
    gatoArriba.style.display = "block";
    gatoAbajo.style.display = "block";
  }
}

// Función para actualizar el reloj digital
function actualizarReloj() {
  const reloj = document.getElementById("reloj");
  const ahora = new Date();

  // Obtener hora, minutos y segundos
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');

  // Obtener día, mes y año
  const dia = String(ahora.getDate()).padStart(2, '0');
  const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
  const año = ahora.getFullYear();

  // Formato del reloj y fecha
  const horaTexto = `${horas}:${minutos}:${segundos}`;
  const fechaTexto = `${dia}/${mes}/${año}`;

  // Mostrar hora y fecha
  reloj.textContent = `${fechaTexto}`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);
