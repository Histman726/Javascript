//Async y await 

function cuadradoPromise(value){
    if(typeof value!=="number") return Promise.reject("Error al valor")

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result:value*value
            })
        }, 0|Math.random()*100);
    })
}

async function AsincronaDeclarada(){
    try {
        console.log("Inicio Async funcion")
        let obj=await cuadradoPromise(0)
        console.log(`Async Funcion ${obj.value} ${obj.result}`)

        obj=await cuadradoPromise(1)
        console.log(`Async Funcion ${obj.value} ${obj.result}`)
    } catch (error) {
        console.error(error)
    }
}

AsincronaDeclarada();

const DeclaradaAsync=async()=>{
    try {
        console.log("Inicio Async funcion")
        let obj=await cuadradoPromise(0)
        console.log(`Async Funcion ${obj.value} ${obj.result}`)

        obj=await cuadradoPromise(1)
        console.log(`Async Funcion ${obj.value} ${obj.result}`)
    } catch (error) {
        console.error(error)
    }
}
DeclaradaAsync();