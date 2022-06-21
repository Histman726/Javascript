//Objeto Console
        console.error("Esto es un error")
        console.warn("Este es un aviso")
        console.info("Esto es un informativo")

        let nombre = "Hector",
            apellido = "Sandoval",
            edad = 17
        console.log(nombre, apellido, edad)
        console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)

        console.log("Hola mi nombre es %s %s y tengo %d años", nombre, apellido, edad)
        console.dir(document)
        console.group("Curso Javascript")
        console.log("Curso de markdown")
        console.groupEnd()
        console.table(Object.entries(console).sort())

        const numeros = [1, 2, 3, 4, 5],
            vocales = ["a", "e", "i", "o", "u"]

        console.table(numeros)

        const perro = {
            nombre: "Boniee",
            raza: "Boxer",
            color: "cafe"
        }
        console.table(perro)

        console.time("Arreglo")
        const arreglo = Array(10)
        for (let i = 0; i < arreglo.length; i++) {
            arreglo[i] = i
        }
        console.timeEnd("Arreglo")

        for (let i = 0; i < arreglo.length; i++) {
            console.count("For")
            console.log(arreglo[i])
        }
        let x = 3,
            y = 2,
            PruebaXY = "X menor que y"

        console.assert(x < y, x, y, PruebaXY)