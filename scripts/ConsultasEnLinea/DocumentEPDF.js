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

    var UrlPdf ="https://www.gob.mx/cms/uploads/attachment/file/293173/SANCHEZ_ROMEA_LUIS_ALFREDO_DEL_22_AL_23_DE_NOVIEMBRE_COMPROBANTE_9.pdf";
     var UrlPdf2  = "http://www.gncys.com/manuales/gncys-cfdi-manual-2020.pdf";
    
   $("#ViewPdf").html("");
   $("#ViewPdf").append('<embed src='+UrlPdf+' type="application/pdf" width="100%" height="550px" />');




   
}