//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const cadenaArreglo=(cadena="",separador=undefined)=>
    (!cadena)
    ? console.warn("No ingresaste cadena de texto")
    :(separador===undefined)
        ?console.warn("No ingresaste el caracter separador")
        :console.info(cadena.split(separador))

cadenaArreglo("Lorem ipsum dolor sit amet consectetur."," ")