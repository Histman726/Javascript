//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

let frase="Sapo";

const Invertir=(frase="")=>{
    if(frase==="") return console.warn("No introduciste una frase");

    let fraseInvertida="";
    for (const i of frase) {
        fraseInvertida=i+fraseInvertida;
    }
    return console.info(`La frase introducida es ${frase} e invertida es ${fraseInvertida}`)
}

Invertir(frase)