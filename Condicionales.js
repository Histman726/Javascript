//Estructura de control(condicionales)
        //if-else-elseif
        let edad = 21;
        if (edad <= 18) {
            console.log("Eres menor de edad")
        }
        else {
            console.log("Eres mayor de edad")
        }

        //Else if
        let hora = 6;
        if (hora >= 0 && hora <= 5) {
            console.log("Dejame dormir")
        }
        else if (hora >= 12 && hora <= 18) {
            console.log("Buenas Tardes")
        }
        else if (hora >= 6 && hora <= 11) {
            console.log("Buenos Dias")
        }
        else {
            console.log("Buenas Noches")
        }

        //Operador ternario
        console.log("Operador ternario")
        let eresMayor = (edad >= 18)
            ? "Eres mayor de edad"
            : "Eres menor de edad"
        console.log(eresMayor)

        //Switch case
        let dia = "Lunes"
        switch (dia.toUpperCase()) {
            case "LUNES":
                console.log("Hoy es lunes")
                break
            case "MARTES":
                console.log("Hoy es martes")
                break;
            case "MIERCOLES":
                console.log("Hoy es miercoles")
                break;
            case "JUEVES":
                console.log("Hoy es jueves")
                break
            case "VIERNES":
                console.log("Hoy es viernes")
                break
            case "SABADO":
                console.log("Hoy es sabado")
                break
            case "DOMINGO":
                console.log("Hoy es domingo")
                break;
            default:
                console.log("No existe")
        }