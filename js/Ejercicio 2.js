/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. */

/*let cuidades = [];

while (true) {
  let pedirCuidad = prompt('Ingrese una ciudad:');

  if (pedirCuidad === null) {
    break;
  }

  cuidades.push(pedirCuidad);
}

console.log(cuidades);

console.log(`El arreglo tiene una longitud de ${cuidades.length}`);

document.write(`Elemento 1er posicion: ${cuidades[0]} <br>`);
document.write(`Elemento 3ra posicion: ${cuidades[2]} <br>`);
document.write(`Elemento ultima posicion: ${cuidades[cuidades.length -1]} <br>`);

cuidades.push('Paris');

document.write(`Elemento ultima posicion: ${cuidades[cuidades.length -1]} <br>`);

cuidades[1] = 'Barcelona';

cuidades.forEach(element => {
  document.write(element + '<br>');
}); */

// Otra manera de hacerlo 

const cityList = () => {
  let cityArr = [];
  let stopFor = false;
  for (let i = 0; stopFor === false; i++) {
    let inputUser = prompt('Ingresa nombres de ciudades, para finalizar presiona cancelar o ingrese 0');
    if (inputUser == null || inputUser == 0) {
      stopFor = true;
      document.write(`La longitud del array es es ${cityArr.length } <br>`);
      document.write(`La primera posicion es ${cityArr[0]} <br>`);
      document.write(`La tercera posicion es ${cityArr[2]} <br>`);
      document.write(`La ultima posicion es ${cityArr[cityArr.length -1]} <br>`);
      cityArr.push('Paris');
      cityArr.slice(1, 1, 'Barcelona');
      console.log(cityArr);



    } else {
      cityArr.push(inputUser);
    }

    
  }
}
