//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan Mircha") devolverá verdadero.

const nombreValido=(nombre="")=>{
    if(typeof nombre !=="string") return console.warn("Introduciste algo diferente a un texto")

    if(nombre==="") return console.warn("Introduciste un texto vacio")

    if(nombre.match(/[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-Z0-9-_]{3,32}/ig)) return console.info(`El nombre ${nombre} es valido`)

    return console.info(`El nombre ${nombre} no es valido`)
}

nombreValido("Héctor Iván Sandoval Tovar")