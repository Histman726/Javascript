//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail=(email="")=>{
    if(!email) return console.warn("No ingresaste un nombre")

    if(typeof email !=="string") return console.error(`El valor ${email} ingresado. No es una cadena de texto`)

    let expReg=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email)

    return(expReg)
        ? console.info(`El ${email} es un nombre valido`)
        : console.info(`El ${email} es un nombre invalido`)
}

validarEmail("ivantovar26.hist@gmail.com")