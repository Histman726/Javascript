// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const binariaADecimal=(num=undefined,base=undefined)=>{
    if(num===undefined) return console.warn("No introduciste un numero")

    if(base===undefined) return console.warn("No introduciste una base")

    if(typeof num!=="number") return console.warn("No se admiten valores diferentes a numeros")

    if(typeof base !=="number") return console.error("La base solo puede ser numeros")

    if(base===2) return console.info(`El ${num} en base 2, en base 10 es ${parseInt(num,base)}.`)

    if(base===10) return console.info(`El ${num} en base 10, en base 2 es ${num.toString(2)}`)

    return console.error("Introdujiste valores invalidos")
}

binariaADecimal(50,5)