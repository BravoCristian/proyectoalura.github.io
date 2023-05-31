function encriptar() {
  let texto = document.getElementById("texto").value;

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length != 0) {
      document.getElementById("muñeco").style.display = "none";
      document.getElementById("texto2").style.display = "block";
      document.getElementById("texto2").value = textoCifrado;
      document.getElementById("titulo-mensaje").style.display = "none";
      document.getElementById("parrafo").style.display = "none";
      document.getElementById("copiar").style.display = "block";
} else {
  swal("Ooops!", "Debes ingresar un texto", "warning");
}

}

function desencriptar() {
  let texto = document.getElementById("texto").value;

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
      document.getElementById("muñeco").style.display = "none";
      document.getElementById("texto2").style.display = "block";
      document.getElementById("texto2").value = textoCifrado;
      document.getElementById("titulo-mensaje").style.display = "none";
      document.getElementById("parrafo").style.display = "none";
      document.getElementById("copiar").style.display = "block";

} else {
  swal("Ooops!", "Debes ingresar un texto", "warning");
}

}
function copia() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand('copy');
}
