//Parametros REST y operador Spread(...)

        //REST
        function suma(a, b, ...c) {//El ultimo parametro es de tipo REST y esto hace que se crea un arreglo con los valores 
            let res = a + b
            c.forEach(function (n) {
                res += n
            })
            return res
        }
        console.log(suma(1, 2, 12, 23))//Por ejemplo: 12 y 23

        //Spread
        const ar1 = [1, 2, 3, 4, 5],
            ar = [6, 7, 8, 9, 0]
        console.log(ar1, ar)
        const ar3 = [...ar, ...ar1]
        console.log(ar3)