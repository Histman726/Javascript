// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios=(fecha=undefined)=>{
    if(fecha===undefined) return console.warn("No ingresaste una fecha")

    if(!fecha instanceof Date) return console.error("El valor que ingresaste no es una fecha valida")

    let HoyMenosFecha= new Date().getTime() - fecha.getTime(),
        aniosEnMs=1000*60*60*24*365,
        aniosHumanos=Math.floor(HoyMenosFecha/aniosEnMs)
    
    return(Math.sign(aniosHumanos)===-1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos)===1)
            ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

calcularAnios(new Date(1984,4,23))
