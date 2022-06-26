/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/
const ContarCaracteres=(cadena="")=>
(!cadena)
    ? console.warn("No ingresas ninguna cadena")
    : console.info(`La cadena ${cadena} tiene ${cadena.length}`)

ContarCaracteres("Hola")