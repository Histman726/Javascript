//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

let frase="Hola mundo hola"

const ContarPalabraRepetida=(frase="",repetida="")=>{
    if(frase==="") return console.warn("No introduciste una frase");

    if(repetida==="") return console.warn("No introduciste una palabra repetida");

    let arreglo=frase.split(" ")
    let repetido=0

    arreglo.forEach(elemeto=>{
        if(elemeto===repetida) repetido++
    });

    return console.info(`La frase original es ${frase}, la palabra repetida es ${repetida} que se duplica ${repetido} veces`)
}

ContarPalabraRepetida(frase,"hola")