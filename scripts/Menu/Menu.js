$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    fnCantidadNTF()
    fnContenidoNTF()
    $('#notificaciones').hide();
    $('#btnNotificacion2').hide();
    $("#lblCantidad1").hide();
    $("#lblCantidad2").hide();
    WelcomeMessage();
    //$("#toast").hide();

    fnBuscarUsuario();
});

function fnBuscarUsuario() {
    var user_tmp = sessionStorage.getItem('user_tmp');
    if(user_tmp==null||user_tmp==undefined){
        $("#Usuario").text("");
        $("#Usuario").text("Nuevo Usuario");
        $("#NombreCUser").text("");
        $("#NombreCUser").text("Nuevo Usuario");
    
    }else{
        $("#Usuario").text("");
        $("#Usuario").text(user_tmp);
        $("#NombreCUser").text("");
        $("#NombreCUser").text(user_tmp);
    
    }
    
}

function WelcomeMessage() {
    setTimeout(function () {

        $("#WelcomeMessage").fadeTo(4000, 0);
        $("#WelcomeMessage").fadeOut('fast', function () {
            $("#WelcomeMessage").delay(4000).hide();
        });
    }, 5000)

}

function CloseWelcomeMessage() {
    $("#WelcomeMessage").delay(1000).hide();
};

$("#CerrarSession").click(function () {


    Swal.fire({
        title: '¿Está seguro de cerrar la sesión?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          /*Swal.fire(
            'Cerrando sesión...',
            '',
            'success'
          )*/


          CerrarSession();
        //MostrarPreload();
          location.reload();
        

       
          //$(location).attr('href',"Logon/LoginInicial");
          
        }
      })
    
});

function CerrarSession() {
    sessionStorage.clear()
}

$('#btnNotificacion').click(function () {
    $('#notificaciones').show();
    $('#btnNotificacion2').show();
    $('#btnNotificacion').hide();
});

$('#btnNotificacion2').click(function () {
    $('#notificaciones').hide();
    $('#btnNotificacion2').hide();
    $('#btnNotificacion').show();
});

function fnpintarformMenu(paginaurl) {
    var DivContenido = $("#DivContenidoMenu");
    $.get("./view/" + paginaurl, function (response) {
        DivContenido.html(response);
    });
    $('#slide-out').sidenav('close');
}

function fnCantidadNTF() {
    var userID = sessionStorage.getItem('dni_user');
    $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=sp_ContadorNTF&userID="+ userID, function (result) {
        var arreglo = JSON.parse(result);

        $.each(arreglo, function (idx, item) {
            fnCantidadNTF()
            fnNewNtf();
             if(item.Cantidad==0){
                $("#lblCantidad1").hide();
                $("#lblCantidad2").hide();
             }else{
                $("#lblCantidad1").show();
                $("#lblCantidad2").show();
                $("#lblCantidad1").text(item.Cantidad);
                $("#lblCantidad2").text(item.Cantidad);
             }
            var divs = $(".avatar").toArray().length;
            if (divs > 5) {
                var cantidad=divs-5;
                var eliminar;
                for (eliminar = 0; eliminar < cantidad; eliminar++) {
                    $(".avatar").last().remove()
                    console.log('eliminar')
                };
            } else {
                
            }
        });
    });
}

var Notificaciones = "Notificaciones/AllNotificaciones.html";

function fnContenidoNTF() {
    var userID = sessionStorage.getItem('dni_user');
    $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=sp_ContenidoNTF&userID="+ userID, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo)
        $("#notificaciones").html("");
        if (arreglo.length == 0) {
            $("#notificaciones").append("");
            $("#notificaciones").append('<li id="testli" style="background:#e8e8e8;padding-left: 38px;padding-bottom: 10px;border-bottom-width: 23.25;margin-bottom: 0px;" class="collection-item avatar">' +
                '<span style="color: black;font-size:15px" class="title">' +
                '<b>' + 'No tienes Ninguna notificación' +
                '</b>' +
                '</span>' +
                '<p style="color: black;">' +
                '</p>' +
                '</li>');

            $('.tabs').tabs();
        } else {

            $.each(arreglo, function (idx, item) {
                if (item.estado == 1) {
                    $("#notificaciones").append('<li style="background:#e8e8e8 ;" class="collection-item avatar">' +
                        ' <i class="' + item.icono + ' ' + item.color + '"></i>' +
                        '<span style="color: black;font-size:15px" class="title"><b>' +
                        item.titulo +
                        '</b></span>' +
                        '<p style="color: black;">' +
                        item.mensaje +
                        ' </p>  ' +
                        '</li>');
                } else {
                    $("#notificaciones").append('<li style="" class="collection-item avatar">' +
                        ' <i class="' + item.icono + ' ' + item.color + '"></i>' +
                        '<span style="color: black;font-size:15px" class="title"><b>' +
                        item.titulo +
                        '</b></span>' +
                        '<p style="color: black;">' +
                        item.mensaje +
                        ' </p>  ' +
                        '</li>');
                }
            });
            $("#notificaciones").append('<center style="background:#fff;"><a  href="javascript:fnpintarformMenu(\'' + Notificaciones + '\')"> ver mas</a><center>');
        }




    });
}


function fnNewNtf() {
    var userID = sessionStorage.getItem('dni_user');
    $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=sp_NEWContenidoNTF&userID="+ userID, function (result) {
        var arreglo = JSON.parse(result);

       
        if (arreglo.length == 0) {
            
        } else {
            $("#testli").remove();
            $.each(arreglo, function (idx, item) {
                if (item.estado == 1) {
                    $("#notificaciones").prepend('<li style="background:#e8e8e8 ;" class="collection-item avatar">' +
                        ' <i class="' + item.icono + ' ' + item.color + '"></i>' +
                        '<span style="color: black;font-size:15px" class="title"><b>' +
                        item.titulo +
                        '</b></span>' +
                        '<p style="color: black;">' +
                        item.mensaje +
                        ' </p>  ' +
                        '</li>');

                        Push.create(item.titulo, {
                            body: item.mensaje,
                            icon: '/images/logo/Android/Logo_Paino.png',
                            onClick: function () {
                                window.focus();
                                this.close();
                            }
                        });
                        //var toastHTML = '<span>'+item.mensaje+'</span><a class="btn-flat toast-action">Ver</a>';
                        //$("#toast").hide();
                        launch_toast();
                        //M.toast({html: toastHTML});
                        


                } else {
                    $("#notificaciones").prepend('<li style="" class="collection-item avatar">' +
                        ' <i class="' + item.icono + ' ' + item.color + '"></i>' +
                        '<span style="color: black;font-size:15px" class="title"><b>' +
                        item.titulo +
                        '</b></span>' +
                        '<p style="color: black;">' +
                        item.mensaje +
                        ' </p>  ' +
                        '</li>');
                }
            });
        }
    });
}


function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function fnUpdateContador() {
    var userID = sessionStorage.getItem('dni_user');
    var estado = 0;

    $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerNotificacion.php",
        "op=sp_MostradoNotif&estado=" + estado+"&userID="+ userID,
        function (result) {
            console.log(result)
        });
}