let nombre="Hector"
        let apellido="Sandoval"

        //Concatenacion
        let saludo="Hola mi nombre es "+nombre+" "+apellido+"."
        console.log(saludo)
        
        //Interpolacion de variables
        //Template string
        let saludo2=`Hola mi nombre es ${nombre} ${apellido}`;
        console.log(saludo2)
        let ul=`
        <ul>
            <li>Liverpool</li>
            <li>Samborns</li>
            <li>Soriana</li>
            <li>Walmart</li>
        </ul>`; //Al ser una template string te permite los saltos de linea
        console.log(ul)