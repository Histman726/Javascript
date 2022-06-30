// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const RestaFechaActual=(fecha=undefined)=>{
    if(typeof fecha!=="object") return console.warn("Tipo de dato introducido invalido")

    let hoy=new Date();
    
    return console.info(`${hoy.getFullYear() - fecha.getFullYear()} años`)
}

RestaFechaActual(new Date(2005,5,28))