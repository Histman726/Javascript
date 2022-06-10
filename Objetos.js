/*Dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama metodos*/
const b={
    nombre:"Hector",
    apellido:"Sandoval",
    edad:17,
    pasatiempos:["Correr","Dibujar"],
    soltero:true,
    contacto:{
        email:"ivantovar26.hist@gmail.com",
        twiter:"@Histman7",
        movil:5578986514
    },
    saludar:function(){
        console.log("Hola")
    },
    decirNombre:function(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}
console.log(b)

console.log(b.nombre)
b.saludar()
b.decirNombre()

//Metodos del objeto
console.log(Object.keys(b))
console.log(Object.values(b))
console.log(b.hasOwnProperty("apellido"))