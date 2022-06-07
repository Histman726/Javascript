//Cadenas de texto
let nombre="Hector"
let apellido="Sandoval"
let saludo=new String("Hola Mundo")
let lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim similique earum vel omnis sed tenetur suscipit ratione quod molestiae ut, voluptatum ea dolorum ipsam debitis quibusdam eum repellendus excepturi explicabo."

console.log(nombre,apellido,saludo);
console.log(nombre.length,
apellido.length,
saludo.length,
nombre.toUpperCase(),
apellido.toLowerCase(),
lorem.includes("amet"),//Busca la frase inscrita
lorem.trim(),//Quita todos los espacios alrededor del texto
lorem.split(" ")//Convertirlo a un array con caracter que los separe
);