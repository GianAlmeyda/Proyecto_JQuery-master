$(document).ready(function(){

    var formulario = $('.formulario');
    var nombre = $('#nombre');
    var email = $('#email');
    var mensaje = $('#mensaje');

    function validarNombre(e){
        if (nombre.val()==''||nombre.val()==null) {
            e.preventDefault();
            $('input[type="text"] + .error').css('display','block');
        }else{
            $('input[type="text"] + .error').css('display','none');
        }
    }


    function validarEmail(e){
        if (email.val()==''||email.val()==null) {
            e.preventDefault();
            $('input[type="email"] + .error').css('display','block');
        }else{
            $('input[type="email"] + .error').css('display','none');
        }
    }


    function validarMensaje(e){
        if (mensaje.val()==''||mensaje.val()==null) {
            e.preventDefault();
            $('textarea + .error').css('display','block');
        }else{
            $('textarea + .error').css('display','none');
        }
    }


    function validaciones (e){
        validarNombre(e);
        validarEmail(e);
        validarMensaje(e);
    }

    formulario.on('submit',validaciones);

});