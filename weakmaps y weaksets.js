//Estos no son iterables ni tampoco se pueden eliminar sus elementos, tambien carecen de la propiedad size

const ws=new WeakSet();

let valor1={"valor1":1},
    valor2={"valor2":2},
    valor3={"valor3":true},
    valor4={"valor4":"z"}

ws.add(valor1)
ws.add(valor2)
ws.add(valor3)
ws.add(valor4)

console.log(ws)

console.log(ws.has(valor2))

ws.delete(valor2)
console.log(ws)

// setInterval(() => {
//     console.log(ws)
// }, 1000);

setTimeout(() => {
    valor1=null
    valor2=null
    valor3=null
    valor4=null
}, 5000);

console.log(ws)

//Weakmap

const wm=new WeakMap()

wm.set(valor1,1)
console.log(wm)