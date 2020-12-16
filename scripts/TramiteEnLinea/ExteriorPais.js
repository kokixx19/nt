var Arreglotextocbo = [];
var conthtmlcbo = "";
var ArregloDivsLineTime = ["DivAVEPDatosPadre", "DivAVEPDatosMadre", "DivAVEDistintasPadres", "DivAVEDatosViaje", "DivAVEDatosHijo", "DivAVEDatosFinales"];



$(document).ready(function () {
    $("#divContenido").removeClass("swal2-shown swal2-height-auto");

    $('.tabs').tabs();
    $('select').formSelect();
    $('.modal').modal();
    $("#divRepresentanteOn").show();
    fnfaschNextTimeline("DivAVEPDatosPadre", ArregloDivsLineTime);
    fnhrefSegAnt("ahrefatras");
    //Oculta Los Divs 
    $("#representantePadre").hide();
    $("#representanteMadre").hide();
    $("#responsableTraslado").hide();
    $("#responsableEstadia").hide();
    $("#ahrefSiguiente2").hide();

    $("#LineaDeTiempo").hide();
    $("#DivAVEPDatosPadre").hide();
    $("#BtnSAS").hide();

    //CBO//////////////////
    ComboDocsIdentidadPadre();
    ComboEstadoCivilPadre();
    ComboDocsIdentidadRPadre();
    /////////////////////////
    ComboDocsIdentidadMadre();
    ComboDocsIdentidadRMadre();
    ComboEstadoCivilMadre();
    ComboDocsIdentidadRTraslado();
    ComboDocsIdentidadREstadia();
    ///////////////////////////
    fnNacionalidadPadre();
    fnLlenarPaisPadre();
    fnLlenarDepartamentoPadre();
    fnNacionalidadRPadre();
    /////////////////////////////
    fnNacionalidadMadre();
    fnLlenarPaisMadre();
    fnLlenarDepartamentoMadre();
    //////////////////////////////
    ComboDocsIdentidadHijo();
    //---------------------
    $("#btnGrabarIntPais").hide();
    ////////
    fnRestFormDocimilioEdicion();
    //ValidacionFormPadre(); 
    $('#ahrefatras2').hide();
    $('#cboDestinoViaje').val("00");
    $('#MTransporte').val("00");
    cargarValidacionmadre();
    cargarValidacionrmadre();
    cargarValidacionrpadre();
    cargarValidacionpadre();
    cargarValidacionrtraslado();
    cargarValidacionrEstadia()
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

function cargarValidacionpadre() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivAVEPDatosPadre").validate({
        rules: {
            txtNumeroDocP: {
                required: true,
                number: true
            },
            txtNombresP: {
                required: true
            },
            txtApellidoPaternoP: {
                required: true
            },
            txtApellidoMaternoP: {
                required: true
            },
            txtTelefonoP: {
                required: true,
                number: true
            },
        },
        messages: {
            txtNumeroDocP: {
                required: "Campo requerido"
            },
            txtNombresP: {
                required: "Campo requerido"
            },
            txtApellidoPaternoP: {
                required: "Campo requerido"
            },
            txtApellidoMaternoP: {
                required: "Campo requerido"
            },
            txtTelefonoP: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

function cargarValidacionrpadre() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#representantePadre").validate({
        rules: {
            txtNumeroDocRP: {
                required: true,
                number: true
            },
            txtNombreRP: {
                required: true
            },
            txtApellidoPaternoRP: {
                required: true
            },
            txtApellidoMaternoRP: {
                required: true
            },
            txtTelefonoRP: {
                required: true,
                number: true
            },
        },
        messages: {
            txtNumeroDocRP: {
                required: "Campo requerido"
            },
            txtNombreRP: {
                required: "Campo requerido"
            },
            txtApellidoPaternoRP: {
                required: "Campo requerido"
            },
            txtApellidoMaternoRP: {
                required: "Campo requerido"
            },
            txtTelefonoRP: {
                number: "Solo numeros se Acepta Numeros"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

function cargarValidacionmadre() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivAVEPDatosMadre").validate({
        rules: {
            txtNumeroDocM: {
                required: true,
                number: true
            },
            txtNombresM: {
                required: true
            },
            txtApellidoPaternoM: {
                required: true
            },
            txtApellidoMaternoM: {
                required: true
            },
            txtTelefonoM: {
                required: true,
                number: true
            },
        },
        messages: {
            txtNumeroDocM: {
                required: "Campo requerido"
            },
            txtNombresM: {
                required: "Campo requerido"
            },
            txtApellidoPaternoM: {
                required: "Campo requerido"
            },
            txtApellidoMaternoM: {
                required: "Campo requerido"
            },
            txtTelefonoM: {
                number: "Solo numeros se Acepta Numeros"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

function cargarValidacionrmadre() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#representantePadre").validate({
        rules: {
            txtNumeroDocRM: {
                required: true,
                number: true
            },
            txtNombreRM: {
                required: true
            },
            txtApellidoPaternoRM: {
                required: true
            },
            txtApellidoMaternoRM: {
                required: true
            },
            txtTelefonoRM: {
                required: true,
                number: true
            },
        },
        messages: {
            txtNumeroDocRM: {
                required: "Campo requerido"
            },
            txtNombreRM: {
                required: "Campo requerido"
            },
            txtApellidoPaternoRM: {
                required: "Campo requerido"
            },
            txtApellidoMaternoRM: {
                required: "Campo requerido"
            },
            txtTelefonoRM: {
                number: "Solo numeros se Acepta Numeros"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

function cargarValidacionrtraslado() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#responsableTraslado").validate({
        rules: {
            txtNumeroDocRTraslado: {
                required: true,
                number: true
            },
            txtNombreRTraslado: {
                required: true
            },
            txtApellidoPaternoRTraslado: {
                required: true
            },
            txtApellidoMaternoRTraslado: {
                required: true
            },
        },
        messages: {
            txtNumeroDocRTraslado: {
                required: "Campo requerido"
            },
            txtNombreRTraslado: {
                required: "Campo requerido"
            },
            txtApellidoPaternoRTraslado: {
                required: "Campo requerido"
            },
            txtApellidoMaternoRTraslado: {
                required: "Campo requerido"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}


function cargarValidacionrEstadia() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#responsableEstadia").validate({
        rules: {
            txtNumDocREstadia: {
                required: true,
                number: true
            },
            txtNombresREstadia: {
                required: true
            },
            txtApellidoPaternoREstadia: {
                required: true
            },
            txtApellidoMaternoREstadia: {
                required: true
            },
        },
        messages: {
            txtNumDocREstadia: {
                required: "Campo requerido"
            },
            txtNombresREstadia: {
                required: "Campo requerido"
            },
            txtApellidoPaternoREstadia: {
                required: "Campo requerido"
            },
            txtApellidoMaternoREstadia: {
                required: "Campo requerido"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}



/*Funciones para pasar a la siguiente paguina */
function fnNextAVEMadre() {
    if (!$("#DivAVEPDatosPadre").valid()) {
        Swal.fire({
            title: 'Datos Incompletos',
            text: '',
            icon: 'warning'
        });
        return;
    } else {
        fnfaschNextTimeline("DivAVEPDatosMadre", ArregloDivsLineTime, "liAVEDatosMadre", "liAVEPDatosPadre");
        fnhrefSegAnt("ahrefSiguiente", "fnNextAVEDistintasPadres");
        fnhrefSegAnt("ahrefatras", "fnAntAVPIPadreDatos");
        $("#ahrefatras2").hide();
        $("#ahrefSiguiente2").hide();
    }
}

function fnNextAVEDistintasPadres() {
    if (!$("#DivAVEPDatosMadre").valid()) {
        Swal.fire({
            title: 'Datos Incompletos',
            text: '',
            icon: 'warning'
        });
        return;
    } else {

        fnfaschNextTimeline("DivAVEDistintasPadres", ArregloDivsLineTime, "liAVIDatosDistintasPadres", "liAVEDatosMadre");
        fnhrefSegAnt("ahrefSiguiente", "fnNextVEDatosViaje");
        fnhrefSegAnt("ahrefatras", "fnAntAVEMadre");

        if ($("#chbUnicoDeclarantePadre").prop("checked") == true) {
            $("#ahrefatras").hide();
            $("#ahrefatras2").show();
            $("#ahrefSiguiente2").hide();
        }
    }
}

$("#ahrefatras2").click(function () {
    $("#ahrefatras2").hide();
    $("#ahrefSiguiente2").show();
    $("#ahrefSiguiente").hide();
    $("#liAVIDatosDistintasPadres").removeClass("pgactual");
});


function fnNextVEDatosViaje() {
    if (!$("#responsableTraslado").valid() || !$("#responsableEstadia").valid()) {
        Swal.fire({
            title: 'Datos Incompletos',
            text: '',
            icon: 'warning'
        });
        return;
    } else {
        fnfaschNextTimeline("DivAVEDatosViaje", ArregloDivsLineTime, "liAVPDatosViaje", "liAVIDatosDistintasPadres");
        fnhrefSegAnt("ahrefSiguiente", "fnNextVEDatosHijo");
        fnhrefSegAnt("ahrefatras", "fnAntAVEDistintasPadres");
        $("#ahrefatras2").hide();
    }
}

function fnNextVEDatosHijo() {
    fnfaschNextTimeline("DivAVEDatosHijo", ArregloDivsLineTime, "liAVPDatosHijos", "liAVPDatosViaje");
    fnhrefSegAnt("ahrefSiguiente", "fnNextVEDatosFinales");
    fnhrefSegAnt("ahrefatras", "fnAntVEDatosViaje");

}

function fnNextVEDatosFinales() {
    fnfaschNextTimeline("DivAVEDatosFinales", ArregloDivsLineTime, "liAVPDatosFinales", "liAVPDatosHijos");
    fnhrefSegAnt("ahrefSiguiente");
    fnhrefSegAnt("ahrefatras", "fnAntVEDatosHijo");
    $("#btnGrabarIntPais").show();
}

$("#ahrefSiguiente2").click(function () {
    $('#liAVEPDatosPadre').addClass("active pgactual");
});



/* Funciones para retroseder a la pagiona anterior */
function fnAntAVPIPadreDatos() {
    fnfaschAnteTimeline("DivAVEPDatosPadre", ArregloDivsLineTime, "liAVEPDatosPadre", "liAVEDatosMadre");
    fnhrefSegAnt("ahrefatras");
    fnhrefSegAnt("ahrefSiguiente", "fnNextAVEMadre");

    if ($("#chbUnicoDeclarantePadre").prop("checked") == true) {
        $("#ahrefSiguiente").hide();
        $("#ahrefatras2").hide();
        $("#ahrefSiguiente2").show();
    }

}

function fnAntAVEMadre() {
    fnfaschAnteTimeline("DivAVEPDatosMadre", ArregloDivsLineTime, "liAVEDatosMadre", "liAVIDatosDistintasPadres");
    fnhrefSegAnt("ahrefatras", "fnAntAVPIPadreDatos");
    fnhrefSegAnt("ahrefSiguiente", "fnNextAVEDistintasPadres");
}

function fnAntAVEDistintasPadres() {
    fnfaschAnteTimeline("DivAVEDistintasPadres", ArregloDivsLineTime, "liAVIDatosDistintasPadres", "liAVPDatosViaje");
    fnhrefSegAnt("ahrefSiguiente", "fnNextVEDatosViaje");
    fnhrefSegAnt("ahrefatras", "fnAntAVEMadre");
    if ($("#chbUnicoDeclarantePadre").prop("checked") == true) {
        $("#ahrefatras").hide();
        $("#ahrefatras2").show();
        $("#ahrefSiguiente2").hide();
    }
}

function fnAntVEDatosViaje() {
    fnfaschAnteTimeline("DivAVEDatosViaje", ArregloDivsLineTime, "liAVPDatosViaje", "liAVPDatosHijos");
    fnhrefSegAnt("ahrefSiguiente", "fnNextVEDatosHijo");
    fnhrefSegAnt("ahrefatras", "fnAntAVEDistintasPadres");
}

function fnAntVEDatosHijo() {
    fnfaschAnteTimeline("DivAVEDatosHijo", ArregloDivsLineTime, "liAVPDatosHijos", "liAVPDatosFinales");
    fnhrefSegAnt("ahrefSiguiente", "fnNextVEDatosFinales");
    fnhrefSegAnt("ahrefatras", "fnAntVEDatosViaje");
    $("#btnGrabarIntPais").hide();
}

/*Funcion de Ocultar Formulatirios y Mostrar mediante un Checkbox*/
//$("#chbRepresentantePadre").change(function () {
//    if ($("#chbRepresentantePadre").prop("checked") == true) {
//        console.log("TRUE");
//        $("#representantePadre").show();
//    }
//    if ($("#chbRepresentantePadre").prop("checked") == false) {
//        console.log("false");
//        $("#representantePadre").hide();
//    }
//});

$("#chbRepresentantePadre").change(function () {
    if ($("#chbRepresentantePadre").prop("checked") == true) {
        $("#representantePadre").show();
    }
    if ($("#chbRepresentantePadre").prop("checked") == false) {
        console.log("false");
        $("#representantePadre").hide();
    }
});


$("#chbRepresentanteMadre").change(function () {
    if ($("#chbRepresentanteMadre").prop("checked") == true) {
        $("#representanteMadre").show();
    }
    if ($("#chbRepresentanteMadre").prop("checked") == false) {
        console.log("false");
        $("#representanteMadre").hide();
    }
})



$("#chbResponsableTraslado").change(function () {
    if ($("#chbResponsableTraslado").prop("checked") == true) {
        $("#responsableTraslado").show();
    }
    if ($("#chbResponsableTraslado").prop("checked") == false) {
        $("#responsableTraslado").hide();
    }
});


$("#chbResponsableEstadia").change(function () {
    if ($("#chbResponsableEstadia").prop("checked") == true) {
        $("#responsableEstadia").show();
    }
    if ($("#chbResponsableEstadia").prop("checked") == false) {
        $("#responsableEstadia").hide();
    }
});

/*SALTO EN LA LINEA DE TIEMPO*/
$("#chbUnicoDeclarantePadre").change(function () {
    if ($("#chbUnicoDeclarantePadre").prop("checked") == true) {

        $('#ahrefSiguiente').hide();
        $('#ahrefSiguiente2').show();

    } else if ($("#chbUnicoDeclarantePadre").prop("checked") == false) {

        $('#ahrefSiguiente').show();
        $('#ahrefSiguiente2').hide();
    }

});

/*Llenado de los CBO*/
//-------------------------------cbo FRM Padre----------------------------------------------------------------------//
function ComboDocsIdentidadPadre() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CboTipoDocumento").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumento").append(opciones);
        });

    });
}

function ComboDocsIdentidadRPadre() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoRPadre").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoRPadre").append(opciones);
        });

    });
}

function ComboEstadoCivilPadre() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_EstadoCivil", function (result) {

        var arreglo = JSON.parse(result);

        $("#cboEstadoCivilP").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.ECivCod + "'>" + item.ECivDes + "</option>";
            $("#cboEstadoCivilP").append(opciones);
        });

    });
}
/* Nacionalidad Representante Padre*/

function fnNacionalidadRPadre() {
    $("#cboNacionalidadRP").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboNacionalidadRP").append(opciones);
            $("#cboNacionalidadRP").val("1309");
        });
    });
}
/*----------------------------------------------------------------  */
function fnNacionalidadPadre() {
    $("#cboNacionalidadP").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboNacionalidadP").append(opciones);
            $("#cboNacionalidadP").val("1309");
        });
    });
}
/*----------------------------Modal COMBOS----------------*/

function fnLlenarPaisPadre() {
    $("#cboIPPais").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboIPPais").append(opciones);
            $("#cboIPPais").val("1309");
        });
    });
}

function fnLlenarDepartamentoPadre() {
    $("#cboIPDepartamento").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamento").append(opciones);
            $("#cboIPDepartamento").val("15");
        });
    });
    fnLlenarDistritoPadre("15");
}

$("#cboIPDepartamento").change(function () {
    fnLlenarDistritoPadre($(this).val());
});

function fnLlenarDistritoPadre(Departamento) {
    $("#cboIPProvincia").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);

        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvincia").append(opciones);
            $("#cboIPProvincia").val("05");
        });
        Preload();
    });

    $("#cboIPDIstrito").html("");
    $("#cboIPDIstrito").append("<option value='00'>Seleccione</option>");
    fnLlenarProvinciaPadre("15", "05");
}

function fnLlenarProvinciaPadre(Departamento, provincia) {
    $("#cboIPDIstrito").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        //console.log(result);
        var arreglo = JSON.parse(result);

        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstrito").append(opciones);
            $("#cboIPDIstrito").val("01");
        });
    });
}

$("#cboIPProvincia").change(function () {
    //  console.log($("#cboIPProvincia").val() + "--");
    //console.log($("#cboIPDepartamento").val() + "---" + $("#cboIPProvincia").val());

    fnLlenarProvinciaPadre($("#cboIPDepartamento").val(), $(this).val());

});

/*---------------------------------------------------------------*/
/*---------------ADD DOMICILIO Padre --------------------*/

$("#btnGrabarEPDireccion").click(function () {
    fnAddDomicilo();
});

function fnAddDomicilo() {
    var tbbPVIDireccion = $("#tboPVEDireccionPadre").html();
    if ($("#tboPVEDireccionPadre").html() == "No existen registros") {
        $("#tboPVEDireccionPadre").html("");
    }
    var nomcboIPPais = $('#cboIPPais option:selected').val();
    var cboIPDepartamento = $('#cboIPDepartamento option:selected').val();
    var cboIPProvincia = $('#cboIPProvincia option:selected').val();
    var cboIPDIstrito = $('#cboIPDIstrito option:selected').val();
    var txtIPDireccion = $("#txtDireccionPadre").val();

    filahtml = "";
    filahtml += "<tr>";
    filahtml += "<td> " + nomcboIPPais + "</td>";
    filahtml += "<td> " + cboIPDepartamento + "</td>";
    filahtml += "<td> " + cboIPProvincia + "</td>";
    filahtml += "<td> " + cboIPDIstrito + "</td>";
    filahtml += "<td> " + txtIPDireccion + "</td>";
    filahtml += "</tr>";

    $("#tboPVEDireccionPadre").append(filahtml);
    $('.tabs').tabs();
}
/*---------------------------------------------------------------*/

/*----------------ADD DOMICILIO Madre --------------------------*/
$("#btnGrabarEPDireccionMadre").click(function () {
    fnAddDomiciloMadre();
});

function fnAddDomiciloMadre() {
    var tbbPVIDireccion = $("#tboPVEDireccionMadre").html();
    if ($("#tboPVEDireccionMadre").html() == "No existen registros") {
        $("#tboPVEDireccionMadre").html("");
    }
    var nomcboIPPaisMadre = $('#cboPaisMadre option:selected').val();
    var cboIPDepartamentoMadre = $('#cboDepartamentoMadre option:selected').val();
    var cboIPProvinciaMadre = $('#cboProvinciaMadre option:selected').val();
    var cboIPDIstritoMadre = $('#cboDistritoMadre option:selected').val();
    var txtIPDireccionMadre = $("#txtDireccionMadre").val();

    filahtml = "";
    filahtml += "<tr>";
    filahtml += "<td> " + nomcboIPPaisMadre + "</td>";
    filahtml += "<td> " + cboIPDepartamentoMadre + "</td>";
    filahtml += "<td> " + cboIPProvinciaMadre + "</td>";
    filahtml += "<td> " + cboIPDIstritoMadre + "</td>";
    filahtml += "<td> " + txtIPDireccionMadre + "</td>";
    filahtml += "</tr>";

    $("#tboPVEDireccionMadre").append(filahtml);
    $('.tabs').tabs();
}

/*------------------------------------------------------------------*/

//----------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------ Cbo Madre-----------------------------------------------------------------//
function ComboDocsIdentidadMadre() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#CboTipoDocumentoMadre").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoMadre").append(opciones);
        });

    });
}

function fnNacionalidadRMadre() {
    $("#CboNacionalidadRM").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#CboNacionalidadRM").append(opciones);
        });
    });
}

function ComboDocsIdentidadRMadre() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoRMadre").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoRMadre").append(opciones);
        });

    });
}

function ComboEstadoCivilMadre() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_EstadoCivil", function (result) {

        var arreglo = JSON.parse(result);

        $("#cboEstadoCivilMadre").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.ECivCod + "'>" + item.ECivDes + "</option>";
            $("#cboEstadoCivilMadre").append(opciones);
        });

    });
}

function fnNacionalidadMadre() {
    $("#cboNacionalidadMadre").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboNacionalidadMadre").append(opciones);
            $("#cboNacionalidadMadre").val("1309");
        });
    });
}

function fnLlenarPaisMadre() {
    $("#cboPaisMadre").html("");
    $("#cboPaisMadreEdicion").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiNac + "</option>";
            $("#cboPaisMadre").append(opciones);
            $("#cboPaisMadreEdicion").append(opciones);
            $("#cboPaisMadre").val("1309");
        });
    });
}

function fnLlenarDepartamentoMadre() {
    $("#cboDepartamentoMadre").html("");
    $("#cboDepartamentoMadreEdicion").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboDepartamentoMadre").append(opciones);
            $("#cboDepartamentoMadreEdicion").append(opciones);
            $("#cboDepartamentoMadre").val("15");
        });
    });
    fnLlenarDistritoMadre("15");
}


$("#cboDepartamentoMadre").change(function () {
    fnLlenarDistritoMadre($(this).val());
});

function fnLlenarDistritoMadre(Departamento) {
    $("#cboProvinciaMadre").html("");
    $("#cboProvinciaMadreEdicion").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);

        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboProvinciaMadre").append(opciones);
            $("#cboProvinciaMadreEdicion").append(opciones);
            $("#cboProvinciaMadre").val("05");
        });
    });
    $("#cboDistritoMadre").html("");
    $("#cboDistritoMadreEdicion").html("");
    $("#cboDistritoMadre").append("<option value='00'>Seleccione</option>");
    fnLlenarProvinciaMadre("15", "05");
}

function fnLlenarProvinciaMadre(Departamento, provincia) {
    $("#cboDistritoMadre").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        console.log(result);
        var arreglo = JSON.parse(result);

        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboDistritoMadre").append(opciones);
            $("#cboDistritoMadreEdicion").append(opciones);
            $("#cboDistritoMadre").val("01");
        });
    });
}

$("#cboProvinciaMadre").change(function () {
    console.log($("#cboProvinciaMadre").val() + "--");
    console.log($("#cboDepartamentoMadre").val() + "---" + $("#cboProvinciaMadre").val());

    fnLlenarProvinciaMadre($("#cboDepartamentoMadre").val(), $(this).val());

});

/*$("#BuscarPadre").click(function () {
    console.log("asdasd");
});*/


function fnBuscarPerPadre() {

    var validator1 = $("#DivAVEPDatosPadre").validate();
    validator1.resetForm();
    MostrarPreload();

    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumeroDocP").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        if (arreglo.length == 0) {
            $("#txtNombresP").val("");
            $("#txtApellidoPaternoP").val("");
            $("#txtApellidoMaternoP").val("");
            $("#cboEstadoCivilP").val("06");
            $("#txtEmailP").val("");
            $("#cboNacionalidadP").val("1309");
            $("#txtTelefonoP").val("");
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Autoriza viaje de Menores(Interior)',
            })
        } else {
            $.each(arreglo, function (idx, item) {
                $("#txtNombresP").val(item.PerNom);
                $("#txtApellidoPaternoP").val(item.PerApePat);
                $("#txtApellidoMaternoP").val(item.PerApeMat);
                $("#cboEstadoCivilP").val(item.PereCiv);
                $("#txtEmailP").val(item.PerEmail);
                $("#cboNacionalidadP").val(item.PerNacion);
                $("#txtTelefonoP").val(item.PerTlfNro);
            });
            Preload();
        }

    });

    fnBuscarDomicilio(PerTide, PerIdeNro);
    if ($("#chbUnicoDeclarantePadre").prop("checked") == true) {
        fnBuscarHijos(PerIdeNro, PerTide);
    }

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
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Distrito:</b></label></div>' +
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
    var PerIdeNro = $("#txtNumeroDocP").val();

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

function fnDatosDomicilioMadre(Codigo, Pais, Departamento, Provincia, Distrito) {
    MostrarPreload();
    fnLlenarDistritoEdicion(Departamento);
    fnLlenarProvinciaEdicion(Departamento, Provincia);

    var PerTide = $("#CboTipoDocumentoMadre").val();
    var PerIdeNro = $("#txtNumeroDocM").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=sel_DomicilioUpdt&PerDirCod=" + Codigo + "&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {

        var arreglo = JSON.parse(result);
        console.log(arreglo);

        $.each(arreglo, function (idx, item) {
            $("#txtCodigoDomicilioMadre").val(item.PerDirCod);
            $("#cboPaisMadreEdicion").val(item.PerPais);
            $("#cboDepartamentoMadreEdicion").val(item.PerDept);
            $("#cboProvinciaMadreEdicion").val(item.PerProv);
            $("#cboDistritoMadreEdicion").val(item.PerDist);
            $("#txtDireccionMadreEdicion").val(item.PerDirecc);

        });
        Preload();
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
            var PerIdeNro = $("#txtNumeroDocP").val();
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

function ConfirmDeleteMadre(PerDirCod) {
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
            var PerTide = $("#CboTipoDocumentoMadre").val();
            var PerIdeNro = $("#txtNumeroDocM").val();
            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
                console.log(result);
                if (result == 1) {
                    Swal.fire(
                        'Procesado!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                    fnBuscarDomicilioMadre(PerTide, PerIdeNro);
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
    var PerIdeNro = $("#txtNumeroDocP").val();
    var PerPais = $("#cboIPPaisEdicion").val();
    var PerDept = $("#cboIPDepartamentoEdicion").val();
    var PerProv = $("#cboIPProvinciaEdicion").val();
    var PerDist = $("#cboIPDIstritoEdicion").val();
    var PerDirecc = $("#txtIPDireccionEdicion").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Domicilio&PerPais=" + PerPais + "&PerDept=" + PerDept + "&PerProv=" + PerProv + "&PerDist=" + PerDist + "&PerDirecc=" + PerDirecc + "&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + Codigo, function (result) {
        console.log(result);

        if (result == 1) {
            Swal.fire(
                'Registro Agregado Exitosamente',
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

$("#btnGrabarIPDireccion").click(function () {
    fnAddDomicilo();
    grabarDomicilio();
});
var arreglo = [];

function grabarDomicilio() {

    let locationData = {
        PerTIde: $("#CboTipoDocumento").val(),
        PerIdeNro: $("#txtNumeroDocP").val(),
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

$("#btnGrabarDireccionMadre").click(function () {
    fnAddDomiciloMadre();
    grabarDomicilioMadre();
});

var arregloMadre = [];

function grabarDomicilioMadre() {

    let locationData = {
        PerTIde: $("#CboTipoDocumentoMadre").val(),
        PerIdeNro: $("#txtNumeroDocM").val(),
        PerPais: $("#cboPaisMadre").val(),
        PerDept: $("#cboDepartamentoMadre").val(),
        PerProv: $("#cboProvinciaMadre").val(),
        PerDist: $("#cboDistritoMadre").val(),
        PerDirecc: $("#txtDireccionMadre").val()
    }
    arregloMadre.push(locationData);
    console.log(arregloMadre);
}

function AgregarDomicilioDBAMadre() {
    $.each(arregloMadre, function (idx, item) {
        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_Domicilio&PerTIde=" + item.PerTIde + "&PerIdeNro=" + item.PerIdeNro + "&PerPais=" + item.PerPais + "&PerDept=" + item.PerDept + "&PerProv=" + item.PerProv + "&PerDist=" + item.PerDist + "&PerDirecc=" + item.PerDirecc, function (result) {

        });
    });
}


function fnAddDomiciloMadre() {
    var tbbPVIDireccion = $("#DivDomicilioTBMadre").html();
    if ($("#DivDomicilioTBMadre").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Domicilio registrados:</b></label></div>' +
        '</div>') {
        $("#DivDomicilioTBMadre").html("");
    }

    var nomcboIPPais = $('#cboPaisMadre option:selected').html();
    var cboIPDepartamento = $('#cboDepartamentoMadre option:selected').html();
    var cboIPProvincia = $('#cboProvinciaMadre option:selected').html();
    var cboIPDIstrito = $('#cboDistritoMadre option:selected').html();
    var txtIPDireccion = $("#txtDireccionMadre").val();
    var idDomicilioDiv = txtIPDireccion.replace(/ /g, "");
    console.log(idDomicilioDiv);
    $("#DivDomicilioTBMadre").append("");
    $("#DivDomicilioTBMadre").append('<div class="card" id="' + idDomicilioDiv + '">' +
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
        '<a class="btn red" style="font-size:10px" id="bt_del" onClick="ConfirmEliminarElementoMadre(\'' + idDomicilioDiv + '\',\'' + txtIPDireccion + '\')">' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div >' +
        '</div >');
}
// BUSCAR INFORMACION DE HIJOS 

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

function Eliminar_Elemento(my_array, posicion, cant) {

    my_array.splice(posicion, cant);
    return my_array;
}

function ConfirmEliminarElementoMadre(idDomicilio, busqueda) {
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
            var indice = arregloMadre.findIndex(tipodoc => tipodoc.PerDirecc == busqueda);

            console.log(indice);

            Eliminar_ElementoMadre(arregloMadre, indice, 1)
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

function Eliminar_ElementoMadre(my_array, posicion, cant) {

    my_array.splice(posicion, cant);
    return my_array;
}



function fnBuscarHijos(NumDocumen, Tipodocumen) {
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
                    var PerIdeNroP = $("#txtNumeroDocP").val();
                    fnBuscarHijos(PerIdeNroP, PerTideP);
                }
            });

        }
    })
};


var arregloHijos = [];

$("#btnGrabarHijos").click(function () {
    grabarHijosArray();
    fnAddHijos();
});

function grabarHijosArray() {

    var PerTIdeM = $("#CboTipoDocumentoMadre").val();
    var PerIdeNroM = $("#txtNumeroDocM").val();

    var PerTIdeP = $("#CboTipoDocumento").val();
    var PerIdeNroP = $("#txtNumeroDocP").val();



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
                console.log(result)
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

function funcEliminarFilaHijos(busqueda1) {
    Confirm_Eliminar_ElementoH(busqueda1)
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

function Eliminar_ElementoH(my_array, posicion, cant) {
    my_array.splice(posicion, cant);
    return my_array;
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

        $(idxlbl).text("");

        var indice = arregloVIPHijos.findIndex(tipodoc => tipodoc.PerIdeNro == Numnero);
        console.log(indice);
        arregloVIPHijos.splice(indice, 1)

    }
}

function AgregarSolicitudHijosDBA(callback) {

    var PerTideP;
    var PerIdenroP;

    if ($("#chbUnicoDeclarantePadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    } else if ($("#chkUnicoDMadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumentoMadre").val();
        PerIdenroP = $("#txtNumeroDocM").val();
    } else {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    }

    var PermiTip = 'E';
    var NumPartida = "";
    var PermiDestino = $("#cboDestinoViaje").val();
    var PermiCodPro = $("#txtCodPromocion").val();
    var AutoObserv = $("#txtObservacion").val();
    var AutoDeclaracion = "S";
    var AutoFchVia = $("#txtFecha").val();
    var AutoTraVia = $("#MTransporte").val();

    $.each(arregloVIPHijos, function (idx, item) {
        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVIPHijo&PerTideP=" + PerTideP + "&PerIdenroP=" + PerIdenroP + "&PerIdenro=" + item.PerIdeNro + "&PerTide=" + item.PerTIde + "&NumPartida=" + NumPartida + "&AutoTraVia=" + AutoTraVia + "&AutoFchVia=" + AutoFchVia + "&PermiDestino=" + PermiDestino + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro + "&AutoObserv=" + AutoObserv + "&AutoDeclaracion=" + AutoDeclaracion, function (result) {
            console.log(result)
            callback();
        });
    });
}

/*------------------------------------------------------------------------------------------------------------------------------------ */


function fnBuscarPerRepresentantePadre() {
    var validator2 = $("#representantePadre").validate();
    validator2.resetForm();

    MostrarPreload();
    var PerTide = $("#CboTipoDocumentoRPadre").val();
    var PerIdeNro = $("#txtNumeroDocRP").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);

        if (arreglo.length == 0) {
            $("#txtNombreRP").val("");
            $("#txtApellidoPaternoRP").val("");
            $("#txtApellidoMaternoRP").val("");
            $("#txtEmailRP").val("");
            $("#cboNacionalidadRP").val("1309");
            $("#txtTelefonoRP").val("");
            $("#txtDireccionRP").val("");
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Autoriza viaje de Menores(Interior)',
            })
        } else {
            $.each(arreglo, function (idx, item) {
                $("#txtNombreRP").val(item.PerNom);
                $("#txtApellidoPaternoRP").val(item.PerApePat);
                $("#txtApellidoMaternoRP").val(item.PerApeMat);
                $("#txtEmailRP").val(item.PerEmail);
                $("#cboNacionalidadRP").val(item.PerNacion);
                $("#txtTelefonoRP").val(item.PerTlfNro);
                $("#txtDireccionRP").val(item.PerDirDes);
                Preload();
            });
        }


    });
}
/*tboPVEDireccionMadre*/

function fnBuscarPerMadre() {
    var validator3 = $("#DivAVEPDatosMadre").validate();
    validator3.resetForm();

    MostrarPreload();

    var PerTide = $("#CboTipoDocumentoMadre").val();
    var PerIdeNro = $("#txtNumeroDocM").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        if (arreglo.length == 0) {

            $("#txtNombresM").val("");
            $("#cboEstadoCivilMadre").val("");
            $("#txtApellidoMaternoM").val("");
            $("#cboEstadoCivilMadre").val("06");
            $("#txtEmailM").val("");
            $("#cboNacionalidadMadre").val("1309");
            $("#txtTelefonoM").val("");
            Preload();
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Autoriza viaje de Menores(Interior)',
            })
        } else {
            Preload();
            $.each(arreglo, function (idx, item) {
                $("#txtNombresM").val(item.PerNom);
                $("#txtApellidoPaternoM").val(item.PerApePat);
                $("#txtApellidoMaternoM").val(item.PerApeMat);
                $("#cboEstadoCivilMadre").val(item.PereCiv);
                $("#txtEmailM").val(item.PerEmail);
                $("#cboNacionalidadMadre").val(item.PerNacion);
                $("#txtTelefonoM").val(item.PerTlfNro);
            });
        }

    });

    fnBuscarDomicilioMadre(PerTide, PerIdeNro);

    if ($("#chkUnicoDMadre").prop("checked") == true) {
        fnBuscarHijosMadre(PerTide, PerIdeNro)
    } else {

        var PerTideP = $("#CboTipoDocumento").val();
        var PerIdeNroP = $("#txtNumeroDocP").val();
        var PerTideM = $("#CboTipoDocumentoMadre").val();
        var PerIdeNroM = $("#txtNumeroDocM").val();

        fnBuscarHijosXPadreMadre(PerIdeNroP, PerTideP, PerIdeNroM, PerTideM)
    }

}

function fnBuscarPerRepresentanteMadre() {
    var validator4 = $("#representanteMadre").validate();
    validator4.resetForm();

    MostrarPreload();
    var PerTide = $("#CboTipoDocumentoRMadre").val();
    var PerIdeNro = $("#txtNumeroDocRM").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);

        if (arreglo.length == 0) {
            Preload();
            $("#txtNombreRM").val("");
            $("#txtApellidoPaternoRM").val("");
            $("#txtApellidoMaternoRM").val("");
            $("#txtEmailRM").val("");
            $("#cboNacionalidadRM").val("1309");
            $("#txtTelefonoRM").val("");
            $("#txtDireccionRM").val("");
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Autoriza viaje de Menores(Interior)',
            })
        } else {
            $.each(arreglo, function (idx, item) {
                $("#txtNombreRM").val(item.PerNom);
                $("#txtApellidoPaternoRM").val(item.PerApePat);
                $("#txtApellidoMaternoRM").val(item.PerApeMat);
                $("#txtEmailRM").val(item.PerEmail);
                $("#cboNacionalidadRM").val(item.PerNacion);
                $("#txtTelefonoRM").val(item.PerTlfNro);
                $("#txtDireccionRM").val(item.PerDirDes);
                Preload();
            });
        }
    });
}

function ComboDocsIdentidadRTraslado() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#cboTipoDocRTraslado").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#cboTipoDocRTraslado").append(opciones);
        });

    });
}

function ComboDocsIdentidadREstadia() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#cboTipoDocREstadia").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#cboTipoDocREstadia").append(opciones);
        });

    });
}




function fnBuscarPerTipoDocRTraslado() {
    MostrarPreload();

    var validator5 = $("#responsableTraslado").validate();
    validator5.resetForm();

    var PerTide = $("#cboTipoDocRTraslado").val();
    var PerIdeNro = $("#txtNumeroDocRTraslado").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        if (arreglo.length == 0) {
            Preload();
            $("#txtNombreRTraslado").val("");
            $("#txtApellidoPaternoRTraslado").val("");
            $("#txtApellidoMaternoRTraslado").val("");
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Autoriza viaje de Menores(Interior)',
            })
        } else {
            $.each(arreglo, function (idx, item) {

                $("#txtNombreRTraslado").val(item.PerNom);
                $("#txtApellidoPaternoRTraslado").val(item.PerApePat);
                $("#txtApellidoMaternoRTraslado").val(item.PerApeMat);
                Preload();
            });
        }
    });
}

function fnBuscarPerTipoDocREstadia() {
    var validator6 = $("#responsableEstadia").validate();
    validator6.resetForm();

    MostrarPreload();
    var PerTide = $("#cboTipoDocREstadia").val();
    var PerIdeNro = $("#txtNumDocREstadia").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);

        if (arreglo.length == 0) {
            Preload();
            $("#txtNombresREstadia").val("");
            $("#txtApellidoPaternoREstadia").val("");
            $("#txtApellidoMaternoREstadia").val("");
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'Autoriza viaje de Menores(Interior)',
            })
        } else {
            $.each(arreglo, function (idx, item) {

                $("#txtNombresREstadia").val(item.PerNom);
                $("#txtApellidoPaternoREstadia").val(item.PerApePat);
                $("#txtApellidoMaternoREstadia").val(item.PerApeMat);
                Preload();
            });
        }
    });
}







function ValidacionFormPadre() {

    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivAVEPDatosPadre").validate({
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



function ComboDocsIdentidadHijo() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CboTipoDocumentoHijo").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumentoHijo").append(opciones);
        });

    });
}

function fnBuscarDomicilioMadre(Tipodocumen, NumDocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#DivDomicilioTBMadre").html("");
        if (arreglo.length == 0) {
            $("#DivDomicilioTBMadre").append("");
            $("#DivDomicilioTBMadre").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro ningún Domicilio registrados:</b></label></div>' +
                '</div>');

            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {

                $("#DivDomicilioTBMadre").append("");
                $("#DivDomicilioTBMadre").append('<div class="card" >' +
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
                    '<div class="col s5"><label style="font-size:11px;color:black"><b>Distrito:</b></label></div>' +
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
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalEdicionDomicilioMadre" onclick="fnDatosDomicilioMadre(\'' + item.PerDirCod + '\',\'' + item.PerPais + '\',\'' + item.PerDept + '\',\'' + item.PerProv + '\',\'' + item.PerDist + '\');">' +
                    ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px"> Actualizar</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6">' +
                    '<a class="btn red" style="font-size:10px" id="btnEliminarDomicilio" onclick="ConfirmDeleteMadre(' + item.PerDirCod + ');">' +
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

function fnBuscarHijosMadre(idMadre, NumDocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_HijosxMadre&PerIdeNroM=" + NumDocumen + "&PerTideM=" + idMadre, function (result) {
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

function fnBuscarHijosXPadreMadre(PerIdeNroP, PerTideP, PerIdeNroM, PerTideM) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_HijosxPadreyMadre&PerIdeNroP=" + PerIdeNroP + "&PerTideP=" + PerTideP + "&PerIdeNroM=" + PerIdeNroM + "&PerTideM=" + PerTideM, function (result) {
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
var ResultInsertClientVIPMadre;
var ResultInsertRepresentantePadre;
var ResultInsertRepresentanteMadre;
var ResultInsertRepresentanteTraslado;
var ResultInsertRepresentanteEstadia;

var ResultInsertSolicitudVEPPadre;
var ResultInsertSolicitudVEPUMadre;

var ResultInsertSolicitudVEPMadre;
var ResultInsertSolicitudVEPRepresentantePadre;
var ResultInsertSolicitudVEPRepresentanteMadre;
var ResultInsertSolicitudVEPResponsableEstadia;
var ResultInsertSolicitudVEPResponsableTraslado;



function InsertClientVIP() {

    var TipoClient = 'PM';
    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumeroDocP").val();
    var PerTPer = '';
    var PerApePat = $("#txtApellidoPaternoP").val();
    var PerApeMat = $("#txtApellidoMaternoP").val();
    var PerNom = $("#txtNombresP").val();
    var PerNomCo = $("#txtApellidoPaternoP").val() + ' ' + $("#txtApellidoMaternoP").val() + ' ' + $("#txtNombresP").val();
    var PerECiv = $("#cboEstadoCivilP").val();
    var PerNacion = $("#cboNacionalidadP").val();
    var PerTlfNro = $("#txtTelefonoP").val();
    var PerEmail = $("#txtEmailP").val();
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
        "op=insrt_ClienteALL&TipoClient=" + TipoClient + "&PerTide=" + PerTide +
        "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail,
        function (result) {
            ResultInsertClientVIP = result;
            console.log(ResultInsertClientVIP);

            if (result == 1) {
                AgregarHijosDBA();
                AgregarDomicilioDBA();
            } else {
                AgregarHijosDBA();
                AgregarDomicilioDBA();
                grabarLog(result, 'InsertClientVIP', 'EXTERIOR')
            }
        });
};

function InsertRepresentantePadre() {
    var TipoClient = 'RT';
    var PerTide = $("#CboTipoDocumentoRPadre").val();
    var PerIdeNro = $("#txtNumeroDocRP").val();
    var PerTPer = '';
    var PerApePat = $("#txtApellidoPaternoRP").val();
    var PerApeMat = $("#txtApellidoMaternoRP").val();
    var PerNom = $("#txtNombreRP").val();
    var PerNomCo = $("#txtApellidoPaternoRP").val() + ' ' + $("#txtApellidoMaternoRP").val() + ' ' + $("#txtNombreRP").val();
    var PerECiv = '';
    var PerNacion = $("#cboNacionalidadRP").val();
    var PerTlfNro = $("#txtTelefonoRP").val();
    var PerEmail = $("#txtEmailRP").val();
    var PerObser = $("#txtPoderRP").val();
    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = '';
    var PerDirDes = $("#txtDireccionRP").val();
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
            ResultInsertRepresentantePadre = result;
            console.log(ResultInsertRepresentantePadre);
            if (result == 1) {

            } else {
                grabarLog(result, 'InsertRepresentantePadre', 'EXTERIOR')
            }
        });
};

function InsertClientVIPMadre() {
    var TipoClient = 'PM';
    var PerTide = $("#CboTipoDocumentoMadre").val();
    var PerIdeNro = $("#txtNumeroDocM").val();
    var PerTPer = '';
    var PerApePat = $("#txtApellidoPaternoM").val();
    var PerApeMat = $("#txtApellidoMaternoM").val();
    var PerNom = $("#txtNombresM").val();
    var PerNomCo = $("#txtApellidoPaternoM").val() + ' ' + $("#txtApellidoMaternoM").val() + ' ' + $("#txtNombresM").val();
    var PerECiv = $("#cboEstadoCivilMadre").val();
    var PerNacion = $("#cboNacionalidadMadre").val();
    var PerTlfNro = $("#txtTelefonoM").val();
    var PerEmail = $("#txtEmailM").val();
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
        "op=insrt_ClienteALL&TipoClient=" + TipoClient + "&PerTide=" + PerTide +
        "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail,
        function (result) {
            ResultInsertClientVIPMadre = result;
            console.log(ResultInsertClientVIPMadre);
            if (result == 1) {
                AgregarHijosDBA();
                AgregarDomicilioDBAMadre();
            } else {
                AgregarHijosDBA();
                AgregarDomicilioDBAMadre();
                grabarLog(result, 'InsertClientVIPMadre', 'EXTERIOR')
            }
        });
};

function InsertRepresentanteMadre() {
    var TipoClient = 'RT';
    var PerTide = $("#CboTipoDocumentoRPadre").val();
    var PerIdeNro = $("#txtNumeroDocRM").val();
    var PerTPer = '';
    var PerApePat = $("#txtApellidoPaternoRM").val();
    var PerApeMat = $("#txtApellidoMaternoRM").val();
    var PerNom = $("#txtNombreRM").val();
    var PerNomCo = $("#txtApellidoPaternoRM").val() + ' ' + $("#txtApellidoMaternoRM").val() + ' ' + $("#txtNombreRM").val();
    var PerECiv = '';
    var PerNacion = $("#cboNacionalidadRM").val();
    var PerTlfNro = $("#txtTelefonoRM").val();
    var PerEmail = $("#txtEmailRM").val();
    var PerObser = $("#txtPoderRM").val();

    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = '';
    var PerDirDes = $("#txtDireccionRM").val();
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
            console.log(result);
            ResultInsertRepresentanteMadre = result;
            console.log(ResultInsertRepresentanteMadre);
            if (result == 1) {

            } else {
                grabarLog(result, 'InsertRepresentanteMadre', 'EXTERIOR')
            }
        });
};



function InsertRepresentanteTraslado() {
    var TipoClient = 'RT';
    var PerTide = $("#cboTipoDocRTraslado").val();
    var PerIdeNro = $("#txtNumeroDocRTraslado").val();
    var PerTPer = '';
    var PerApePat = $("#txtApellidoPaternoRTraslado").val();
    var PerApeMat = $("#txtApellidoMaternoRTraslado").val();
    var PerNom = $("#txtNombreRTraslado").val();
    var PerNomCo = $("#txtApellidoPaternoRTraslado").val() + ' ' + $("#txtApellidoMaternoRTraslado").val() + ' ' + $("#txtNombreRTraslado").val();
    var PerECiv = '';
    var PerNacion = '';
    var PerTlfNro = '';
    var PerEmail = '';
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
        "op=insrt_ClienteALL&TipoClient=" + TipoClient + "&PerTide=" + PerTide +
        "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail,
        function (result) {
            ResultInsertRepresentanteTraslado = result;
            console.log(ResultInsertRepresentanteTraslado);
            if (result == 1) {

            } else {
                grabarLog(result, 'InsertRepresentanteTraslado', 'EXTERIOR')
            }
        });
};


$("#cboDestinoViaje").change(function () {
    var $PORDER = $("#cboDestinoViaje").val();
    console.log($PORDER);
});

function InsertRepresentanteEstadia() {

    var TipoClient = 'RT';
    var PerTide = $("#cboTipoDocREstadia").val();
    var PerIdeNro = $("#txtNumDocREstadia").val();
    var PerTPer = '';
    var PerApePat = $("#txtApellidoPaternoREstadia").val();
    var PerApeMat = $("#txtApellidoMaternoREstadia").val();
    var PerNom = $("#txtNombresREstadia").val();
    var PerNomCo = $("#txtApellidoPaternoREstadia").val() + ' ' + $("#txtApellidoMaternoREstadia").val() + ' ' + $("#txtNombresREstadia").val();
    var PerECiv = '';
    var PerNacion = '';
    var PerTlfNro = '';
    var PerEmail = '';
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
        "op=insrt_ClienteALL&TipoClient=" + TipoClient + "&PerTide=" + PerTide +
        "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail,
        function (result) {

            ResultInsertRepresentanteEstadia = result;
            console.log(ResultInsertRepresentanteEstadia);

            if (result == 1) {

            } else {
                grabarLog(result, 'InsertRepresentanteEstadia', 'EXTERIOR')
            }
        });
};



function InsertSolicitudVEPPadre(callback) {
    var PerIdenro = $("#txtNumeroDocP").val();
    var PerParticipacion = 'P';
    var PerTide = $("#CboTipoDocumento").val();
    var PermiNumero = '0';
    var AutoObserv = $("#txtObservacion").val();
    var PermiEstado = 'P';
    var NumPartida = $("#txtPoderRP").val();
    var UniDeclarante = 'N';
    var AutoSex = '';
    var PermiTip = 'E';
    var PermiCodPro = $("#txtCodPromocion").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVEPPadre&PerIdenro=" + PerIdenro + "&PerParticipacion=" + PerParticipacion + "&PerTide=" + PerTide + "&AutoObserv=" + AutoObserv + "&PermiEstado=" + PermiEstado + "&NumPartida=" + NumPartida + "&UniDeclarante=" + UniDeclarante + "&AutoSex=" + AutoSex + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro, function (result) {
        ResultInsertSolicitudVEPPadre = result;

        console.log(ResultInsertSolicitudVEPPadre);
        if (result == 1) {
            callback();
        } else {
            callback();
            grabarLog(result, 'InsertSolicitudVEPPadre', 'EXTERIOR')
        }
    });
};

function InsertSolicitudVEPUMadre(callback) {

    var PerIdenro = $("#txtNumeroDocM").val();
    var PerParticipacion = 'M';
    var PerTide = $("#CboTipoDocumentoMadre").val();
    var AutoObserv = $("#txtObservacion").val();
    var PermiEstado = 'P';
    var NumPartida = $("#txtPoderRM").val();
    var UniDeclarante = 'N';
    var AutoSex = '';
    var PermiTip = 'E';
    var PermiCodPro = $("#txtCodPromocion").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVEPPadre&PerIdenro=" + PerIdenro + "&PerParticipacion=" + PerParticipacion + "&PerTide=" + PerTide + "&AutoObserv=" + AutoObserv + "&PermiEstado=" + PermiEstado + "&NumPartida=" + NumPartida + "&UniDeclarante=" + UniDeclarante + "&AutoSex=" + AutoSex + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro, function (result) {
        ResultInsertSolicitudVEPUMadre = result;
        console.log(ResultInsertSolicitudVEPUMadre);
        if (result == 1) {
            callback();
        } else {
            callback();
            grabarLog(result, 'InsertSolicitudVEPUMadre', 'EXTERIOR')
        }
    });
};

function InsertSolicitudVEPMadre() {
    var PerTideP;
    var PerIdenroP;

    if ($("#chbRepresentantePadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    } else if ($("#chkUnicoDMadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumentoMadre").val();
        PerIdenroP = $("#txtNumeroDocM").val();
    } else {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    }

    var PerIdenro = $("#txtNumeroDocM").val();
    var PerParticipacion = 'M';
    var PerTide = $("#CboTipoDocumentoMadre").val();
    var AutoObserv = $("#txtObservacion").val();
    var PermiEstado = 'P';
    var NumPartida = $("#txtPoderRM").val();
    var UniDeclarante = 'N';
    var AutoSex = '';
    var PermiTip = 'E';
    var PermiCodPro = $("#txtCodPromocion").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVEPALL&PerTideP=" + PerTideP + "&PerIdenroP=" + PerIdenroP + "&PerIdenro=" + PerIdenro + "&PerParticipacion=" + PerParticipacion + "&PerTide=" + PerTide + "&AutoObserv=" + AutoObserv + "&PermiEstado=" + PermiEstado + "&NumPartida=" + NumPartida + "&UniDeclarante=" + UniDeclarante + "&AutoSex=" + AutoSex + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro, function (result) {
        ResultInsertSolicitudVEPMadre = result;
        console.log(ResultInsertSolicitudVEPMadre)
        if (result == 1) {

        } else {
            grabarLog(result, 'InsertSolicitudVEPMadre', 'EXTERIOR')
        }
    });
};

function InsertSolicitudVEPRepresentantePadre() {

    var PerTideP;
    var PerIdenroP;

    if ($("#chbRepresentantePadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    } else if ($("#chkUnicoDMadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumentoMadre").val();
        PerIdenroP = $("#txtNumeroDocM").val();
    } else {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    }


    var PerIdenro = $("#txtNumeroDocRP").val();
    var PerParticipacion = 'RP';
    var PerTide = $("#CboTipoDocumentoRPadre").val();
    var AutoObserv = $("#txtObservacion").val();
    var PermiEstado = 'P';
    var NumPartida = $("#txtPoderRP").val();
    var UniDeclarante = 'N';
    var AutoSex = '';
    var PermiTip = 'E';
    var PermiCodPro = $("#txtCodPromocion").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVEPALL&PerTideP=" + PerTideP + "&PerIdenroP=" + PerIdenroP + "&PerIdenro=" + PerIdenro + "&PerParticipacion=" + PerParticipacion + "&PerTide=" + PerTide + "&AutoObserv=" + AutoObserv + "&PermiEstado=" + PermiEstado + "&NumPartida=" + NumPartida + "&UniDeclarante=" + UniDeclarante + "&AutoSex=" + AutoSex + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro, function (result) {
        ResultInsertSolicitudVEPRepresentantePadre = result;
        console.log(ResultInsertSolicitudVEPRepresentantePadre)
        if (result == 1) {

        } else {
            grabarLog(result, 'InsertSolicitudVEPRepresentantePadre', 'EXTERIOR')
        }
    });
};

function InsertSolicitudVEPRepresentanteMadre() {

    var PerTideP;
    var PerIdenroP;

    if ($("#chbRepresentantePadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    } else if ($("#chkUnicoDMadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumentoMadre").val();
        PerIdenroP = $("#txtNumeroDocM").val();
    } else {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    }

    var PerIdenro = $("#txtNumeroDocRM").val();
    var PerParticipacion = 'RM';
    var PerTide = $("#CboTipoDocumentoRMadre").val();
    var PermiNumero = '0';
    var AutoObserv = $("#txtObservacion").val();
    var PermiEstado = 'P';
    var NumPartida = $("#txtPoderRM").val();
    var UniDeclarante = 'N';
    var AutoSex = '';
    var PermiTip = 'E';
    var PermiCodPro = $("#txtCodPromocion").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVEPALL&PerTideP=" + PerTideP + "&PerIdenroP=" + PerIdenroP + "&PerIdenro=" + PerIdenro + "&PerParticipacion=" + PerParticipacion + "&PerTide=" + PerTide + "&AutoObserv=" + AutoObserv + "&PermiEstado=" + PermiEstado + "&NumPartida=" + NumPartida + "&UniDeclarante=" + UniDeclarante + "&AutoSex=" + AutoSex + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro, function (result) {
        ResultInsertSolicitudVEPRepresentanteMadre = result;
        console.log(ResultInsertSolicitudVEPRepresentanteMadre)
        if (result == 1) {

        } else {
            grabarLog(result, 'InsertSolicitudVEPRepresentanteMadre', 'EXTERIOR')
        }
    });
};

function InsertSolicitudVEPResponsableEstadia() {

    var PerTideP;
    var PerIdenroP;

    if ($("#chbRepresentantePadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    } else if ($("#chkUnicoDMadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumentoMadre").val();
        PerIdenroP = $("#txtNumeroDocM").val();
    } else {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    }

    var PerIdenro = $("#txtNumDocREstadia").val();
    var PerParticipacion = 'RE';
    var PerTide = $("#cboTipoDocREstadia").val();
    var AutoObserv = '';
    var PermiEstado = 'P';
    var NumPartida = '';
    var UniDeclarante = '';
    var AutoSex = '';
    var PermiTip = 'E';
    var PermiCodPro = $("#txtCodPromocion").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVEPALL&PerTideP=" + PerTideP + "&PerIdenroP=" + PerIdenroP + "&PerIdenro=" + PerIdenro + "&PerParticipacion=" + PerParticipacion + "&PerTide=" + PerTide + "&AutoObserv=" + AutoObserv + "&PermiEstado=" + PermiEstado + "&NumPartida=" + NumPartida + "&UniDeclarante=" + UniDeclarante + "&AutoSex=" + AutoSex + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro, function (result) {
        ResultInsertSolicitudVEPResponsableEstadia = result;
        console.log(ResultInsertSolicitudVEPResponsableEstadia)
        if (result == 1) {

        } else {
            grabarLog(result, 'InsertSolicitudVEPResponsableEstadia', 'EXTERIOR')
        }
    });
};

function InsertSolicitudVEPResponsableTraslado() {

    var PerTideP;
    var PerIdenroP;

    if ($("#chbRepresentantePadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    } else if ($("#chkUnicoDMadre").prop("checked") == true) {
        PerTideP = $("#CboTipoDocumentoMadre").val();
        PerIdenroP = $("#txtNumeroDocM").val();
    } else {
        PerTideP = $("#CboTipoDocumento").val();
        PerIdenroP = $("#txtNumeroDocP").val();
    }

    var PerIdenro = $("#txtNumeroDocRTraslado").val();
    var PerParticipacion = 'RT';
    var PerTide = $("#cboTipoDocRTraslado").val();
    var PermiNumero = '0';
    var AutoObserv = '';
    var PermiEstado = 'P';
    var NumPartida = '';
    var UniDeclarante = '';
    var AutoSex = '';
    var PermiTip = 'E';
    var PermiCodPro = $("#txtCodPromocion").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerSolicitudVIP.php", "op=sp_insrt_SolicitudVEPALL&PerTideP=" + PerTideP + "&PerIdenroP=" + PerIdenroP + "&PerIdenro=" + PerIdenro + "&PerParticipacion=" + PerParticipacion + "&PerTide=" + PerTide + "&AutoObserv=" + AutoObserv + "&PermiEstado=" + PermiEstado + "&NumPartida=" + NumPartida + "&UniDeclarante=" + UniDeclarante + "&AutoSex=" + AutoSex + "&PermiTip=" + PermiTip + "&PermiCodPro=" + PermiCodPro, function (result) {
        ResultInsertSolicitudVEPResponsableTraslado = result;
        console.log(ResultInsertSolicitudVEPResponsableTraslado)
        if (result == 1) {

        } else {
            grabarLog(result, 'InsertSolicitudVEPResponsableTraslado', 'EXTERIOR')
        }
    });
};

function MENSJ(result) {
    Preload();
    if (result == 1) {
        Swal.fire(
            'Registro Agregado Exitosamente',
            'Autoriza viaje de Menores(Exterior)',
            'success'
        )
        Notif();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Autoriza viaje de Menores(Exterior)',
            text: '¡Sucedió algo inesperado!'
        })
    }

};



$("#btnGrabarIntPais").click(function () {
   var dec =  $("#txtDeclaracionDatos").val();
   if (dec == "S")
   {
    valida();
   }else{
    Swal.fire(
        'Información',
        'Debe aceptar las declaraciones para continuar.',
        'error'
    )
   

   }
    
});

$("#txtDeclaracionDatos").val("N");

$("#chbDeclaracionDatos").change(function () {
    if ($("#chbDeclaracionDatos").prop("checked") == true) {
        $("#txtDeclaracionDatos").val("S");

    }
    if ($("#chbDeclaracionDatos").prop("checked") == false) {
        $("#txtDeclaracionDatos").val("N");

    }
});

function valida() {


    MostrarPreload();
    if ($("#chbUnicoDeclarantePadre").prop("checked") == true) {
        if ($("#chbRepresentantePadre").prop("checked") == false) {
            if ($("#chbResponsableTraslado").prop("checked") == false) {
                if ($("#chbResponsableEstadia").prop("checked") == true) {
                    InsertClientVIP();
                    InsertRepresentanteEstadia();
                    InsertSolicitudVEPPadre(function () {
                        InsertSolicitudVEPResponsableEstadia();
                        AgregarSolicitudHijosDBA(function () {
                            setTimeout(() => {
                                if (ResultInsertClientVIP == 1 && ResultInsertRepresentanteEstadia == 1 &&
                                    ResultInsertSolicitudVEPPadre == 1 && ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                    MENSJ(1);
                                    LimpiarALL();
                                } else {
                                    MENSJ(2);
                                    GuardarErrorLOG();
                                }
                            }, 2000);
                        });
                    });
                    // PROBADO
                    console.log("Registrar  al Padre , Responsable Estadia");

                } else {
                    InsertClientVIP();
                    InsertSolicitudVEPPadre(function () {
                        AgregarSolicitudHijosDBA(function () {
                            setTimeout(() => {
                                if (ResultInsertClientVIP == 1 && ResultInsertSolicitudVEPPadre == 1) {
                                    MENSJ(1);
                                    LimpiarALL();
                                } else {
                                    MENSJ(2);
                                    GuardarErrorLOG();
                                }
                            }, 2000);
                        });

                    });
                    // PROBADO
                    console.log("Registrar  al Padre ");

                }
            } else if ($("#chbResponsableTraslado").prop("checked") == true) {
                if ($("#chbResponsableEstadia").prop("checked") == true) {

                    InsertClientVIP();
                    InsertRepresentanteEstadia();
                    InsertRepresentanteTraslado();

                    InsertSolicitudVEPPadre(function () {
                        InsertSolicitudVEPResponsableTraslado();
                        InsertSolicitudVEPResponsableEstadia();
                        AgregarSolicitudHijosDBA(function () {
                            setTimeout(() => {
                                if (ResultInsertClientVIP == 1 && ResultInsertRepresentanteEstadia == 1 &&
                                    ResultInsertRepresentanteTraslado == 1 &&
                                    ResultInsertSolicitudVEPResponsableEstadia == 1 &&
                                    ResultInsertSolicitudVEPResponsableTraslado == 1 &&
                                    ResultInsertSolicitudVEPPadre == 1) {
                                    MENSJ(1);
                                    LimpiarALL();
                                } else {
                                    MENSJ(2);
                                    GuardarErrorLOG();
                                }
                            }, 2000);
                        });

                    });
                    // PROBADO
                    console.log("Registrar  al Padre , Responsable Traslado y Estadia");

                } else {

                    InsertClientVIP();
                    InsertRepresentanteTraslado();

                    InsertSolicitudVEPPadre(function () {
                        InsertSolicitudVEPResponsableTraslado();
                        AgregarSolicitudHijosDBA(function () {
                            setTimeout(() => {
                                if (ResultInsertClientVIP == 1 && ResultInsertRepresentanteTraslado == 1 &&
                                    ResultInsertSolicitudVEPPadre == 1 && ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                    MENSJ(1);
                                    LimpiarALL();
                                } else {
                                    MENSJ(2);
                                    GuardarErrorLOG();
                                }
                            }, 2000);
                        });

                    });
                    // PROBADO
                    console.log("Registrar  al Padre , Responsable Traslado");

                }
            }
        } else if ($("#chbRepresentantePadre").prop("checked") == true) {
            if ($("#chbResponsableTraslado").prop("checked") == false) {
                if ($("#chbResponsableEstadia").prop("checked") == true) {

                    InsertClientVIP();
                    InsertRepresentantePadre();
                    InsertRepresentanteEstadia();

                    InsertSolicitudVEPPadre(function () {
                        InsertSolicitudVEPRepresentantePadre();
                        InsertSolicitudVEPResponsableEstadia();
                        AgregarSolicitudHijosDBA(function () {
                            setTimeout(() => {
                                if (ResultInsertClientVIP == 1 && ResultInsertRepresentantePadre == 1 &&
                                    ResultInsertRepresentanteEstadia == 1 && ResultInsertSolicitudVEPPadre == 1 &&
                                    ResultInsertSolicitudVEPRepresentantePadre == 1 && ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                    MENSJ(1);
                                    LimpiarALL();
                                } else {
                                    MENSJ(2);
                                    GuardarErrorLOG();
                                }
                            }, 2000);
                        });

                    });
                    // PROBADO
                    console.log("Registrar  al Padre , Representante , Responsable Estadia");

                } else {

                    InsertClientVIP();
                    InsertRepresentantePadre();

                    InsertSolicitudVEPPadre(function () {
                        InsertSolicitudVEPRepresentantePadre();
                        AgregarSolicitudHijosDBA(function () {
                            setTimeout(() => {
                                if (ResultInsertClientVIP == 1 && ResultInsertRepresentantePadre == 1 &&
                                    ResultInsertSolicitudVEPPadre == 1 && ResultInsertSolicitudVEPRepresentantePadre == 1) {
                                    MENSJ(1);
                                    LimpiarALL();
                                } else {
                                    MENSJ(2);
                                    GuardarErrorLOG();
                                }
                            }, 2000);
                        });

                    });
                    // PROBADO
                    console.log("Registrar  al Padre , Representante");

                }
            } else if ($("#chbResponsableTraslado").prop("checked") == true) {
                if ($("#chbResponsableEstadia").prop("checked") == true) {

                    InsertClientVIP();
                    InsertRepresentantePadre();
                    InsertRepresentanteEstadia();
                    InsertRepresentanteTraslado();


                    InsertSolicitudVEPPadre(function () {
                        InsertSolicitudVEPRepresentantePadre();
                        InsertSolicitudVEPResponsableEstadia();
                        InsertSolicitudVEPResponsableTraslado();
                        AgregarSolicitudHijosDBA(function () {
                            setTimeout(() => {
                                if (ResultInsertClientVIP == 1 && ResultInsertRepresentantePadre == 1 &&
                                    ResultInsertRepresentanteEstadia == 1 &&
                                    ResultInsertRepresentanteTraslado == 1 &&
                                    ResultInsertSolicitudVEPRepresentantePadre == 1 &&
                                    ResultInsertSolicitudVEPResponsableEstadia == 1 &&
                                    ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                    MENSJ(1);
                                    LimpiarALL();
                                } else {
                                    MENSJ(2);
                                    GuardarErrorLOG();
                                }
                            }, 2000);
                        });

                    });
                    // PROBADO
                    console.log("Registrar  al Padre , Representante , Responsable Traslado y Estadia");

                } else {

                    InsertClientVIP();
                    InsertRepresentantePadre();
                    InsertRepresentanteTraslado();

                    InsertSolicitudVEPPadre(function () {
                        InsertSolicitudVEPRepresentantePadre();
                        InsertSolicitudVEPResponsableTraslado();
                        AgregarSolicitudHijosDBA(function () {
                            setTimeout(() => {
                                if (ResultInsertClientVIP == 1 && ResultInsertRepresentantePadre == 1 &&
                                    ResultInsertRepresentanteTraslado == 1 &&
                                    ResultInsertSolicitudVEPPadre == 1 &&
                                    ResultInsertSolicitudVEPRepresentantePadre == 1 &&
                                    ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                    MENSJ(1);
                                    LimpiarALL();
                                } else {
                                    MENSJ(2);
                                    GuardarErrorLOG();
                                }
                            }, 2000);
                        });

                    });
                    // PROBADO
                    console.log("Registrar  al Padre ,Representante , Responsable Traslado");

                }
            }
        }
    } else if ($("#chbUnicoDeclarantePadre").prop("checked") == false) {
        if ($("#chkUnicoDMadre").prop("checked") == true) {
            if ($("#chbRepresentanteMadre").prop("checked") == false) {
                if ($("#chbResponsableTraslado").prop("checked") == false) {
                    if ($("#chbResponsableEstadia").prop("checked") == true) {

                        InsertClientVIPMadre();
                        InsertRepresentanteEstadia();

                        InsertSolicitudVEPUMadre(function () {
                            InsertSolicitudVEPResponsableEstadia();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIPMadre == 1 && ResultInsertRepresentanteEstadia == 1 &&
                                        ResultInsertSolicitudVEPUMadre == 1 && ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });
                        });
   // PROBADO
                        console.log("Registrar  al Madre  , Responsable Estadia");

                    } else {

                        InsertClientVIPMadre();

                        InsertSolicitudVEPUMadre(function () {
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIPMadre == 1 && ResultInsertSolicitudVEPUMadre == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });
   // PROBADO
                        console.log("Registrar  al Madre ");

                    }
                } else if ($("#chbResponsableTraslado").prop("checked") == true) {
                    if ($("#chbResponsableEstadia").prop("checked") == true) {

                        InsertClientVIPMadre();
                        InsertRepresentanteTraslado();
                        InsertRepresentanteEstadia();

                        InsertSolicitudVEPUMadre(function () {
                            InsertSolicitudVEPResponsableEstadia()
                            InsertSolicitudVEPResponsableTraslado()
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIPMadre == 1 && 
                                        ResultInsertRepresentanteTraslado == 1 &&
                                        ResultInsertRepresentanteEstadia == 1 && 
                                        ResultInsertSolicitudVEPUMadre == 1 &&
                                        ResultInsertSolicitudVEPResponsableEstadia == 1 &&
                                        ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });
   // PROBADO
                        console.log("Registrar  al Madre  , Responsable Traslado y Estadia");

                    } else {

                        InsertClientVIPMadre();
                        InsertRepresentanteTraslado();

                        InsertSolicitudVEPUMadre(function () {
                            InsertSolicitudVEPResponsableTraslado();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIPMadre == 1 && ResultInsertRepresentanteTraslado == 1 &&
                                        ResultInsertSolicitudVEPUMadre == 1 && ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });
  // PROBADO
                        console.log("Registrar  al Madre , Responsable Traslado ");

                    }
                }

            } else if ($("#chbRepresentanteMadre").prop("checked") == true) {
                if ($("#chbResponsableTraslado").prop("checked") == false) {
                    if ($("#chbResponsableEstadia").prop("checked") == true) {

                        InsertClientVIPMadre();
                        InsertRepresentanteMadre();
                        InsertRepresentanteEstadia();

                        InsertSolicitudVEPUMadre(function () {
                            InsertSolicitudVEPResponsableEstadia()
                            InsertSolicitudVEPRepresentanteMadre()
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIPMadre == 1 && 
                                        ResultInsertRepresentanteMadre == 1 &&
                                        ResultInsertRepresentanteEstadia == 1 &&
                                        ResultInsertSolicitudVEPUMadre == 1 &&
                                        ResultInsertSolicitudVEPResponsableEstadia == 1 &&
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });
  // PROBADO
                        console.log("Registrar  al Madre , Representante , Responsable Estadia");

                    } else {

                        InsertClientVIPMadre();
                        InsertRepresentanteMadre();

                        InsertSolicitudVEPUMadre(function () {
                            InsertSolicitudVEPRepresentanteMadre()
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIPMadre == 1 && ResultInsertRepresentanteMadre == 1 &&
                                        ResultInsertSolicitudVEPUMadre == 1 && ResultInsertSolicitudVEPRepresentanteMadre == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });
  // PROBADO
                        console.log("Registrar  al Madre , Representante");

                    }
                } else if ($("#chbResponsableTraslado").prop("checked") == true) {
                    if ($("#chbResponsableEstadia").prop("checked") == true) {

                        InsertClientVIPMadre();
                        InsertRepresentanteMadre();
                        InsertRepresentanteTraslado();
                        InsertRepresentanteEstadia();

                        InsertSolicitudVEPUMadre(function () {
                            InsertSolicitudVEPRepresentanteMadre()
                            InsertSolicitudVEPResponsableTraslado()
                            InsertSolicitudVEPResponsableEstadia()
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentanteMadre == 1 &&
                                        ResultInsertRepresentanteTraslado == 1 &&
                                        ResultInsertRepresentanteEstadia == 1 &&
                                        ResultInsertSolicitudVEPUMadre == 1 &&
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1 &&
                                        ResultInsertSolicitudVEPResponsableTraslado == 1 &&
                                        ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });
  // PROBADO
                        console.log("Registrar  al Madre , Representante , Responsable Traslado y Estadia");

                    } else {

                        InsertClientVIPMadre();
                        InsertRepresentanteMadre();
                        InsertRepresentanteTraslado();

                        InsertSolicitudVEPUMadre(function () {
                            InsertSolicitudVEPRepresentanteMadre()
                            InsertSolicitudVEPResponsableTraslado()
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIPMadre == 1 && 
                                        ResultInsertRepresentanteMadre == 1 &&
                                        ResultInsertRepresentanteTraslado == 1 && 
                                        ResultInsertSolicitudVEPUMadre == 1 && 
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });
// PROBADO
                        console.log("Registrar  al Madre ,Representante , Responsable Traslado");

                    }
                }

            }
        } else {
            if ($("#chbRepresentantePadre").prop("checked") == false) {
                if ($("#chbRepresentantePadre").prop("checked") == false && $("#chbRepresentanteMadre").prop("checked") == true) {
                    if ($("#chbResponsableTraslado").prop("checked") == false) {
                        if ($("#chbResponsableEstadia").prop("checked") == true) {

                            InsertClientVIP();
                            InsertClientVIPMadre();
                            InsertRepresentanteMadre();
                            InsertRepresentanteEstadia();

                            InsertSolicitudVEPPadre(function () {
                                InsertSolicitudVEPMadre()
                                InsertSolicitudVEPRepresentanteMadre()
                                InsertSolicitudVEPResponsableEstadia()
                                AgregarSolicitudHijosDBA(function () {
                                    if (ResultInsertClientVIP == 1 &&
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentanteMadre && 
                                        ResultInsertRepresentanteEstadia == 1 && 
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 && 
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        LimpiarALL();
                                        GuardarErrorLOG();
                                    }
                                });
                                
                            });
// PROBADO
                            console.log("Registrar  al Padre y Madre , Representante Madre , Responsable Estadia");

                        } else {

                            InsertClientVIP();
                            InsertClientVIPMadre();
                            InsertRepresentanteMadre();

                            InsertSolicitudVEPPadre(function () {
                                InsertSolicitudVEPMadre()
                                InsertSolicitudVEPRepresentanteMadre()
                                AgregarSolicitudHijosDBA(function () {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentanteMadre == 1 && 
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 && 
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        LimpiarALL();
                                        GuardarErrorLOG();
                                    }
                                });
                                
                            });
// PROBADO
                            console.log("Registrar  Padre y Madre , Representante Madre");

                        }
                    } else if ($("#chbResponsableTraslado").prop("checked") == true) {
                        if ($("#chbResponsableEstadia").prop("checked") == true) {

                            InsertClientVIP();
                            InsertClientVIPMadre();
                            InsertRepresentanteMadre();
                            InsertRepresentanteTraslado();
                            InsertRepresentanteEstadia();

                            InsertSolicitudVEPPadre(function () {
                                InsertSolicitudVEPMadre()
                                InsertSolicitudVEPRepresentanteMadre()
                                InsertSolicitudVEPResponsableTraslado()
                                InsertSolicitudVEPResponsableEstadia()
                                AgregarSolicitudHijosDBA(function () {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentanteMadre == 1 && 
                                        ResultInsertRepresentanteTraslado == 1 && 
                                        ResultInsertRepresentanteEstadia == 1 && 
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 && 
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableTraslado == 1 && 
                                        ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        LimpiarALL();
                                        GuardarErrorLOG();
                                    }
                                });
                                
                            });
// PROBADO
                            console.log("Registrar  al Padre y Madre , Representante Madre , Responsable Traslado y Estadia");

                        } else {

                            InsertClientVIP();
                            InsertClientVIPMadre();
                            InsertRepresentanteMadre();
                            InsertRepresentanteTraslado();

                            InsertSolicitudVEPPadre(function () {
                                InsertSolicitudVEPMadre()
                                InsertSolicitudVEPRepresentanteMadre()
                                InsertSolicitudVEPResponsableTraslado()
                                AgregarSolicitudHijosDBA(function () {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentanteMadre && 
                                        ResultInsertRepresentanteTraslado == 1 && 
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 && 
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        LimpiarALL();
                                        GuardarErrorLOG();
                                    }
                                });
                                
                            });
// PROBADO/////////////////////////////////////////////////////////
                            console.log("Registrar  al Padre y Madre , Representante Madre , Responsable Traslado");

                        }
                    }

                } else if ($("#chbRepresentantePadre").prop("checked") == false && $("#chbRepresentanteMadre").prop("checked") == false) {
                    if ($("#chbResponsableTraslado").prop("checked") == false) {
                        if ($("#chbResponsableEstadia").prop("checked") == true) {

                            InsertClientVIP();
                            InsertClientVIPMadre();
                            InsertRepresentanteEstadia();

                            InsertSolicitudVEPPadre(function () {
                                InsertSolicitudVEPMadre()
                                InsertSolicitudVEPResponsableEstadia()
                                AgregarSolicitudHijosDBA(function () {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentanteEstadia == 1 &&
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        LimpiarALL();
                                        GuardarErrorLOG();
                                    }
                                });
                                
                            });

                            console.log("Registrar  al Padre y Madre , Responsable Estadia");


                        } else {

                            InsertClientVIP();
                            InsertClientVIPMadre();

                            InsertSolicitudVEPPadre(function () {
                                InsertSolicitudVEPMadre();
                                AgregarSolicitudHijosDBA(function () {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 ) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        LimpiarALL();
                                        GuardarErrorLOG();
                                    }
                                });
                                
                            });

                            console.log("Registrar  Padre y Madre");

                        }
                    } else if ($("#chbResponsableTraslado").prop("checked") == true) {
                        if ($("#chbResponsableEstadia").prop("checked") == true) {

                            InsertClientVIP();
                            InsertClientVIPMadre();
                            InsertRepresentanteEstadia();
                            InsertRepresentanteTraslado();
                            

                            InsertSolicitudVEPPadre(function () {
                                InsertSolicitudVEPMadre();
                                InsertSolicitudVEPResponsableEstadia();
                                InsertSolicitudVEPResponsableTraslado();
                                AgregarSolicitudHijosDBA(function () {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentanteEstadia == 1 && 
                                        ResultInsertRepresentanteTraslado == 1 &&
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPResponsableEstadia == 1 &&
                                        ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        LimpiarALL();
                                        GuardarErrorLOG();
                                    }
                                });
                            });

                            console.log("Registrar  al Padre y Madre  , Responsable Traslado y Estadia");

                        } else {

                            InsertClientVIP();
                            InsertClientVIPMadre();
                            InsertRepresentanteTraslado();

                            InsertSolicitudVEPPadre(function () {
                                InsertSolicitudVEPMadre();
                                InsertSolicitudVEPResponsableTraslado();
                                AgregarSolicitudHijosDBA(function () {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentanteTraslado == 1 && 
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        LimpiarALL();
                                        GuardarErrorLOG();
                                    }
                                });
                                
                            });

                            console.log("Registrar  al Padre y Madre  , Responsable Traslado");

                        }
                    }
                }
            } else if ($("#chbRepresentantePadre").prop("checked") == true && $("#chbRepresentanteMadre").prop("checked") == false) {
                if ($("#chbResponsableTraslado").prop("checked") == false) {
                    if ($("#chbResponsableEstadia").prop("checked") == true) {

                        InsertClientVIP();
                        InsertClientVIPMadre();
                        InsertRepresentantePadre();
                        InsertRepresentanteEstadia();

                        InsertSolicitudVEPPadre(function () {
                            InsertSolicitudVEPMadre();
                            InsertSolicitudVEPRepresentantePadre();
                            InsertSolicitudVEPResponsableEstadia();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentantePadre == 1 && 
                                        ResultInsertRepresentanteEstadia == 1 && 
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPRepresentantePadre == 1 &&
                                        ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });

                        console.log("Registrar  al Padre y Madre , Representante Padre , Responsable Estadia");

                    } else {

                        InsertClientVIP();
                        InsertClientVIPMadre();
                        InsertRepresentantePadre();

                        InsertSolicitudVEPPadre(function () {
                            InsertSolicitudVEPMadre();
                            InsertSolicitudVEPRepresentantePadre();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentantePadre == 1 && 
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPRepresentantePadre == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });

                        console.log("Registrar  Padre y Madre , Representante Padre");

                    }
                } else if ($("#chbResponsableTraslado").prop("checked") == true) {
                    if ($("#chbResponsableEstadia").prop("checked") == true) {

                        InsertClientVIP();
                        InsertClientVIPMadre();
                        InsertRepresentantePadre();
                        InsertRepresentanteEstadia();
                        InsertRepresentanteTraslado();

                        InsertSolicitudVEPPadre(function () {
                            InsertSolicitudVEPMadre();
                            InsertSolicitudVEPRepresentantePadre();
                            InsertSolicitudVEPResponsableEstadia();
                            InsertSolicitudVEPResponsableTraslado();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentantePadre == 1 && 
                                        ResultInsertRepresentanteEstadia == 1 &&
                                        ResultInsertRepresentanteTraslado == 1 &&
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPRepresentantePadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableEstadia == 1&& 
                                        ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });

                        console.log("Registrar  al Padre y Madre , Representante Padre  , Responsable Traslado y Estadia");

                    } else {

                        InsertClientVIP();
                        InsertClientVIPMadre();
                        InsertRepresentantePadre();
                        InsertRepresentanteTraslado();

                        InsertSolicitudVEPPadre(function () {
                            InsertSolicitudVEPMadre();
                            InsertSolicitudVEPRepresentantePadre();
                            InsertSolicitudVEPResponsableTraslado();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentantePadre == 1 && 
                                        ResultInsertRepresentanteTraslado == 1 &&
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPRepresentantePadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });

                        console.log("Registrar  al Padre y Madre , Representante Padre  , Responsable Traslado");

                    }
                }

            } else if ($("#chbRepresentanteMadre").prop("checked") == true && $("#chbRepresentantePadre").prop("checked") == true) {
                if ($("#chbResponsableTraslado").prop("checked") == false) {
                    if ($("#chbResponsableEstadia").prop("checked") == true) {

                        InsertClientVIP();
                        InsertClientVIPMadre();
                        InsertRepresentantePadre();
                        InsertRepresentanteMadre();
                        InsertRepresentanteEstadia();

                        InsertSolicitudVEPPadre(function () {
                            InsertSolicitudVEPMadre();
                            InsertSolicitudVEPRepresentantePadre();
                            InsertSolicitudVEPRepresentanteMadre();
                            InsertSolicitudVEPResponsableEstadia();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentantePadre == 1 && 
                                        ResultInsertRepresentanteMadre == 1 && 
                                        ResultInsertRepresentanteEstadia == 1 &&
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPRepresentantePadre == 1 && 
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });

                        console.log("Registrar  al Padre y Madre , Representante Padre , Representante Madre , Responsable Estadia");

                    } else {

                        InsertClientVIP();
                        InsertClientVIPMadre();
                        InsertRepresentantePadre();
                        InsertRepresentanteMadre();

                        InsertSolicitudVEPPadre(function () {
                            InsertSolicitudVEPMadre();
                            InsertSolicitudVEPRepresentantePadre();
                            InsertSolicitudVEPRepresentanteMadre();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentantePadre == 1 && 
                                        ResultInsertRepresentanteMadre == 1 && 
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPRepresentantePadre == 1 && 
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1 ) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });

                        console.log("Registrar  Padre y Madre , Representante Padre , Representante Madre");

                    }
                } else if ($("#chbResponsableTraslado").prop("checked") == true) {
                    if ($("#chbResponsableEstadia").prop("checked") == true) {

                        InsertClientVIP();
                        InsertClientVIPMadre();
                        InsertRepresentantePadre();
                        InsertRepresentanteMadre();
                        InsertRepresentanteTraslado();
                        InsertRepresentanteEstadia();

                        InsertSolicitudVEPPadre(function () {
                            InsertSolicitudVEPMadre();
                            InsertSolicitudVEPRepresentantePadre();
                            InsertSolicitudVEPRepresentanteMadre();
                            InsertSolicitudVEPResponsableTraslado();
                            InsertSolicitudVEPResponsableEstadia();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentantePadre == 1 && 
                                        ResultInsertRepresentanteMadre == 1 && 
                                        ResultInsertRepresentanteTraslado == 1 &&
                                        ResultInsertRepresentanteEstadia == 1 &&
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPRepresentantePadre == 1 && 
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableTraslado == 1 && 
                                        ResultInsertSolicitudVEPResponsableEstadia == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });

                        console.log("Registrar  al Padre y Madre , Representante Padre , Representante Madre  , Responsable Traslado y Estadia");

                    } else {

                        InsertClientVIP();
                        InsertClientVIPMadre();
                        InsertRepresentantePadre();
                        InsertRepresentanteMadre();
                        InsertRepresentanteTraslado();

                        InsertSolicitudVEPPadre(function () {
                            InsertSolicitudVEPMadre();
                            InsertSolicitudVEPRepresentantePadre();
                            InsertSolicitudVEPRepresentanteMadre();
                            InsertSolicitudVEPResponsableTraslado();
                            AgregarSolicitudHijosDBA(function () {
                                setTimeout(() => {
                                    if (ResultInsertClientVIP == 1 && 
                                        ResultInsertClientVIPMadre == 1 &&
                                        ResultInsertRepresentantePadre == 1 && 
                                        ResultInsertRepresentanteMadre == 1 && 
                                        ResultInsertRepresentanteTraslado == 1 &&
                                        ResultInsertSolicitudVEPPadre == 1 && 
                                        ResultInsertSolicitudVEPMadre == 1 &&
                                        ResultInsertSolicitudVEPRepresentantePadre == 1 && 
                                        ResultInsertSolicitudVEPRepresentanteMadre == 1 && 
                                        ResultInsertSolicitudVEPResponsableTraslado == 1) {
                                        MENSJ(1);
                                        LimpiarALL();
                                    } else {
                                        MENSJ(2);
                                        GuardarErrorLOG();
                                    }
                                }, 2000);
                            });

                        });

                        console.log("Registrar  al Padre y Madre , Representante Padre , Representante Madre  , Responsable Traslado");

                    }
                }
            }
        }
    }
}

$("#btnFrmVIP").click(function () {
    $("#DivAVEPDatosPadre").show();
    $("#LineaDeTiempo").show();
    $("#BtnSAS").show();
    $("#DivInfoViajeIP").hide();
});

function LimpiarALL() {

    $('#liAVEDatosMadre').removeClass("active pgactual");
    $('#liAVIDatosDistintasPadres').removeClass("active pgactual");
    $('#liAVPDatosViaje').removeClass("active pgactual");
    $('#liAVPDatosHijos').removeClass("active pgactual");
    $('#liAVPDatosFinales').removeClass("active pgactual");
    $('#liAVEPDatosPadre').removeClass("active");


    $("#LineaDeTiempo").hide();
    $("#DivAVEPDatosPadre").hide();
    $("#DivAVEDatosFinales").hide();
    $("#BtnSAS").hide();
    $("#btnGrabarIntPais").hide();
    $("#ahrefatras").hide();
    $("#btnGrabarIntPais").hide();
    $("#ahrefSiguiente").hide();
    $("#ahrefSiguiente2").show();
    $("#representantePadre").hide();
    $("#representanteMadre").hide();
    $("#responsableTraslado").hide();
    $("#responsableEstadia").hide();


    $("#DivInfoViajeIP").show();

    $('input[type="text"]').val('');
    $('input[type="number"]').val('');

    /*Eliminar todos los Items de UN Arreglo */
    var cantidadArregloDomicilio = arreglo.length;
    arreglo.splice(0, cantidadArregloDomicilio);

    var cantidadArregloHijos = arregloHijos.length;
    arregloHijos.splice(0, cantidadArregloHijos);

    var cantidadArregloVIPHijos = arregloVIPHijos.length;
    arregloVIPHijos.splice(0, cantidadArregloVIPHijos);

    var validator1 = $("#DivAVEPDatosPadre").validate();
    validator1.resetForm();

    var validator2 = $("#representantePadre").validate();
    validator2.resetForm();

    var validator3 = $("#DivAVEPDatosMadre").validate();
    validator3.resetForm();

    var validator4 = $("#representanteMadre").validate();
    validator4.resetForm();

    var validator5 = $("#responsableTraslado").validate();
    validator5.resetForm();

    var validator6 = $("#responsableEstadia").validate();
    validator6.resetForm();

    $("#DivDomicilioTB").html("");
    $("#DivHijosTB").html("");

}

function Notif() {

    var titulo = "Notaria Paino";
    var icono = "fa fa-clipboard-list circle";
    var color = "blue";
    var mensaje = "SOLICITUD ENVIADA VIAJE DE MENORES(Exterior)"
    var estado = 1;
    var mostrado = 0;
    var userID = sessionStorage.getItem('dni_user');

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerNotificacion.php", 
    "op=sp_InsertNotif&titulo=" + titulo + "&icono=" + icono + "&color=" + color + 
    "&mensaje=" + mensaje + "&estado=" + estado + "&mostrado=" + mostrado+ "&userID=" + userID, function (result) {
        console.log(result);
    });
}


function GuardarErrorLOG() {
    $.each(LogArreglo, function (idx, item) {
        $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerLog.php", "op=sp_LOG&logerror=" + item.logerror + "&logfunction=" + item.logfunction + "&logmodulo=" + item.logmodulo, function (result) {
            console.log(result)
        });
    });
}