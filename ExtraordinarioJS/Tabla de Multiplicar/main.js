
let numero = parseInt(prompt(`Ingresa un numero y te mostrare su tabla de multiplicar.`));

if (!isNaN(numero)){
    for (let i = 1; i <= 10; i++){
        let resutado = numero * i;
        document.write(`${numero} x ${i} = ${resutado}  <br>`);
    }
}else{
    document.write("Lo que ingresaste no es un numero, por favor vuelve a intentarlo pero esta vez ingresa un numero.");
}