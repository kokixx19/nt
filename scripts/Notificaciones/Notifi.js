$(document).ready(function () {



  Preload();

  $('.loader').hide();
  //$("#DivTraTB").hide();

  $("#banco").hide();

  fnContenidoNTF();


  var dni_user = sessionStorage.getItem('dni_user');
  var tdoc_user = sessionStorage.getItem('tdoc_user');


});



function fnContenidoNTF() {
  userID = sessionStorage.getItem('dni_user');
  $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=sp_ContenidoNTF&userID="+ userID, function (result) {
    var arreglo = JSON.parse(result);
    console.log(arreglo)
    $("#notificacionesx").html("");
    if (arreglo.length == 0) {

      $("#notificaciones").append("");
      $("#notificaciones").append('<li>' +
        '<span>' +
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
          $("#notificacionesx").append(


            '<div class="col s12 m8 offset-m2 l6 offset-l3">' +
            '<div class="card-panel grey lighten-5 z-depth-1">' +
            '<div class="row valign-wrapper">' +
            '<div class="col s2">' +
            '<img src="images/logo/Android/Logo_Paino.png" class="responsive-img">' +
            '</div>' +
            '<div class="col s10">' +
            '<strong>' + item.titulo + '</strong>' +
            '<br><span class="black-text">' +
            item.mensaje +
            '</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');


        } else {
          $("#notificacionesx").append(

            /*'<li>' +
            ' <i class="' + item.icono + ' ' + item.color + '"></i>' +
            '<span class="title"><b>' +
            item.titulo +
            '</b></span>' +
            '<p style="color: black;">' +
            item.mensaje +
            ' </p>  ' +
            '</li>');*/



            '<div class="col s12 m8 offset-m2 l6 offset-l3">' +
            '<div class="card-panel grey lighten-5 z-depth-1">' +
            '<div class="row valign-wrapper">' +
            '<div class="col s2">' +
            '<img src="images/logo/Android/Logo_Paino.png" class="responsive-img">' +
            '</div>' +
            '<div class="col s10">' +
            /*'<i class="' + item.icono + ' ' + item.color + '"></i>'+*/
            '<strong style="font-size: 17px;">' + item.titulo + '</strong><br>' +
            '<blockquote>' +
            item.mensaje +
            '</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
        }
      });
      //$("#notificacionesx").append('<a href="javascript:fnpintarmenu(\'' + Notificaciones + '\')" style="background:#e8e8e8;color: black;"> ver mas</a>');
    }




  });
}

function Preload() {
  setTimeout(function () {

    $("#contenerdor_Carga").fadeTo(500, 0);
    $("#contenerdor_Carga").fadeOut('fast', function () {
      $("#contenerdor_Carga").delay(500).hide();
    });
  }, 500)

}

function MostrarPreload() {
  $("#contenerdor_Carga").fadeTo(980, 1);
  $("#contenerdor_Carga").show();
}