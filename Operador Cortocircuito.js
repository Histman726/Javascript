// Operador Corto circuito

        /*
        Cortocircuito con OR: cuan el valor de 
        izquierda en la expresion siempre podra
        validar a true es el valor que se 
        cargara por defecto
        */

        /*
        Cortocircuito con AND: cuando el valor 
        de la izquierda en la expresion siempre 
        pueda validar a false, es el valor que 
        se carga por defecto
        */
        function saludar(name) {
            name = name || "Desconocido"
            console.log(`Hola ${name}`)
        }

        saludar("John")
        saludar()