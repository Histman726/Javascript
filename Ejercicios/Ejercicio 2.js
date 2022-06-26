//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

let frase=prompt("Introduce la frase")
let cortador=parseInt(prompt("Introduce la cantidad a cortar"))
console.log(Substring(frase,cortador))

function Substring(frase,cortador){
    return (frase.length>cortador)?
    frase.slice(0,cortador)
    :"El cortador es mayor a la frase";
}