$(document).ready(function () {
    Preload();
    Verificar();
});

function Preload() {
    window.setTimeout(function () {

        $("#contenerdor_Carga").fadeTo(500, 0);
        $("#contenerdor_Carga").fadeOut('fast', function () {
            $("#contenerdor_Carga").delay(500).hide();
        });
    }, 200)

}

function MostrarPreload() {
    // window.setTimeout(function () {
    $("#contenerdor_Carga").fadeTo(980, 1);
    $("#contenerdor_Carga").show();
    //}, 4000)
}

function Verificar(){
    //fnpintarformMenu("ConsultasEnLinea/DocumentAutPdf.html");

    var UrlPdf ="https://docs.google.com/viewer?url=http://jornadasciberseguridad.riasc.unileon.es/archivos/ejemplo_esp.pdf&embedded=true";

    
   $("#ViewPdf").html("");
   $("#ViewPdf").append('<embed src='+UrlPdf+' type="application/pdf" width="100%" height="550px" />');
   
}