//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

let frase="xyz1, xyz2, xyz3, xyz4 y xyz5"

const eliminePatron=(frase="",eliminado="")=>{
    if(frase==="") return console.warn("No introduciste una frase");

    if(eliminado==="") return console.warn("No introduciste una el texto a eliminar");

    let arreglo=frase.trim().split(" ")
    let textoTransformado=""

    arreglo.forEach(elemento=>{
        textoTransformado+=" "+ elemento.replace(eliminado,"")
    })

    return console.info(`El texto original es ${frase} y la nueva frase es ${textoTransformado}.`)
}

eliminePatron(frase,"xyz")