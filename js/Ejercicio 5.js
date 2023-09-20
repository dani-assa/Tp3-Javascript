/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

const frase = (text) => {
text = prompt('Ingrese una frase: ');
if (text == text.toLowerCase()) {
  console.log('La cadena esta formada solo por minisculas.');
} else if (text == text.toUpperCase()) {
  console.log('La cadena esta formada solo por mayusculas.');
} else {
  console.log('La cadena esta formada por mayusculas y minusculas.');
}
}