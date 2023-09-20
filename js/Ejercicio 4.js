/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

const numero = (num1) => {
// num1 = parseInt(prompt('Ingrese un numero: '));
if (num1 % 2 == 0) {
  console.log(`El numero ${num1} es par.`);
} else {
  console.log(`El numero ${num1} es impar.`);
  
}
}