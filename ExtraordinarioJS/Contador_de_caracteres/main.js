const contarCadena = () =>{
    let cadenaDeTexto = prompt(`Ingresa una cadena de texto y te regresare el numero de caracteres que contiene sin contar los espacios en blanco. `)
    let numDeCaracteres = cadenaDeTexto.split(" ").join("");

        document.write(`La cadena de texto que ingresaste tiene:${numDeCaracteres.length} caracteres`);

};
contarCadena();