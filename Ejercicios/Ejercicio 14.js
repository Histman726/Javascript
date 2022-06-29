// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const FahrenheitACelsius=(num=undefined,grados="")=>{
    if(!num || !grados) return console.warn("No introduciste ningun valor")

    if(typeof num!=="number") return console.error("El valor del numero es invalido")

    grados=grados.toLowerCase()
    if(grados==="c") {
        let Fahrenheit=num*9/5+32;
        return console.log(`De ${num}°C a ${Fahrenheit}°F`)
    }
    if(grados==="f"){
        let Celsius=(num-32)*5/9
        return console.log(`De ${num}°F a ${Celsius}°C`)
    }
    return console.error("Caracter invalido")
}
FahrenheitACelsius(12,"c")