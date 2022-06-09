const arreglo=[1,true,"Hola",["a","b","c",[1,2,3]]]
        console.log(arreglo)
        console.log(arreglo[2])
        console.log(arreglo[3][2])
        console.log(arreglo[3][3][0])

        //Inicializacion de un arreglo por la clase Array
        const aray=Array.of("x","y","z",9,8,7)
        console.log(aray)

        //Llenado del array con el metodo fill con el mismo valor interno
        const d=Array(50).fill(false)
        console.log(d)

        //Metodos del array
        const colores=["azul","Verde","rojo"]
        colores.push("amarillo")
        console.log(colores)

        colores.pop()
        console.log(colores)

        colores.forEach(function(e,index){
            console.log(`<li id="${index}">${e}</li>`)
        })