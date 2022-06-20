//Metodos estaticos y getters y setters
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
                this.raza = null
            }
            sonar() {
                console.log("Mi sonido es ladrar")
            }
            ladrar() {
                console.log("Guau Guau")
            }
            static QueEres() {
                console.log("Los perros somos mamiferos que pertenecen a los caninos")
            }
            /*
            Los getters y setters son metodos 
            especiales que nos permiten esta-
            blecer y obtener los valores de 
            los atributos de nuestra clase
            */
            get getRaza() {
                return this.raza
            }
            set setRaza(raza) {
                this.raza = raza
            }
        }


        const Luz = new Animal("Lucia", "Femenino"),
            scooby = new Perro("Scooby", "Macho", "Gigante")
        console.log(Luz, scooby)
        Luz.saludar()
        scooby.sonar()
        scooby.ladrar()
        scooby.saludar()

        //Invocacion del metodo estatico
        Perro.QueEres()

        //Invocacion del getter y setter
        scooby.setRaza = "Gran Danes"
        console.log(scooby.raza)