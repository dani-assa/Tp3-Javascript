/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

const tablaDeMultiplicar = (numero) => {
  numero = parseInt(prompt('Ingrese un valor:'));

  for (let i = 0; i <= 10; i++) {
    document.write(`${numero} x ${i} = ${numero * i} <br>`);
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
