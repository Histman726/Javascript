$(document).ready(function () {
    $('#Boton').addClass("btn-danger");
    $("#Boton").removeClass("btn-primary");
    $("#Subcontenedor").append(`<button class="btn btn-danger" type="button">Agregado Jquery</button>`);
    $("#Subcontenedor").prepend(`<button class="btn btn-danger" type="button">Agregado Jquery</button>`);

    // $("#Boton").css('color','blue');
    $("#Boton").css({'color':'#ffffff','background':'black'});
    // $("#Boton").css('background','#ffffff');
    
    //$('#Subcontenedor').remove();
    //$('#Subcontenedor').hide();

    $('img').attr('src','https://images.unsplash.com/photo-1644982652063-1a9b8d24f0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    $('img').attr('width','800px');

    
});