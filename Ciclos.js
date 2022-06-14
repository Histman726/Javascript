//Ciclos 
        let contador = 0

        //While
        console.log("While")
        while (contador < 10) {
            console.log(contador)
            contador++
        }

        //Do-while
        console.log("Do-While")
        let contador2 = 0
        do {
            console.log(contador2);
            contador2++
        } while (contador2 < 10)

        //For
        const array = [1, 2, 3, 4, 5, 6]
        console.log("For")
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
        }

        const Hector = {
            nombre: "Hector",
            apellido: "Sandoval",
            edad: 17
        }

        //Objetos
        for (const i in Hector) {
            console.log(Hector[i])
        }

        //Cadenas de texto, arreglos
        for (const i of array) {
            console.log(i);
        }