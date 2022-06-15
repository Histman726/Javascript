//Arrow functions

        //Funciones declarada
        const saludar = function () {
            console.log("Hola")
        }
        saludar()

        //Arrow
        const saludo = (name) => {
            console.log("Hola 2 " + name);
        }
        saludo("Implicito")

        const sumar = (a, b) => a + b//Return implicito
        console.log(sumar(12, 15))

        const numeros = [1, 2, 3, 4, 5]
        numeros.forEach((el, i) => console.log(`${el} esta en la posicion ${i}`))

        const perro = {//Las arrow tienen la caracteristica de heredar el contexto global en vez del local
            nombre: "Huauhis",
            ladrar() {
                console.log(this)
            }
        }
        perro.ladrar()