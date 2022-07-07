//Asincronia y Evento Loop

//Codigo sincrono bloqueante
(()=>{
    console.log("Codigo Sincrono")
    console.log("Inicio")

    function dos(){
        console.log("Dos")
    }

    function uno(){
        console.log("Uno")
        dos()
        console.log("tres")
    }

    uno()
    console.log("Fin")
})();

//Codigo Asincrono no bloqueante
(()=>{
    console.log("Codigo Asincrono")
    console.log("Inicio")

    function dos(){
        setTimeout(() => {
            console.log("Dos")
        }, 1000);
    }

    function uno(){
        setTimeout(() => {
            console.log("Uno")
        }, 0);
        dos()
        console.log("Tres")
    }

    uno()
    console.log("Fin")
})();