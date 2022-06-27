//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

let frase="Salas"

const Palindromo=(frase="")=>{
    if(frase==="") return console.warn("No introduciste una frase");

    let fraseInvertida="";
    for (const i of frase) {
        fraseInvertida=i+fraseInvertida;
    }

    const palindromo=(frase.toLowerCase()===fraseInvertida.toLowerCase())
        ? `${frase} es un palindromo`
        : `${frase} no es un palindromo`
    
    return console.info(palindromo)
}

Palindromo(frase)