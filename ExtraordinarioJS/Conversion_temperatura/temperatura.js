
alert("Este programa convertira de grados Celcius a Grados Fahrenheit");

//Peticion de datos al usuario
let gradosCelsius = prompt("Ingrese su temperatura en grados Celsius");

//Conversion de temperatura
let gradosFahrenheit = (gradosCelsius * 9/5) +32;

//Mostramos los datos 
alert(`Ingresaste ${gradosCelsius} grados Celsius que equivalen a ${gradosFahrenheit} grados Fahrenheit.`);
