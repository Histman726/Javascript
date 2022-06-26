/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

let frase=prompt("Introduce la frase a contar")
Caracteres(frase)

function Caracteres(palabra){
    let res=0;
    for (let i of palabra) {
        res++;
    }
    console.log(res);
}
