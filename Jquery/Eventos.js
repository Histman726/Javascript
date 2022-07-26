$(document).ready(function (){
    $('#boton').click(function (e){
        e.preventDefault()
        $('img').attr('src', 'logo2.png');
    })
    $('#subcontenedor button:nth-child(1)').click(function (e){
        e.preventDefault()
        $('img').attr('width', '70px');
    })
    $('#subcontenedor button:nth-child(2)').click(function (e){
        e.preventDefault()
        let margen=$('img').css('margin-left')
        margen=parseInt(margen.replace('px',''))
        margen+=30
        $('img').css('margin-left',margen+'px')
    })
    $('#subcontenedor button:nth-child(3)').click(function (e){
        e.preventDefault()
        $('img').toggleClass('d-none')
    })
})