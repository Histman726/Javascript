//Objetos literales

        //Antes de Emascript 2015
        let nombre = "Huahis",
            edad = 6

        const perro = {
            nombre: nombre,
            edad: edad,
            ladrar: function () {
                console.log("Guauu gauu!!!")
            }
        }
        console.log(perro)
        perro.ladrar()

        //Despues
        const dog = {
            nombre,
            edad,
            raza: "Maltes",
            ladrar() {
                console.log("Guauu gauu gauu!!!")
            }
        }
        console.log(dog)
        dog.ladrar()