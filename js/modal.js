$(document).ready(function(){

    $('.texto').on('click',function(){

        var rutaImagen = $(this).siblings().attr('src');
        var modal = '<div class="modal"><img src="'+rutaImagen+'" alt=""></div>';

        $('#modelos').after(modal);

        $('.modal').on('click',function(){
            $('.modal').remove();
        })
    })

    $(document).on('keyup',function(e){
        if (e.which==27) {
            $('.modal').remove();
        }
    })

});