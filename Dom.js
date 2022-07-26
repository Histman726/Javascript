//#DOM Document Object Model

console.log(document.head)
console.log(document.body)

setTimeout(()=>{
    console.log(document.getSelection().toString())
},3000)
//document.write("<h5>Hola Mundo desde JS</h5>")

//*Nodos Selectores y Elementos
console.clear()
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("cards"))
console.log(document.getElementsByName("Nombre"))
console.log(document.getElementById("menu"))
console.log(document.querySelector("#menu"))//Te trae el primer elemento
console.log(document.querySelectorAll("a"))//Te trae todos los elementos

//*Atributos y dataAtributos
console.clear()

console.log(document.documentElement.lang)
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))
document.documentElement.setAttribute("lang","fr")
console.log(document.documentElement.lang)

const $linkDom=document.querySelector(".link-dom")

$linkDom.setAttribute("target","_blank")
$linkDom.setAttribute("rel","noopener")
$linkDom.setAttribute("href","https://www.youtube.com/")

console.log($linkDom.hasAttribute("rel"))
$linkDom.removeAttribute("rel")
console.log($linkDom.hasAttribute("rel"))

//*Data-Atributos

console.log($linkDom.getAttribute("data-description"))
console.log($linkDom.dataset)
$linkDom.setAttribute("data-description","Hello")
console.log($linkDom.dataset)

//*Estilos y variables CSS
console.clear()
console.log($linkDom.style)
console.log($linkDom.getAttribute("style"))

console.log(window.getComputedStyle($linkDom))
$linkDom.style.setProperty("text-decoration","none")
$linkDom.style.setProperty("display","block")
$linkDom.style.textAlign="center"
$linkDom.style.width="50%"
$linkDom.style.marginLeft="auto"
$linkDom.style.marginRight="auto"
$linkDom.style.padding="1rem"
$linkDom.style.borderRadius="0.5rem"

//*Variables CSS

// const $html=document.documentElement,
//     $body=document.body
//
// let dark=getComputedStyle($html).getPropertyValue("--black"),
//     yellow=getComputedStyle($html).getPropertyValue("--yellow-color")
//
// console.log(dark,yellow)
// $body.style.background=dark
// $body.style.color=yellow
//
// $html.style.setProperty("--black","darkblue")
// dark=getComputedStyle($html).getPropertyValue("--black")
// $body.style.setProperty("background",dark)

//*Clases CSS
console.clear()

const $card=document.querySelector(".cards")
console.log($card)
console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))
// card.classList.add("rotate-45")
// card.classList.remove("rotate-45")
// $card.classList.toggle("rotate-45")
// $card.classList.replace("rotate-45","rotate-135")

//*Texto y HTML
console.clear()

const $whats=document.getElementById("que-es")

let text=`
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

$whats.textContent=text
// $whats.innerHTML=text
$whats.outerHTML=text