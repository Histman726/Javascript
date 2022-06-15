//Manejo de errores

        //Try se agrega el codigo a evaluar
        try {
            console.log("Estamos en el try")
        } catch (error) {//Captura cualquier error surgido en el try
            console.log(error)
        } finally {//El bloque de codigo se ejecuta despues del try-catch
            console.log("Despues del try-catch")
        }

        try {
            let numero = "Hola"
            if (isNaN(numero)) {
                throw new Error("El dato enviado necesita ser un numero")
            }
            console.log(numero * numero)
        } catch (error) {
            console.error("Se produjo el siguien te error" + error)
        }