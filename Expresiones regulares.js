//Expresiones regulares
        //Son una secuencia de caracteres que forman un patron de busqueda utilizada para la busqueda de patrones de cadenas de caracteres

        let cadena = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique veniam asperiores odit eaque culpa blanditiis adipisci quae id vero error! Commodi animi id provident quaerat est totam corporis, magni voluptatibus."
        let exp = new RegExp("Lorem", "ig")
        let exp2 = /Lorem/i;

        console.log(exp2.test(cadena))
        console.log(exp2.exec(cadena))
        if (exp2.test(cadena)) {
            console.log("Hola")
        }