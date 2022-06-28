//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua=(numero=0)=>{
    if(!numero) return console.warn("No ingresaste un numero")

    if(typeof numero!=="number") return console.error(`El valor ${numero} no es un numero`)

    numero=numero.toString()
    let alReves=numero.split("").reverse().join("")

    return (numero===alReves) 
        ? console.info("Si es capicua")
        : console.info("No es capicua")
}

capicua(202)