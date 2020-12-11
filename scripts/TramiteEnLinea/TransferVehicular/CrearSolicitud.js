var Arreglotextocbo = [];
var conthtmlcbo = "";
var ArregloDivsLineTime = ["DivCSTranVehicular", "DivCSDatosComprador", "DivCSDatosVehiculo"];


$(document).ready(function () {
    $("#divContenido").removeClass("swal2-shown swal2-height-auto");
    $('.tabs').tabs();
    $('select').formSelect();
    $('.modal').modal();
    $("#divRepresentanteOn").show();

    fnfaschNextTimeline("DivCSTranVehicular", ArregloDivsLineTime);
    fnhrefSegAnt("ahrefatras");
    //Oculta Los Divs 
    $("#representantePadre").hide();
    $("#representanteMadre").hide();
    $("#responsableTraslado").hide();
    $("#responsableEstadia").hide();

    //VENDEDOR
    ComboDocsIdentidadVendedor();
    ComboDocsIdentidadVendedorCon();
    ComboEstadoCivilVendedor();
    LlenarDepartamentoVendedor();
    fnLlenarPaisEdicion();
    fnLlenarPaisEdicionRepre();


    //COMPRADOR
    ComboDocsIdentidadComprador();
    ComboDocsIdentidadCompradorCon();
    ComboEstadoCivilCompra();
    ComboNacionalidadCompra();
    LlenarDepartamentoCompra();
    //ComboNacionalidad();
    ComboDocIdentidadComprador();

    //REPRESENTANTE
    ComboEstadoCivilRepresentante();
    LlenarDepartamentoRepresentante();
    ComboDocIdentidadMadre();

    Preload();
    //LlenarProvinciaVendedor();
    //LlenarDistritoVendedor();

    // $("#married").addClass('d-none');
});

function sololetras(e) {

    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = "qwertyuiopasdfghjklñzxcvbnm ";
    especiales = "8-37-38-46-164";
    teclado_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {

            teclado_especial = true;
            break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }
}

function solonumero(e) {

    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = "0123456789 ";
    teclado_especial = false;

    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }

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



/*Funciones para pasar a la siguiente paguina */
function fnNextCSDatosCompra() {
    if (!$("#DivCSTranVehicular").valid()) {
        // alert("El formulario tiene inconsistencias que deben ser corregidas.");
        return;
    }
    fnfaschNextTimeline("DivCSDatosComprador", ArregloDivsLineTime, "liCSDatosComprador", "liCSTranVehicular");
    fnhrefSegAnt("ahrefSiguiente", "fnNextDatosVehiculo");
    fnhrefSegAnt("ahrefatras", "fnAntCSDatosVendedor");
}

function fnNextDatosVehiculo() {
    fnfaschNextTimeline("DivCSDatosVehiculo", ArregloDivsLineTime, "liAVIDatosDistintasPadres", "liCSDatosComprador");
    fnhrefSegAnt("ahrefSiguiente");
    fnhrefSegAnt("ahrefatras", "fnAntCSDatosComprador");
    $("#btnGrabarIntPais").show();
}


/* Funciones para retroseder a la pagiona anterior */
function fnAntCSDatosVendedor() {
    fnfaschAnteTimeline("DivCSTranVehicular", ArregloDivsLineTime, "liCSTranVehicular", "liCSDatosComprador");
    fnhrefSegAnt("ahrefatras");
    fnhrefSegAnt("ahrefSiguiente", "fnNextCSDatosCompra");
}

function fnAntCSDatosComprador() {
    fnfaschAnteTimeline("DivCSDatosComprador", ArregloDivsLineTime, "liCSDatosComprador", "liAVIDatosDistintasPadres");
    fnhrefSegAnt("ahrefatras", "fnAntCSDatosVendedor");
    fnhrefSegAnt("ahrefSiguiente", "fnNextDatosVehiculo");
    fnhrefSegAnt("btnGrabarIntPais");
}



/*Funcion de Ocultar Formulatirios y Mostrar mediante un Checkbox*/
$("#chbRepresentantePadre").change(function () {
    if ($("#chbRepresentantePadre").prop("checked") == true) {
        console.log("TRUE");
        $("#representantePadre").show();
    }
    if ($("#chbRepresentantePadre").prop("checked") == false) {
        console.log("false");
        $("#representantePadre").hide();
    }
});

$("#chbRepresentanteMadre").change(function () {
    if ($("#chbRepresentanteMadre").prop("checked") == true) {
        console.log("TRUE");
        $("#representanteMadre").show();
    }
    if ($("#chbRepresentanteMadre").prop("checked") == false) {
        console.log("false");
        $("#representanteMadre").hide();
    }
});

$("#chbResponsableTraslado").change(function () {
    if ($("#chbResponsableTraslado").prop("checked") == true) {
        console.log("TRUE");
        $("#responsableTraslado").show();
    }
    if ($("#chbResponsableTraslado").prop("checked") == false) {
        console.log("false");
        $("#responsableTraslado").hide();
    }
});

$("#chbResponsableEstadia").change(function () {
    if ($("#chbResponsableEstadia").prop("checked") == true) {
        console.log("TRUE");
        $("#responsableEstadia").show();
    }
    if ($("#chbResponsableEstadia").prop("checked") == false) {
        console.log("false");
        $("#responsableEstadia").hide();
    }
});
/*Llenado de los CBO*/


$("#cboProvinciaMadre").change(function () {
    console.log($("#cboProvinciaMadre").val() + "--");
    console.log($("#cboDepartamentoMadre").val() + "---" + $("#cboProvinciaMadre").val());

    fnLlenarProvinciaMadre($("#cboDepartamentoMadre").val(), $(this).val());

});


function ValidacionFormPadre() {

    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivCSTranVehicular").validate({
        rules: {
            txtNumeroDocP: {
                required: true
            },
            txtNombresP: {
                required: true
            },
        },
        messages: {
            txtNumeroDocP: {
                required: "Campo requerido"
            },
            txtNombresP: {
                required: "Campo requerido"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}
//--------------------------------------------------------------------------- VENDEDOR--------------------

function ComboDocsIdentidadVendedor() {

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoVendedor").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoVendedor").append(opciones);
        });
    });
}

function ComboDocsIdentidadVendedorCon() {

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoVendedorCon").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoVendedorCon").append(opciones);
        });
    });
}

function ComboDocIdentidadComprador() {
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoComprador").html("");
        $.each(arreglo, function (idx, item) {
            var op = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoComprador").append(op);
        });
    });
}

function ComboDocIdentidadCompradorCon() {
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoCompradorCon").html("");
        $.each(arreglo, function (idx, item) {
            var op = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoCompradorCon").append(op);
        });
    });
}

function ComboDocIdentidadMadre() {
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoRMadre").html("");
        $.each(arreglo, function (idx, item) {
            var op = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoRMadre").append(op);
        });
    });
}



function LlenarCamposVendedor() {

    MostrarPreload();
    var PerTide = $("#CboTipoDocumentoVendedor").val();
    var PerIdeNro = $("#txtNumeroVendedor").val();
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdocAll&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);
        var cantidad = arreglo.length;

        if (cantidad == 0) {
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            });
        } else {
            Preload();

            $("#married").removeClass('hide');
            $.each(arreglo, function (idx, item) {
                $("#txtNombresVendedor").val(item.PerNom);
                $("#ApellidoPaternoVendedor").val(item.PerApePat);
                $("#ApellidoMaternoVendedor").val(item.PerApeMat);
                $("#cboEstadoCivilVendedor").val(item.PerECiv);
                $("#EmailVendedor").val(item.PerEmail);
                $("#TelefonoVendedor").val(item.PerTlfNro);
                $("#cboNacionalidadVendedor").val(item.PerNacion);

                /*Conyugue*/
                $("#CboTipoDocumentoVendedorCon").val(item.PerTIdeCV);
                $("#txtNumeroVendedorCon").val(item.PerIdeNroCV);
                $("#txtNombresVendedorCon").val(item.PerNomCV);
                $("#ApellidoPaternoVendedorCon").val(item.PerApePatCV);
                $("#ApellidoMaternoVendedorCon").val(item.PerApeMatCV);
            });
        }

    });
    fnBuscarDomicilio(PerTide, PerIdeNro);
}

function UpdateVendedor() {

    var PerTIde = $("#CboTipoDocumentoVendedor").val();
    var PerIdeNro = $("#txtNumeroVendedor").val();
    var PerApePat = $("#ApellidoPaternoVendedor").val();
    var PerApeMat = $("#ApellidoMaternoVendedor").val();
    var PerNom = $("#txtNombresVendedor").val();
    var PerECiv = $("#cboEstadoCivilVendedor").val();
    var PerNacion = $("#cboNacionalidadVendedor").val();
    var PerEmail = $("#EmailVendedor").val();
    var PerTlfNro = $("#TelefonoVendedor").val();

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Cliente&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerEmail=" + PerEmail + "&PerTlfNro=" + PerTlfNro + "&PerTIde=" + PerTIde + "&PerIdeNro=" + PerIdeNro, function () {


    });
}



function ActualizarDomicilioVendedor() {

    var PerTide = $("#CboTipoDocumentoVendedor").val();
    var PerIdeNro = $("#txtNumeroVendedor").val();
    var PerPais = $("#cboNacionalidadVendedor").val();
    var PerDept = $("#cboIPDepartamentoVendedor").val();
    var PerProv = $("#cboIPProvinciaVendedor").val();
    var PerDist = $("#cboIPDIstritoVendedor").val();
    var PerDirecc = $("#DireccionV").val();
    var Codigo = '';

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Domicilio&PerPais=" + PerPais + "&PerDept=" + PerDept + "&PerProv=" + PerProv + "&PerDist=" + PerDist + "&PerDirecc=" + PerDirecc + "&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + Codigo, function (result) {
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
}


function fnBuscarDomicilio(Tipodocumen, NumDocumen) {
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#DivDomicilioTB").html("");
        if (arreglo.length == 0) {
            $("#DivDomicilioTB").append("");
            $("#DivDomicilioTB").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro Ningun Domicilio Registrador:</b></label></div>' +
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
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalEdicionDomicilio" onclick="ActualizarDomicilioVendedor(\'' + item.PerDirCod + '\',\'' + item.PerPais + '\',\'' + item.PerDept + '\',\'' + item.PerProv + '\',\'' + item.PerDist + '\');">' +
                    ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6">' +
                    '<a class="btn red" style="font-size:10px" id="btnEliminarDomicilio" onclick="ConfirmDeleteV(' + item.PerDirCod + ');">' +
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

function LlenarCamposVendedorCon() {

    MostrarPreload();
    var PerTide = $("#CboTipoDocumentoVendedorCon").val();
    var PerIdeNro = $("#txtNumeroVendedorCon").val();
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);
        var cantidad = arreglo.length;

        if (cantidad == 0) {
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            });
        } else {
            Preload();
            $.each(arreglo, function (idx, item) {
                $("#txtNombresVendedorCon").val(item.PerNom);
                $("#ApellidoPaternoVendedorCon").val(item.PerApePat);
                $("#ApellidoMaternoVendedorCon").val(item.PerApeMat);
            });
        }

    });
}

function LlenarCamposRepresentante() {
    MostrarPreload();
    var PerTipoNo = $("#CboTipoDocumentoComprador").val();
    var PerDesNo = $("#NumeroDocComprador").val();

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTipoNo + "&PerIdeNro=" + PerDesNo, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);
        var cantidad = arreglo.length;

        if (cantidad == 0) {
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            });
        } else {
            Preload();
            $.each(arreglo, function (idx, item) {
                $("#NombreComprador").val(item.PerNom);
                $("#ApellidoPaternoComprador").val(item.PerApePat);
                $("#ApellidoMaternoComprador").val(item.PerApeMat);
                $("#cboEstadoCivil").val(item.PereCiv);
                $("#EmailComprador").val(item.PerEmail);
                $("#first_name").val(item.PerTlfNro);
                $("#CboNacionalidad").val(item.PerNacion);
            });
        }

    });
}

function fnBuscarDomicilioVR(Tipodocumen, NumDocumen) {
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#DivDomicilioTB").html("");
        if (arreglo.length == 0) {
            $("#DivDomicilioTB").append("");
            $("#DivDomicilioTB").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro Ningun Domicilio Registrador:</b></label></div>' +
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
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalEdicionDomicilio" onclick="ActualizarDomicilioVendedor(\'' + item.PerDirCod + '\',\'' + item.PerPais + '\',\'' + item.PerDept + '\',\'' + item.PerProv + '\',\'' + item.PerDist + '\');">' +
                    ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6">' +
                    '<a class="btn red" style="font-size:10px" id="btnEliminarDomicilio" onclick="ConfirmDeleteVR(' + item.PerDirCod + ');">' +
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

function ActualizarDomicilioVendedorRepre() {

    var PerTide = $("#CboTipoDocumentoComprador").val();
    var PerIdeNro = $("#NumeroDocComprador").val();
    var PerPais = $("#CboNacionalidad").val();
    var PerDept = $("#cboIPDepartamento").val();
    var PerProv = $("#cboIPProvincia").val();
    var PerDist = $("#cboIPDIstrito").val();
    var PerDirecc = $("#Direccion").val();
    var Codigo = '';

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Domicilio&PerPais=" + PerPais + "&PerDept=" + PerDept + "&PerProv=" + PerProv + "&PerDist=" + PerDist + "&PerDirecc=" + PerDirecc + "&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + Codigo, function (result) {
        console.log(result);

        if (result == 1) {
            Swal.fire(
                'Registro Actualizado Exitosamente',
                'Autoriza viaje de Menores(Interior)',
                'success')
            fnBuscarDomicilioVR(PerTide, PerIdeNro);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Autoriza viaje de Menores(Interior)',
                text: '¡Sucedió algo inesperado!'
            })
        }

    })
}

function UpdateVendedorRepresentante() {

    var PerTIde = $("#CboTipoDocumentoComprador").val();
    var PerIdeNro = $("#NumeroDocComprador").val();
    var PerApePat = $("#ApellidoPaternoComprador").val();
    var PerApeMat = $("#ApellidoMaternoComprador").val();
    var PerNom = $("#NombreComprador").val();
    var PerECiv = $("#cboEstadoCivil").val();
    var PerNacion = $("#CboNacionalidad").val();
    var PerEmail = $("#EmailComprador").val();
    var PerTlfNro = $("#first_name").val();

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Cliente&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerEmail=" + PerEmail + "&PerTlfNro=" + PerTlfNro + "&PerTIde=" + PerTIde + "&PerIdeNro=" + PerIdeNro, function () {


    });
}

function LlenarCamposRepresentanteMadre() {
    MostrarPreload();
    var PerTipoNo = $("#CboTipoDocumentoRMadre").val();
    var PerDesNo = $("#NumeroDocRepresentanteMadre").val();

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTipoNo + "&PerIdeNro=" + PerDesNo, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        var cantidad = arreglo.length;

        if (cantidad == 0) {
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            });
        } else {
            Preload();
            $.each(arreglo, function (idx, item) {
                $("#NombreCompraMadre").val(item.PerNom);
                $("#ApePaCompraMadre").val(item.PerApePat);
                $("#ApeMaCompraMadre").val(item.PerApeMat);
                $("#EmailMadre").val(item.PerEmail);
                $("#TeflMadre").val(item.PerTlfNro);
            });
        }
    });
}

function ComboEstadoCivilVendedor() {

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_EstadoCivil", function (result) {

        var arreglo = JSON.parse(result);

        $("#cboEstadoCivilVendedor").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.ECivCod + "'>" + item.ECivDes + "</option>";
            $("#cboEstadoCivilVendedor").append(opciones);
        });

    });
}


///---------------------- PAIS, DEPARTAMENTOS , PROVINCIA, DISTRITO - VENDEDOR---------------------
function fnLlenarPaisEdicion() {
    $("#cboNacionalidadVendedor").html("");
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboNacionalidadVendedor").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboNacionalidadVendedor").append(opciones);
            $("#cboNacionalidadVendedor").val("1309");
        });
    });
}
// function fnLlenarPaisEdicion() {

//     $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {

//         var arreglo = JSON.parse(result);

//         // $("#cboNacionalidadVendedor").html("");
//         $("#cboNacionalidadVendedor").append("<option value='00'>Seleccione</option>");
//         $.each(arreglo, function (idx, item) {
//             var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
//             $("#cboNacionalidadVendedor").append(opciones);
//             $("#cboNacionalidadVendedor").val("1309");
//         });

//     });

// }



function LlenarDepartamentoVendedor() {
    $("#cboIPDepartamentoVendedor").html("");
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);
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

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPProvinciaVendedor").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvinciaVendedor").append(opciones);
            $("#cboIPProvinciaVendedor").val("05");
        });
    });
}

$("#cboIPDIstritoVendedor").html("");
$("#cboIPDIstritoVendedor").append("<option value='00'>Seleccione</option>");
fnLlenarProvincia("15", "05");


$("#cboIPProvinciaVendedor").change(function () {
    fnLlenarProvincia($("#cboIPDepartamentoVendedor").val(), $(this).val());
});



function fnLlenarProvincia(Departamento, provincia) {
    $("#cboIPDIstritoVendedor").html("");
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDIstritoVendedor").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstritoVendedor").append(opciones);
            $("#cboIPDIstritoVendedor").val("01");
        });
    });
}

// ------------------- REPRESENTANTE - VENDEDOR ---------------------------------//
function fnLlenarPaisEdicionRepre() {
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CboNacionalidad").html("");
        $("#CboNacionalidad").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#CboNacionalidad").append(opciones);
            $("#CboNacionalidad").val("1309");
        });

    });
}

function LlenarDepartamentoRepresentante() {
    $("#cboIPDepartamento").html("");
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamento").append(opciones);
            $("#cboIPDepartamento").val("15");

        });
    });
    fnLlenarDistritoRepresentante("15");
}

$("#cboIPDepartamento").change(function () {
    fnLlenarDistritoRepresentante($(this).val());
});

function fnLlenarDistritoRepresentante(Departamento) {
    $("#cboIPProvincia").html("");

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPProvincia").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvincia").append(opciones);
            $("#cboIPProvincia").val("05");
        });
    });
}

$("#cboIPDIstrito").html("");
$("#cboIPDIstrito").append("<option value='00'>Seleccione</option>");
fnLlenarProvinciaRepresentante("15", "05");


$("#cboIPProvincia").change(function () {
    fnLlenarProvinciaRepresentante($("#cboIPDepartamento").val(), $(this).val());
});



function fnLlenarProvinciaRepresentante(Departamento, provincia) {
    $("#cboIPDIstrito").html("");
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDIstrito").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstrito").append(opciones);
            $("#cboIPDIstrito").val("01");
        });
    });
}

//----------------------------------------------------------------COMPRADOR-------------------
//----------------------------------------------------------------COMPRADOR--------------------
//----------------------------------------------------------------COMPRADOR-------------------

function ComboDocsIdentidadComprador() {

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#CboTipoDocCompra").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocCompra").append(opciones);
        });
    });
}

function ComboDocsIdentidadCompradorCon() {

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#CboTipoDocCompraCon").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocCompraCon").append(opciones);
        });
    });
}


function LlenarCamposComprador() {
    MostrarPreload();
    var PerTide = $("#CboTipoDocCompra").val();
    var PerIdeNro = $("#NumCompra").val();
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdocAll&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        var cantidad = arreglo.length;

        if (cantidad == 0) {
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            });
        } else {
            Preload();
            $("#marriedC").removeClass('hide');
            $.each(arreglo, function (idx, item) {
                $("#NomCompra").val(item.PerNom);
                $("#ApePaCompra").val(item.PerApePat);
                $("#ApeMaCompra").val(item.PerApeMat);
                $("#cboEstadoCivilCompra").val(item.PereCiv);
                $("#EmailCompra").val(item.PerEmail);
                $("#TelCompra").val(item.PerTlfNro);
                $("#cboNacionalidadTVCompra").val(item.PerNacion);

                /*Conyugue*/
                $("#CboTipoDocCompraCon").val(item.PerTIdeCV);
                $("#NumCompraCon").val(item.PerNomCV);
                $("#NomCompraCon").val(item.PerNomCV);
                $("#ApePaCompraCon").val(item.PerApePatCV);
                $("#ApeMaCompraCon").val(item.PerApeMatCV);
            });
        }
    });

    fnBuscarDomicilioCompra(PerTide, PerIdeNro);
}

function UpdateComprador() {

    var PerTIde = $("#CboTipoDocCompra").val();
    var PerIdeNro = $("#NumCompra").val();
    var PerApePat = $("#ApePaCompra").val();
    var PerApeMat = $("#ApeMaCompra").val();
    var PerNom = $("#NomCompra").val();
    var PerECiv = $("#cboEstadoCivilCompra").val();
    var PerNacion = $("#cboNacionalidadTVCompra").val();
    var PerEmail = $("#EmailCompra").val();
    var PerTlfNro = $("#TelCompra").val();

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Cliente&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerEmail=" + PerEmail + "&PerTlfNro=" + PerTlfNro + "&PerTIde=" + PerTIde + "&PerIdeNro=" + PerIdeNro, function () {


    });
}


function ActualizarDomicilioComprador() {

    var PerTide = $("#CboTipoDocCompra").val();
    var PerIdeNro = $("#NumCompra").val();
    var PerPais = $("#cboNacionalidadTVCompra").val();
    var PerDept = $("#cboDepartamentoCompra").val();
    var PerProv = $("#cboProvinciaCompra").val();
    var PerDist = $("#cboDistritoCompra").val();
    var PerDirecc = $("#direccion").val();
    var Codigo = '';

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Domicilio&PerPais=" + PerPais + "&PerDept=" + PerDept + "&PerProv=" + PerProv + "&PerDist=" + PerDist + "&PerDirecc=" + PerDirecc + "&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + Codigo, function (result) {
        console.log(result);

        if (result == 1) {
            Swal.fire(
                'Registro Actualizado Exitosamente',
                'Autoriza viaje de Menores(Interior)',
                'success')
            fnBuscarDomicilioCompra(PerTide, PerIdeNro);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Autoriza viaje de Menores(Interior)',
                text: '¡Sucedió algo inesperado!'
            })
        }

    })
}

function fnBuscarDomicilioCompra(Tipodocumen, NumDocumen) {
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#DivDomicilioRV").html("");
        if (arreglo.length == 0) {
            $("#DivDomicilioRV").append("");
            $("#DivDomicilioRV").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro Ningun Domicilio Registrador:</b></label></div>' +
                '</div>');

            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {

                $("#DivDomicilioRV").append("");
                $("#DivDomicilioRV").append('<div class="card" >' +
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
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalEdicionDomicilio" onclick="ActualizarDomicilioComprador(\'' + item.PerDirCod + '\',\'' + item.PerPais + '\',\'' + item.PerDept + '\',\'' + item.PerProv + '\',\'' + item.PerDist + '\');">' +
                    ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6">' +
                    '<a class="btn red" style="font-size:10px" id="btnEliminarDomicilio" onclick="ConfirmDeleteC(' + item.PerDirCod + ');">' +
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

function LlenarCamposCompradorCon() {
    MostrarPreload();
    var PerTide = $("#CboTipoDocCompraCon").val();
    var PerIdeNro = $("#NumCompraCon").val();
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        var cantidad = arreglo.length;

        if (cantidad == 0) {
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Transferencia Vehicular',
            });
        } else {
            Preload();
            $.each(arreglo, function (idx, item) {
                $("#CboTipoDocCompraCon").val(item.PerTIdeCV);
                $("#NumCompraCon").val(item.PerIdeNroCV);
                $("#NomCompraCon").val(item.PerNomCV);
                $("#ApePaCompraCon").val(item.PerApePatCV);
                $("#ApeMaCompraCon").val(item.PerApeMatCV);
            });
        }
    });

}

function ComboEstadoCivilCompra() {

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_EstadoCivil", function (result) {

        var arreglo = JSON.parse(result);

        $("#cboEstadoCivilCompra").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.ECivCod + "'>" + item.ECivDes + "</option>";
            $("#cboEstadoCivilCompra").append(opciones);
        });

    });
}

function ComboEstadoCivilRepresentante() {
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_EstadoCivil", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboEstadoCivil").html("");
        $.each(arreglo, function (idx, item) {
            var op = "<option value='" + item.ECivCod + "'>" + item.ECivDes + "</option>";
            $("#cboEstadoCivil").append(op);
        });
    });
}

function ComboNacionalidadCompra() {
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#cboNacionalidadTVCompra").html("");
        $("#cboNacionalidadTVCompra").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboNacionalidadTVCompra").append(opciones);
            $("#cboNacionalidadTVCompra").val("1309");
        });

    });

}

//function ComboNacionalidad()
//{
//    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
//        var arreglo = JSON.parse(result);

//        $("#cboNacionalidadVendedor").html("");
//        $("#cboNacionalidadVendedor").append("<option value='00'>Seleccione</option>");

//        $.each(arreglo, function (idx, item) {
//            var op = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
//            $("#cboNacionalidadVendedor").append(op);
//        });
//    });
//}
///----------------------DEPARTAMENTOS Y ETC  COMPRADOR---------------------
function fnLlenarPais() {
    $("#cboNacionalidadTVCompra").html("");
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboNacionalidadTVCompra").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboNacionalidadTVCompra").append(opciones);
            $("#cboNacionalidadTVCompra").val("1309");
        });
    });
}

function LlenarDepartamentoCompra() {
    $("#cboDepartamentoCompra").html("");
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboDepartamentoCompra").append(opciones);
            $("#cboDepartamentoCompra").val("15");
        });
    });
    fnLlenarDistritoCompra("15");
}


$("#cboDepartamentoCompra").change(function () {
    fnLlenarDistritoCompra($(this).val());
});

function fnLlenarDistritoCompra(Departamento) {
    $("#cboProvinciaCompra").html("");

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboProvinciaCompra").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboProvinciaCompra").append(opciones);
            $("#cboProvinciaCompra").val("05");
        });
    });
}

$("#cboDistritoCompra").html("");
$("#cboDistritoCompra").append("<option value='00'>Seleccione</option>");
fnLlenarProvinciaCompra("15", "05")


$("#cboProvinciaCompra").change(function () {
    fnLlenarProvinciaCompra($("#cboDepartamentoCompra").val(), $(this).val());
});

function ConfirmDeleteV(PerDirCod) {
    Swal.fire({
        title: '¿Seguro de Eliminar?',
        text: "¡La acción no se podrá revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar ',
        cancelButtonText: 'Cancelar '
    }).then((result) => {
        if (result.value) {
            var PerTide = $("#CboTipoDocumentoVendedor").val();
            var PerIdeNro = $("#txtNumeroVendedor").val();
            $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
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

function ConfirmDeleteVR(PerDirCod) {
    Swal.fire({
        title: '¿Seguro de Eliminar?',
        text: "¡La acción no se podrá revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar ',
        cancelButtonText: 'Cancelar '
    }).then((result) => {
        if (result.value) {
            var PerTide = $("#CboTipoDocumentoComprador").val();
            var PerIdeNro = $("#NumeroDocComprador").val();
            $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
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

function ConfirmDeleteC(PerDirCod) {
    Swal.fire({
        title: '¿Seguro de Eliminar?',
        text: "¡La acción no se podrá revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar ',
        cancelButtonText: 'Cancelar '
    }).then((result) => {
        if (result.value) {
            var PerTide = $("#CboTipoDocCompra").val();
            var PerIdeNro = $("#NumCompra").val();
            $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
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

function ConfirmEliminarElemento(idDomicilio, busqueda) {
    Swal.fire({
        title: '¿Seguro de Eliminar?',
        text: "¡La acción no se podrá revertir!",
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
            var indice = arregloVen.findIndex(tipodoc => tipodoc.PerDirecc == busqueda);

            console.log(indice);

            Eliminar_Elemento(arregloVen, indice, 1)
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

function Eliminar_Elemento(my_array, posicion, cant) {

    my_array.splice(posicion, cant);
    return my_array;
}

function fnLlenarProvinciaCompra(Departamento, provincia) {
    $("#cboDistritoCompra").html("");
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboDistritoCompra").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboDistritoCompra").append(opciones);
            $("#cboDistritoCompra").val("01");
        });
    });
}

/********************************************************************************************/
$("#CboTipoDocumento").change(function () {
    if ($("#CboTipoDocumento").val() == 'J') {


        $("#CboTipoDocumento").val('J');

        $("#CboTipoDocumentoVendedor").val('R');
        document.getElementById('CboTipoDocumentoVendedor').disabled = true;

        $("#RazonSocial").removeClass('hide')
        $("#nombreV").addClass('hide');
        $("#ApPatV").addClass('hide');
        $("#ApeMatV").addClass('hide');
        $("#EmailV").addClass('hide');
        $("#TelfV").addClass('hide');
        $("#EstadoCivilV").addClass('hide');
        $("#OcupacionV").addClass('hide');
    } else {

        document.getElementById('CboTipoDocumentoVendedor').disabled = false;
        $("#CboTipoDocumentoVendedor").val('D');
        $("#RazonSocial").addClass('hide')
        $("#nombreV").removeClass('hide');
        $("#ApPatV").removeClass('hide');
        $("#ApeMatV").removeClass('hide');
        $("#EmailV").removeClass('hide');
        $("#TelfV").removeClass('hide');
        $("#EstadoCivilV").removeClass('hide');
        $("#OcupacionV").removeClass('hide');
    }


});



$("#CboTipoDocumentoCompra").change(function () {
    if ($("#CboTipoDocumentoCompra").val() == 'J') {


        $("#CboTipoDocumentoCompra").val('J');

        $("#CboTipoDocCompra").val('R');
        document.getElementById('CboTipoDocCompra').disabled = true;

        $("#RazSocC").removeClass('hide')
        $("#NomC").addClass('hide');
        $("#ApePatC").addClass('hide');
        $("#ApeMatC").addClass('hide');
        $("#EmailC").addClass('hide');
        $("#TelfC").addClass('hide');
        $("#CivilC").addClass('hide');
        $("#OcupacionC").addClass('hide');
    } else {
        document.getElementById('CboTipoDocCompra').disabled = false;
        $("#CboTipoDocCompra").val('D');
        $("#RazSocC").addClass('hide')
        $("#NomC").removeClass('hide');
        $("#ApePatC").removeClass('hide');
        $("#ApeMatC").removeClass('hide');
        $("#EmailC").removeClass('hide');
        $("#TelfC").removeClass('hide');
        $("#CivilC").removeClass('hide');
        $("#OcupacionC").removeClass('hide');
    }


});

$("#cboEstadoCivilVendedor").change(function () {

    if ($("#cboEstadoCivilVendedor").val() == '08') {
        $("#married").removeClass('hide');
    } else {
        $("#married").addClass('hide');
    }
});

$("#cboEstadoCivilCompra").change(function () {

    if ($("#cboEstadoCivilCompra").val() == '08') {
        $("#marriedC").removeClass('hide');
    } else {
        $("#marriedC").addClass('hide');
    }
});


function fnAddDomicilo() {
    var tbbPVIDireccion = $("#DivDomicilioTB").html();
    if ($("#DivDomicilioTB").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro Ningun Domicilio Registrador:</b></label></div>' +
        '</div>') {
        $("#DivDomicilioTB").html("");
    }

    var nomcboIPPais = $('#cboNacionalidadVendedor option:selected').html();
    var cboIPDepartamento = $('#cboIPDepartamentoVendedor option:selected').html();
    var cboIPProvincia = $('#cboIPProvinciaVendedor option:selected').html();
    var cboIPDIstrito = $('#cboIPDIstritoVendedor option:selected').html();
    var txtIPDireccion = $("#DireccionV").val();
    var idDomicilioDiv = txtIPDireccion.replace(/ /g, "");
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

function fnAddDomiciloC() {
    var tbbPVIDireccion = $("#DivDomicilioRV").html();
    if ($("#DivDomicilioRV").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro Ningun Domicilio Registrador:</b></label></div>' +
        '</div>') {
        $("#DivDomicilioRV").html("");
    }

    var nomcboIPPais = $('#cboNacionalidadTVCompra option:selected').html();
    var cboIPDepartamento = $('#cboDepartamentoCompra option:selected').html();
    var cboIPProvincia = $('#cboProvinciaCompra option:selected').html();
    var cboIPDIstrito = $('#cboDistritoCompra option:selected').html();
    var txtIPDireccion = $("#direccion").val();
    var idDomicilioDiv = txtIPDireccion.replace(/ /g, "");
    console.log(idDomicilioDiv);
    $("#DivDomicilioRV").append("");
    $("#DivDomicilioRV").append('<div class="card" id="' + idDomicilioDiv + '">' +
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


var arregloVen = [];

function FnInsrtDomicilioVendedor() {

    let locationDataVendedor = {
        PerTIde: $("#CboTipoDocumentoVendedor").val(),
        PerIdeNro: $("#txtNumeroVendedor").val(),
        PerPais: $("#cboNacionalidadVendedor").val(),
        PerDept: $("#cboIPDepartamentoVendedor").val(),
        PerProv: $("#cboIPProvinciaVendedor").val(),
        PerDist: $("#cboIPDIstritoVendedor").val(),
        PerDirecc: $("#DireccionV").val()
    }
    arregloVen.push(locationDataVendedor);
    console.log(arregloVen);
}

function AgregarDomicilioDBA() {
    $.each(arregloVen, function (idx, item) {

        $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_Domicilio&PerTIde=" + item.PerTIde + "&PerIdeNro=" + item.PerIdeNro + "&PerPais=" + item.PerPais + "&PerDept=" + item.PerDept + "&PerProv=" + item.PerProv + "&PerDist=" + item.PerDist + "&PerDirecc=" + item.PerDirecc, function (result) {
            console.log(result)
        });
    });

}

var arregloRepre = [];

function FnInsrtDomicilioVendedorRepresentante() {

    let locationDataVendedor = {
        PerTIde: $("#CboTipoDocumentoComprador").val(),
        PerIdeNro: $("#NumeroDocComprador").val(),
        PerPais: $("#CboNacionalidad").val(),
        PerDept: $("#cboIPDepartamento").val(),
        PerProv: $("#cboIPProvincia").val(),
        PerDist: $("#cboIPDIstrito").val(),
        PerDirecc: $("#Direccion").val()
    }
    arregloRepre.push(locationDataVendedor);

}

function AgregarDomicilioRepreDBA() {
    $.each(arregloRepre, function (idx, item) {

        $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_Domicilio&PerTIde=" + item.PerTIde + "&PerIdeNro=" + item.PerIdeNro + "&PerPais=" + item.PerPais + "&PerDept=" + item.PerDept + "&PerProv=" + item.PerProv + "&PerDist=" + item.PerDist + "&PerDirecc=" + item.PerDirecc, function (result) {

        });
    });

}

var arregloComprador = [];

function FnInsrtDomiciolioComprador() {

    let locationDataComprador = {
        tipodoc: $("#CboTipoDocCompra").val(),
        numdoc: $("#NumCompra").val(),
        pais: $("#cboNacionalidadTVCompra").val(),
        depart: $("#cboDepartamentoCompra").val(),
        provi: $("#cboProvinciaCompra").val(),
        dist: $("#cboDistritoCompra").val(),
        direc: $("#direccion").val()
    }

    arregloComprador.push(locationDataComprador);
    console.log(arregloComprador);
}

function AgregarDomicilioCompradorDBA() {
    $.each(arregloComprador, function (idx, item) {
        $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_Domicilio&PerTIde=" + item.tipodoc + "&PerIdeNro=" + item.numdoc + "&PerPais=" + item.pais + "&PerDept=" + item.depart + "&PerProv=" + item.provi + "&PerDist=" + item.dist + "&PerDirecc=" + item.direc, function (result) {
            console.log(result);
        });
    });
}


$("#btnGrabarIPDireccion").click(function () {

    fnAddDomicilo();
    FnInsrtDomicilioVendedor();
});

$("#btnGrabarIPDireccionRV").click(function () {


    FnInsrtDomicilioVendedorRepresentante();
});

$("#btnGrabarIPDireccionC").click(function () {
    fnAddDomiciloC();
    FnInsrtDomiciolioComprador();
});

/******************************VALIDACIONES************************/

$("#txtNumeroVendedor").keypress(function () {
    return solonumero(event);
});
$('#txtNombresVendedor').keypress(function () {
    return sololetras(event);
});
$('#ApellidoPaternoVendedor').keypress(function () {
    return sololetras(event);
});
$('#ApellidoMaternoVendedor').keypress(function () {
    return sololetras(event);
});
$("#TelefonoVendedor").keypress(function () {
    return solonumero(event);
});

// REPRESENTANTE VENDEDOR
$("#NumeroDocComprador").keypress(function () {
    return solonumero(event);
});
$('#NombreComprador').keypress(function () {
    return sololetras(event);
});
$('#ApellidoPaternoComprador').keypress(function () {
    return sololetras(event);
});
$('#ApellidoMaternoComprador').keypress(function () {
    return sololetras(event);
});
$("#first_name").keypress(function () {
    return solonumero(event);
});


// COMPRADOR
$("#NumCompra").keypress(function () {
    return solonumero(event);
});
$('#NomCompra').keypress(function () {
    return sololetras(event);
});
$('#ApePaCompra').keypress(function () {
    return sololetras(event);
});
$('#ApeMaCompra').keypress(function () {
    return sololetras(event);
});
$("#first_name").keypress(function () {
    return solonumero(event);
});


// COMPRADOR REPRESENTANTE
$("#NumeroDocRepresentanteMadre").keypress(function () {
    return solonumero(event);
});
$('#NombreCompraMadre').keypress(function () {
    return sololetras(event);
});
$('#ApePaCompraMadre').keypress(function () {
    return sololetras(event);
});
$('#ApeMaCompraMadre').keypress(function () {
    return sololetras(event);
});
$("#TeflMadre").keypress(function () {
    return solonumero(event);
});
/*******************************************************************/


function FnInsertarVendedor() {

    var PerTide = $('#CboTipoDocumentoVendedor').val();
    var PerIdeNro = $('#txtNumeroVendedor').val();
    var PerTPer = $('#CboTipoDocumento').val();
    var PerApePat = $('#ApellidoPaternoVendedor').val();
    var PerApeMat = $('#ApellidoMaternoVendedor').val();
    var PerNom = $('#txtNombresVendedor').val();
    var PerECiv;
    if($("#CboPersonaVendedor").val()=="J"){
        PerECiv ="06"
    }else{
        PerECiv = $('#cboEstadoCivilVendedor').val();
    }
    var PerNacion = $('#cboNacionalidadVendedor').val();
    var PerTlfNro = $('#TelefonoVendedor').val();
    var PerEmail = $('#EmailVendedor').val();
    var PerNomCo = "";
    var PerObser = "";

    var PerConyTIde = $('#CboTipoDocumentoVendedorCon').val();
    var PerConyIde = $('#txtNumeroVendedorCon').val();
    var OcuCod = "";
    var PerDirDes = "";
    var PerTIdeP = "";
    var PerIdeNroP = "";
    var PerTIdeM = "";
    var PerIdeNroM = "";
    var PerFchNac = "";
    var PerRazSoc = "";
    var PerRazSocEmail = "";

    console.log(PerNom, PerApePat, PerApeMat);

    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {
        console.log(result);

        if (result == 1) {
            AgregarDomicilioDBA();
        } else {
            UpdateVendedor();
            AgregarDomicilioDBA();
        }
    });
}

function FnInsertarConyugueVendedor() {
    var PerTide = $('#CboTipoDocumentoVendedorCon').val();
    var PerIdeNro = $('#txtNumeroVendedorCon').val();
    var PerTPer = "";
    var PerApePat = $('#ApellidoPaternoVendedorCon').val();
    var PerApeMat = $('#ApellidoMaternoVendedorCon').val();
    var PerNom = $('#txtNombresVendedorCon').val();
    var PerECiv = "";
    var PerNacion = "";
    var PerTlfNro = "";
    var PerEmail = "";
    var PerNomCo = "";
    var PerObser = "";

    var PerConyTIde = $('#CboTipoDocumentoVendedor').val();
    var PerConyIde = $('#txtNumeroVendedor').val();
    var OcuCod = "";
    var PerDirDes = "";
    var PerTIdeP = "";
    var PerIdeNroP = "";
    var PerTIdeM = "";
    var PerIdeNroM = "";
    var PerFchNac = "";
    var PerRazSoc = $("#txtRazonSocial").val();
    var PerRazSocEmail = "";

    console.log(PerNom, PerApePat, PerApeMat);
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {

        //if (result == 1)
        //{
        //    AgregarDomicilioDBA();
        //}
        //else
        //{
        //    AgregarDomicilioDBA();
        //}
    });
}

function FnInsertarVendedorRepresentante() {

    var PerTide = $('#CboTipoDocumentoVendedor').val();
    var PerIdeNro = $('#NumeroDocComprador').val();
    var PerTPer = $('#tipoPerRepresentante').val();
    var PerNom = $('#NombreComprador').val();
    var PerApePat = $('#ApellidoPaternoComprador').val();
    var PerApeMat = $('#ApellidoMaternoComprador').val();
    var PerECiv = $('#cboEstadoCivil').val();
    var PerEmail = $('#EmailComprador').val();
    var PerTlfNro = $('#first_name').val();
    var PerNacion = $('#CboNacionalidad').val();
    var PerNomCo = "";
    var PerObser = "";

    var PerConyTIde = "";
    var PerConyIde = "";
    var OcuCod = "";
    var PerDirDes = "";
    var PerTIdeP = "";
    var PerIdeNroP = "";
    var PerTIdeM = "";
    var PerIdeNroM = "";
    var PerFchNac = "";
    var PerRazSoc = $("#RazSocCompra").val();
    var PerRazSocEmail = "";

    console.log(PerNom, PerApePat, PerApeMat);
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {

        if (result == 1) {

            AgregarDomicilioRepreDBA();
        } else {
            UpdateVendedorRepresentante();
            AgregarDomicilioRepreDBA();
        }
    });

}

function FnInsertarComprador() {

    var PerTide = $('#CboTipoDocCompra').val();
    var PerIdeNro = $('#NumCompra').val();
    var PerTPer = $('#CboTipoDocumento').val();
    var PerNom = $('#NomCompra').val();
    var PerApePat = $('#ApePaCompra').val();
    var PerApeMat = $('#ApeMaCompra').val();
    var PerECiv;
    if($("#CboPersonaComprador").val()=="J"){
        PerECiv ="06"
    }else{
        PerECiv = $('#cboEstadoCivilComprador').val();
    }
    var PerEmail = $('#EmailComprador').val();
    var PerTlfNro = $('#TelCompra').val();
    var PerNacion = $('#cboNacionalidadTVCompra').val();
    var PerNomCo = "";
    var PerObser = "";
    var PerConyTIde = "";
    var PerConyIde = "";
    var OcuCod = "";
    var PerDirDes = "";
    var PerTIdeP = "";
    var PerIdeNroP = "";
    var PerTIdeM = "";
    var PerIdeNroM = "";
    var PerFchNac = "";
    var PerRazSoc = $("#RazSocCompra").val();
    var PerRazSocEmail = "";

    console.log(PerNom, PerApePat, PerApeMat, PerIdeNro);
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {


        console.log(result);

        if (result == 1) {

            AgregarDomicilioCompradorDBA();
        } else {
            UpdateComprador();
            AgregarDomicilioCompradorDBA();
        }

    });
}

function FnInsertarConyugueComprador() {
    var PerTide = $('#CboTipoDocCompraCon').val();
    var PerIdeNro = $('#NumCompraCon').val();
    var PerTPer = "";
    var PerApePat = $('#ApePaCompraCon').val();
    var PerApeMat = $('#ApeMaCompraCon').val();
    var PerNom = $('#NomCompraCon').val();
    var PerECiv = "";
    var PerNacion = "";
    var PerTlfNro = "";
    var PerEmail = "";
    var PerNomCo = "";
    var PerObser = "";

    var PerConyTIde = "";
    var PerConyIde = "";
    var OcuCod = "";
    var PerDirDes = "";
    var PerTIdeP = "";
    var PerIdeNroP = "";
    var PerTIdeM = "";
    var PerIdeNroM = "";
    var PerFchNac = "";
    var PerRazSoc = $("#txtRazonSocial").val();
    var PerRazSocEmail = "";

    console.log(PerNom, PerApePat, PerApeMat);
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {

        //if (result == 1)
        //{

        //    AgregarDomicilioCompradorDBA();
        //}
        //else {

        //    AgregarDomicilioCompradorDBA();
        //}
    });
}

function FnInsertarCompradorRepre() {

    var PerTide = $('#CboTipoDocumentoRMadre').val();
    var PerIdeNro = $('#NumeroDocRepresentanteMadre').val();
    var PerTPer = "";
    var PerNom = $('#NombreCompraMadre').val();
    var PerApePat = $('#ApePaCompraMadre').val();
    var PerApeMat = $('#ApeMaCompraMadre').val();
    var PerECiv = "";
    var PerEmail = $('#EmailMadre').val();
    var PerTlfNro = $('#TeflMadre').val();
    var PerNacion = "";
    var PerNomCo = "";
    var PerObser = "";

    var PerConyTIde = $('#CboTipoDocCompra').val();
    var PerConyIde = $('#NumCompraCon').val();
    var OcuCod = "";
    var PerDirDes = "";
    var PerTIdeP = "";
    var PerIdeNroP = "";
    var PerTIdeM = "";
    var PerIdeNroM = "";
    var PerFchNac = "";
    var PerRazSoc = "";
    var PerRazSocEmail = "";

    console.log(PerNom, PerApePat, PerApeMat, PerIdeNro);
    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {
        var arregloCR = JSON.parse(result);

        TipoDocCR = arregloCR.PerTIde;
        NumDocCR = arregloCR.PerIdeNro;
    });
}



var arregloSoli = [];

function obtenersoli() {
    let solicitud = {
        /*VENDEDOR*/
        PerTperV: $('#CboTipoDocumento').val(),
        PerTiDeV: $('#CboTipoDocumentoVendedor').val(),
        PerIdeNroV: $('#txtNumeroVendedor').val(),

        /*VENDEDOR REPRESENTANTE*/
        PerTperVR: $('#tipoPerRepresentante').val(),
        PerTiDeVR: $('#CboTipoDocumentoVendedor').val(),
        PerIdeNroVR: $('#NumeroDocComprador').val(),

        /*COMPRADOR */
        PerTiDeC: $("#CboTipoDocCompra").val(),
        PerIdeNroC: $("#NumCompra").val(),

        /*COMPRADOR REPRESENTANTE*/
        PerTperCR: $("#CboTipoDocumento").val(),
        PerTiDeCR: $("#CboTipoDocumentoRMadre").val(),
        PerIdeNroCR: $("#NumeroDocRepresentanteMadre").val(),

        placa: $("#Placa").val(),
        tipomoneda: $("#vKVEHMONC1").val(),
        monto: $("#Monto").val()
    }

    arregloSoli.push(solicitud);
    console.log(arregloSoli);
}

$("#agregarsoli").click(function () {
    obtenersoli();
});

function FnInsrtSolicitud() {
    $.each(arregloSoli, function (idx, item) {
        console.log(item.PerTperV)
        $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerReporteVH.php", "op=insrt_soli&TipoPern=" + item.PerTperV + "&PerTideV=" + item.PerTiDeV + "&PerNroV=" + item.PerIdeNroV + "&Repre_V=" + item.PerTperVR + "&PerTideRV=" + item.PerTiDeVR + "&PerNroRV=" + item.PerIdeNroVR + "&PerTideC=" + item.PerTiDeC + "&PerNroC=" + item.PerIdeNroC + "&Repre_C=" + item.PerTperCR + "&PerTideRC=" + item.PerTiDeCR + "&PerNroRC=" + item.PerIdeNroCR + "&Placa=" + item.placa + "&Moneda=" + item.tipomoneda + "&Monto=" + item.monto, function (result) {
            console.log(result);

        });
    });
}

function guardar() {
    if ($("#chbRepresentantePadre").prop('checked') == true) {
        if ($("#txtNumeroVendedor").val() == "") {
            Swal.fire({
                title: 'Error Hay Campos Vacios',
                text: 'Asegúrese  de  llenar todo los Campos',
                icon: 'warning'
            });
        } else {
            Swal.fire({
                title: 'Registro agregado exitosamente',
                text: 'Transeferencia De Vehículos',
                icon: 'success'
            });

            //AgregarDomicilioRepreDBA();
            FnInsertarVendedor();
            FnInsertarVendedorRepresentante();
        }
    } else if ($("#chbRepresentantePadre").prop('checked') == false) {
        if ($("#txtNumeroVendedor").val() == "") {
            Swal.fire({
                title: 'Error Hay Campos Vacios',
                text: 'Asegúrese  de  llenar todo los Campos',
                icon: 'warning'
            });
        } else {

            Swal.fire({
                title: 'Registro agregado exitosamente',
                text: 'Transeferencia De Vehículos',
                icon: 'success'
            });

            FnInsertarVendedor();
            FnInsertarConyugueVendedor();
        }
    }

    /**************************************************/

    if ($("#chbRepresentanteMadre").prop('checked') == true) {
        if ($("#NumCompra").val() == "") {
            Swal.fire({
                title: 'Error Hay Campos Vacios',
                text: 'Asegúrese  de  llenar todo los Campos',
                icon: 'warning'
            });
        } else {
            Swal.fire({
                title: 'Registro agregado exitosamente',
                text: 'Transeferencia De Vehículos',
                icon: 'success'
            });

            FnInsertarComprador();
            FnInsertarCompradorRepre();
        }
    } else if ($("#chbRepresentanteMadre").prop('checked') == false) {

        if ($("#NumCompra").val() == "") {

            Swal.fire({
                title: 'Error Hay Campos Vacios',
                text: 'Asegúrese  de  llenar todo los Campos',
                icon: 'warning'
            });
        } else {

            Swal.fire({
                title: 'Registro agregado exitosamente',
                text: 'Transeferencia De Vehículos',
                icon: 'success'
            });

            FnInsertarComprador();
            FnInsertarConyugueComprador();
        }
    }

    FnInsrtSolicitud();
}

$("#btnGrabarIntPais").click(function () {

    guardar();
    Limpiar();

});

function Limpiar() {
    $('#liCSDatosComprador').removeClass("active pgactual");
    $('#liCSTranVehicular').removeClass("active pgactual");
    $('#liAVIDatosDistintasPadres').removeClass("active pgactual");
    $('#liCSDatosComprador').removeClass("active pgactual");

    $('input[type="text"]').val('');

    $("#DivDomicilioRV").html("");
    $("#DivDomicilioTB").html("");


    $('.tabs').tabs();
    $('select').formSelect();

    fnfaschNextTimeline("DivCSTranVehicular", ArregloDivsLineTime);
    $("#divRepresentanteOn").show();
    $("#representantePadre").hide();
    $("#representanteMadre").hide();
    $("#chbRepresentantePadre").prop("checked", false);
    $("#chbRepresentanteMadre").prop("checked", false);
    $("#divRepresentanteOn").hide();
    $("#btnGrabarIntPais").hide();

    //$("#LineaDeTiempo").hide();

    fnComboEstaCivil();
    fnNacionalidad();
    ComboDocsIdentidad();

    $("#ahrefSiguiente").hide();
    $("#ahrefSiguiente2").show();
    $("#ahrefatras").hide();


    /*Eliminar todos los Items de UN Arreglo */

    var cantidadVen = arregloVen.length;
    cantidadVen.splice(0, cantidadVen);

    var cantidadRepreV = arregloRepre.length;
    cantidadRepreV.splice(0, cantidadRepreV);

    var cantidadC = arregloComprador.length;
    cantidadC.splice(0, cantidadC);

    var cantidadSolicitud = arregloSoli.length;
    cantidadSolicitud.splice(0, cantidadSolicitud);


}



function fnRegistrarCabecera() {
    var f = new Date();

   

    var TVFch = f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate();
    var TVEst='S';
    var TVUseCod = ' ';
    var TVParticipantes = $('#ApellidoPaternoVendedor').val()+' '+$('#ApellidoMaternoVendedor').val()+' '+$('#txtNombresVendedor').val()+'/'+$('#ApePaCompra').val()+' '+$('#ApeMaCompra').val()+' '+$('#NomCompra').val();
    var TVEstPro = 'N';



    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerReporteVH.php",
        "op=sp_InsertarCabecera_TVH&TVFch=" + TVFch + "&TVEst=" + TVEst +"&TVUseCod="
         + TVUseCod  + "&TVParticipantes=" + TVParticipantes + "&TVEstPro=" + TVEstPro,
        function (result) {
            console.log(result);
            fnRegistrarParticipanteVendedor();
            fnRegistrarPlacas();
        });
};




function fnRegistrarParticipanteVendedor() {
   
    var TVPerIdeNro = $('#txtNumeroVendedor').val();
    var TVPerTIde = $('#CboTipoDocumentoVendedor').val();
    var TVPerNom = $('#txtNombresVendedor').val();
    var TVPerApeP = $('#ApellidoPaternoVendedor').val();
    var TVPerApeM = $('#ApellidoMaternoVendedor').val();
    var TVPerRazSoc = $('#txtRazonSocial').val();
    var TVPerNomCom =  $('#ApellidoPaternoVendedor').val()+' '+$('#ApellidoPaternoVendedor').val()+' '+$('#txtNombresVendedor').val();;
    var TVPerTipCon = '';
    var TVPerPais = $('#cboNacionalidadVendedor').val();
    var TVPerDpto = $('#cboIPDepartamentoVendedor').val();
    var TVPerProv = $('#cboIPProvinciaVendedor').val();
    var TVPerDist = $('#cboIPDIstritoVendedor').val();
    var TVPerDire = $('#DireccionV').val();
    var TVPerOcu = $('#cboTVOcupacionVendedor').val();
    var TVPerTlf = $('#TelefonoVendedor').val();
    var TVPerEstCiv = $('#cboEstadoCivilVendedor').val();
    var TVPerEmail = $('#EmailVendedor').val();
    var TVPerNomCoC = $('#ApellidoPaternoVendedorCon').val()+' '+$('#ApellidoMaternoVendedorCon').val()+' '+$('#txtNombresVendedorCon').val();
    var TVPerNomC = $('#txtNombresVendedorCon').val();
    var TVPerApeMC = $('#ApellidoPaternoVendedorCon').val();
    var TVPerApePC = $('#ApellidoMaternoVendedorCon').val();
    var TVPerIdeNroC = $('#txtNumeroVendedorCon').val();
    var TVPerTideC = $('#CboTipoDocumentoVendedorCon').val();
    var TVPerTPerC = '';
    var TVPerFicReg = '';
    var TVPerRep = 'V';



    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerReporteVH.php",
        "op=sp_InsertarParticipante_TVH&TVPerIdeNro=" + TVPerIdeNro + "&TVPerTIde=" + TVPerTIde +
        "&TVPerNom=" + TVPerNom + "&TVPerApeP=" + TVPerApeP + "&TVPerApeM=" + TVPerApeM + "&TVPerRazSoc=" + TVPerRazSoc +
        "&TVPerNomCom=" + TVPerNomCom + "&TVPerTipCon=" + TVPerTipCon + "&TVPerPais=" + TVPerPais + "&TVPerDpto=" + TVPerDpto +
        "&TVPerProv=" + TVPerProv + "&TVPerDist=" + TVPerDist + "&TVPerDire=" + TVPerDire + "&TVPerOcu=" + TVPerOcu +
        "&TVPerTlf=" + TVPerTlf + "&TVPerEstCiv=" + TVPerEstCiv + "&TVPerEmail=" + TVPerEmail + "&TVPerNomCoC=" + TVPerNomCoC +
        "&TVPerNomC=" + TVPerNomC + "&TVPerApeMC=" + TVPerApeMC + "&TVPerApePC=" + TVPerApePC + "&TVPerIdeNroC=" + TVPerIdeNroC +
        "&TVPerTideC=" + TVPerTideC + "&TVPerTPerC=" + TVPerTPerC + "&TVPerFicReg=" + TVPerFicReg + "&TVPerRep=" + TVPerRep,
        function (result) {
            console.log(result);
        });
};


function fnRegistrarParticipanteComprador() {
   
    var TVPerIdeNro = $('#NumCompra').val();
    var TVPerTIde = $('#CboTipoDocCompra').val();
    var TVPerNom = $('#NomCompra').val();
    var TVPerApeP = $('#ApePaCompra').val();
    var TVPerApeM = $('#ApeMaCompra').val();
    var TVPerRazSoc = '';
    var TVPerNomCom =  $('#ApePaCompra').val()+' '+$('#ApeMaCompra').val()+' '+$('#NomCompra').val();;
    var TVPerTipCon = '';
    var TVPerPais = '';
    var TVPerDpto = '';
    var TVPerProv = '';
    var TVPerDist = '';
    var TVPerDire = '';
    var TVPerOcu ='';
    var TVPerTlf = '';
    var TVPerEstCiv = '';
    var TVPerEmail = '';
    var TVPerNomCoC = '';
    var TVPerNomC = '';
    var TVPerApeMC = '';
    var TVPerApePC = '';
    var TVPerIdeNroC = '';
    var TVPerTideC = '';
    var TVPerTPerC = '';
    var TVPerFicReg = '';
    var TVPerRep = 'V';



    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerReporteVH.php",
        "op=sp_InsertarParticipante_TVH&TVPerIdeNro=" + TVPerIdeNro + "&TVPerTIde=" + TVPerTIde +
        "&TVPerNom=" + TVPerNom + "&TVPerApeP=" + TVPerApeP + "&TVPerApeM=" + TVPerApeM + "&TVPerRazSoc=" + TVPerRazSoc +
        "&TVPerNomCom=" + TVPerNomCom + "&TVPerTipCon=" + TVPerTipCon + "&TVPerPais=" + TVPerPais + "&TVPerDpto=" + TVPerDpto +
        "&TVPerProv=" + TVPerProv + "&TVPerDist=" + TVPerDist + "&TVPerDire=" + TVPerDire + "&TVPerOcu=" + TVPerOcu +
        "&TVPerTlf=" + TVPerTlf + "&TVPerEstCiv=" + TVPerEstCiv + "&TVPerEmail=" + TVPerEmail + "&TVPerNomCoC=" + TVPerNomCoC +
        "&TVPerNomC=" + TVPerNomC + "&TVPerApeMC=" + TVPerApeMC + "&TVPerApePC=" + TVPerApePC + "&TVPerIdeNroC=" + TVPerIdeNroC +
        "&TVPerTideC=" + TVPerTideC + "&TVPerTPerC=" + TVPerTPerC + "&TVPerFicReg=" + TVPerFicReg + "&TVPerRep=" + TVPerRep,
        function (result) {
            console.log(result);
        });
};

function fnRegistrarPlacas() {
  
    var TVVehPlaca = $('#Placa').val();
    var TVVehMonto = $('#Monto').val();
    var TVVehMoneda = $('#vKVEHMONC1').val();


    $.post("http://www.dotnetsa.org//PAINOSERVICE/app/controller/ControllerReporteVH.php",
        "op=sp_InsertarPlaca_TVH&TVVehPlaca=" + TVVehPlaca + "&TVVehMonto=" + TVVehMonto +
        "&TVVehMoneda=" + TVVehMoneda ,function (result) {
            console.log(result);
        });
};
