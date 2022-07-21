//Proxies


const persona={
    nombre:"",
    apellido:"",
    edad:0
}

const manejador={
    set(obj,prop,val){
        if (Object.keys(obj).indexOf(prop)===-1){
            return console.error(`La propiedad ${prop} no existe en el objeto persona`)
        }
        else if((prop==="nombre" || prop==="apellido")&&!(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(val))){
            return console.error(`La propiedad ${prop} solo acepta letras y espacios en blanco`)
        }
        obj[prop]=val
    }
}

const John=new Proxy(persona,manejador)


John.nombre="John-"
John.apellido="Mircha"
John.edad=35
console.log(John)
console.log(persona)