/*
        Una función es un bloque de código
        autocontenido, que se puede definir una
        vez y ejecutar en cualquier momento.
        Opcionalmente, una función puede acepta
        parámetros y devolver un valor.

        Las funciones en JavaScript son objetos
        un tipo especial de objetos.

        Se dice que las funciones son ciudadanos de
        primera clase porque pueden asignarse a un
        valor, y pueden pasarse como argumentosy
        usarse como un valor de retorno.
        */

        //Funcion declarada
        function Funcion(){
            console.log("Uno");
            console.log("Dos");
            console.log("Tres");
        }
        //Invocacion de la funcion
        Funcion();

        //Funcion que devuelve valores
        function Return(){
            console.log("Uno");
            console.log("Dos");
            console.log("Tres");
            return "Hola mundo"
        }

        let valor=Return();
        console.log(valor);

        //Funcion con parametros
        function Parametros(nombre="Desconocido", edad=0){
            console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
        }

        let nombre="Hector"
        let edad=17;
        Parametros();
        Parametros(nombre,edad);

        let p="<p>Hola</p>"
        //Funciones expresadas
        const funcionexpresada=function(){//Funcion anonima
            console.log("Esto es una funcion expresada, es decir una funcion que se le ha asignado a una variable, la cual no se puede invocar antes de su declaracion");
        }
        funcionexpresada();