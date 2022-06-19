//Herencia prototipica
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

        // Herencia prototipica
        function Perro(nombre, genero, tamanio) {
            this.super = Animal;
            this.super(nombre, genero)
            this.tamanio = tamanio;
        }
        //Herencia
        Perro.prototype = new Animal()

        Perro.prototype.constructor = Perro;

        //Override del metodo padre
        Perro.prototype.sonar = function () {
            console.log("Soy un perro y mi sonido es un ladrido")
        }

        //Nuevo metodo exclusivo
        Perro.prototype.ladrar = function () {
            console.log("Guau")
        }

        const snoopy = new Perro("Snoopy", "Macho", "mediano")
        console.log(snoopy)