var Arreglotextocbo = [];
var conthtmlcbo = "";

var ArregloDivsLineTime = ["DivAVIPDatosPadres", "DivAVIDatosRepesentantes", "DivAVIDatosHijos", "DIvAVPIDeclaracionDatos"];

$(document).ready(function () {

    cargarValidacionpadre();
    cargarValidacionRepresentante();

    $("#divContenido").removeClass("swal2-shown swal2-height-auto");

    $('.tabs').tabs();
    $('select').formSelect();
    fnfaschNextTimeline("DivAVIPDatosPadres", ArregloDivsLineTime);
    $("#divRepresentanteOn").show();


    $("#chbRepresentante").prop("checked", false)
    $("#divRepresentanteOn").hide();
    $("#btnGrabarIntPais").hide();
    $("#DivAVIPDatosPadres").hide();
   
    $("#LineaDeTiempo").hide();
    $("#ahrefSiguiente2").hide();
    fnComboEstaCivil();
    fnNacionalidad();
    ComboDocsIdentidad();
    FechaSYS();


    ComboDocsIdentidadHijos();
    fnRestFormDocimilio();
    fnRestFormDocimilioEdicion();



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
    $("#contenerdor_Carga").fadeTo(980, 1);
    $("#contenerdor_Carga").show();
}

function funcEliminarFilaHijos(busqueda1) {
    Confirm_Eliminar_ElementoH(busqueda1)
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
            var indice = arreglo.findIndex(tipodoc => tipodoc.PerDirecc == busqueda);

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

function Confirm_Eliminar_ElementoH(busqueda) {
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

            console.log(busqueda);
            var indice = arregloHijos.findIndex(tipodoc => tipodoc.PerIdeNro == busqueda);
            console.log(indice);
            Eliminar_ElementoH(arregloHijos, indice, 1)
            var iddiv = "#" + busqueda;

            $("" + iddiv + "").remove();

            console.log(arregloHijos);

            Swal.fire(
                'Procesado',
                'El registro ha sido eliminado.',
                'success'
            )
        }
    })
}



function Eliminar_Elemento(my_array, posicion, cant) {

    my_array.splice(posicion, cant);
    return my_array;
}

function Eliminar_ElementoH(my_array, posicion, cant) {
    my_array.splice(posicion, cant);
    return my_array;
}

$("#btnFrmVIP").click(function () {
    $("#DivInfoViajeIP").hide();
    $("#DivAVIPDatosPadres").show();
    $("#BtnSAS").show();
    $("#LineaDeTiempo").show();

    var cantidadArregloDomicilio = arreglo.length;
    arreglo.splice(0, cantidadArregloDomicilio);

    var cantidadArregloHijos = arregloHijos.length;
    arregloHijos.splice(0, cantidadArregloHijos);

    var cantidadArregloVIPHijos = arregloVIPHijos.length;
    arregloVIPHijos.splice(0, cantidadArregloVIPHijos);

    fnhrefSegAnt("ahrefSiguiente", "fnNextAVIRepresentante");
    fnhrefSegAnt("ahrefatras", "fnRetornarInfo");
});

function cargarValidacionpadre() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivAVIPDatosPadres").validate({
        rules: {
            txtNumDocumento: {
                required: true,
                number: true
            },
            txtNombreP: {
                required: true
            },
            txtApePaterno: {
                required: true
            },
            txtApeMaterno: {
                required: true
            },
            txtTelefono: {
                required: true,
                number: true
            },
        },
        messages: {
            txtNumDocumento: {
                required: "Campo requerido"
            },
            txtNombreP: {
                required: "Campo requerido"
            },
            txtApePaterno: {
                required: "Campo requerido"
            },
            txtApeMaterno: {
                required: "Campo requerido"
            },
            txtTelefono: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

function cargarValidacionRepresentante() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivAVIDatosRepesentantes").validate({
        rules: {
            txtNumDocumentoRepre: {
                required: true,
                number: true
            },
            txtNombreRepre: {
                required: true
            },
            txtApePaternoRepre: {
                required: true
            },
            txtApeMaternoRepre: {
                required: true
            },
            TelefonoRepre: {
                number: true
            },
        },
        messages: {
            txtNumDocumentoRepre: {
                required: "Campo requerido"
            },
            txtNombreRepre: {
                required: "Campo requerido"
            },
            txtApePaternoRepre: {
                required: "Campo requerido"
            },
            txtApeMaternoRepre: {
                required: "Campo requerido"
            },
            TelefonoRepre: {
                number: "Solo numeros se Acepta Numeros"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

function fnRetornar() {
    fnpintarpaginas('Menu/Menu.html');
}

function fnRetornarInfo() {
    $('#liAVIDatosRepesentantes').removeClass("active pgactual");
    $('#liAVIDatosHijos').removeClass("active pgactual");
    $('#liAVPIDeclaracionDatos').removeClass("active pgactual");
    $("#divRepresentanteOn").show();
    $("#DIvAVPIDeclaracionDatos").hide();
    $("#DivAVIDatosRepesentantes").hide();
    $("#chbRepresentante").prop("checked", false)
    $("#divRepresentanteOn").hide();
    $("#btnGrabarIntPais").hide();
    $("#DivAVIPDatosPadres").hide();
    $("#LineaDeTiempo").hide();
    $("#DivInfoViajeIP").show();
    fnhrefSegAnt("ahrefSiguiente", "fnSiguiente");
    fnhrefSegAnt("ahrefatras", "fnRetornar");
}


function fnSiguiente() {
    $("#DivInfoViajeIP").hide();
    $("#DivAVIPDatosPadres").show();
    $("#BtnSAS").show();
    $("#LineaDeTiempo").show();

    var cantidadArregloDomicilio = arreglo.length;
    arreglo.splice(0, cantidadArregloDomicilio);

    var cantidadArregloHijos = arregloHijos.length;
    arregloHijos.splice(0, cantidadArregloHijos);

    var cantidadArregloVIPHijos = arregloVIPHijos.length;
    arregloVIPHijos.splice(0, cantidadArregloVIPHijos); 

    fnhrefSegAnt("ahrefSiguiente", "fnNextAVIRepresentante");
    fnhrefSegAnt("ahrefatras", "fnRetornarInfo");
}

/*Funciones para pasar a la siguiente paguina */
function fnNextAVIRepresentante() {
    if (!$("#DivAVIPDatosPadres").valid()) {
        Swal.fire({
            title: 'Datos Incompletos',
            text: '',
            icon: 'warning'
        });
        return;
    } else {
        fnfaschNextTimeline("DivAVIDatosRepesentantes", ArregloDivsLineTime, "liAVIDatosRepesentantes", "liAVIPDatosPadres");
        fnhrefSegAnt("ahrefSiguiente", "fnNextAVIDatosHijos");
        fnhrefSegAnt("ahrefatras", "fnAntAVPIPadreDatos");
        $("#ahrefSiguiente2").hide();
        
    }
}

function fnNextAVIDatosHijos() {
    if (!$("#DivAVIDatosRepesentantes").valid()) {
        Swal.fire({
            title: 'Datos Incompletos',
            text: '',
            icon: 'warning'
        });
    } else {
        fnfaschNextTimeline("DivAVIDatosHijos", ArregloDivsLineTime, "liAVIDatosHijos", "liAVIDatosRepesentantes");
        fnhrefSegAnt("ahrefSiguiente", "fnNextAVPIDeclaracionDatos");
        fnhrefSegAnt("ahrefatras", "fnAntAVIRepresentante");
    }
}

function fnNextAVPIDeclaracionDatos() {
    if (arregloVIPHijos.length == 0) {
        Swal.fire({
            title: 'Datos Incompletos',
            text: 'Debes seleccionar al menos un hijo',
            icon: 'warning'
        });
    } else {
        fnfaschNextTimeline("DIvAVPIDeclaracionDatos", ArregloDivsLineTime, "liAVPIDeclaracionDatos", "liAVIDatosHijos");
        fnhrefSegAnt("ahrefSiguiente");
        fnhrefSegAnt("ahrefatras", "fnAntAVIDatosHijos");
        $("#btnGrabarIntPais").show();
    }

}


/* Funciones para retroseder a la pagiona anterior */
function fnAntAVPIPadreDatos() {
    fnfaschAnteTimeline("DivAVIPDatosPadres", ArregloDivsLineTime, "liAVIPDatosPadres", "liAVIDatosRepesentantes");
    fnhrefSegAnt("ahrefatras", "fnRetornarInfo");
    fnhrefSegAnt("ahrefSiguiente", "fnNextAVIRepresentante");
}

function fnAntAVIRepresentante() {
    fnfaschAnteTimeline("DivAVIDatosRepesentantes", ArregloDivsLineTime, "liAVIDatosRepesentantes", "liAVIDatosHijos");
    fnhrefSegAnt("ahrefatras", "fnAntAVPIPadreDatos");
    fnhrefSegAnt("ahrefSiguiente", "fnNextAVIDatosHijos");
}

function fnAntAVIDatosHijos() {
    fnfaschAnteTimeline("DivAVIDatosHijos", ArregloDivsLineTime, "liAVIDatosHijos", "liAVPIDeclaracionDatos");
    fnhrefSegAnt("ahrefSiguiente", "fnNextAVPIDeclaracionDatos");
    fnhrefSegAnt("ahrefatras", "fnAntAVIRepresentante");
    $("#btnGrabarIntPais").hide();
}

/*funcion btnregresar*/



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

function ComboDocsIdentidadHijos() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoHijo").html("");
        $("#CboTipoDocumentoHijoUpdate").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoHijo").append(opciones);
            $("#CboTipoDocumentoHijoUpdate").append(opciones);
        });
    });
}

function fnComboEstaCivil() {
    $("#cboEstadoCivil").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_EstadoCivil", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.ECivCod + "'>" + item.ECivDes + "</option>";
            $("#cboEstadoCivil").append(opciones);
        });
    });
}

function fnNacionalidad() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#cboNacionalidad").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboNacionalidad").append(opciones);
            $("#cboNacionalidad").val("1309");
        });

        $("#cboNacionalidadRepre").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboNacionalidadRepre").append(opciones);
            $("#cboNacionalidadRepre").val("1309");
        });

    });
}
/**
Formulario de domicilio
 */
function fnLlenarPais() {
    $("#cboIPPais").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPPais").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboIPPais").append(opciones);
            $("#cboIPPais").val("1309");
        });
    });
}

function fnLlenarDepartamento() {
    $("#cboIPDepartamento").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDepartamento").append("<option value='00'>Seleccione</option>");
            $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamento").append(opciones);
            $("#cboIPDepartamento").val("15");
        });
    });
    fnLlenarDistrito("15");
}

$("#cboIPDepartamento").change(function () {
    fnLlenarDistrito($(this).val());
});


function fnLlenarDistrito(Departamento) {
    $("#cboIPProvincia").html("");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPProvincia").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvincia").append(opciones);
            $("#cboIPProvincia").val("05");
        });
    });
    $("#cboIPDIstrito").html("");
    $("#cboIPDIstrito").append("<option value='00'>Seleccione</option>");
    fnLlenarProvincia("15", "05");
}


$("#cboIPProvincia").change(function () {
    fnLlenarProvincia($("#cboIPDepartamento").val(), $(this).val());
});

function fnLlenarProvincia(Departamento, provincia) {
    $("#cboIPDIstrito").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDIstrito").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstrito").append(opciones);
            $("#cboIPDIstrito").val("01");
        });
    });
}

function fnRestFormDocimilio() {
    fnLlenarPais();
    fnLlenarDepartamento();

}



$("#btnGrabarIPDireccion").click(function () {
    fnAddDomicilo();
    grabarDomicilio();
});


var arreglo = [];

function grabarDomicilio() {

    let locationData = {
        PerTIde: $("#CboTipoDocumento").val(),
        PerIdeNro: $("#txtNumDocumento").val(),
        PerPais: $("#cboIPPais").val(),
        PerDept: $("#cboIPDepartamento").val(),
        PerProv: $("#cboIPProvincia").val(),
        PerDist: $("#cboIPDIstrito").val(),
        PerDirecc: $("#txtIPDireccion").val()
    }
    arreglo.push(locationData);
    console.log(arreglo);
}

function AgregarDomicilioDBA() {
    $.each(arreglo, function (idx, item) {

        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_Domicilio&PerTIde=" + item.PerTIde + "&PerIdeNro=" + item.PerIdeNro + "&PerPais=" + item.PerPais + "&PerDept=" + item.PerDept + "&PerProv=" + item.PerProv + "&PerDist=" + item.PerDist + "&PerDirecc=" + item.PerDirecc, function (result) {
            console.log(result)
            if (result == 1) {

            } else {
                console.log(result)
                grabarLog(result, 'AgregarDomicilioDBA', 'INTERIOR')
            }
        });
    });
}


function fnAddDomicilo() {
    var tbbPVIDireccion = $("#DivDomicilioTB").html();
    if ($("#DivDomicilioTB").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Domicilio registrados:</b></label></div>' +
        '</div>') {
        $("#DivDomicilioTB").html("");
    }

    var nomcboIPPais = $('#cboIPPais option:selected').html();
    var cboIPDepartamento = $('#cboIPDepartamento option:selected').html();
    var cboIPProvincia = $('#cboIPProvincia option:selected').html();
    var cboIPDIstrito = $('#cboIPDIstrito option:selected').html();
    var txtIPDireccion = $("#txtIPDireccion").val();
    var rtrim = /[, ]+/g;
    var idDomicilioDiv = txtIPDireccion.replace(rtrim, "");

    console.log(idDomicilioDiv);

    $("#DivDomicilioTB").append("");
    $("#DivDomicilioTB").append('<div class="card" id="' + idDomicilioDiv + '">' +
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
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Paterno:</b></label></div>' +
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

/*--------------------------------------------------------------------------------------------------------------------------*/
var arregloHijos = [];

$("#btnGrabarHijos").click(function () {
    grabarHijosArray();
    fnAddHijos();
});


function grabarHijosArray() {

    if ($("#cboRepresentante").val() == 'M') {
        var PerTIdeM = $("#CboTipoDocumento").val();
        var PerIdeNroM = $("#txtNumDocumento").val();
        var PerTIdeP = "";
        var PerIdeNroP = "";
        console.log(PerTIdeM, PerIdeNroM)
    } else if ($("#cboRepresentante").val() == 'P') {
        var PerTIdeP = $("#CboTipoDocumento").val();
        var PerIdeNroP = $("#txtNumDocumento").val();
        var PerTIdeM = "";
        var PerIdeNroM = "";
        console.log(PerTIdeP, PerIdeNroP)
    }

    let locationDataHijo = {

        PerTide: $("#CboTipoDocumentoHijo").val(),
        PerIdeNro: $("#txtNumDocumentoHijo").val(),
        PerTPer: '',
        PerApePat: $("#txtApePaternoHijo").val(),
        PerApeMat: $("#txtApeMaternoHijo").val(),
        PerNom: $("#txtNombreHijo").val(),
        PerNomCo: $("#txtApePaternoHijo").val() + " " + $("#txtApeMaternoHijo").val() + " " + $("#txtNombreHijo").val(),
        PerECiv: '',
        PerNacion: '',
        PerTlfNro: '',
        PerEmail: '',
        PerObser: '',
        PerConyTIde: '',
        PerConyIde: '',
        OcuCod: '',
        PerDirDes: '',
        PerTIdeP: PerTIdeP,
        PerIdeNroP: PerIdeNroP,
        PerTIdeM: PerTIdeM,
        PerIdeNroM: PerIdeNroM,
        PerFchNac: $("#txtFechaNacimiento").val(),
        PerRazSoc: '',
        PerRazSocEmail: '',
        PerDirDes: ''
    }
    arregloHijos.push(locationDataHijo);
    console.log(arregloHijos);

    $.each(arregloHijos, function (idx, item) {

        let locationDataVIPHijo2 = {
            PerTIde: item.PerTide,
            PerIdeNro: item.PerIdeNro
        }
        arregloVIPHijos.push(locationDataVIPHijo2);
    });


}

function AgregarHijosDBA() {
    var TipoClient = 'PM';
    $.each(arregloHijos, function (idx, item) {
        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php",
            "op=insrt_ClienteALL&TipoClient=" + TipoClient + "&PerTide=" + item.PerTide +
            "&PerIdeNro=" + item.PerIdeNro +
            "&PerTPer=" + item.PerTPer +
            "&PerApePat=" + item.PerApePat +
            "&PerApeMat=" + item.PerApeMat +
            "&PerNom=" + item.PerNom +
            "&PerNomCo=" + item.PerNomCo +
            "&PerECiv=" + item.PerECiv +
            "&PerNacion=" + item.PerNacion +
            "&PerTlfNro=" + item.PerTlfNro +
            "&PerEmail=" + item.PerEmail +
            "&PerObser=" + item.PerObser +
            "&PerConyTIde=" + item.PerConyTIde +
            "&PerConyIde=" + item.PerConyIde +
            "&OcuCod=" + item.OcuCod +
            "&PerTIdeP=" + item.PerTIdeP +
            "&PerIdeNroP=" + item.PerIdeNroP +
            "&PerTIdeM=" + item.PerTIdeM +
            "&PerIdeNroM=" + item.PerIdeNroM +
            "&PerFchNac=" + item.PerFchNac +
            "&PerRazSoc=" + item.PerRazSoc +
            "&PerRazSocEmail=" + item.PerRazSocEmail +
            "&PerDirDes=" + item.PerDirDes,
            function (result) {
                if (result == 1) {

                } else {
                    console.log(result)
                    grabarLog(result, 'AgregarHijosDBA', 'INTERIOR')
                }

            });
    });
}

var arregloVIPHijos = [];

function grabarHijosVIP(Numero, TipoDocumento) {
    let locationDataVIPHijo = {
        PerTIde: TipoDocumento,
        PerIdeNro: Numero
    }
    arregloVIPHijos.push(locationDataVIPHijo);
}

function EnviarDatos(Numnero, Tipo) {
    var idx = "#" + Numnero;
    var idxlbl = "#" + Numnero + "lbl";
    if ($(idx).prop("checked") == true) {

        console.log("Enviara " + Numnero + " " + Tipo);

        $(idxlbl).text("Seleccionado");

        grabarHijosVIP(Numnero, Tipo);

    } else if ($(idx).prop("checked") == false) {

        console.log("Enviar Nulo");

        $(idxlbl).text("Deseleccionado");

        var indice = arregloVIPHijos.findIndex(tipodoc => tipodoc.PerIdeNro == Numnero);
        console.log(indice);
        arregloVIPHijos.splice(indice, 1)

    }
}

function AgregarSolicitudHijosDBA() {
    var PerTideP = $("#CboTipoDocumento").val();
    var PerIdenroP = $("#txtNumDocumento").val();
    var NumPartida = "";
    var PermiDestino = $("#cboDestinoViaje").val();
    var PermiCodPro = $("#txtCodigoPromocional").val();
    var AutoObserv = $("#txtObservacion").val();
    var AutoDeclaracion = $("#txtDeclaracionDatos").val();
    var PermiTip = 'I';
    var AutoFchVia = '';
    var AutoTraVia = '';

    $.each(arregloVIPHijos, function (idx, item) {
        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVIPHijo&PerTideP=" + PerTideP + "&PerIdenroP=" + PerIdenroP + "&PerIdenro=" + item.PerIdeNro + "&PerTide=" + item.PerTIde + "&NumPartida=" + NumPartida + "&AutoTraVia=" + AutoTraVia + "&AutoFchVia=" + AutoFchVia + "&PermiDestino=" + PermiDestino + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro + "&AutoObserv=" + AutoObserv + "&AutoDeclaracion=" + AutoDeclaracion, function (result) {
                console.log(result); 
                Preload();
        });
    });
}


function calcularEdad() {
    var fecha = $("#txtFechaNacimiento").val();
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

function fnAddHijos() {
    var tbbPVIDireccion = $("#DivHijosTB").html();
    if ($("#DivHijosTB").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Hijo registrados:</b></label></div>' +
        '</div>') {
        $("#DivHijosTB").html("");
    }
    var TipoDoc = $('#CboTipoDocumentoHijo option:selected').html();
    var txtNumDocumentoHijo = $("#txtNumDocumentoHijo").val();
    var txtNomCompleto = $("#txtNombreHijo").val() + " " + $("#txtApePaternoHijo").val() + " " + $("#txtApeMaternoHijo").val();
    var txtNombre = $("#txtNombreHijo").val();
    var txtApellidoPaterno = $("#txtApePaternoHijo").val();
    var txtApellidoMaterno = $("#txtApeMaternoHijo").val();
    var txtFechaNac = $("#txtFechaNacimiento").val();
    var txtEdad = calcularEdad();

    $("#DivHijosTB").append('<div class="card" id="' + txtNumDocumentoHijo + '" >' +
        '<div class="card-content p-3">' +
        '<div class="row ">' +
        '<div class="col s12">' +
        '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Datos del Menor</span></div>' +
        '</div>' +
        '</div><br />' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Tipo de Documento:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + TipoDoc + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>N° de Documento:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + txtNumDocumentoHijo + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Nombre:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + txtNombre + '</label></div>' +
        ' </div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Paterno:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + txtApellidoPaterno + '</label></div>' +
        '</div>' +
        ' <div class="row col s12">' +
        ' <div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Materno:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + txtApellidoMaterno + '</label></div>' +
        ' </div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Nacimiento:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + txtFechaNac + '</label></div>' +
        '</div>' +
        '<div class="row col s12">' +
        '<div class="col s5"><label style="font-size:11px;color:black"><b>Edad:</b></label></div>' +
        '<div class="col s7"><label style="font-size:10px">' + txtEdad + ' Años</label></div>' +
        '</div>' +
        '<br />' +
        ' <div class="row">' +
        '<div class="col s12">' +
        '<div class="col s6">' +
        '<a class="btn  disabled" style="font-size:10px">' +
        ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
        '</a>' +
        ' </div>' +
        '<div class="col s6">' +
        '<a class="btn red" style="font-size:10px" id="btEliminarHP" onclick="funcEliminarFilaHijos(' + txtNumDocumentoHijo + ')">' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div >' +
        '</div >');
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




function fnBuscarPerPadres() {

    var validator1 = $("#DivAVIPDatosPadres").validate();
    validator1.resetForm();

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
                $("#cboEstadoCivil").val(item.PereCiv);
                $("#txtEmail").val(item.PerEmail);
                $("#cboNacionalidad").val(item.PerNacion);
                var txtTelefono = item.PerTlfNro;
                $("#txtTelefono").val(txtTelefono.trim());
            });
        }
    });
    fnBuscarDomicilio(PerTide, PerIdeNro);
    if ($("#cboRepresentante").val() == 'P') {
        fnBuscarHijos2(PerIdeNro, PerTide);
    } else if ($("#cboRepresentante").val() == 'M') {
        fnBuscarHijosMadre(PerTide, PerIdeNro)
    } else if ($("#cboRepresentante").val() == 'A') {
        $("#DivHijosTB").html("");
    }
}

function fnBuscarHijosMadre(PerTide, PerIdeNro) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_HijosxMadre&PerIdeNroM=" + PerIdeNro + "&PerTideM=" + PerTide, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        $("#DivHijosTB").html("");
        if (arreglo.length == 0) {
            $("#DivHijosTB").append("");
            $("#DivHijosTB").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Hijo registrados:</b></label></div>' +
                '</div>');

            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {
                $("#DivHijosTB").append('<div class="card" >' +
                    '<div class="card-content p-3">' +
                    '<div class="row ">' +
                    '<div class="col s12">' +
                    '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Datos del Menor</span></div>' +
                    '<label><input type="checkbox" id=' + item.PerIdeNro + ' name=' + item.PerIdeNro + ' onclick=EnviarDatos(\'' + item.PerIdeNro + '\',\'' + item.PerTIde + '\') /><span id="' + item.PerIdeNro + "lbl" + '">Deseleccionado</span></label>' +
                    '</div>' +
                    '</div><br />' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Tipo de Documento:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerTIde + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>N° de Documento:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerIdeNro + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Nombre:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerNom + '</label></div>' +
                    ' </div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Paterno:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerApePat + '</label></div>' +
                    '</div>' +
                    ' <div class="row col s12">' +
                    ' <div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Materno:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerApeMat + '</label></div>' +
                    ' </div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Nacimiento:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerFchNac + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Edad:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.Edad + ' Años</label></div>' +
                    '</div>' +
                    '<br />' +
                    ' <div class="row">' +
                    '<div class="col s12">' +
                    '<div class="col s6">' +
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalActualizarHijos" Onclick="fnDatosHijo(\'' + item.PerIdeNro + '\',\'' + item.PerTIde + '\');">' +
                    ' <i class="fas fa-edit" style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6">' +
                    '<a class="btn red" style="font-size:10px" Onclick="ConfirmDeleteHijo(\'' + item.PerIdeNro + '\',\'' + item.PerTIde + '\');">' +
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

function fnBuscarHijos2(NumDocumen, Tipodocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_HijosxPadre&PerIdeNroP=" + NumDocumen + "&PerTIdeP=" + Tipodocumen, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        $("#DivHijosTB").html("");
        if (arreglo.length == 0) {
            $("#DivHijosTB").append("");
            $("#DivHijosTB").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Hijo registrados:</b></label></div>' +
                '</div>');

            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {
                $("#DivHijosTB").append('<div class="card" >' +
                    '<div class="card-content p-3">' +
                    '<div class="row ">' +
                    '<div class="col s12">' +
                    '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:15px;">Datos del Menor</span></div>' +
                    '<label><input type="checkbox" id=' + item.PerIdeNro + ' name=' + item.PerIdeNro + ' onclick=EnviarDatos(\'' + item.PerIdeNro + '\',\'' + item.PerTIde + '\') /><span id="' + item.PerIdeNro + "lbl" + '">Deseleccionado</span></label>' +
                    '</div>' +
                    '</div><br />' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Tipo de Documento:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerTIde + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>N° de Documento:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerIdeNro + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Nombre:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerNom + '</label></div>' +
                    ' </div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Paterno:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerApePat + '</label></div>' +
                    '</div>' +
                    ' <div class="row col s12">' +
                    ' <div class="col s5"><label style="font-size:11px;color:black"><b>Apellido Materno:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerApeMat + '</label></div>' +
                    ' </div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Nacimiento:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.PerFchNac + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Edad:</b></label></div>' +
                    '<div class="col s7"><label style="font-size:10px">' + item.Edad + ' Años</label></div>' +
                    '</div>' +
                    '<br />' +
                    ' <div class="row">' +
                    '<div class="col s12">' +
                    '<div class="col s6">' +
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalActualizarHijos" Onclick="fnDatosHijo(\'' + item.PerIdeNro + '\',\'' + item.PerTIde + '\');">' +
                    ' <i class="fas fa-edit" style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6">' +
                    '<a class="btn red" style="font-size:10px" Onclick="ConfirmDeleteHijo(\'' + item.PerIdeNro + '\',\'' + item.PerTIde + '\');">' +
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

//$(".card").click(function () {
//    $(".card").css("background-color", "yellow");
//});

function fnBuscarPerRepre() {
    var validator2 = $("#DivAVIDatosRepesentantes").validate();
    validator2.resetForm();

    MostrarPreload();
    var PerTide = $("#CboDocRepresentante").val();
    var PerIdeNro = $("#txtNumDocumentoRepre").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        if (arreglo.length == 0) {


            $("#txtNombreRepre").val("");
            $("#txtApePaternoRepre").val("");
            $("#txtApeMaternoRepre").val("");
            $("#EmailRepre").val("");
            var txtTelefono = "";
            $("#TelefonoRepre").val("");
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Autoriza viaje de Menores(Interior)',
            })
        } else {
            Preload();
            $.each(arreglo, function (idx, item) {
                $("#txtNombreRepre").val(item.PerNom);
                $("#txtApePaternoRepre").val(item.PerApePat);
                $("#txtApeMaternoRepre").val(item.PerApeMat);
                $("#EmailRepre").val(item.PerEmail);
                $("#cboNacionalidadRepre").val(item.PerNacion);
                $("#TelefonoRepre").val(item.PerTlfNro);
                $("#txtDireccionRepre").val(item.PerDirDes);
                console.log(item.PerDirDes);
            });


        }
    });

}


function fnBuscarDomicilio(Tipodocumen, NumDocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#DivDomicilioTB").html("");
        if (arreglo.length == 0) {
            $("#DivDomicilioTB").append("");
            $("#DivDomicilioTB").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Domicilio registrados:</b></label></div>' +
                '</div>');

            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {

                $("#DivDomicilioTB").append("");
                $("#DivDomicilioTB").append('<div class="card" >' +
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
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalEdicionDomicilio" onclick="fnDatosDomicilio(\'' + item.PerDirCod + '\',\'' + item.PerPais + '\',\'' + item.PerDept + '\',\'' + item.PerProv + '\',\'' + item.PerDist + '\');">' +
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

function fnBuscarHijos(NumDocumen, Tipodocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_HijosxPadre&PerIdeNroP=" + NumDocumen + "&PerTIdeP=" + Tipodocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#tbHijosMVI").html("");
        if (arreglo.length == 0) {
            filahtml = "";
            filahtml += "<tr><td colspan='3'>No existen registros</td></tr>";

            $("#tbHijosMVI").append(filahtml);
            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {
                filahtml = "";
                filahtml += "<tr>";
                filahtml += "<td data-label='Tipo Doc'><b>" + item.PerTIde + "</b></td>";
                filahtml += "<td data-label='N° Doc'><b> " + item.PerIdeNro + "</b></td>";
                filahtml += "<td data-label='Nom. Completo'>" + item.PerApePat + " " + item.PerApeMat + " " + item.PerNom + " </td>";
                filahtml += "<td data-label='Acciones'> <a id='btnEliminarHijo' name='btnEliminarHijo' class='btn red' Onclick='ConfirmDeleteHijo(\"" + item.PerIdeNro + "\",\"" + item.PerTIde + "\");'> <i class='fas fa-trash-alt'> </i></a> &nbsp; <a id='btnEditarHijos' name='btnEditarHijos' class='btn' data-toggle='modalb' data-target='#ModalActualizarHijos' Onclick='fnDatosHijo(\"" + item.PerIdeNro + "\",\"" + item.PerTIde + "\");'><i class='fas fa-edit'></i> </a> </td>";
                filahtml += "</tr>";
                $("#tbHijosMVI").append(filahtml);
                $('.tabs').tabs();
            });
        }
    });
}



$("#cboDestinoViaje").change(function () {
    var $PORDER = $("#cboDestinoViaje").val();
    console.log($PORDER);
});



function ValidarCHK() {
 
 
        MostrarPreload();
        if ($("#chbRepresentante").prop("checked") == true) {
            InsertClientVIP(function () {
                AgregarHijosDBA()
                AgregarDomicilioDBA()
            });
            InsertRepresentante();
            RegistrarSolicitudVIPR(function () {
                AgregarSolicitudHijosDBA()
            });
        } else if ($("#chbRepresentante").prop("checked") == false) {
            InsertClientVIP(function () {
                AgregarHijosDBA()
                AgregarDomicilioDBA()
            });
            RegistrarSolicitudVIPPadre(function () {
                AgregarSolicitudHijosDBA()
            });
        }

    

    

}


$("#btnGrabarIntPais").click(function () {
    var dec =  $("#txtDeclaracionDatos").val();
   if (dec == "S"){
    ValidarCHK();
   }

   else{
    Swal.fire(
        'Información',
        'Debe aceptar las declaraciones para continuar.',
        'error'
    )
   

   }
    
});

function FechaSYS() {
    var f = new Date();
    var date = (f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate());
    var Fecha = $("#txtFechaSYSTEM").val(date);
}



function LimpiarALL() {

    $('#liAVIDatosRepesentantes').removeClass("active pgactual");
    $('#liAVIDatosHijos').removeClass("active pgactual");
    $('#liAVPIDeclaracionDatos').removeClass("active pgactual");

    $('input[type="text"]').val('');
    $('input[type="number"]').val('');
   
    $('#txtObservacion').val('');
    $('#txtPoder').val('');
    $('#txtPoder').val('SEGÚN PODER INSCRITO EN LA PARTIDA Nº ............ DEL REGISTRO DE MANDATOS Y PODERES DE LIMA.');

    $('.tabs').tabs();
    $('select').formSelect();
    fnfaschNextTimeline("DivAVIPDatosPadres", ArregloDivsLineTime);
    $("#divRepresentanteOn").show();
    $("#DIvAVPIDeclaracionDatos").hide();
    $("#DivAVIDatosRepesentantes").hide();
    $("#chbRepresentante").prop("checked", false)
    $("#divRepresentanteOn").hide();
    $("#btnGrabarIntPais").hide();
    $("#DivAVIPDatosPadres").hide();


    $("#LineaDeTiempo").hide();
    $("#DivInfoViajeIP").show();

    $('#cboDestinoViaje').val("00");
    fnComboEstaCivil();
    fnNacionalidad();
    ComboDocsIdentidad();
    FechaSYS();

    $("#ahrefSiguiente").hide();
    $("#ahrefSiguiente2").show();
    

    ComboDocsIdentidadHijos();
    fnRestFormDocimilio();
    fnRestFormDocimilioEdicion();
    /*Eliminar todos los Items de UN Arreglo */

    var validator1 = $("#DivAVIPDatosPadres").validate();
    validator1.resetForm();
    var validator2 = $("#DivAVIDatosRepesentantes").validate();
    validator2.resetForm();

    $("#DivDomicilioTB").html("");
    $("#DivHijosTB").html("");
}



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

var ResultInsertClientVIP;
var ResultInsertRepresentante;
var ResultRegistrarSolicitudVIPR;
var ResultRegistrarSolicitudVIPPadre;

function InsertClientVIP(callback) {
    var TipoClient = 'PM';
    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumDocumento").val();
    var PerTPer = 'N';
    var PerApePat = $("#txtApePaterno").val();
    var PerApeMat = $("#txtApeMaterno").val();
    var PerNom = $("#txtNombreP").val();
    var PerNomCo = $("#txtApePaterno").val() + ' ' + $("#txtApeMaterno").val() + ' ' + $("#txtNombreP").val();
    var PerECiv = $("#cboEstadoCivil").val();
    var PerNacion = $("#cboNacionalidad").val();
    var PerTlfNro = $("#txtTelefono").val();
    var PerEmail = $("#txtEmail").val();
    var PerObser = '';
    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = '';
    var PerDirDes = '';
    var PerTIdeP = '';
    var PerIdeNroP = '';
    var PerTIdeM = '';
    var PerIdeNroM = '';
    var PerFchNac = '';
    var PerRazSoc = '';
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

            ResultInsertClientVIP = result;
            console.log(ResultInsertClientVIP);

            if (result == 1) {
                callback();
            } else {
                callback();
                grabarLog(result, 'InsertClientVIP', 'INTERIOR')
            }
        });

};

function InsertRepresentante() {
    var TipoClient = 'RT';
    var PerTide = $("#CboDocRepresentante").val();
    var PerIdeNro = $("#txtNumDocumentoRepre").val();
    var PerTPer = '';
    var PerApePat = $("#txtApePaternoRepre").val();
    var PerApeMat = $("#txtApeMaternoRepre").val();
    var PerNom = $("#txtNombreRepre").val();
    var PerNomCo = $("#txtApePaternoRepre").val() + " " + $("#txtApeMaternoRepre").val() + " " + $("#txtNombreRepre").val();
    var PerECiv = '';
    var PerNacion = $("#cboNacionalidadRepre").val();
    var PerTlfNro = $("#TelefonoRepre").val();
    var PerEmail = $("#EmailRepre").val();
    var PerObser = $("#txtPoder").val()
    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = '';
    var PerDirDes = $("#txtDireccionRepre").val();
    var PerTIdeP = '';
    var PerIdeNroP = '';
    var PerTIdeM = '';
    var PerIdeNroM = '';
    var PerFchNac = '';
    var PerRazSoc = '';
    var PerRazSocEmail = '';

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php",
        "op=insrt_ClienteALL&TipoClient=" + TipoClient + "&PerTide=" + PerTide +
        "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail,
        function (result) {

            ResultInsertRepresentante = result;
            console.log(ResultInsertRepresentante);

            if (result == 1) {

            } else {
                grabarLog(result, 'InsertRepresentante', 'INTERIOR')
            }
        });
};


function RegistrarSolicitudVIPR(callback) {


    var PerIdenro = $("#txtNumDocumento").val();
    var PerParticipacion = "P";
    var PerTide = $("#CboTipoDocumento").val();
    var AutoObserv = $("#txtObservacion").val();
    var UniDeclarante = $("#txtRepresentante").val();
    var PermiEstado = "P";
    var PermiCodPro = $("#txtCodigoPromocional").val();
    var PerTideR = $("#CboDocRepresentante").val();
    var PerIdenroR = $("#txtNumDocumentoRepre").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=inst_SolicitudVIP&PerIdenro=" + PerIdenro + "&PerParticipacion=" + PerParticipacion + "&PerTide=" + PerTide + "&AutoObserv=" + AutoObserv + "&UniDeclarante=" + UniDeclarante + "&PermiEstado=" + PermiEstado + "&PermiCodPro=" + PermiCodPro + "&PerIdenroR=" + PerIdenroR + "&PerTideR=" + PerTideR, function (result) {

        ResultRegistrarSolicitudVIPR = result;
        console.log(ResultRegistrarSolicitudVIPR);

        if(ResultRegistrarSolicitudVIPR==1&&ResultInsertClientVIP==1){
            callback()
            LimpiarALL();
            MENSJ(1);
        }else{
            MENSJ(2);
            grabarLog(result, 'RegistrarSolicitudVIPPadre', 'INTERIOR');
            GuardarErrorLOG();
        }
    });
};

function RegistrarSolicitudVIPPadre(callback) {

    var PerIdenro = $("#txtNumDocumento").val();
    var PerParticipacion = 'P';
    var PerTide = $("#CboTipoDocumento").val();
    var PermiNumero = '0';
    var AutoObserv = $("#txtObservacion").val();
    var PermiEstado = 'P';
    var NumPartida = "";
    var UniDeclarante = $("#txtRepresentante").val();
    var AutoSex = '';
    var PermiTip = 'I';
    var PermiCodPro = $("#txtCodigoPromocional").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVEPPadre&PerIdenro=" + PerIdenro + "&PerParticipacion=" + PerParticipacion + "&PerTide=" + PerTide + "&AutoObserv=" + AutoObserv + "&PermiEstado=" + PermiEstado + "&NumPartida=" + NumPartida + "&UniDeclarante=" + UniDeclarante + "&AutoSex=" + AutoSex + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro, function (result) {
        
        ResultRegistrarSolicitudVIPPadre=result;
        console.log(ResultRegistrarSolicitudVIPPadre);

        if(ResultInsertClientVIP==1&&ResultRegistrarSolicitudVIPPadre==1){
            callback()
            LimpiarALL();
            MENSJ(1);
        }else{
            MENSJ(2);
            grabarLog(result, 'RegistrarSolicitudVIPPadre', 'INTERIOR');
            GuardarErrorLOG();
        }
    });
};

function MENSJ(result) {
    Preload();
    if (result == 1) {
        Swal.fire(
            'Registro Agregado Exitosamente',
            'Autoriza viaje de Menores(Interior)',
            'success'
        )
        Notif();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Autoriza viaje de Menores(Interior)',
            text: '¡Sucedió algo inesperado!'
        })
    }

};

function Notif() {

    var titulo = "Notaria Paino";
    var icono = "fa fa-clipboard-list circle";
    var color = "blue";
    var mensaje = "SOLICITUD ENVIADA VIAJE DE MENORES(INTERIOR)"
    var estado = 1;
    var mostrado = 0;
    var userID = sessionStorage.getItem('dni_user');

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerNotificacion.php", 
    "op=sp_InsertNotif&titulo=" + titulo + "&icono=" + icono + "&color=" + color + "&mensaje=" + mensaje +
     "&estado=" + estado + "&mostrado=" + mostrado+ "&userID=" + userID, function (result) {
        console.log(result);
        if (result == 'true') {
            
        } else {

        }
    });
}



function fnLlenarPaisEdicion() {
    $("#cboIPPaisEdicion").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPPaisEdicion").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboIPPaisEdicion").append(opciones);
            $("#cboIPPaisEdicion").val("00");
        });
    });
}

function fnLlenarDepartamentoEdicion() {
    $("#cboIPDepartamentoEdicion").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDepartamentoEdicion").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamentoEdicion").append(opciones);
            $("#cboIPDepartamentoEdicion").val("00");
        });
    });

}

$("#cboIPDepartamentoEdicion").change(function () {
    fnLlenarDistritoEdicion($(this).val());
});


function fnLlenarDistritoEdicion(Departamento) {
    $("#cboIPProvinciaEdicion").html("");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvinciaEdicion").append(opciones);
        });
    });
    $("#cboIPDIstritoEdicion").html("");
    $("#cboIPDIstritoEdicion").append("<option value='00'>Cargando..</option>");
    $("#cboIPProvinciaEdicion").append("<option value='00'>Cargando..</option>");

}


$("#cboIPProvinciaEdicion").change(function () {
    fnLlenarProvinciaEdicion($("#cboIPDepartamentoEdicion").val(), $(this).val());
});

function fnLlenarProvinciaEdicion(Departamento, provincia) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstritoEdicion").append(opciones);

        });
    });
}

function fnRestFormDocimilioEdicion() {
    fnLlenarPaisEdicion();
    fnLlenarDepartamentoEdicion();
}





function fnDatosDomicilio(Codigo, Pais, Departamento, Provincia, Distrito) {

    MostrarPreload();
    fnLlenarDistritoEdicion(Departamento);
    fnLlenarProvinciaEdicion(Departamento, Provincia);

    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumDocumento").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=sel_DomicilioUpdt&PerDirCod=" + Codigo + "&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        $.each(arreglo, function (idx, item) {

            $("#txtCodigoDomicilio").val(item.PerDirCod);
            $("#cboIPPaisEdicion").val(item.PerPais);
            $("#cboIPDepartamentoEdicion").val(item.PerDept);
            $("#cboIPProvinciaEdicion").val(item.PerProv);
            $("#cboIPDIstritoEdicion").val(item.PerDist);
            $("#txtIPDireccionEdicion").val(item.PerDirecc);

        });
        Preload();
    });
};

function fnDatosHijo(NumeroDocH, TipoDocH2) {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=sp_sel_Hijos&PerIdeNro=" + NumeroDocH + "&PerTIde=" + TipoDocH2, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        $.each(arreglo, function (idx, item) {

            $("#CboTipoDocumentoHijoUpdate").val(item.PerTIde);
            $("#txtNumDocumentoHijoUpdate").val(item.PerIdeNro);
            $("#txtNombreHijoUpdate").val(item.PerNom);
            $("#txtApePaternoHijoUpdate").val(item.PerApePat);
            $("#txtApeMaternoHijoUpdate").val(item.PerApeMat);
            $("#txtFechaNacimientoUpdate").val(item.PerFchNac);

        });
    });
};






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
            var PerTide = $("#CboTipoDocumento").val();
            var PerIdeNro = $("#txtNumDocumento").val();
            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
                console.log(result);
                if (result == 1) {
                    Swal.fire(
                        'Procesado!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                    fnBuscarDomicilio(PerTide, PerIdeNro);
                }
            });

        }
    })
};



$("#btnActualizarDomicilio").click(function () {
    ActualizarDomicilio();
});



function ActualizarDomicilio() {

    var Codigo = $("#txtCodigoDomicilio").val();
    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumDocumento").val();
    var PerPais = $("#cboIPPaisEdicion").val();
    var PerDept = $("#cboIPDepartamentoEdicion").val();
    var PerProv = $("#cboIPProvinciaEdicion").val();
    var PerDist = $("#cboIPDIstritoEdicion").val();
    var PerDirecc = $("#txtIPDireccionEdicion").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Domicilio&PerPais=" + PerPais + "&PerDept=" + PerDept + "&PerProv=" + PerProv + "&PerDist=" + PerDist + "&PerDirecc=" + PerDirecc + "&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + Codigo, function (result) {
        console.log(result);

        if (result == 1) {
            Swal.fire(
                'Registro Actualizado Exitosamente',
                'Autoriza viaje de Menores(Interior)',
                'success')
            fnBuscarDomicilio(PerTide, PerIdeNro);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Autoriza viaje de Menores(Interior)',
                text: '¡Sucedió algo inesperado!'
            })
        }

    })
};



function ActualizarHijosDBA() {
    var PerTide = $("#CboTipoDocumentoHijoUpdate").val();
    var PerIdeNro = $("#txtNumDocumentoHijoUpdate").val();
    var PerNom = $("#txtNombreHijoUpdate").val();
    var PerApePat = $("#txtApePaternoHijoUpdate").val();
    var PerApeMat = $("#txtApeMaternoHijoUpdate").val();
    var PerNomCo = $("#txtApePaternoHijoUpdate").val() + " " + $("#txtApeMaternoHijoUpdate").val() + " " + $("#txtNombreHijoUpdate").val();
    var PerCliente = $("#txtApePaternoHijoUpdate").val() + " " + $("#txtApeMaternoHijoUpdate").val() + " " + $("#txtNombreHijoUpdate").val();
    var PerFchNac = $("#txtFechaNacimientoUpdate").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Hijos&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerFchNac=" + PerFchNac + "&PerCliente=" + PerCliente + "&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        console.log(result);
        if (result == 1) {
            Swal.fire(
                'Registro Actualizado Exitosamente',
                'Autoriza viaje de Menores(Interior)',
                'success')
            fnBuscarDomicilio(PerTide, PerIdeNro);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Autoriza viaje de Menores(Interior)',
                text: '¡Sucedió algo inesperado!'
            })
        }
    })
};

$("#btnActualizarHijos").click(function () {
    ActualizarHijosDBA()
});


function ConfirmDeleteHijo(PerIdeNro, PerTide) {
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

            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Hijos&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
                if (result == 1) {
                    Swal.fire(
                        'Procesado!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                    var PerTideP = $("#CboTipoDocumento").val();
                    var PerIdeNroP = $("#txtNumDocumento").val();
                    fnBuscarHijos2(PerIdeNroP, PerTideP);
                }
            });

        }
    })
};



function GuardarErrorLOG() {
    $.each(LogArreglo, function (idx, item) {
        $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerLog.php", "op=sp_LOG&logerror=" + item.logerror + "&logfunction=" + item.logfunction + "&logmodulo=" + item.logmodulo, function (result) {
            console.log(result)
        });
    });
}