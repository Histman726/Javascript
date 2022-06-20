//Clases
        class Animal {
            constructor(nombre, genero) {
                this.nombre = nombre
                this.genero = genero
            }

            //Metodos
            sonar() {
                console.log("Hago sonidos")
            }
            saludar() {
                console.log(`Hola me llamo ${this.nombre}`)
            }
        }

        class Perro extends Animal {
            constructor(nombre, genero, tamanio) {
                super(nombre, genero)
                this.tamanio = tamanio
            }
            sonar() {
                console.log("Mi sonido es ladrar")
            }
            ladrar() {
                console.log("Guau Guau")
            }
        }


        const Luz = new Animal("Lucia", "Femenino"),
            scooby = new Perro("Scooby", "Macho", "Gigante")
        console.log(Luz, scooby)
        Luz.saludar()
        scooby.sonar()
        scooby.ladrar()
        scooby.saludar()