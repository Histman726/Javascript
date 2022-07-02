//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevadosArray=(array=undefined)=>{
    if(!array) return console.warn("No introduciste nada")

    if(!(array instanceof Array)) return console.warn("El valor enviado no es un arreglo")

    let arrayRes=[]
    array.forEach(function(element,index){
        if(typeof element !=="number") return console.error(`El valor ${element} no es un numero`)

        arrayRes[index]=Math.pow(element,2)
    })

    return console.info(`Arreglo original ${array} elevado al cuadrado es ${arrayRes}`)
}

elevadosArray([1,4,5])