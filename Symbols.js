//Nuevos tipos de datos en js
//Symbols

let id=Symbol("julio")
let id2=Symbol("julio")

console.log(id===id2)
console.log(id,id2)
console.log(typeof id)

const Name=Symbol("Nombre")
const saludar=Symbol("saludo")

const persona={
    [Name]:"Hector",
    [saludar]:()=>console.log("Hola"),
    Name:"John"
}

console.log(persona[Name])
console.log(persona)
persona[saludar]()

for (const propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
}

console.log(Object.getOwnPropertySymbols(persona))