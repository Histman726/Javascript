//Temporizadores

//setTimeout

console.log("inicio")
setTimeout(() => {
    console.log("Ejecutando un setTimeout, que se ejecutara una vez")
}, 1000);

//setInterval
// setInterval(() => {
//     console.log("Ejecutando un setInterval")
// }, 1000); Se ejecuta n cantidades

let temporizador=setTimeout(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);
clearInterval(temporizador)//Como se esta cancelando no se muestra nada
//Funciona igual con el setInterval