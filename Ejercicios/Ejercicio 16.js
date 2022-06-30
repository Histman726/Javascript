// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const Descuento=(cantidad=0,descuento=0)=>{
    if(typeof cantidad!=="number") return console.warn("No se admiten valores diferentes a numeros")

    if(typeof descuento !=="number") return console.warn("El descuento solo admite valores numericos")

    if(descuento>100) return console.error("El descuento no puede ser mayor al 100%")

    if(cantidad<=0) return console.error("La cantidad no puede ser 0 o negativa")

    if(descuento<0) return console.error("El descuento no puede ser negativo")

    let total=((cantidad/100)*descuento).toFixed(2)
    cantidad=(cantidad-total).toFixed(2)
    return console.info(`La cantidad a pagar ${cantidad} y el descuento fue de ${total} pesos`)

}

Descuento(1000,20)