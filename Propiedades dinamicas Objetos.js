//Propiedades dinamicas de los objetos

let aleatorio=Math.round(Math.random()*100+5)
const obj={
    prop:"Valor",
    [`id_${aleatorio}`]:"Valor Aleatorio"
}
const arr=["John","Hector","Karla"]

arr.forEach((usuario,index)=>obj[`id_${index}`]=usuario)

console.log(obj)