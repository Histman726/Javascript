//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

let frase=prompt("Introduce la frase")
let separador=prompt("Introduce el caracter por el que se separara")
console.log(SepararString(frase,separador))

function SepararString(frase,separador){
    return frase.split(separador)
}