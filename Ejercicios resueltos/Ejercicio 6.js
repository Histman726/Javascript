//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textoEnCadena=(cadena="",texto="")=>{
    if(!cadena) return console.warn("No introduciste una frase");

    if(!texto) return console.warn("No introduciste una palabra repetida");

    let i=0,
        contador=0
    
    while(i!==-1){
        i=cadena.indexOf(texto,i)
        if(i!==-1){
            i++
            contador++
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`)
}

textoEnCadena("hola mundo adios mundo","mundo")