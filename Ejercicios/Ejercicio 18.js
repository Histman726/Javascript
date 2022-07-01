//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const VocalesYConsonantes=(frase="")=>{
    if(typeof frase!=="string") return console.warn("No introdujiste un texto")

    if(frase==="") return console.error("No escribiste un texto")

    if(frase.match(/[0-9.]/ig)) return console.error("Has escrito un caracter invalido")

    let vocales=/[aeiou]/g,
        consonantes=/[^aeiou]/g,
        textoSinEspacios=frase.replace(" ",""),
        cantidadVocales=textoSinEspacios.match(vocales).length,
        cantidadConsonantes=textoSinEspacios.match(consonantes).length
    
    return console.info(`La frase ${frase} tiene ${cantidadVocales} vocales y ${cantidadConsonantes} consonantes`)
}

VocalesYConsonantes("Hola Mundo")