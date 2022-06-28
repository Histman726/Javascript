//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicúa=(num=undefined)=>{
    let num2=String(num).split("").reverse().join("");
    if(num===parseInt(num2)) return true
    return false
}

const capicua=(num=undefined)=>
    (num===undefined)
        ? console.warn("No introduciste un numero valido")
        : console.info(capicúa(num))

capicua(5005)