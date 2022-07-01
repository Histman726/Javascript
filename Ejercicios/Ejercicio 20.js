//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const correoValido=(correo="")=>{
    if(typeof correo!=="string") return console.warn("El valor introducido no es un texto")

    if(correo==="") return console.warn("No se puede evaluar una cadena vacia")

    return (correo.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g))
        ? console.info(`El correo ${correo} es valido`)
        : console.info(`El texto ${correo} es invalido`)
}

correoValido("ivantovar26.hist@gmail.com")