//Palabra break y continue

        //Break
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        console.log("Break")
        for (let i = 0; i < numeros.length; i++) {
            if (i === 5) {
                break;//Hace que se salga de la estructura de control en la que esta (en este caso el for)
            }
            console.log(numeros[i])
        }

        //Continue
        console.log("Continue")
        for (let i = 0; i < numeros.length; i++) {
            if (i === 5) {
                continue;//Provoca que se salte cuando la condicion se cumpla y continua con lo demas del codigo fuera del if
            }
            console.log(numeros[i])
        }