// Las callbacks son funciones que se ejecutan despues de otra 

function cuadradoCallback(value,callback){
    setTimeout(() => {
        callback(value,value*value)
    }, 0|Math.random()*100);
}

cuadradoCallback(0,(value,res)=>{
    console.log("Inicia el callback")
    console.log(`Callback: ${value}, ${res}`)
    cuadradoCallback(1,(value,res)=>{
    console.log(`Callback: ${value}, ${res}`)
    console.log("http://callbackhell.com")
})
})