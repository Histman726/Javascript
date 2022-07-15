//Tipo de dato: Map
const mapa=new Map()

mapa.set("nombre","Hector")
mapa.set("apellido","Sandoval")

console.log(mapa)
console.log(mapa.size)
console.log(mapa.has("nombre"))
console.log(mapa.get("nombre"))
mapa.set(19,"diecinueve")

for (const [key,value] of mapa) {
    console.log(`Llave: ${key}, valor:${value}`)
}

const mapa2=new Map([
    ["Nombre",8],
    ["edad",17],
    ["animal","Perro"]
])
console.log(mapa2)

const llaves=new Array(...mapa2.keys())
const values=[...mapa2.values()]
console.log(llaves,values)