//Objeto this
console.log(this)
console.log(this===window)

this.nombre="Contexto global"
console.log(this)

function Imprimir(){
    console.log(this.nombre)
}
Imprimir();

const obj={
    nombre:"Hector",
    imprimir:function (){
        console.log(this.nombre)
    }
}
obj.imprimir()

const obj2={
    nombre:"Contexto",
    Imprimir
}
obj2.Imprimir()

const obj3={
    nombre:"Objeto 3",
    imprimir:()=>console.log(this.nombre)
}
obj3.imprimir()

function Persona(nombre){
    const that=this
    this.nombre=nombre
    //return console.log(this.nombre)
    return function (){
        console.log(that.nombre)
    }
}

let per=new Persona("John")
per()