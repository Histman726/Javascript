//Destructuracion

        //Sin destructuracion
        console.log("Sin destructuracion")
        let numeros = [1, 2, 3]
        let uno = numeros[0],
            dos = numeros[1],
            tres = numeros[2]

        console.log(uno, dos, tres)

        //Con destructuracion
        console.log("Con destructuracion")
        const [one, two, three] = numeros
        console.log(one, two, three)

        const persona = {
            nombre: "Hector",
            apellido: "Sandoval",
            edad: 17
        }

        let { nombre, apellido, edad } = persona
        console.log(nombre, apellido, edad)