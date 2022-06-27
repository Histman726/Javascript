//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo=(palabra="")=>{
    if(!palabra) return console.warn("No introduciste una frase");

    palabra=palabra.toLowerCase()
    let Reversa=palabra.split("").reverse().join("")

    return (palabra===Reversa)
        ? console.info("Si es un palindromo")
        : console.info("No es un palindromo")
}
palindromo("Sala")