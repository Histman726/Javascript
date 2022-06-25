//Funciones anonimas autoejecutables

        (function () {
            console.log("Mi primer funcion autoejecutable")
        })();

        (function (d, w, c) {
            console.log(d, w, c)
        })(document, window, console);

        //Formas declararla
        (function (d, w, c) {
            console.log("Manera clasica")
        })(document, window, console);

        ((function () {
            console.log("Version Crockford")
        })());

        + function () {
            console.log("Forma Unuaria")
        }();

        !function () {
            console.log("Version Facebook")
        }();