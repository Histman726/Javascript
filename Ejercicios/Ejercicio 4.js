//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

let frase=prompt("Escribe la frase");
let repeticion=parseInt(prompt("Introduce el numero de veces a repetir la frase"))
Repetidor(frase,repeticion)

function Repetidor(frase,repeticion){
    for (let i = 0; i < repeticion; i++) {
        console.log(frase)
    }
}
