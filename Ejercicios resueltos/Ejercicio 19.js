//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan Mircha") devolverá verdadero.

const validarNombre=(nombre="")=>{
    if(!nombre) return console.warn("No ingresaste un nombre")

    if(typeof nombre !=="string") return console.error(`El valor ${nombre} ingresado. No es una cadena de texto`)

    let expReg=/^[A-Za-zÑñáÁéÉíÍóÓúÚ\s]+$/g.test(nombre)

    return(expReg)
        ? console.info(`El ${nombre} es un nombre valido`)
        : console.info(`El ${nombre} es un nombre invalido`)
}

validarNombre("Hector")