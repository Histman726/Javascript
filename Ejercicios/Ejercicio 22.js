//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const MayorYMenor=(array=undefined)=>{
    if(!array) return console.warn("No introduciste nada")

    if(!(array instanceof Array)) return console.warn("El valor enviado no es un arreglo")
    
    return console.log(`El arreglo es ${array}, su valor mas grande es ${Math.max(...array)} y el mas pequeño es ${Math.min(...array)}`)
}

MayorYMenor([5,15,2])