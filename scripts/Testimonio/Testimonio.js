$(document).ready(function () {
    Preload();
    $("#precio-send").hide();
    $("#DivForm").hide();
    $("#DivTestimonioSoli").hide();
    $("#divRepresentanteOn").hide();
    ComboDocsIdentidad();
    CargarFechaIni();
    LlenarCboEnvio();
    $("#txtPrecio").prop('disabled', true);

    $("#enviopanel").hide();
});




function Notif() {
    var cbotip = $("#cboTipoD").val();
    var put = ""
    if (cbotip == "T") {
        put = "TESTIMONIO";
    } else if (cbotip == "CS") {
        put = "COPIA SIMPLE"
    }

    var titulo = "Notaria Paino";
    var icono = "fa fa-clipboard-list circle";
    var color = "blue";
    var mensaje = "SOLICITUD ENVIADA DE " + put;
    var estado = 1;
    var mostrado = 0;
    var userID = sessionStorage.getItem('dni_user');

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerNotificacion.php", 
    "op=sp_InsertNotif&titulo=" + titulo + "&icono=" + icono + "&color=" + color + "&mensaje=" + mensaje + 
    "&estado=" + estado + "&mostrado=" + mostrado+ "&userID=" + userID, function (result) {
        console.log(result);
        if (result == 1) {
            console.log("Se agrego notif", result);
        } else {
            console.log("no agrego notif", result);
        }
    });
}

function CargarFechaIni() {
    var d = new Date();
    var strDatedb = d.getFullYear() + "-" + "0" + (d.getMonth() + 1) + "-" + d.getDate();
    $("#txtFecha").val(strDatedb);
}



function LlenarCboEnvio() {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=sp_ListarCboEnvio", function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo)
        $("#cboIPDIstrito").html("");
        $("#cboIPDIstrito").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.SerCod + "'>" + item.SerDes + "</option>";
            $("#cboIPDIstrito").append(opciones);
            $("#cboIPDIstrito").val("00");
        });
    });
}

$("#cboIPDIstrito").change(function () {
    $("#precio-send").hide();

    $("#precio-send").show();
    var provincia = $("#cboIPDIstrito").val();
    CalcularEnvio(provincia);
});


$("#cboTipoE").change(function () {

    console.log("cambiado", $("#cboTipoE").val());
    if($("#cboTipoE").val()=="E")
    {
        $("#enviopanel").hide();
    }else 

    if($("#cboTipoE").val()=="F")
    {
        $("#enviopanel").show();
    }
});


var preciox;

function CalcularEnvio(provincia) {
    console.log("id prov", provincia);
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=sp_PrecioEnvio&SerCod=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            preciox = item.SerMonFoj;
            console.log(item.SerMonFoj);
            $("#txtPrecio").val("S /. " + item.SerMonFoj);
        });
    });
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


$("#btnFrmVIP").click(function () {
    $("#DivInfo").hide();
    $("#DivForm").show();
});

$("#btnAceptar").click(function () {
    var kar = $("#txtKardex").val();
    var doc = $("#cboTipoD").val();
    var tdoc = $("#cboTipoE").val();
    var numdoc = $("#txtNumDocumento").val();

    if(kar.length==0 || doc=="00" || tdoc=="00"||numdoc.length==0)
    {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: '',
        })
    }else{
        fnInsertarTestimonio();
    $("#DivInfo").show();
    $('input[type="text"]').val('');
    $('input[type="number"]').val('');
    $("#DivForm").hide();
    $("#DivTestimonioSoli").hide();
    $("#divRepresentanteOn").hide();
    ComboDocsIdentidad();
    CargarFechaIni();
    LlenarCboEnvio();
    $("#txtPrecio").prop('disabled', true);
        
    }

    
    
});

$("#btnAtras").click(function () {
    $("#DivInfo").hide();
    $("#DivForm").show();
    $("#DivTestimonioSoli").hide();
});


$("#chbdomicilio").change(function () {
    if ($("#chbdomicilio").prop("checked") == true) {
        $("#txtRepresentante").val("0");
        $("#divRepresentanteOn").show();
    }
    if ($("#chbdomicilio").prop("checked") == false) {
        $("#txtRepresentante").val("1");
        $("#divRepresentanteOn").hide();
    }
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





function fnInsertarTestimonio() {
    if($('#txtPrecio')=="" || $('#txtPrecio')=="Cargando..." )
    {
        Swal.fire({
            icon: 'info',
            title: 'Calculando envío, espere por favor...',
            text: '',
        })
    }else if($('#cboTipoD')=="00" && $('#cboTipoE')=="00"){
        Swal.fire({
            icon: 'info',
            title: 'Seleccione algun tipo de documento.',
            text: '',
        })

    }
    
    
    else {
        MostrarPreload();

    var STestKar = $('#txtKardex').val();
    var STestTipo = $('#cboTipoD').val();
    var STestPre = preciox;
    var STestSolDoc = $('#CboTipoDocumento').val();
    var STestSolNro = $('#txtNumDocumento').val();
    var STestSolNom = $('#txtNombreP').val();
    var STestGloFlag;

    if ($("#chbdomicilio").prop("checked") == true) {
        STestGloFlag = 1;
        STestGloPre = preciox;
        console.log(STestGloFlag)
    }
    if ($("#chbdomicilio").prop("checked") == false) {
        STestGloFlag = 0;
        console.log(STestGloFlag)
        STestGloPre = 0;
        STestPre=0;
    }

    var STestEst = 'G';
    var STestSerCod;

    if ($("#cboTipoD").val() == "T") {
        STestSerCod = 'TESTIM';
        console.log(STestSerCod)
    }
    if ($("#cboTipoD").val() == "CS") {
        STestSerCod = 'PCS';
        console.log(STestSerCod)
    }

    var STestEmail = $('#txtEmail').val();
    var STestSer = $('#cboTipoD').val();
    var STestDir = $('#cboIPDIstrito').val();
    var STestDist = $('#txtIPDireccion').val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ConsultaContrato.php", "op=sp_insrt_Testimonio&STestKar=" + STestKar +
        "&STestTipo=" + STestTipo + "&STestPre=" + STestPre + "&STestSolDoc=" + STestSolDoc + "&STestSolNro=" + STestSolNro +
        "&STestSolNom=" + STestSolNom + "&STestGloFlag=" + STestGloFlag + "&STestGloPre=" + STestGloPre + "&STestEst=" + STestEst +
        "&STestSerCod=" + STestSerCod + "&STestEmail=" + STestEmail + "&STestSer=" + STestSer +
        "&STestDir=" + STestDir + "&STestDist=" + STestDist,
        function (result) {
            var arreglo = JSON.parse(result);
            console.log(arreglo);

            if (arreglo == 1) {
                Preload();
                Swal.fire({
                    icon: 'success',
                    title: '¡Solicitud Enviada!',
                    text: '',
                })
                Notif();
            } else {


            }
        });

    }

 

    
}