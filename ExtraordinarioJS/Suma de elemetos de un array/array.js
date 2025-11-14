alert(" Este programa te pedira numeros y te regresara la suma de todos ellos.");

function sumarElementos() {
  let arregloNumeros = [];
  let cantidadNumeros = prompt("cuantos numeros deseas capturar?");
  for (var i = 0; i < cantidadNumeros; i++){
        arregloNumeros[i] = parseInt(prompt(` Ingresa el valor del numero: ${i+1}`));
        //tambien podemos ingresar lso datos al array mediante .push()
        // arregloNumeros.push(numeros);
  }

  var suma = 0;
  for (var elemento of arregloNumeros) {
      suma += elemento;
  }
  return suma;
}

let sumatoria = sumarElementos();
document.write(`El resultado de la suma de todos tus numeros es: ${sumatoria}`);

