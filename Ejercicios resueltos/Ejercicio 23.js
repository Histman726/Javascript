//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const SepararParesImapares=(arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un numero")

    if(arr.legth===0) return console.error("El arreglo esta vacio")

    for (let iterator of arr) {
        if(typeof iterator !=="number") return console.error(`El valor ${iterator} ingresado no es un numero`)
    }

    return console.info({
        pares:arr.filter(num=>num%2===0),
        impares:arr.filter(num=>num%2===1)
    })
}
SepararParesImapares([1,2,3])