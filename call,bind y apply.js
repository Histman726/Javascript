//Call, bind, apply

console.log(this)
this.lugar="Contexto Global"

function saludar(men,quien){
    console.log(`${men} ${quien} desde el ${this.lugar}`)
}

saludar()

const obj={
    lugar:"Contexto objeto",
}


saludar.call(obj,"Hola","John")
saludar.apply(obj,["Adios","Mircha"])

const per={
    nombre:"Hector",
    saludar:function (){
        console.log(`Hola ${this.nombre}`)
    }
}
per.saludar()

const per2={
    saludar:per.saludar.bind(per)
}
per2.saludar()