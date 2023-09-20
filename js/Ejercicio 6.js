/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b) */


const perimetro = (lado1, lado2) => {
  lado1 = parseInt(prompt('Ingrese el valor del primer lado de un rectangulo')); 
  lado2 = parseInt(prompt('Ingrese el valor del segundo lado de un rectangulo'));
  return 2*(lado1 + lado2);
}

console.log(`El perimetro del rectangulo es ${perimetro()}`);
