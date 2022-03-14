$(document).ready(function(){

    $('.img-video').on('click',function(){

        var modal = '<div class="modal-video"><iframe src="https://www.youtube.com/embed/M7Z_NJl93b0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

        $('#presentacion').after(modal);

        $('.modal-video').on('click',function(){
            $('.modal-video').remove();
        })

    })

    $(document).on('keyup',function(e){
        if (e.which==27) {
            $('.modal-video').remove();   
        }
    })

});