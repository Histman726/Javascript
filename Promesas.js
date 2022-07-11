// Promesas

function cuadradoPromises(value){
    if(typeof value!=="number") return Promise.reject(`El valor ${value} ingresado no es un numero`)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result:value*value
            })
        }, 0|Math.random()*1000);
    })
}

cuadradoPromises(0)
    .then(obj=>{
        console.log("Inicia Promise")
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromises(1)
    })
    .then(obj=>{
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromises("2")
    })
    .then(obj=>{
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromises(3)
    })
    .then(obj=>{
        console.log(`Promise: ${obj.value}, ${obj.result}`)
    })
    .catch(obj=>console.error(obj))