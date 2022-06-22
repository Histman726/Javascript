        //Objeto Date

        console.log(Date)
        let fecha = new Date()
        console.log(fecha.getDate())//Numero del dia del mes como si fuera arreglo
        console.log(fecha.getDay())//Numero del dia como si fuera arreglo
        console.log(fecha.getMonth())//Numero del mes como si fuera arreglo
        console.log(fecha.getFullYear())
        console.log(fecha.getHours())//En formato de 24hrs
        console.log(fecha.getMinutes())
        console.log(fecha.getMilliseconds())//Cantidad de milisegundos antes de la impresion
        console.log(fecha.toString())//Hora en idioma humano
        console.log(fecha.toDateString())//Muestra el dia y su fecha 
        console.log(fecha.toLocaleTimeString())//Hora exacta
        console.log(fecha.toLocaleDateString())//Solo la fecha actual
        console.log(fecha.getTimezoneOffset())//Zona horara atrasada
        console.log(fecha.getUTCDate())//Dia en meridiano
        console.log(fecha.getUTCHours())//Hora en el meridiano
        console.log(Date.now())//Cantidad de milisegundos desde 1970

        let cumple = new Date(2004, 7, 26, 7)
        console.log(cumple)