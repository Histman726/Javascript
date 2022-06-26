//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortarTexto=(cadena="",longitud=undefined)=>
(!cadena)
    ? console.warn("No ingresaste cadena de texto")
    : (longitud===undefined)
        ? console.warn("No ingresaste la longitud para recortar el texto")
        : console.info(cadena.slice(0,longitud))

recortarTexto("Hola",2)