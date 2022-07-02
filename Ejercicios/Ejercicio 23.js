//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const ParesEImpares=(array=undefined)=>{
    if(!array) return console.warn("No introduciste nada")

    if(!(array instanceof Array)) return console.warn("El valor enviado no es un arreglo")

    let arregloPares=[],
        arregloImpares=[],
        pares=0,
        impares=0

    array.forEach(function (element){
        if(typeof element !=="number") return console.error(`El valor ${element} no es un numero`)

        if(element%2===0) {
            arregloPares[pares]=element
            pares++
        }
        else {
            arregloImpares[impares]=element
            impares++
        }
    });

    return console.info(`El arreglo ${array} tiene como numeros pares ${arregloPares} y como impares ${arregloImpares}`)
}

ParesEImpares([1,2,3,4,5,6,7,8,9])