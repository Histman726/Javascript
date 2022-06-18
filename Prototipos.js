// POO
        /*Modelo a seguir
        Objetos- Es una instancia de una clase
          Atributos- es una caracteristica del objeto 
          Metodos- son las acciones que el objeto puede realizar
        */

        //Prototipo objeto
        const animal = {
            nombre: "Snoopy",
            sonar() {
                console.log("Hago sonidos por que estoy vivo")
            }
        }

        const animal2 = {
            nombre: "Lola Bunny",
            sonar() {
                console.log("Hago sonidos por que estoy vivo")
            }
        }

        console.log(animal)
        console.log(animal2)

        //Funcion constructora (UpperCamelCase)
        function Animal(nombre, genero) {
            //Atributos
            this.nombre = nombre
            this.genero = genero


        }

        //Metodos
        Animal.prototype.sonar = function () {
            console.log("Hago sonido porque estoy vivo")
        }
        Animal.prototype.saludar = function () {
            console.log(`Hola soy ${this.nombre}`)
        }

        const Snoopy = new Animal("Snoopy", "Macho")
        const lola = new Animal("Lola Bunny", "Hembra")

        console.log(Snoopy)
        console.log(lola)
        Snoopy.sonar()
        Snoopy.saludar()