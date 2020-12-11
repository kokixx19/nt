var Arreglotextocbo = [];
var conthtmlcbo = "";

var ArregloDivsLineTime = ["DivAVIPDatosVendedor", "DivAVIPDatosVendedorRepre", "DivAVIDatosComprador", "DivAVIPDatosCompradorRepre", "DIvAVPIDeclaracionDatos"];

$(document).ready(function () {
    $("#divContenido").removeClass("swal2-shown swal2-height-auto");
    cargarValidacionVendedor();
    cargarValidacionComprador()
    $('.tabs').tabs();
    $('select').formSelect();
    fnfaschNextTimeline("DivAVIPDatosVendedor", ArregloDivsLineTime);
    $("#divRepresentanteOn").show();


    fnhrefSegAnt("ahrefatras");
    fnhrefSegAnt("ahrefatras");
    $("#chbRepresentante").prop("checked", false)
    $("#divRepresentanteOn").hide();
    $("#btnGrabarIntPais").hide();
    $("#DivAVIPDatosVendedor").hide();
    $("#BtnSAS").hide();
    $("#LineaDeTiempo").hide();
    $("#ahrefSiguiente2").hide();

    fnComboEstaCivil();

    ComboDocsIdentidad();

    fnNacionalidad();
    fnNacionalidadc();

    fnLlenarPais()
    fnLlenarDepartamento()

    fnLlenarPaisComprador()
    fnLlenarDepartamentoComprador()

    fnLlenarPaisEdicion()
    fnLlenarDepartamentoEdicion()

    fnLlenarPaisEdicionComprador()
    fnLlenarDepartamentoEdicionComprador()

    Preload();


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
    $("#contenerdor_Carga").fadeTo(1, 1);
    $("#contenerdor_Carga").show();
}



$("#btnFrmVIP").click(function () {
    $("#DivInfoViajeIP").hide();
    $("#DivAVIPDatosVendedor").show();

    $("#LineaDeTiempo").show();
    $("#BtnSAS").show();
});

$("#txtTelefonoVendedor").keypress(function soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
});


$("#Monto").blur(function () {
    this.value = parseFloat(this.value).toFixed(2);
});


function filterFloat(evt, input) {
    // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
    var key = window.Event ? evt.which : evt.keyCode;
    var chark = String.fromCharCode(key);
    var tempValue = input.value + chark;
    if (key >= 48 && key <= 57) {
        if (filter(tempValue) === false) {
            return false;
        } else {
            return true;
        }
    } else {
        if (key == 8 || key == 13 || key == 0) {
            return true;
        } else if (key == 46) {
            if (filter(tempValue) === false) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}

function filter(__val__) {
    var preg = /^([0-9]+\.?[0-9]{0,2})$/;
    if (preg.test(__val__) === true) {
        return true;
    } else {
        return false;
    }

}

function cargarValidacionVendedor() {

    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivAVIPDatosVendedor").validate({
        rules: {
            txtNumDocumentoVendedor: {
                required: true,
                number: true,
                minlength: 8
            },
            txtNombrePVendedor: {
                required: true,
            },
            txtApePaternoVendedor: {
                required: true,
            },
            txtApeMaternoVendedor: {
                required: true,
            },
            txtEmailVendedor: {
                required: true,
            },
            txtTelefonoVendedor: {
                required: true,
                number: true,
                maxlength: 9
            }
        },
        messages: {
            txtNumDocumentoVendedor: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
            txtNombrePVendedor: {
                required: "Campo requerido",
            },
            txtApePaternoVendedor: {
                required: "Campo requerido",
            },
            txtApeMaternoVendedor: {
                required: "Campo requerido",
            },
            txtEmailVendedor: {
                required: "Campo requerido",
            },
            txtTelefonoVendedor: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

function cargarValidacionComprador() {

    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivAVIDatosComprador").validate({
        rules: {
            txtNumDocumentoComprador: {
                required: true,
                number: true,
                minlength: 8
            },
            txtNombrePComprador: {
                required: true,
            },
            txtApePaternoComprador: {
                required: true,
            },
            txtApeMaternoComprador: {
                required: true,
            },
            txtEmailComprador: {
                required: true,
            },
            txtTelefonoComprador: {
                required: true,
                number: true,
                maxlength: 9
            }
        },
        messages: {
            txtNumDocumentoComprador: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
            txtNombrePComprador: {
                required: "Campo requerido",
            },
            txtApePaternoComprador: {
                required: "Campo requerido",
            },
            txtApeMaternoComprador: {
                required: "Campo requerido",
            },
            txtEmailComprador: {
                required: "Campo requerido",
            },
            txtTelefonoComprador: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

/*Funciones para pasar a la siguiente paguina */
function fnNextAVIDatosVendedor() {
    if (!$('#DivAVIPDatosVendedor').valid()) { // checks form for validity
        Swal.fire({
            title: 'Datos Incompletos',
            text: '',
            icon: 'warning'
        });
        return;
    } else {
        fnfaschNextTimeline("DivAVIPDatosVendedorRepre", ArregloDivsLineTime, "liAVIPDatosVendedorRepre", "liAVIPDatosVendedor");
        fnhrefSegAnt("ahrefSiguiente", "fnNextAVIDatosVendedorRepre");
        fnhrefSegAnt("ahrefatras", "fnAntAVDatosVendedor");
        $("#ahrefSiguiente2").hide();
    }
}

function fnNextAVIDatosVendedorRepre() {
    fnfaschNextTimeline("DivAVIDatosComprador", ArregloDivsLineTime, "liAVPIComprador", "liAVIPDatosVendedorRepre");
    fnhrefSegAnt("ahrefSiguiente", "fnNextAVIDatosComprador");
    fnhrefSegAnt("ahrefatras", "fnAntAVDatosComprador");
    $("#btnGrabarIntPais").hide();
}


function fnNextAVIDatosComprador() {
    if (!$('#DivAVIDatosComprador').valid()) { // checks form for validity
        Swal.fire({
            title: 'Datos Incompletos',
            text: '',
            icon: 'warning'
        });
        return;
    } else {
        fnfaschNextTimeline("DivAVIPDatosCompradorRepre", ArregloDivsLineTime, "liAVPICompradorRepre", "liAVPIComprador");
        fnhrefSegAnt("ahrefSiguiente", "fnNextAVIDatosCompradopRepre");
        fnhrefSegAnt("ahrefatras", "fnAntAVDatosCompradorRepre");
        $("#btnGrabarIntPais").hide();
    }
}

function fnNextAVIDatosCompradopRepre() {
    fnfaschNextTimeline("DIvAVPIDeclaracionDatos", ArregloDivsLineTime, "liAVPIDeclaracionDatos", "liAVPICompradorRepre");
    fnhrefSegAnt("ahrefSiguiente");
    fnhrefSegAnt("ahrefatras", "fnAntAVDatosDeclaracion");
    $("#btnGrabarIntPais").show();
}



/* Funciones para retroseder a la pagiona anterior */
function fnAntAVDatosVendedor() {
    fnfaschAnteTimeline("DivAVIPDatosVendedor", ArregloDivsLineTime, "liAVIPDatosVendedor", "liAVIPDatosVendedorRepre");
    fnhrefSegAnt("ahrefatras");
    fnhrefSegAnt("ahrefSiguiente", "fnNextAVIDatosVendedor");
    $("#btnGrabarIntPais").hide();
}


function fnAntAVDatosComprador() {
    fnfaschAnteTimeline("DivAVIPDatosVendedorRepre", ArregloDivsLineTime, "liAVIPDatosVendedorRepre", "liAVPIComprador");
    fnhrefSegAnt("ahrefatras", "fnAntAVDatosVendedor");
    fnhrefSegAnt("ahrefSiguiente", "fnNextAVIDatosVendedorRepre");
    $("#btnGrabarIntPais").hide();
}

function fnAntAVDatosCompradorRepre() {
    fnfaschAnteTimeline("DivAVIDatosComprador", ArregloDivsLineTime, "liAVPIComprador", "liAVPICompradorRepre");
    fnhrefSegAnt("ahrefatras", "fnAntAVDatosComprador");
    fnhrefSegAnt("ahrefSiguiente", "fnNextAVIDatosComprador");
    $("#btnGrabarIntPais").hide();
}

function fnAntAVDatosDeclaracion() {
    fnfaschAnteTimeline("DivAVIPDatosCompradorRepre", ArregloDivsLineTime, "liAVPICompradorRepre", "liAVPIDeclaracionDatos");
    fnhrefSegAnt("ahrefatras", "fnAntAVDatosCompradorRepre");
    fnhrefSegAnt("ahrefSiguiente", "fnAntAVDatosCompradorRepre");
    $("#btnGrabarIntPais").hide();
}

/*funcion btnregresar*/


function ComboDocsIdentidad() {

    //op variable
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoVendedor").html("");
        $("#CboTipoDocumentoComprador").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoVendedor").append(opciones);
            $("#CboTipoDocumentoComprador").append(opciones);
            $("#CboTipoDocumentoCVendedor").append(opciones);
            $("#CboTipoDocumentoCComprador").append(opciones);
        });

    });
}


function fnComboEstaCivil() {
    $("#cboEstadoCivilVendedor").html("");
    $("#cboEstadoCivilComprador").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_EstadoCivil", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.ECivCod + "'>" + item.ECivDes + "</option>";
            $("#cboEstadoCivilVendedor").append(opciones);
            $("#cboEstadoCivilComprador").append(opciones);
        });
    });
}

/**
Formulario de domicilio
 */

function fnNacionalidad() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#cboNacionalidadVendedor").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboNacionalidadVendedor").append(opciones);
            $("#cboNacionalidadVendedor").val("1309");
        });

    });
}

function fnNacionalidadc() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#cboNacionalidadComprador").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboNacionalidadComprador").append(opciones);
            $("#cboNacionalidadComprador").val("1309");
        });

    });
}

function fnLlenarPais() {
    $("#cboIPPaisVendedor").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPPaisVendedor").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboIPPaisVendedor").append(opciones);

            $("#cboIPPaisVendedor").val("1309");
        });
    });
}

function fnLlenarDepartamento() {
    $("#cboIPDepartamentoVendedor").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDepartamentoVendedor").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamentoVendedor").append(opciones);
            $("#cboIPDepartamentoVendedor").val("15");
        });
    });
    fnLlenarDistrito("15");
}

$("#cboIPDepartamentoVendedor").change(function () {
    fnLlenarDistrito($(this).val());
});


function fnLlenarDistrito(Departamento) {
    $("#cboIPProvinciaVendedor").html("");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPProvinciaVendedor").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvinciaVendedor").append(opciones);
            $("#cboIPProvinciaVendedor").val("05");
        });
    });
    $("#cboIPDIstritoVendedor").html("");
    $("#cboIPDIstritoVendedor").append("<option value='00'>Seleccione</option>");
    fnLlenarProvincia("15", "05");
}


$("#cboIPProvinciaVendedor").change(function () {
    fnLlenarProvincia($("#cboIPDepartamentoVendedor").val(), $(this).val());
});

function fnLlenarProvincia(Departamento, provincia) {
    $("#cboIPDIstritoVendedor").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDIstritoVendedor").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstritoVendedor").append(opciones);
            $("#cboIPDIstritoVendedor").val("01");
        });
    });
}

function fnLlenarPaisComprador() {
    $("#cboIPPaisComprador").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPPaisComprador").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboIPPaisComprador").append(opciones);
            $("#cboIPPaisComprador").val("1309");
        });
    });
}

function fnLlenarDepartamentoComprador() {
    $("#cboIPDepartamentoComprador").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDepartamentoComprador").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamentoComprador").append(opciones);
            $("#cboIPDepartamentoComprador").val("15");
        });
    });
    fnLlenarDistritoComprador("15");
}

$("#cboIPDepartamentoComprador").change(function () {
    fnLlenarDistritoComprador($(this).val());
});


function fnLlenarDistritoComprador(Departamento) {
    $("#cboIPProvinciaComprador").html("");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPProvinciaComprador").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvinciaComprador").append(opciones);
            $("#cboIPProvinciaComprador").val("05");
        });
    });
    $("#cboIPDIstritoComprador").html("");
    $("#cboIPDIstritoComprador").append("<option value='00'>Seleccione</option>");
    fnLlenarProvinciaComprador("15", "05");
}


$("#cboIPProvinciaComprador").change(function () {
    fnLlenarProvinciaComprador($("#cboIPDepartamentoComprador").val(), $(this).val());
});

function fnLlenarProvinciaComprador(Departamento, provincia) {
    $("#cboIPDIstritoComprador").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDIstritoComprador").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstritoComprador").append(opciones);
            $("#cboIPDIstritoComprador").val("01");
        });
    });
}





/*-------------------------------------------*/
$("#txtDeclaracionDatos").val("N");

$("#chbDeclaracionDatos").change(function () {
    if ($("#chbDeclaracionDatos").prop("checked") == true) {
        $("#txtDeclaracionDatos").val("S");

    }
    if ($("#chbDeclaracionDatos").prop("checked") == false) {
        $("#txtDeclaracionDatos").val("N");

    }
});
/*-------------------------------------------*/
$("#txtRepresentante").val("S");

$("#chbRepresentante").change(function () {
    if ($("#chbRepresentante").prop("checked") == true) {
        $("#txtRepresentante").val("N");
        $("#divRepresentanteOn").show();
    }
    if ($("#chbRepresentante").prop("checked") == false) {
        $("#txtRepresentante").val("S");
        $("#divRepresentanteOn").hide();
    }
});




function fnBuscarPerVendedor() {

    var validator1 = $("#DivAVIPDatosVendedor").validate();
    validator1.resetForm();

    MostrarPreload();
    var PerIdeNroConjugeVendedor;
    var PerTideConjugeVendedor;

    var PerTide = $("#CboTipoDocumentoVendedor").val();
    var PerIdeNro = $("#txtNumDocumentoVendedor").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);
        if (arreglo.length == 0) {

            $("#txtNombrePVendedor").val("");
            $("#txtApePaternoVendedor").val("");
            $("#txtApeMaternoVendedor").val("");
            $("#txtEmailVendedor").val("");
            $("#txtRazonSocialComprador").val("");
            var txtTelefono = "";
            $("#txtTelefonoVendedor").val("");
            fnNacionalidad()
            Preload();

            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            })
        } else {
            Preload();
            $.each(arreglo, function (idx, item) {

                $("#txtNombrePVendedor").val(item.PerNom);
                $("#txtApePaternoVendedor").val(item.PerApePat);
                $("#txtApeMaternoVendedor").val(item.PerApeMat);
                $("#cboEstadoCivilVendedor").val(item.PereCiv);
                $("#txtEmailVendedor").val(item.PerEmail);
                var txtTelefono = item.PerTlfNro;
                $("#txtTelefonoVendedor").val(item.PerTlfNro);
                $("#txtRazonSocialVendedor").val(item.PerRazSoc);
                fnBuscarDomicilioVendedor(PerTide, PerIdeNro);
                $("#cboNacionalidadVendedor").val(item.PerNacion);

                if ($("#cboEstadoCivilVendedor").val() == '08') {
                    PerIdeNroConjugeVendedor = item.PerConyIde;
                    PerTideConjugeVendedor = item.PerConyTIde;
                    $("#txtNumeroCVendedor").val(PerIdeNroConjugeVendedor);
                    $("#CboTipoDocumentoCVendedor").val(PerTideConjugeVendedor);
                    $("#married").removeClass('hide');
                    window.setTimeout(fnBuscarPerVendedorConjuge, 2000)
                }

            });

        }
    });
}

function fnBuscarDomicilioVendedor(Tipodocumen, NumDocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#DivDomicilioTBVendedor").html("");
        if (arreglo.length == 0) {
            $("#DivDomicilioTBVendedor").append("");
            $("#DivDomicilioTBVendedor").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Domicilio registrados:</b></label></div>' +
                '</div>');

            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {

                $("#DivDomicilioTBVendedor").append("");
                $("#DivDomicilioTBVendedor").append('<div class="card" >' +
                    '<div class="card-content p-3">' +
                    '<div class="row ">' +
                    '<div class="col s12">' +
                    '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Datos del Domicilio</span></div>' +
                    '</div>' +
                    '</div><br />' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Pais:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.NomPais + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Departamento:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.NomDept + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Provincia:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.NomProv + '</label></div>' +
                    ' </div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Paterno:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.NomDist + '</label></div>' +
                    '</div>' +
                    ' <div class="row col s12">' +
                    ' <div class="col s5"><label style="font-size:11px;color:black"><b>Direccion:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerDirecc + '</label></div>' +
                    ' </div>' +

                    '<br />' +
                    ' <div class="row">' +
                    '<div class="col s12">' +
                    '<div class="col s6">' +
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalEdicionVendedorDomicilio" onclick="fnDatosDomicilioVendedor(\'' + item.PerDirCod + '\',\'' + item.PerPais + '\',\'' + item.PerDept + '\',\'' + item.PerProv + '\',\'' + item.PerDist + '\');">' +
                    ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6">' +
                    '<a class="btn red" style="font-size:10px" id="btnEliminarDomicilio" onclick="ConfirmDelete(' + item.PerDirCod + ');">' +
                    '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
                    '</a>' +
                    '</div>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>' +
                    '</div >' +
                    '</div >');
            });
        }

    });
}



function fnBuscarPerComprador() {

    var validator2 = $("#DivAVIDatosComprador").validate();
    validator2.resetForm();

    MostrarPreload();

    var PerTide = $("#CboTipoDocumentoComprador").val();
    var PerIdeNro = $("#txtNumDocumentoComprador").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);
        if (arreglo.length == 0) {


            $("#txtNombrePComprador").val("");
            $("#txtApePaternoComprador").val("");
            $("#txtApeMaternoComprador").val("");
            $("#txtEmailComprador").val("");
            var txtTelefono = "";
            $("#txtTelefonoComprador").val("");

            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            })
        } else {

            Preload();
            $.each(arreglo, function (idx, item) {

                $("#txtNombrePComprador").val(item.PerNom);
                $("#txtApePaternoComprador").val(item.PerApePat);
                $("#txtApeMaternoComprador").val(item.PerApeMat);
                $("#cboEstadoCivilComprador").val(item.PereCiv);
                $("#txtEmailComprador").val(item.PerEmail);
                var txtTelefono = item.PerTlfNro;
                $("#txtTelefonoComprador").val(txtTelefono);
                fnBuscarDomicilioComprador(PerTide, PerIdeNro)

                $("#txtRazonSocialComprador").val(item.PerRazSoc);
                $("#cboNacionalidadComprador").val(item.PerNacion);


                if ($("#cboEstadoCivilComprador").val() == '08') {
                    PerIdeNroConjugeComprador = item.PerConyIde;
                    PerTideConjugeComprador = item.PerConyTIde;
                    $("#txtNumeroCComprador").val(PerIdeNroConjugeComprador);
                    $("#CboTipoDocumentoCComprador").val(PerTideConjugeComprador);
                    console.log(PerIdeNroConjugeComprador, PerIdeNroConjugeComprador)
                    $("#marriedC").removeClass('hide');
                    window.setTimeout(fnBuscarPerCompradorConjuge, 2000)
                }
            });
        }
    });
}

function fnBuscarDomicilioComprador(Tipodocumen, NumDocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#DivDomicilioTBComprador").html("");
        if (arreglo.length == 0) {
            $("#DivDomicilioTBComprador").append("");
            $("#DivDomicilioTBComprador").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Domicilio registrados:</b></label></div>' +
                '</div>');

            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {

                $("#DivDomicilioTBComprador").append("");
                $("#DivDomicilioTBComprador").append('<div class="card" >' +
                    '<div class="card-content p-3">' +
                    '<div class="row ">' +
                    '<div class="col s12">' +
                    '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Datos del Domicilio</span></div>' +
                    '</div>' +
                    '</div><br />' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Pais:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.NomPais + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Departamento:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.NomDept + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Provincia:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.NomProv + '</label></div>' +
                    ' </div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Paterno:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.NomDist + '</label></div>' +
                    '</div>' +
                    ' <div class="row col s12">' +
                    ' <div class="col s5"><label style="font-size:11px;color:black"><b>Direccion:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerDirecc + '</label></div>' +
                    ' </div>' +

                    '<br />' +
                    ' <div class="row">' +
                    '<div class="col s12">' +
                    '<div class="col s6">' +
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalEdicionCompradorDomicilio" onclick="fnDatosDomicilioComprador(\'' + item.PerDirCod + '\',\'' + item.PerPais + '\',\'' + item.PerDept + '\',\'' + item.PerProv + '\',\'' + item.PerDist + '\');">' +
                    ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6">' +
                    '<a class="btn red" style="font-size:10px" id="btnEliminarDomicilio" onclick="ConfirmDeleteComprador(' + item.PerDirCod + ');">' +
                    '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
                    '</a>' +
                    '</div>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>' +
                    '</div >' +
                    '</div >');
            });
        }

    });
}

function ConfirmDeleteComprador(PerDirCod) {
    Swal.fire({
        title: '¿Seguro de Eliminar?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar ',
        cancelButtonText: 'Cancelar '
    }).then((result) => {
        if (result.value) {
            var PerTide = $("#CboTipoDocumentoComprador").val();
            var PerIdeNro = $("#txtNumDocumentoComprador").val();
            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
                console.log(result);
                if (result == 1) {
                    Swal.fire(
                        'Procesado!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                    fnBuscarDomicilioComprador(PerTide, PerIdeNro);
                }
            });

        }
    })
};



function fnBuscarPerVendedorConjuge() {

    MostrarPreload();

    var PerTideConjugeVendedor = $("#CboTipoDocumentoVendedor").val();
    var PerIdeNroConjugeVendedor = $("#txtNumDocumentoVendedor").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTideConjugeVendedor + "&PerIdeNro=" + PerIdeNroConjugeVendedor, function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);
        if (arreglo.length == 0) {


            $("#txtNombresCVendedor").val("");
            $("#ApellidoPaternoCVendedor").val("");
            $("#ApellidoMaternoCVendedor").val("");

            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            })
        } else {

            Preload();
            $.each(arreglo, function (idx, item) {

                $("#txtNombresCVendedor").val(item.PerNom);
                $("#ApellidoPaternoCVendedor").val(item.PerApePat);
                $("#ApellidoMaternoCVendedor").val(item.PerApeMat);

            });

        }
    });
}

function fnBuscarPerCompradorConjuge() {

    MostrarPreload();

    var PerTideConjugeComprador = $("#CboTipoDocumentoCComprador").val();
    var PerIdeNroConjugeComprador = $("#txtNumeroCComprador").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTideConjugeComprador + "&PerIdeNro=" + PerIdeNroConjugeComprador, function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);
        if (arreglo.length == 0) {


            $("#txtNombresCComprador").val("");
            $("#ApellidoPaternoCComprador").val("");
            $("#ApellidoMaternocComprador").val("");

            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            })
        } else {

            Preload();
            $.each(arreglo, function (idx, item) {

                $("#txtNombresCComprador").val(item.PerNom);
                $("#ApellidoPaternoCComprador").val(item.PerApePat);
                $("#ApellidoMaternocComprador").val(item.PerApeMat);

            });

        }
    });
}

/* Funcion de Seleccionar Persona Juridica o Natural */


$("#CboPersonaVendedor").change(function () {
    if ($("#CboPersonaVendedor").val() == 'J') {


        $("#CboPersonaVendedor").val('J');

        $("#CboTipoDocumentoVendedor").val('R');
        document.getElementById('CboTipoDocumentoVendedor').disabled = true;

        $("#CboTipoDocumentoVendedor").removeClass('hide');
        $("#txtRazonSocialVendedor").removeClass('hide');
        $("#txtNombrePVendedor").addClass('hide');
        $("#txtApePaternoVendedor").addClass('hide');
        $("#txtApeMaternoVendedor").addClass('hide');
        $("#txtEmailVendedor").addClass('hide');
        $("#txtTelefonoVendedor").addClass('hide');
        $("#DivEstadoCivilVendedor").addClass('hide');
        $("#OcupacionV").addClass('hide');
        $("#lblDomicilio").text("Dirección");
    } else {

        document.getElementById('CboTipoDocumentoVendedor').disabled = false;
        $("#CboTipoDocumentoVendedor").val('D');
        $("#txtRazonSocialVendedor").addClass('hide')
        $("#txtNombrePVendedor").removeClass('hide');
        $("#txtApePaternoVendedor").removeClass('hide');
        $("#txtApeMaternoVendedor").removeClass('hide');
        $("#txtEmailVendedor").removeClass('hide');
        $("#txtTelefonoVendedor").removeClass('hide');
        $("#DivEstadoCivilVendedor").removeClass('hide');
        $("#OcupacionV").removeClass('hide');
        $("#lblDomicilio").text("Domicilio");
    }


});



$("#CboPersonaComprador").change(function () {
    if ($("#CboPersonaComprador").val() == 'J') {


        $("#CboPersonaComprador").val('J');

        $("#CboTipoDocumentoComprador").val('R');
        document.getElementById('CboTipoDocumentoComprador').disabled = true;

        $("#CboTipoDocumentoComprador").removeClass('hide');
        $("#txtRazonSocialComprador").removeClass('hide');
        $("#txtNombrePComprador").addClass('hide');
        $("#txtApePaternoComprador").addClass('hide');
        $("#txtApeMaternoComprador").addClass('hide');
        $("#txtEmailComprador").addClass('hide');
        $("#txtTelefonoComprador").addClass('hide');
        $("#DivEstadoCivilComprador").addClass('hide');
        $("#OcupacionC").addClass('hide');
        $("#lblDomicilioC").text("Dirección");
    } else {

        document.getElementById('CboTipoDocumentoComprador').disabled = false;
        $("#CboTipoDocumentoComprador").val('D');
        $("#txtRazonSocialComprador").addClass('hide')
        $("#txtNombrePComprador").removeClass('hide');
        $("#txtApePaternoComprador").removeClass('hide');
        $("#txtApeMaternoComprador").removeClass('hide');
        $("#txtEmailComprador").removeClass('hide');
        $("#txtTelefonoComprador").removeClass('hide');
        $("#DivEstadoCivilComprador").removeClass('hide');
        $("#OcupacionC").removeClass('hide');
        $("#lblDomicilioC").text("Domicilio");
    }


});

function MENSJ(result) {
    Preload();
    if (result == 1) {
        Swal.fire(
            'Registro Agregado Exitosamente',
            'Transferencia Vehicular',
            'success'
        )
        Notif();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Transferencia Vehicular',
            text: '¡Sucedió algo inesperado!'
        })
    }

};


var ResultfnRegistrarCabecera;
var ResultfnRegistrarParticipanteVendedor;
var ResultfnRegistrarParticipanteComprador;

$("#btnGrabarIntPais").click(function () {
    fnRegistrarCabecera(function () {
        fnRegistrarParticipanteVendedor();
        fnRegistrarParticipanteComprador();
        fnRegistrarParticipanteRepresentante();
        fnRegistrarPlacas(function () {
            setTimeout(() => {
                if (ResultfnRegistrarCabecera == 1 &&
                    ResultfnRegistrarParticipanteVendedor == 1 &&
                    ResultfnRegistrarParticipanteComprador == 1) {
                    LimpiarALL()
                    MENSJ(1);

                } else {
                    MENSJ(2);
                    GuardarErrorLOG();
                }
            }, 2000);
        });
    });

});




function fnRegistrarCabecera(callback) {
    var f = new Date();

    MostrarPreload();

    var TVFch = f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate();
    var TVEst = 'S';
    var TVUseCod = ' ';
    var TVParticipantes = $('#txtApePaternoVendedor').val() + ' ' + $('#txtApeMaternoVendedor').val() + ' ' + $('#txtNombrePVendedor').val() + '/' + $('#txtApePaternoComprador').val() + ' ' + $('#txtApeMaternoComprador').val() + ' ' + $('#txtNombrePComprador').val();
    var TVEstPro = 'N';



    $.post("https://www.dotnetsa.com//PAINOSERVICE/app/controller/ControllerReporteVH.php",
        "op=sp_InsertarCabecera_TVH&TVFch=" + TVFch + "&TVEst=" + TVEst + "&TVUseCod=" +
        TVUseCod + "&TVParticipantes=" + TVParticipantes + "&TVEstPro=" + TVEstPro,
        function (result) {
            ResultfnRegistrarCabecera = result;
            console.log(ResultfnRegistrarCabecera);
            if (result == 1) {
                callback();
            } else {
                Preload();
                grabarLog(result, 'fnRegistrarCabecera', 'TRANSFERENCIA VEHICULAR')
            }

        });
};


function fnRegistrarParticipanteVendedor() {


    var TVPerIdeNro = $('#txtNumDocumentoVendedor').val();
    var TVPerTIde = $('#CboTipoDocumentoVendedor').val();

    var TVPerNom = $('#txtNombrePVendedor').val();
    var TVPerApeP = $('#txtApePaternoVendedor').val();
    var TVPerApeM = $('#txtApeMaternoVendedor').val();
    var TVPerRazSoc = $('#txtRazonSocialVendedor').val();
    var TVPerNomCom = $('#txtApePaternoVendedor').val() + ' ' + $('#txtApeMaternoVendedor').val() + ' ' + $('#txtNombrePVendedor').val();;
    var TVPerTipCon = '34';

    var TVPerPais = $("#cboIPPaisVendedor").val();
    var TVPerDpto = $("#cboIPDepartamentoVendedor").val();
    var TVPerProv = $("#cboIPProvinciaVendedor").val();
    var TVPerDist = $("#cboIPDIstritoVendedor").val();
    var TVPerDire = $("#txtIPDireccionVendedor").val();

    var TVPerOcu = $('#cboTVOcupacionVendedor').val();
    var TVPerTlf = $('#txtTelefonoVendedor').val();

    var TVPerEstCiv;
    if ($("#CboPersonaVendedor").val() == 'J') {
        TVPerEstCiv = "";
    } else {
        TVPerEstCiv = $('#cboEstadoCivilVendedor').val();
    }


    var TVPerEmail = $('#txtEmailVendedor').val();

    var TVPerNomCoC = $("#ApellidoPaternoCVendedor").val(); + ' ' + $("#ApellidoMaternoCVendedor").val(); + ' ' + $("#txtNombresCVendedor").val();;
    var TVPerNomC = $("#txtNombresCVendedor").val();
    var TVPerApeMC = $("#ApellidoPaternoCVendedor").val();
    var TVPerApePC = $("#ApellidoMaternoCVendedor").val();
    var TVPerIdeNroC = $("#txtNumeroCVendedor").val();
    var TVPerTideC = $("#CboTipoDocumentoCVendedor").val();
    var TVPerTPerC = '';
    var TVPerFicReg = '';
    var TVPerRep = '';


    $.post("https://www.dotnetsa.com//PAINOSERVICE/app/controller/ControllerReporteVH.php",
        "op=sp_InsertarParticipante_TVH&TVPerIdeNro=" + TVPerIdeNro + "&TVPerTIde=" + TVPerTIde +
        "&TVPerNom=" + TVPerNom + "&TVPerApeP=" + TVPerApeP + "&TVPerApeM=" + TVPerApeM + "&TVPerRazSoc=" + TVPerRazSoc +
        "&TVPerNomCom=" + TVPerNomCom + "&TVPerTipCon=" + TVPerTipCon + "&TVPerPais=" + TVPerPais + "&TVPerDpto=" + TVPerDpto +
        "&TVPerProv=" + TVPerProv + "&TVPerDist=" + TVPerDist + "&TVPerDire=" + TVPerDire + "&TVPerOcu=" + TVPerOcu +
        "&TVPerTlf=" + TVPerTlf + "&TVPerEstCiv=" + TVPerEstCiv + "&TVPerEmail=" + TVPerEmail + "&TVPerNomCoC=" + TVPerNomCoC +
        "&TVPerNomC=" + TVPerNomC + "&TVPerApeMC=" + TVPerApeMC + "&TVPerApePC=" + TVPerApePC + "&TVPerIdeNroC=" + TVPerIdeNroC +
        "&TVPerTideC=" + TVPerTideC + "&TVPerTPerC=" + TVPerTPerC + "&TVPerFicReg=" + TVPerFicReg + "&TVPerRep=" + TVPerRep,
        function (result) {

            ResultfnRegistrarParticipanteVendedor = result;
            console.log(ResultfnRegistrarParticipanteVendedor);

            if (result == 1) {
                AgregarDomicilioDBA();
                InsertClientV();
            } else {
                grabarLog(result, 'fnRegistrarParticipanteVendedor', 'TRANSFERENCIA VEHICULAR')
            }
        });
};




function fnRegistrarParticipanteComprador() {

    var TVPerIdeNro = $('#txtNumDocumentoComprador').val();
    var TVPerTIde = $('#CboTipoDocumentoComprador').val();
    var TVPerNom = $('#txtNombrePComprador').val();
    var TVPerApeP = $('#txtApePaternoComprador').val();
    var TVPerApeM = $('#txtApeMaternoComprador').val();
    var TVPerRazSoc = $('#txtRazonSocialComprador').val();
    var TVPerNomCom = $('#txtApePaternoComprador').val() + ' ' + $('#txtApeMaternoComprador').val() + ' ' + $('#txtNombrePComprador').val();;
    var TVPerTipCon = '40';

    var TVPerPais = $("#cboIPPaisComprador").val();
    var TVPerDpto = $("#cboIPDepartamentoComprador").val();
    var TVPerProv = $("#cboIPProvinciaComprador").val();
    var TVPerDist = $("#cboIPDIstritoComprador").val();
    var TVPerDire = $("#txtIPDireccionComprador").val();

    var TVPerOcu = $('#cboTVOcupacionComprador').val();
    var TVPerTlf = $('#txtTelefonoComprador').val();

    var TVPerEstCiv;
    if ($("#CboPersonaComprador").val() == 'J') {
        TVPerEstCiv = "";
    } else {
        TVPerEstCiv = $('#cboEstadoCivilComprador').val();
    }


    var TVPerEmail = $('#txtEmailComprador').val();
    var TVPerNomCoC = $('#ApellidoPaternoCComprador').val() + ' ' + $('#ApellidoMaternocComprador').val() + ' ' + $('#txtNombresCComprador').val();
    var TVPerNomC = $('#txtNombresCComprador').val();
    var TVPerApeMC = $('#ApellidoPaternoCComprador').val();
    var TVPerApePC = $('#ApellidoMaternocComprador').val();
    var TVPerIdeNroC = $('#txtNumeroCComprador').val();
    var TVPerTideC = $('#CboTipoDocumentoCComprador').val();
    var TVPerTPerC = '';
    var TVPerFicReg = '';
    var TVPerRep = '';



    $.post("https://www.dotnetsa.com//PAINOSERVICE/app/controller/ControllerReporteVH.php",
        "op=sp_InsertarParticipante_TVH&TVPerIdeNro=" + TVPerIdeNro + "&TVPerTIde=" + TVPerTIde +
        "&TVPerNom=" + TVPerNom + "&TVPerApeP=" + TVPerApeP + "&TVPerApeM=" + TVPerApeM + "&TVPerRazSoc=" + TVPerRazSoc +
        "&TVPerNomCom=" + TVPerNomCom + "&TVPerTipCon=" + TVPerTipCon + "&TVPerPais=" + TVPerPais + "&TVPerDpto=" + TVPerDpto +
        "&TVPerProv=" + TVPerProv + "&TVPerDist=" + TVPerDist + "&TVPerDire=" + TVPerDire + "&TVPerOcu=" + TVPerOcu +
        "&TVPerTlf=" + TVPerTlf + "&TVPerEstCiv=" + TVPerEstCiv + "&TVPerEmail=" + TVPerEmail + "&TVPerNomCoC=" + TVPerNomCoC +
        "&TVPerNomC=" + TVPerNomC + "&TVPerApeMC=" + TVPerApeMC + "&TVPerApePC=" + TVPerApePC + "&TVPerIdeNroC=" + TVPerIdeNroC +
        "&TVPerTideC=" + TVPerTideC + "&TVPerTPerC=" + TVPerTPerC + "&TVPerFicReg=" + TVPerFicReg + "&TVPerRep=" + TVPerRep,
        function (result) {
            ResultfnRegistrarParticipanteComprador = result;
            console.log(ResultfnRegistrarParticipanteComprador);
            if (result == 1) {
                InsertClientC();
                AgregarDomicilioCompradorDBA();
            } else {
                grabarLog(result, 'fnRegistrarParticipanteComprador', 'TRANSFERENCIA VEHICULAR')
            }
        });
};


var arregloRepresentante = [];

function grabarVendedorRepre() {

    let locationData = {
        TVPerIdeNro: $("#txtNumDocumentoVendedorAdd").val(),
        TVPerTIde: $("#CboTipoDocumentoVendedorAdd").val(),
        TVPerNom: $("#txtNombrePVendedorAdd").val(),
        TVPerApeP: $("#txtApePaternoVendedorAdd").val(),
        TVPerApeM: $("#txtApeMaternoVendedorAdd").val(),
        TVPerNomCom: $("#txtApePaternoVendedorAdd").val() + ' ' + $("#txtApeMaternoVendedorAdd").val() + ' ' + $("#txtNombrePVendedorAdd").val(),
        TVPerTipCon: '42',
        TVPerFicReg: $("#txtFichaRVendedorAdd").val(),
        TVPerRep: 'V'
    }
    arregloRepresentante.push(locationData);
    console.log(arregloRepresentante);
}

function grabarCompradorRepre() {

    let locationData = {
        TVPerIdeNro: $("#txtNumDocumentoCompradorAdd").val(),
        TVPerTIde: $("#CboTipoDocumentoCompradorAdd").val(),
        TVPerNom: $("#txtNombrePCompradorAdd").val(),
        TVPerApeP: $("#txtApePaternoCompradorAdd").val(),
        TVPerApeM: $("#txtApeMaternoCompradorAdd").val(),
        TVPerNomCom: $("#txtApePaternoCompradorAdd").val() + ' ' + $("#txtApeMaternoCompradorAdd").val() + ' ' + $("#txtNombrePCompradorAdd").val(),
        TVPerTipCon: '42',
        TVPerFicReg: $("#txtFichaRCompradorAdd").val(),
        TVPerRep: 'C'
    }
    arregloRepresentante.push(locationData);
    console.log(arregloRepresentante);
}

$("#btnGrabarVendedorAdd").click(function () {
    grabarVendedorRepre();
    fnAddVendedorRepre();
})

$("#btnGrabarCompradorAdd").click(function () {
    grabarCompradorRepre();
    fnAddCompradorRepre();
})



function fnAddVendedorRepre() {

    var TVPerIdeNro = $("#txtNumDocumentoVendedorAdd").val();
    var TVPerTIde = $("#CboTipoDocumentoVendedorAdd option:selected").html();
    var TVPerNom = $("#txtNombrePVendedorAdd").val();
    var TVPerApeP = $("#txtApePaternoVendedorAdd").val();
    var TVPerApeM = $("#txtApeMaternoVendedorAdd").val();
    var TVPerNomCom = $("#txtApePaternoVendedorAdd").val() + ' ' + $("#txtApeMaternoVendedorAdd").val() + ' ' + $("#txtNombrePVendedorAdd").val();
    var TVPerFicReg = $("#txtFichaRVendedorAdd").val();

    var txtIPDireccion = $("#txtIPDireccionVendedor").val();

    var rtrim = /[, ]+/g;
    var idDomicilioDiv = txtIPDireccion.replace(rtrim, "");
    console.log(idDomicilioDiv);

    $("#DivVendedorAddTB").append("");
    $("#DivVendedorAddTB").append('<div class="card" >' +
        '<div class="card-content p-3">' +
        '<div class="row ">' +
        '<div class="col s12">' +
        '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Datos del Domicilio</span></div>' +
        '</div>' +
        '</div><br />' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Documento:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerTIde + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>N° Documento:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerIdeNro + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Nombre:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerNom + '</label></div>' +
        ' </div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Paterno:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerApeP + '</label></div>' +
        '</div>' +
        ' <div class="row col s12">' +
        ' <div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Materono:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerApeM + '</label></div>' +
        ' </div>' +
        '<div class="row col s12">' +
        ' <div class="col s5"><label style="font-size:11px;color:black"><b>Ficha Registral:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerFicReg + '</label></div>' +
        '</div>' +

        '<br />' +
        ' <div class="row">' +
        '<div class="col s12">' +
        '<div class="col s6">' +
        '<a class="btn btn-primary disabled" style="font-size:10px" >' +
        ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
        '</a>' +
        ' </div>' +
        '<div class="col s6">' +
        '<a class="btn red" style="font-size:10px" id="bt_del" >' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div >' +
        '</div >');
}

function fnAddCompradorRepre() {

    var TVPerIdeNro = $("#txtNumDocumentoCompradorAdd").val();
    var TVPerTIde = $("#CboTipoDocumentoCompradorAdd option:selected").html();
    var TVPerNom = $("#txtNombrePCompradorAdd").val();
    var TVPerApeP = $("#txtApePaternoCompradorAdd").val();
    var TVPerApeM = $("#txtApeMaternoCompradorAdd").val();
    var TVPerNomCom = $("#txtApePaternoCompradorAdd").val() + ' ' + $("#txtApeMaternoCompradorAdd").val() + ' ' + $("#txtNombrePCompradorAdd").val();
    var TVPerFicReg = $("#txtFichaRCompradorAdd").val();

    var txtIPDireccion = $("#txtIPDireccionComprador").val();

    var rtrim = /[, ]+/g;
    var idDomicilioDiv = txtIPDireccion.replace(rtrim, "");
    console.log(idDomicilioDiv);

    $("#DivCompradorAddTB").append("");
    $("#DivCompradorAddTB").append('<div class="card" >' +
        '<div class="card-content p-3">' +
        '<div class="row ">' +
        '<div class="col s12">' +
        '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Datos del Domicilio</span></div>' +
        '</div>' +
        '</div><br />' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Documento:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerTIde + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>N° Documento:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerIdeNro + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Nombre:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerNom + '</label></div>' +
        ' </div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Paterno:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerApeP + '</label></div>' +
        '</div>' +
        ' <div class="row col s12">' +
        ' <div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Materono:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerApeM + '</label></div>' +
        ' </div>' +
        '<div class="row col s12">' +
        ' <div class="col s5"><label style="font-size:11px;color:black"><b>Ficha Registral:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TVPerFicReg + '</label></div>' +
        '</div>' +

        '<br />' +
        ' <div class="row">' +
        '<div class="col s12">' +
        '<div class="col s6">' +
        '<a class="btn btn-primary disabled" style="font-size:10px" >' +
        ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
        '</a>' +
        ' </div>' +
        '<div class="col s6">' +
        '<a class="btn red" style="font-size:10px" id="bt_del" >' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div >' +
        '</div >');
}


function LimpiarALL() {

    ComboDocsIdentidad();
    $('#liAVPIDeclaracionDatos').removeClass("active pgactual");
    $('#liAVPIComprador').removeClass("active pgactual");
    $('#liAVIPDatosVendedor').removeClass("active ");

    $('input[type="text"]').val('');
    $('input[type="number"]').val('');

    $("#divContenido").removeClass("swal2-shown swal2-height-auto");

    $('.tabs').tabs();
    $('select').formSelect();
    fnfaschNextTimeline("DivAVIPDatosVendedor", ArregloDivsLineTime);
    $("#divRepresentanteOn").show();

    $("#chbRepresentante").prop("checked", false)
    $("#divRepresentanteOn").hide();
    $("#btnGrabarIntPais").hide();
    $("#DivAVIPDatosVendedor").hide();
    $("#BtnSAS").hide();
    $("#LineaDeTiempo").hide();

    fnComboEstaCivil();



    fnLlenarPais()
    fnLlenarDepartamento()

    $("#DivInfoViajeIP").show();
    $("#ahrefatras").hide();
    $("#ahrefSiguiente").hide();
    $("#ahrefSiguiente2").show();

    $("#DivDomicilioTBVendedor").html("");
    $("#DivDomicilioTBComprador").html("");

    $("#tbPlaca").html("");

    var cantidadArregloDomicilio = arreglo.length;
    arreglo.splice(0, cantidadArregloDomicilio);

    var cantidadArregloDomicilioC = arregloComprador.length;
    arregloComprador.splice(0, cantidadArregloDomicilioC);

    var cantidadArregloPlaca = arregloPlaca.length;
    arregloPlaca.splice(0, cantidadArregloPlaca);


    document.getElementById('CboTipoDocumentoVendedor').disabled = false;
    $("#CboTipoDocumentoVendedor").val('D');
    $("#txtRazonSocialVendedor").addClass('hide')
    $("#txtNombrePVendedor").removeClass('hide');
    $("#txtApePaternoVendedor").removeClass('hide');
    $("#txtApeMaternoVendedor").removeClass('hide');
    $("#txtEmailVendedor").removeClass('hide');
    $("#txtTelefonoVendedor").removeClass('hide');
    $("#DivEstadoCivilVendedor").removeClass('hide');
    $("#OcupacionV").removeClass('hide');
    $("#lblDomicilio").text("Domicilio");

    document.getElementById('CboTipoDocumentoComprador').disabled = false;
    $("#CboTipoDocumentoComprador").val('D');
    $("#txtRazonSocialComprador").addClass('hide')
    $("#txtNombrePComprador").removeClass('hide');
    $("#txtApePaternoComprador").removeClass('hide');
    $("#txtApeMaternoComprador").removeClass('hide');
    $("#txtEmailComprador").removeClass('hide');
    $("#txtTelefonoComprador").removeClass('hide');
    $("#DivEstadoCivilComprador").removeClass('hide');
    $("#OcupacionC").removeClass('hide');
    $("#lblDomicilioC").text("Domicilio");

    $("#CboPersonaVendedor").val("N");
    $("#CboPersonaComprador").val("N");

    var validator1 = $("#DivAVIPDatosVendedor").validate();
    validator1.resetForm();

    var validator2 = $("#DivAVIDatosComprador").validate();
    validator2.resetForm();
}


$("#cboEstadoCivilVendedor").change(function () {

    if ($("#cboEstadoCivilVendedor").val() == '08') {
        $("#married").removeClass('hide');
    } else {
        $("#married").addClass('hide');
    }
});

$("#cboEstadoCivilComprador").change(function () {

    if ($("#cboEstadoCivilComprador").val() == '08') {
        $("#marriedC").removeClass('hide');
    } else {
        $("#marriedC").addClass('hide');
    }
});

function Eliminar_Elemento(my_array, posicion, cant) {

    my_array.splice(posicion, cant);
    return my_array;
}

function ConfirmEliminarElemento(idDomicilio, busqueda) {
    Swal.fire({
        title: '¿Seguro de Eliminar?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar ',
        cancelButtonText: 'Cancelar '
    }).then((result) => {
        if (result.value) {

            console.log(idDomicilio);
            console.log(idDomicilio);
            var indice = arreglo.findIndex(elemt => elemt.PerDirecc == busqueda);

            console.log(indice);

            Eliminar_Elemento(arreglo, indice, 1)

            var iddiv = "#" + idDomicilio;
            console.log(iddiv);
            $("" + iddiv + "").remove();


            Swal.fire(
                'Procesado',
                'El registro ha sido eliminado.',
                'success'
            )
        }
    })
}

$("#btnGrabarIPDireccionVendedor").click(function () {
    fnAddDomicilo();
    grabarDomicilio();
});

var arreglo = [];

function grabarDomicilio() {

    let locationData = {
        PerTIde: $("#CboTipoDocumentoVendedor").val(),
        PerIdeNro: $("#txtNumDocumentoVendedor").val(),
        PerPais: $("#cboIPPaisVendedor").val(),
        PerDept: $("#cboIPDepartamentoVendedor").val(),
        PerProv: $("#cboIPProvinciaVendedor").val(),
        PerDist: $("#cboIPDIstritoVendedor").val(),
        PerDirecc: $("#txtIPDireccionVendedor").val()
    }
    arreglo.push(locationData);
    console.log(arreglo);
}



function fnAddDomicilo() {
    var tbbPVIDireccion = $("#DivDomicilioTBVendedor").html();
    if ($("#DivDomicilioTBVendedor").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Domicilio registrados:</b></label></div>' +
        '</div>') {
        $("#DivDomicilioTBVendedor").html("");
    }

    var nomcboIPPais = $('#cboIPPaisVendedor option:selected').html();
    var cboIPDepartamento = $('#cboIPDepartamentoVendedor option:selected').html();
    var cboIPProvincia = $('#cboIPProvinciaVendedor option:selected').html();
    var cboIPDIstrito = $('#cboIPDIstritoVendedor option:selected').html();
    var txtIPDireccion = $("#txtIPDireccionVendedor").val();

    var rtrim = /[, ]+/g;
    var idDomicilioDiv = txtIPDireccion.replace(rtrim, "");
    console.log(idDomicilioDiv);

    $("#DivDomicilioTBVendedor").append("");
    $("#DivDomicilioTBVendedor").append('<div class="card" id="' + idDomicilioDiv + '">' +
        '<div class="card-content p-3">' +
        '<div class="row ">' +
        '<div class="col s12">' +
        '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Datos del Domicilio</span></div>' +
        '</div>' +
        '</div><br />' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Pais:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + nomcboIPPais + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Departamento:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + cboIPDepartamento + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Provincia:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + cboIPProvincia + '</label></div>' +
        ' </div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Distrito:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + cboIPDIstrito + '</label></div>' +
        '</div>' +
        ' <div class="row col s12">' +
        ' <div class="col s5"><label style="font-size:11px;color:black"><b>Direccion:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + txtIPDireccion + '</label></div>' +
        ' </div>' +

        '<br />' +
        ' <div class="row">' +
        '<div class="col s12">' +
        '<div class="col s6">' +
        '<a class="btn btn-primary disabled" style="font-size:10px" >' +
        ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
        '</a>' +
        ' </div>' +
        '<div class="col s6">' +
        '<a class="btn red" style="font-size:10px" id="bt_del" onClick="ConfirmEliminarElemento(\'' + idDomicilioDiv + '\',\'' + txtIPDireccion + '\')">' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div >' +
        '</div >');
}

function AgregarDomicilioDBA() {
    $.each(arreglo, function (idx, item) {
        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_Domicilio&PerTIde=" + item.PerTIde + "&PerIdeNro=" + item.PerIdeNro + "&PerPais=" + item.PerPais + "&PerDept=" + item.PerDept + "&PerProv=" + item.PerProv + "&PerDist=" + item.PerDist + "&PerDirecc=" + item.PerDirecc, function (result) {
            console.log(result)
        });
    });
}

function ConfirmDelete(PerDirCod) {
    Swal.fire({
        title: '¿Seguro de Eliminar?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar ',
        cancelButtonText: 'Cancelar '
    }).then((result) => {
        if (result.value) {
            var PerTide = $("#CboTipoDocumentoVendedor").val();
            var PerIdeNro = $("#txtNumDocumentoVendedor").val();
            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
                console.log(result);
                if (result == 1) {
                    Swal.fire(
                        'Procesado!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                    fnBuscarDomicilioVendedor(PerTide, PerIdeNro);
                }
            });

        }
    })
};

function fnDatosDomicilioVendedor(Codigo, Pais, Departamento, Provincia, Distrito) {

    MostrarPreload();
    fnLlenarDistritoEdicion(Departamento);
    fnLlenarProvinciaEdicion(Departamento, Provincia);

    var PerTide = $("#CboTipoDocumentoVendedor").val();
    var PerIdeNro = $("#txtNumDocumentoVendedor").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=sel_DomicilioUpdt&PerDirCod=" + Codigo + "&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        $.each(arreglo, function (idx, item) {

            $("#txtCodigoDomicilio").val(item.PerDirCod);
            $("#cboIPPaisEdicionVendedor").val(item.PerPais);
            $("#cboIPDepartamentoEdicionVendedor").val(item.PerDept);

            window.setTimeout(function () {
                $("#cboIPProvinciaEdicionVendedor").val(item.PerProv)
            }, 200);
            window.setTimeout(function () {
                $("#cboIPDIstritoEdicionVendedor").val(item.PerDist)
            }, 300);


            $("#txtIPDireccionEdicionVendedor").val(item.PerDirecc);

        });
        Preload();
    });
};

function fnDatosDomicilioComprador(Codigo, Pais, Departamento, Provincia, Distrito) {

    MostrarPreload();
    fnLlenarDistritoEdicionComprador(Departamento);
    fnLlenarProvinciaEdicionComprador(Departamento, Provincia);

    var PerTide = $("#CboTipoDocumentoComprador").val();
    var PerIdeNro = $("#txtNumDocumentoComprador").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=sel_DomicilioUpdt&PerDirCod=" + Codigo + "&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        $.each(arreglo, function (idx, item) {

            $("#txtCodigoDomicilioC").val(item.PerDirCod);
            $("#cboIPPaisEdicionComprador").val(item.PerPais);
            $("#cboIPDepartamentoEdicionComprador").val(item.PerDept);

            window.setTimeout(function () {
                $("#cboIPProvinciaEdicionComprador").val(item.PerProv)
            }, 200);
            window.setTimeout(function () {
                $("#cboIPDIstritoEdicionComprador").val(item.PerDist)
            }, 300);

            $("#txtIPDireccionEdicionComprador").val(item.PerDirecc);

        });
        Preload();
    });
};


$("#cboIPDepartamentoEdicionVendedor").change(function () {
    fnLlenarDistritoEdicion($(this).val());
});

$("#cboIPProvinciaEdicionVendedor").change(function () {
    fnLlenarProvinciaEdicion($("#cboIPProvinciaEdicionVendedor").val(), $(this).val());
});


function fnLlenarPaisEdicion() {
    $("#cboIPPaisEdicionVendedor").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPPaisEdicionVendedor").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboIPPaisEdicionVendedor").append(opciones);
            $("#cboIPPaisEdicionVendedor").val("00");
        });
    });
}



function fnLlenarDepartamentoEdicion() {
    $("#cboIPDepartamentoEdicionVendedor").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDepartamentoEdicionVendedor").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamentoEdicionVendedor").append(opciones);
            $("#cboIPDepartamentoEdicionVendedor").val("00");
        });
    });

}


function fnLlenarDistritoEdicion(Departamento) {
    $("#cboIPProvinciaEdicionVendedor").html("");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvinciaEdicionVendedor").append(opciones);
        });
    });
    $("#cboIPDIstritoEdicionVendedor").html("");
    $("#cboIPDIstritoEdicionVendedor").append("<option value='00'>Seleccionar</option>");
    $("#cboIPProvinciaEdicionVendedor").append("<option value='00'>Seleccionar</option>");

}

function fnLlenarProvinciaEdicion(Departamento, provincia) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstritoEdicionVendedor").append(opciones);

        });
    });
}

$("#btnActualizarDomicilioVendedor").click(function () {
    ActualizarDomicilio();
});


function ActualizarDomicilio() {

    var Codigo = $("#txtCodigoDomicilio").val();
    var PerTide = $("#CboTipoDocumentoVendedor").val();
    var PerIdeNro = $("#txtNumDocumentoVendedor").val();
    var PerPais = $("#cboIPPaisEdicionVendedor").val();
    var PerDept = $("#cboIPDepartamentoEdicionVendedor").val();
    var PerProv = $("#cboIPProvinciaEdicionVendedor").val();
    var PerDist = $("#cboIPDIstritoEdicionVendedor").val();
    var PerDirecc = $("#txtIPDireccionEdicionVendedor").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Domicilio&PerPais=" + PerPais + "&PerDept=" + PerDept + "&PerProv=" + PerProv + "&PerDist=" + PerDist + "&PerDirecc=" + PerDirecc + "&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + Codigo, function (result) {
        console.log(result);

        if (result == 1) {
            Swal.fire(
                'Registro Actualizado Exitosamente',
                'Transferencia Vehicular',
                'success')
            fnBuscarDomicilioVendedor(PerTide, PerIdeNro);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Transferencia Vehicular',
                text: '¡Sucedió algo inesperado!'
            })
        }

    })
};



$("#cboIPDepartamentoEdicionComprador").change(function () {
    fnLlenarDistritoEdicionComprador($(this).val());
});

$("#cboIPProvinciaEdicionComprador").change(function () {
    fnLlenarProvinciaEdicionComprador($("#cboIPProvinciaEdicionComprador").val(), $(this).val());
});


function fnLlenarPaisEdicionComprador() {
    $("#cboIPPaisEdicionComprador").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPPaisEdicionComprador").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboIPPaisEdicionComprador").append(opciones);
            $("#cboIPPaisEdicionComprador").val("00");
        });
    });
}



function fnLlenarDepartamentoEdicionComprador() {
    $("#cboIPDepartamentoEdicionComprador").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDepartamentoEdicionComprador").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamentoEdicionComprador").append(opciones);
            $("#cboIPDepartamentoEdicionComprador").val("00");
        });
    });

}


function fnLlenarDistritoEdicionComprador(Departamento) {
    $("#cboIPProvinciaEdicionComprador").html("");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvinciaEdicionComprador").append(opciones);
        });
    });
    $("#cboIPDIstritoEdicionComprador").html("");
    $("#cboIPDIstritoEdicionComprador").append("<option value='00'>Seleccionar</option>");
    $("#cboIPProvinciaEdicionComprador").append("<option value='00'>Seleccionar</option>");

}

function fnLlenarProvinciaEdicionComprador(Departamento, provincia) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstritoEdicionComprador").append(opciones);

        });
    });
}


$("#btnGrabarIPDireccionComprador").click(function () {
    fnAddDomiciloComprador();
    grabarDomicilioComprador();
});

var arregloComprador = [];

function grabarDomicilioComprador() {

    let locationData = {
        PerTIde: $("#CboTipoDocumentoComprador").val(),
        PerIdeNro: $("#txtNumDocumentoComprador").val(),
        PerPais: $("#cboIPPaisComprador").val(),
        PerDept: $("#cboIPDepartamentoComprador").val(),
        PerProv: $("#cboIPProvinciaComprador").val(),
        PerDist: $("#cboIPDIstritoComprador").val(),
        PerDirecc: $("#txtIPDireccionComprador").val()
    }
    arregloComprador.push(locationData);
    console.log(arregloComprador);
}



function fnAddDomiciloComprador() {
    var tbbPVIDireccion = $("#DivDomicilioTBComprador").html();
    if ($("#DivDomicilioTBComprador").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Domicilio registrados:</b></label></div>' +
        '</div>') {
        $("#DivDomicilioTBComprador").html("");
    }

    var nomcboIPPais = $('#cboIPPaisComprador option:selected').html();
    var cboIPDepartamento = $('#cboIPDepartamentoComprador option:selected').html();
    var cboIPProvincia = $('#cboIPProvinciaComprador option:selected').html();
    var cboIPDIstrito = $('#cboIPDIstritoComprador option:selected').html();
    var txtIPDireccion = $("#txtIPDireccionComprador").val();

    var rtrim = /[, ]+/g;
    var idDomicilioDiv = txtIPDireccion.replace(rtrim, "");
    console.log(idDomicilioDiv);

    $("#DivDomicilioTBComprador").append("");
    $("#DivDomicilioTBComprador").append('<div class="card" id="' + idDomicilioDiv + '">' +
        '<div class="card-content p-3">' +
        '<div class="row ">' +
        '<div class="col s12">' +
        '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Datos del Domicilio</span></div>' +
        '</div>' +
        '</div><br />' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Pais:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + nomcboIPPais + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Departamento:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + cboIPDepartamento + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Provincia:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + cboIPProvincia + '</label></div>' +
        ' </div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Distrito:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + cboIPDIstrito + '</label></div>' +
        '</div>' +
        ' <div class="row col s12">' +
        ' <div class="col s5"><label style="font-size:11px;color:black"><b>Direccion:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + txtIPDireccion + '</label></div>' +
        ' </div>' +

        '<br />' +
        ' <div class="row">' +
        '<div class="col s12">' +
        '<div class="col s6">' +
        '<a class="btn btn-primary disabled" style="font-size:10px" >' +
        ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
        '</a>' +
        ' </div>' +
        '<div class="col s6">' +
        '<a class="btn red" style="font-size:10px" id="bt_del" onClick="ConfirmEliminarElementoComprador(\'' + idDomicilioDiv + '\',\'' + txtIPDireccion + '\')">' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div >' +
        '</div >');
}


function ConfirmEliminarElementoComprador(idDomicilio, busqueda) {
    Swal.fire({
        title: '¿Seguro de Eliminar?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar ',
        cancelButtonText: 'Cancelar '
    }).then((result) => {
        if (result.value) {

            console.log(idDomicilio);
            console.log(idDomicilio);
            var indice = arregloComprador.findIndex(elemt => elemt.PerDirecc == busqueda);

            console.log(indice);

            Eliminar_Elemento(arregloComprador, indice, 1)

            var iddiv = "#" + idDomicilio;
            console.log(iddiv);
            $("" + iddiv + "").remove();


            Swal.fire(
                'Procesado',
                'El registro ha sido eliminado.',
                'success'
            )
        }
    })
}

function AgregarDomicilioCompradorDBA() {
    $.each(arregloComprador, function (idx, item) {
        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_Domicilio&PerTIde=" + item.PerTIde + "&PerIdeNro=" + item.PerIdeNro + "&PerPais=" + item.PerPais + "&PerDept=" + item.PerDept + "&PerProv=" + item.PerProv + "&PerDist=" + item.PerDist + "&PerDirecc=" + item.PerDirecc, function (result) {
            console.log(result)
        });
    });
}

$("#btnActualizarDomicilioComprador").click(function () {
    ActualizarDomicilioComprador();
});


function ActualizarDomicilioComprador() {

    var Codigo = $("#txtCodigoDomicilioC").val();
    var PerTide = $("#CboTipoDocumentoComprador").val();
    var PerIdeNro = $("#txtNumDocumentoComprador").val();
    var PerPais = $("#cboIPPaisEdicionComprador").val();
    var PerDept = $("#cboIPDepartamentoEdicionComprador").val();
    var PerProv = $("#cboIPProvinciaEdicionComprador").val();
    var PerDist = $("#cboIPDIstritoEdicionComprador").val();
    var PerDirecc = $("#txtIPDireccionEdicionComprador").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Domicilio&PerPais=" + PerPais + "&PerDept=" + PerDept + "&PerProv=" + PerProv + "&PerDist=" + PerDist + "&PerDirecc=" + PerDirecc + "&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + Codigo, function (result) {
        console.log(result);

        if (result == 1) {
            Swal.fire(
                'Registro Actualizado Exitosamente',
                'Transferencia Vehicular',
                'success')
            fnBuscarDomicilioComprador(PerTide, PerIdeNro);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Transferencia Vehicular',
                text: '¡Sucedió algo inesperado!'
            })
        }

    })
};


function fnAddPlaca() {

    if ($("#tbPlaca").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Domicilio registrados:</b></label></div>' +
        '</div>') {
        $("#tbPlaca").html("");
    }

    var Placa = $('#Placa').val();
    var Moneda = $('#vKVEHMONC1 option:selected').html();
    var Monto = $('#Monto').val();


    var rtrim = /[, ]+/g;
    var idPlacaDiv = Placa.replace(rtrim, "");
    console.log(idPlacaDiv);

    $("#tbPlaca").append("");
    $("#tbPlaca").append('<div class="card" id="' + idPlacaDiv + '">' +
        '<div class="card-content p-3">' +
        '<div class="row ">' +
        '<div class="col s12">' +
        '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Vehiculo</span></div>' +
        '</div>' +
        '</div><br />' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Placa:</b></label>' +
        '</div>' +
        '<div class="col s7"><label style="font-size:10px"> ' + Placa + ' </label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Moneda:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px"> ' + Moneda + '  </label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Monto:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px"> ' + Monto + '  </label></div>' +
        '</div>' +

        '<br /> <br />' +
        '<div class="row">' +
        '<div class="col s12">' +
        '<br /><br />' +
        '<div class="col s6">' +
        '<a class="btn red" style="font-size:10px" id="bt_del_vh" onClick="ConfirmEliminarElementoVh(\'' + idPlacaDiv + '\',\'' + Placa + '\')">' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i>' +
        '<labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');
}



function ConfirmEliminarElementoVh(idPlacaDiv, Placa) {
    Swal.fire({
        title: '¿Seguro de Eliminar?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar ',
        cancelButtonText: 'Cancelar '
    }).then((result) => {
        if (result.value) {

            console.log(idPlacaDiv);
            console.log(idPlacaDiv);
            var indice = arreglo.findIndex(tipodoc => tipodoc.PerDirecc == Placa);

            console.log(indice);

            Eliminar_Elemento(arreglo, indice, 1)
            var iddiv = "#" + idPlacaDiv;
            console.log(iddiv);
            $("" + iddiv + "").remove();


            Swal.fire(
                'Procesado',
                'El registro ha sido eliminado.',
                'success'
            )
        }
    })
}




var arregloPlaca = [];

function grabarPlaca() {

    let locationData = {
        TVVehPlaca: $("#Placa").val(),
        TVVehMonto: $("#Monto").val(),
        TVVehMoneda: $("#vKVEHMONC1").val()
    }
    arregloPlaca.push(locationData);
    console.log(arregloPlaca);
}




$("#agregarsoli").click(function () {
    fnAddPlaca();
    grabarPlaca();
});


var LogArreglo = [];

function grabarLog(resultado, logfunction, logmodulo) {

    let locationData = {
        logerror: resultado,
        logfunction: logfunction,
        logmodulo: logmodulo
    }
    LogArreglo.push(locationData);
    console.log(LogArreglo);
}


function fnRegistrarPlacas(callback) {
    $.each(arregloPlaca, function (idx, item) {
        $.post("https://www.dotnetsa.com//PAINOSERVICE/app/controller/ControllerReporteVH.php",
            "op=sp_InsertarPlaca_TVH&TVVehPlaca=" + item.TVVehPlaca + "&TVVehMonto=" + item.TVVehMonto +
            "&TVVehMoneda=" + item.TVVehMoneda,
            function (result) {
                console.log(result);
                callback();
            });
    });
}


function InsertClientV() {
    var TipoClient = 'PM';
    var PerTide = $("#CboTipoDocumentoVendedor").val();
    var PerIdeNro = $("#txtNumDocumentoVendedor").val();
    var PerTPer = 'N';
    var PerApePat = $("#txtApePaternoVendedor").val();
    var PerApeMat = $("#txtApeMaternoVendedor").val();
    var PerNom = $("#txtNombrePVendedor").val();
    var PerNomCo = $("#txtApePaternoVendedor").val() + ' ' + $("#txtApeMaternoVendedor").val() + ' ' + $("#txtNombrePVendedor").val();
    var PerECiv;
    if ($("#CboPersonaVendedor").val() == "J") {
        PerECiv = "06"
    } else {
        PerECiv = $('#cboEstadoCivilVendedor').val();
    }
    var PerNacion = $("#cboNacionalidadVendedor").val();
    var PerTlfNro = $("#txtTelefonoVendedor").val();
    var PerEmail = $("#txtEmailVendedor").val();
    var PerObser = '';
    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = $("#cboTVOcupacionVendedor").val();
    var PerDirDes = '';
    var PerTIdeP = '';
    var PerIdeNroP = '';
    var PerTIdeM = '';
    var PerIdeNroM = '';
    var PerFchNac = '';
    var PerRazSoc = $("#txtRazonSocialVendedor").val();
    var PerRazSocEmail = '';

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php",
        "op=insrt_ClienteALL&TipoClient=" + TipoClient +
        "&PerTide=" + PerTide +
        "&PerIdeNro=" + PerIdeNro +
        "&PerTPer=" + PerTPer +
        "&PerApePat=" + PerApePat +
        "&PerApeMat=" + PerApeMat +
        "&PerNom=" + PerNom +
        "&PerNomCo=" + PerNomCo +
        "&PerECiv=" + PerECiv +
        "&PerNacion=" + PerNacion +
        "&PerTlfNro=" + PerTlfNro +
        "&PerEmail=" + PerEmail +
        "&PerObser=" + PerObser +
        "&PerConyTIde=" + PerConyTIde +
        "&PerConyIde=" + PerConyIde +
        "&OcuCod=" + OcuCod +
        "&PerDirDes=" + PerDirDes +
        "&PerTIdeP=" + PerTIdeP +
        "&PerIdeNroP=" + PerIdeNroP +
        "&PerTIdeM=" + PerTIdeM +
        "&PerIdeNroM=" + PerIdeNroM +
        "&PerFchNac=" + PerFchNac +
        "&PerRazSoc=" + PerRazSoc +
        "&PerRazSocEmail=" + PerRazSocEmail,
        function (result) {
            console.log(result);
            if (result == 1) {

            } else {
                grabarLog(result, 'InsertClientV', 'TRANSFERENCIA VEHICULAR')
            }
        });

};



function InsertClientC() {
    var TipoClient = 'PM';
    var PerTide = $("#CboTipoDocumentoComprador").val();
    var PerIdeNro = $("#txtNumDocumentoComprador").val();
    var PerTPer = 'N';
    var PerApePat = $("#txtApePaternoComprador").val();
    var PerApeMat = $("#txtApeMaternoComprador").val();
    var PerNom = $("#txtNombrePComprador").val();
    var PerNomCo = $("#txtApePaternoComprador").val() + ' ' + $("#txtApeMaternoComprador").val() + ' ' + $("#txtNombrePComprador").val();
    var PerECiv;
    if ($("#CboPersonaComprador").val() == "J") {
        PerECiv = "06"
    } else {
        PerECiv = $('#cboEstadoCivilComprador').val();
    }
    var PerNacion = $("#cboNacionalidadComprador").val();
    var PerTlfNro = $("#txtTelefonoComprador").val();
    var PerEmail = $("#txtEmailComprador").val();
    var PerObser = '';
    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = $("#cboTVOcupacionComprador").val();
    var PerDirDes = '';
    var PerTIdeP = '';
    var PerIdeNroP = '';
    var PerTIdeM = '';
    var PerIdeNroM = '';
    var PerFchNac = '';
    var PerRazSoc = $("#txtRazonSocialComprador").val();
    var PerRazSocEmail = '';

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php",
        "op=insrt_ClienteALL&TipoClient=" + TipoClient +
        "&PerTide=" + PerTide +
        "&PerIdeNro=" + PerIdeNro +
        "&PerTPer=" + PerTPer +
        "&PerApePat=" + PerApePat +
        "&PerApeMat=" + PerApeMat +
        "&PerNom=" + PerNom +
        "&PerNomCo=" + PerNomCo +
        "&PerECiv=" + PerECiv +
        "&PerNacion=" + PerNacion +
        "&PerTlfNro=" + PerTlfNro +
        "&PerEmail=" + PerEmail +
        "&PerObser=" + PerObser +
        "&PerConyTIde=" + PerConyTIde +
        "&PerConyIde=" + PerConyIde +
        "&OcuCod=" + OcuCod +
        "&PerDirDes=" + PerDirDes +
        "&PerTIdeP=" + PerTIdeP +
        "&PerIdeNroP=" + PerIdeNroP +
        "&PerTIdeM=" + PerTIdeM +
        "&PerIdeNroM=" + PerIdeNroM +
        "&PerFchNac=" + PerFchNac +
        "&PerRazSoc=" + PerRazSoc +
        "&PerRazSocEmail=" + PerRazSocEmail,
        function (result) {
            console.log(result);
            if (result == 1) {

            } else {
                grabarLog(result, 'InsertClientC', 'TRANSFERENCIA VEHICULAR')
            }
        });

};



function Notif() {

    var titulo = "Notaria Paino";
    var icono = "fa fa-clipboard-list circle";
    var color = "blue";
    var mensaje = "SOLICITUD ENVIADA TRANSFERENCIA VEHICULAR"
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



function GuardarErrorLOG() {
    $.each(LogArreglo, function (idx, item) {
        $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerLog.php", "op=sp_LOG&logerror=" + item.logerror + "&logfunction=" + item.logfunction + "&logmodulo=" + item.logmodulo, function (result) {
            console.log(result)
        });
    });
}


function fnRegistrarParticipanteRepresentante() {


    var TVPerRazSoc = '';
    var TVPerPais = '';
    var TVPerDpto = '';
    var TVPerProv = '';
    var TVPerDist = '';
    var TVPerDire = '';

    var TVPerOcu = '';
    var TVPerTlf = '';

    var TVPerEstCiv = "";

    var TVPerEmail = '';

    var TVPerNomCoC = '';
    var TVPerNomC = '';
    var TVPerApeMC = '';
    var TVPerApePC = '';
    var TVPerIdeNroC = '';
    var TVPerTideC = '';
    var TVPerTPerC = '';


    $.each(arregloRepresentante, function (idx, item) {
        $.post("https://www.dotnetsa.com//PAINOSERVICE/app/controller/ControllerReporteVH.php",
            "op=sp_InsertarParticipante_TVH&TVPerIdeNro=" + item.TVPerIdeNro + 
            "&TVPerTIde=" + item.TVPerTIde +
            "&TVPerNom=" + item.TVPerNom + 
            "&TVPerApeP=" + item.TVPerApeP + 
            "&TVPerApeM=" + item.TVPerApeM + 
            "&TVPerRazSoc=" + TVPerRazSoc +
            "&TVPerNomCom=" + item.TVPerNomCom +
            "&TVPerTipCon=" + item.TVPerTipCon + 
            "&TVPerPais=" + TVPerPais + 
            "&TVPerDpto=" + TVPerDpto +
            "&TVPerProv=" + TVPerProv + 
            "&TVPerDist=" + TVPerDist + 
            "&TVPerDire=" + TVPerDire + 
            "&TVPerOcu=" + TVPerOcu +
            "&TVPerTlf=" + TVPerTlf + 
            "&TVPerEstCiv=" + TVPerEstCiv + 
            "&TVPerEmail=" + TVPerEmail + 
            "&TVPerNomCoC=" + TVPerNomCoC +
            "&TVPerNomC=" + TVPerNomC + 
            "&TVPerApeMC=" + TVPerApeMC + 
            "&TVPerApePC=" + TVPerApePC + 
            "&TVPerIdeNroC=" + TVPerIdeNroC +
            "&TVPerTideC=" + TVPerTideC + 
            "&TVPerTPerC=" + TVPerTPerC + 
            "&TVPerFicReg=" + item.TVPerFicReg + 
            "&TVPerRep=" + item.TVPerRep,
            function (result) {
                console.log(result);
            });
    });
};