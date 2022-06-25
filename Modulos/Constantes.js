export const PI=Math.PI;

let usuario="John"//Variables que no se exportan
let password="qwerty"

export function saludar(){
    console.log("Hola modulos ES6")
}

//Para exportar por defecto a una variable es primero declarando y despues la exportas
const hello="Hola";
export default hello;
