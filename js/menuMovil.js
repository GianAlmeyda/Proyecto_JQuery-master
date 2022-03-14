$(document).ready(function(){

    var estado = 'prendido';

    $('.btn-barras').on('click',function(e){
        e.preventDefault();

        if(estado == 'prendido'){
            $('.menu-barra-movil .menu-botones').animate({
                left: 0
            },500,function(){
                estado = 'apagado';
            });
        }else{
            $('.menu-barra-movil .menu-botones').animate({
                left: '-100%'
            },500,function(){
                estado = 'prendido';
            });
        }
    })


    $('.menu-barra-movil .menu-botones a').on('click',function(){
        $('.menu-barra-movil .menu-botones').animate({
            left: '-100%'
        },500,function(){
            estado = 'prendido';
        })        
    })

});