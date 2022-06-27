//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena=(cadena="")=>
    (!cadena)
        ? console.warn("No ingresas cadenade texto")
        : console.info(cadena.split("").reverse().join(""))

invertirCadena("Hola")