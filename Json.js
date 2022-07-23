//Json: Javascript Object Notation
//Es un formato que se usa para mandar informacion entre lenguajes

const json={
    cadena: "Json",
    numero:35,
    booleano:true,
    arreglo:["correr","caminar","cocinar"],
    objeto:{
        twiter:"Histman7",
        email:"ivantovar26.hist@gmail.com"
    },
    nulo:null
}

console.log(json)
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.stringify(json))
