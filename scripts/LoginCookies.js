$(document).ready(function () {
   $('#preload-init').hide()
   $('#lbutton').show()

   
    

    $('#tlogin').text("Ingresar");
    $('#verpass2').hide()
    var user_saved = localStorage.getItem('user_saved');
    var pass_saved = localStorage.getItem('pass_saved');

    if (user_saved == null && pass_saved == null) {
        $("body").removeAttr("style");
        $("#lblUser").removeClass("active");
        $("#lblPass").removeClass("active");
        $("#chksaveuser").prop("checked", false);
    } else {
        $("#user").val(user_saved);
        $("#password").val(pass_saved);
        $("#chksaveuser").prop("checked", true);
        $("#lblUser").addClass("active");
        $("#lblPass").addClass("active");
        $("body").removeAttr("style");
    }
});






$(document).on('keypress', function (e) {
    if (e.which == 13) {

        fnAutenticacion();

    }
});

function fnpintarpaginas(paginaurl) {
    var DivContenido = $("#divContenido");
    $.get("./view/" + paginaurl, function (response) {
        DivContenido.html(response);
    });
}

$("#login_store").click(function () {
    fnAutenticacion();
    //$('#lbutton').hide()
    $("#login_store").addClass('disabled');
    //$('#tlogin').text("CARGANDO...");

    if($("#user").val().length==0 && $('#password').val().length==0)
    {
        
    }else{
        $('#lbutton').hide()
        $('#preload-init').show();
    }
    

});


$("#chksaveuser").change(function () {

    if ($("#chksaveuser").prop("checked") == true) {
        localStorage.clear();

        var user_tmp_cookie = $('#user').val();
        var pass_tmp_cookie = $('#password').val();
        var chk_cookie = $('#chksaveuser').is(":checked");



        localStorage.setItem('user_saved', user_tmp_cookie);
        localStorage.setItem('pass_saved', pass_tmp_cookie);
        localStorage.setItem('chk_saved', chk_cookie);
    }



    if ($("#chksaveuser").prop("checked") == false) {

        localStorage.clear();

        var chk_cookie = false;
        localStorage.removeItem('chk_saved');
        localStorage.removeItem('user_saved');
        localStorage.removeItem('pass_saved');
    }
});


$('#verpass').click(function () {
    $('#verpass2').show()
    $('#verpass').hide()
    $('#password').removeAttr('type');
});

$('#verpass2').click(function () {
    $('#verpass').show()
    $('#verpass2').hide()
    $('#password').attr('type', 'password');
});


function fnAutenticacion() {
   

    if ($("#user").val().length == 0 || $("#password").val().length == 0) {

        $('#preload-init').hide();
        $('#login_store').show();
        Swal.fire({
            title: 'Login',
            text: "Los campos estan vacios",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.value) {
                $("#login_store").removeClass("disabled");
            }
        })

        
        



    } else {
        var user_tmp = $("#user").val();
        var pass_tmp = $("#password").val();

        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", 
        "op=get_User&user_tmp=" + user_tmp + "&pass_tmp=" + pass_tmp, function (result,XMLHttpRequest, textStatus, errorThrown)  {    
            try {
                var arregloLogin = JSON.parse(result);
                console.log(arregloLogin);
            } catch (e) {
                alert(result);
                $("#login_store").removeClass("disabled");
                
                return -1;
            }

            $.each(arregloLogin, function (idx, item) {

                var url = item.url

                sessionStorage.setItem('user_tmp', item.nombre)
                sessionStorage.setItem('dni_user', item.PerIdenro)
                sessionStorage.setItem('tdoc_user', item.PerTide)

                console.log(item.mensaje)
                console.log(item.estado)
                if (item.mensaje == "Comprueba el usuario y la contraseña o crea una cuenta") {
                    Swal.fire({
                        icon: 'error',
                        title: item.mensaje,
                        text: 'Login',
                    })
                 $("#login_store").removeClass('disabled');
                 $('#preload-init').hide()
                 $('#lbutton').show()

                } else {
                    if (item.estado == "B") {
                        Swal.fire({
                            icon: 'warning',
                            title: item.mensaje,
                            text: 'Login',
                        })

                        $("#login_store").removeClass('disabled');
                    } else if (item.estado == "C") {
                        Swal.fire({
                            icon: 'warning',
                            title: item.mensaje,
                            text: 'Login',
                        })
                        $("#login_store").removeClass('disabled');

                    } else if (item.estado == "A") {
                        console.log(url)
                        fnpintarpaginas(url);
                        ObtenerDatos();
                    }
                }
            });
        }).fail( function() {
            Swal.fire(
                'Error de conexión',
                'Por favor use una conexión mas estable.',
                'warning'
              )
            $("#login_store").removeClass('disabled');
        })
    }
}

function ObtenerDatos() {
    tipoDni = sessionStorage.getItem('tdoc_user');
    dni = sessionStorage.getItem('dni_user')

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=listar_usu&PerTide=" + tipoDni + "&PerIdeNro=" + dni, function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);


        $.each(arreglo, function (idx, item) {

            sessionStorage.setItem('PerIdeNro', item.PerIdeNro);
            sessionStorage.setItem('PerApePat', item.PerApePat);
            sessionStorage.setItem('PerApeMat', item.PerApeMat);
            sessionStorage.setItem('PerNom', item.PerNom);
            sessionStorage.setItem('PerTlf', item.PerTlf);
            sessionStorage.setItem('PerEmail', item.PerEmail);
            sessionStorage.setItem('PerClave', item.PerClave);
            sessionStorage.setItem('PerDirDes', item.PerDirDes);


            console.log(item.PerTlf, item.PerEmail);
        });
    });
}