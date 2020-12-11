$(document).ready(function () {
    Preload();
    $("#DivForm").hide();
    $("#DivTestimonioSoli").hide();

    ComboDocsIdentidad();
});
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
function ComboDocsIdentidad() {

    //op variable
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CboTipoDocumento").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumento").append(opciones);
        });

        $("#CboDocRepresentante").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboDocRepresentante").append(opciones);
        });

    });
}

$("#btnFrmVIP").click(function () {
    $("#DivInfo").hide();
    $("#DivForm").show();
});


function fnBuscarPerPadres() {

    MostrarPreload();

    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumDocumento").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);
        if (arreglo.length == 0) {


            $("#txtNombreP").val("");
            $("#txtApePaterno").val("");
            $("#txtApeMaterno").val("");
            $("#txtEmail").val("");
            var txtTelefono = "";
            $("#txtTelefono").val("");
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Autoriza viaje de Menores(Interior)',
            })
        } else {

            Preload();
            $.each(arreglo, function (idx, item) {

                $("#txtNombreP").val(item.PerNom);
                $("#txtApePaterno").val(item.PerApePat);
                $("#txtApeMaterno").val(item.PerApeMat);
                $("#txtEmail").val(item.PerEmail);      
                var txtTelefono = item.PerTlfNro;
                $("#txtTelefono").val(txtTelefono.trim());
            });
        }
    });

}

$("#btnAceptar").click(function (){
    fnInsertarTestimonio();
});


function fnInsertarTestimonio() {

    MostrarPreload();
    n =  new Date();
    //Año
    y = n.getFullYear();
    //Mes
    m = n.getMonth() + 1;
    //Día
    d = n.getDate(); 

    var kardex='';
    var fecha= y + "/" + m + "/" + d;
    var tdocsoli='';
    var precio=0;
    var tdoc=$('#CboTipoDocumento').val();
    var ndoc=$('#txtNumDocumento').val();
    var contacto='';
    var correo='';;
    var bancoruc=$('#txtRuc').val();
    var razonsocial=$('#txtRazon').val();
    var urladjunta=$('#txtAdjuntar').val();
    var envio=0;
    var iddistrito=0;
    var direccion='';
    var tsolicitud ='SLH';
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=sp_InsertSTCS&kardex=" + kardex + "&fecha=" + fecha
    + "&tdocsoli=" + tdocsoli+ "&precio=" + precio+ "&tdoc=" + tdoc+ "&ndoc=" + ndoc+ "&contacto=" + contacto
    + "&correo=" + correo+ "&bancoruc=" + bancoruc+ "&razonsocial=" + razonsocial+ "&urladjunta=" + urladjunta
    + "&envio=" + envio+ "&iddistrito=" + iddistrito+ "&direccion=" + direccion+ "&tsolicitud=" + tsolicitud, function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);
        if (arreglo == 1) {

            Preload();
            Swal.fire({
                icon: 'success',
                title: '¡Solicitud Enviada!',
                text: '',
            })
        } else {

          
        }
    });

}
