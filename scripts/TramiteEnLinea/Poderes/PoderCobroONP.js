var Arreglotextocbo = [];
var conthtmlcbo = "";
var ArregloDivsLineTime = ["DivCSTranVehicular", "DivCSDatosComprador", "DivCSDatosVehiculo"];


$(document).ready(function () {
    $('.tabs').tabs();
    $('select').formSelect();
    $('.modal').modal();
    $("#divRepresentanteOn").show();
    $("#divContenido").removeClass("swal2-shown swal2-height-auto");

    fnfaschNextTimeline("DivCSTranVehicular", ArregloDivsLineTime);
    fnhrefSegAnt("ahrefatras");
    //Oculta Los Divs 
    $("#representantePadre").hide();
    $("#representanteMadre").hide();
    $("#responsableTraslado").hide();
    $("#responsableEstadia").hide();
    $("#APO_ADD").hide();
    $("#btn_Guardar_PSM").hide();

    $("#APO_ADD").hide();
    $("#TEST_ADD").hide();
    //CBO//////////////////
    FnLlenarPais();
    ComboDocsIdentidad();
    fnComboEstaCivil();
    fnLlenarPais();
    //Preload();
    fnLlenarDepartamento();
    fnLlenarDepartamentoApo();
    disableupdateapo();
    disableupdatepo();
    disableupdatall();
    fnLlenarPaisEdicion();
    fnLlenarDepartamentoEdicion();

    $("#PO_ADD").hide();
    //$('#actualizar_apo').hide();
    //fn
    //fnBuscarPerPoderes();
    ComboDocumento();
    $("#DivFormPoderSinMinuta").hide();
    cargarValidacionApoderado()
    cargarValidacionPoderdante()


});

$("#btnSiguientePoderSinMinuta").click(function () {
    $("#divtextointro").hide();
    $("#DivFormPoderSinMinuta").show();
});




/* Fucion para mostrar y ocultar preload*/
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

function cargarValidacionPoderdante() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivCSTranVehicular").validate({
        rules: {
            TXT_N_PSM: {
                required: true,
                number: true
            },
            txtNombresP: {
                required: true
            },
            ApellidoPaterno: {
                required: true
            },
            ApellidoMaterno: {
                required: true
            },
            telefono_po: {
                required: true,
                number: true
            },
        },
        messages: {
            TXT_N_PSM: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
            txtNombresP: {
                required: "Campo requerido"
            },
            ApellidoPaterno: {
                required: "Campo requerido"
            },
            ApellidoMaterno: {
                required: "Campo requerido"
            },
            telefono_po: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

function cargarValidacionApoderado() {
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivCSDatosComprador").validate({
        rules: {
            TXT_N_COMPRA: {
                required: true,
                number: true
            },
            txtNombresPApo: {
                required: true
            },
            ApellidoPaternoApo: {
                required: true
            },
            ApellidoMaternoApo: {
                required: true
            },
            TelApo: {
                required: true,
                number: true
            },
        },
        messages: {
            TXT_N_COMPRA: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
            txtNombresPApo: {
                required: "Campo requerido"
            },
            ApellidoPaternoApo: {
                required: "Campo requerido"
            },
            ApellidoMaternoApo: {
                required: "Campo requerido"
            },
            TelApo: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}


/*Funciones para pasar a la siguiente paguina */
function fnNextCSDatosCompra() {
    if (!$("#DivCSTranVehicular").valid()) {
        Swal.fire({
            title: 'Datos Incompletos',
            text: '',
            icon: 'warning'
        });
        return;
    }
    fnfaschNextTimeline("DivCSDatosComprador", ArregloDivsLineTime, "liCSDatosComprador", "liCSTranVehicular");
    fnhrefSegAnt("ahrefSiguiente", "fnNextDatosVehiculo");
    fnhrefSegAnt("ahrefatras", "fnAntCSDatosVendedor");

}

function fnNextDatosVehiculo() {
    if (!$("#DivCSDatosComprador").valid()) {
        Swal.fire({
            title: 'Datos Incompletos',
            text: '',
            icon: 'warning'
        });
        return;
    }
    fnfaschNextTimeline("DivCSDatosVehiculo", ArregloDivsLineTime, "liAVIDatosDistintasPadres", "liCSDatosComprador");
    fnhrefSegAnt("ahrefSiguiente");
    fnhrefSegAnt("ahrefatras", "fnAntCSDatosComprador");
    $("#btn_Guardar_PSM").show();
}


/* Funciones para retroseder a la pagiona anterior */
function fnAntCSDatosVendedor() {
    fnfaschAnteTimeline("DivCSTranVehicular", ArregloDivsLineTime, "liCSTranVehicular", "liCSDatosComprador");
    fnhrefSegAnt("ahrefatras");
    fnhrefSegAnt("ahrefSiguiente", "fnNextCSDatosCompra");
    $("#btn_Guardar_PSM").hide();
}

function fnAntCSDatosComprador() {
    fnfaschAnteTimeline("DivCSDatosComprador", ArregloDivsLineTime, "liCSDatosComprador", "liAVIDatosDistintasPadres");
    fnhrefSegAnt("ahrefatras", "fnAntCSDatosVendedor");
    fnhrefSegAnt("ahrefSiguiente", "fnNextDatosVehiculo");
    fnhrefSegAnt("btnGrabarIntPais");
    $("#btn_Guardar_PSM").hide()
}


function Probar() {

    var PodId = $("#TXT_N_PSM").val();;



    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerPoderes.php", "op=sp_ListarPoderesClient&PodId=" + PodId, function (result) {

        var arreglo = JSON.parse(result);

        //var indice = arreglo.findIndex(elemt => elemt.PodPoderdantes == arreglo);
        //var arreglo = ("indice",indice);
        //$("#cboIPProvincia").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {


            var poderantex = JSON.parse(item.PodPoderdantes);

            console.log("Id del poderdante, ", item.PodId);

            $.each(poderantex, function (idxx, i) {


                $("#txtNombresP").val(i.Nombre);

                //$("#CBO_T_DOC_PO_SM").val();
                //$("#TXT_N_PSM").val();

                $("#ApellidoPaterno").val(i.ApePaterno);
                $("#ApellidoMaterno").val(i.ApeMaterno);
                $("#txtNombresP").val(i.Nombre);
                //$("#ApellidoPaterno").val() + ' ' + $("#ApellidoMaterno").val() + ' ' + $("#txtNombresP").val();
                $("#cboEstadoCivil_PO").val(i.EstCivil);
                $("#cboNacionalidad_PO").val(i.Nacionalidad);
                $("#telefono_po").val(i.Numero);
                $("#Email").val(i.Email);
                $("#ocupo").val(i.Ocupacion);
                $("#codpen").val(i.CodPensionista);
                $("#tpension").val(i.TPension);



                $("#cboIPPais_PO").val(i.Pais);
                $("#cboIPDepartamento").val(i.Departamento);
                $("#cboIPProvincia").val(i.Provincia);
                $("#cboIPDIstrito").val(i.Distrito);
                $("#txtIPDireccion").val(i.Direccion);
                $("#redactar_po").val(i.redacta);

                //console.log("Nombre ech",i.Nombre);

            });


            console.log("Podernantes json", poderantex);
            //var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            //$("#cboIPProvincia").append(opciones);

        });
    });



}

function ProbarA() {

    var PodId = $("#TXT_N_COMPRA").val();;;



    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerPoderes.php", "op=sp_ListarPoderesClient&PodId=" + PodId, function (result) {

        var arreglo = JSON.parse(result);

        //var indice = arreglo.findIndex(elemt => elemt.PodPoderdantes == arreglo);
        //var arreglo = ("indice",indice);
        //$("#cboIPProvincia").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {


            var apoderantex = JSON.parse(item.PodApoderados);

            $.each(apoderantex, function (idxx, i) {




                //$("#CBO_T_DOC_PO_SM").val();
                //$("#TXT_N_PSM").val();
                //$("#CBO_T_DOC_PO_SM").val(i.Tipo);
                //$("#TXT_N_PSM").val(i.Documento);
                $("#ApellidoPaternoApo").val(i.ApePaterno);
                $("#ApellidoMaternoApo").val(i.ApeMaterno);
                $("#txtNombresPApo").val(i.Nombre);
                //$("#ApellidoPaterno").val() + ' ' + $("#ApellidoMaterno").val() + ' ' + $("#txtNombresP").val();
                $("#cboEstadoCivil_AP").val(i.EstCivil);
                $("#cboNacionalidad_AP").val(i.Nacionalidad);
                $("#TelApo").val(i.Numero);
                $("#EmailApo").val(i.Email);

                $("#ocuapo").val(i.Ocupacion);


                $("#cboIPPais_APO").val(i.Pais);
                $("#cboIPDepartamentoApo").val(i.Departamento);
                $("#cboIPProvinciaApo").val(i.Provincia);
                $("#cboIPDIstritoApo").val(i.Distrito);
                $("#DireccionApo").val(i.Direccion);





                //console.log("Nombre ech",i.Nombre);

            });
            console.log("Podernantes json", apoderantex);
            //var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            //$("#cboIPProvincia").append(opciones);

        });
    });



}


function Notif() {

    var titulo = "Notaria Paino";
    var icono = "fa fa-clipboard-list circle";
    var color = "blue";
    var mensaje = "SOLICITUD ENVIADA PODERES COBRO PENS. ONP"
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

var LogArreglo = [];
function grabarLog(resultado,logfunction,logmodulo) {
                
    let locationData = {
        logerror: resultado,
        logfunction:logfunction,
        logmodulo:logmodulo
    }
    LogArreglo.push(locationData);
    console.log(LogArreglo);
}

var ResultInsertPoderONP;

function InsertPoderONP(callback) {

    var arreglo = [];

    var PerTide = $("#CBO_T_DOC_PO_SM").val();
    var PerIdeNro = $("#TXT_N_PSM").val();
    var PerTPer = '';
    var PerApePat = $("#ApellidoPaterno").val();
    var PerApeMat = $("#ApellidoMaterno").val();
    var PerNom = $("#txtNombresP").val();
    var PerNomCo = $("#ApellidoPaterno").val() + ' ' + $("#ApellidoMaterno").val() + ' ' + $("#txtNombresP").val();
    var PerECiv = $("#cboEstadoCivil_PO").val();
    var PerNacion = $("#cboNacionalidad_PO").val();
    var PerTlfNro = $("#telefono_po").val();
    var PerEmail = $("#Email").val();
    var PerObser = '';
    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = $("#ocupo").val();
    var PerDirDes = '';
    var PerTIdeP = '';
    var PerIdeNroP = '';
    var PerTIdeM = '';
    var PerIdeNroM = '';
    var PerFchNac = '';
    var PerRazSoc = '';
    var PerRazSocEmail = '';

    var cboIPPais_PO = $("#cboIPPais_PO").val();
    var cboIPDepartamento = $("#cboIPDepartamento").val();
    var cboIPProvincia = $("#cboIPProvincia").val();
    var cboIPDIstrito = $("#cboIPDIstrito").val();
    var txtIPDireccion = $("#txtIPDireccion").val();
    //var redactar_po = $("#redactar_po").val();
    var codpen = $("#codpen").val();
    var tpension = $("#tpension").val();



    //---------------------------------------------------

    var poderante = '[{"Tipo":' + '""' +
        ',"Documento":' + '"' + PerTide + '"' +
        ',"Numero":' + '"' + PerIdeNro + '"' +
        ',"Nombre":' + '"' + PerNom + '"' +
        ',"ApePaterno":' + '"' + PerApePat + '"' +
        ',"ApeMaterno":' + '"' + PerApeMat + '"' +
        ',"EstCivil":' + '"' + PerECiv + '"' +
        ',"Email":' + '"' + PerEmail + '"' +
        ',"Ocupacion":' + '"' + OcuCod + '"' +
        ',"Nacionalidad":' + '"' + PerNacion + '"' +
        ',"Pais":' + '"' + cboIPPais_PO + '"' +
        ',"Departamento":' + '"' + cboIPDepartamento + '"' +
        '+,"Provincia":' + '"' + cboIPProvincia + '"' +
        ',"Distrito":' + '"' + cboIPDIstrito + '"' +
        ',"Direccion":' + '"' + txtIPDireccion + '"' +
        ',"DireccionCompleta":' + '"' + " " + '"' +
        ',"NumeroCta":"","Otro":' + '"' + PerObser + '"}]';

    //-------------------------------------------------------

    var PerTideA = $("#CBO_T_APO").val();
    var PerIdeNroA = $("#TXT_N_COMPRA").val();
    var PerTPerA = '';
    var PerApePatA = $("#ApellidoPaternoApo").val();
    var PerApeMatA = $("#ApellidoMaternoApo").val();
    var PerNomA = $("#txtNombresPApo").val();
    var PerNomCoA = $("#ApellidoPaternoApo").val() + ' ' + $("#ApellidoMaternoApo").val() + ' ' + $("#txtNombresPApo").val();
    var PerECivA = $("#cboEstadoCivil_AP").val();
    var PerNacionA = $("#cboNacionalidad_AP").val();
    var PerTlfNroA = $("#TelApo").val();
    var PerEmailA = $("#EmailApo").val();
    var PerObserA = '';
    var PerConyTIdeA = '';
    var PerConyIdeA = '';
    var OcuCodA = $("#ocuapo").val();

    var PerDirDesA = '';
    var PerTIdePA = '';
    var PerIdeNroPA = '';
    var PerTIdeMA = '';
    var PerIdeNroMA = '';
    var PerFchNacA = '';
    var PerRazSocA = '';
    var PerRazSocEmailA = '';

    var cboIPPais_APO = $("#cboIPPais_APO").val();
    var cboIPDepartamentoApo = $("#cboIPDepartamentoApo").val();
    var cboIPProvinciaApo = $("#cboIPProvinciaApo").val();
    var cboIPDIstritoApo = $("#cboIPDIstritoApo").val();
    var DireccionApo = $("#DireccionApo").val();






    var apoderado = '[{"Tipo":' + '""' +
        ',"Documento":' + '"' + PerTideA + '"' +
        ',"Numero":' + '"' + PerIdeNroA + '"' +
        ',"Nombre":' + '"' + PerNomA + '"' +
        ',"ApePaterno":' + '"' + PerApePatA + '"' +
        ',"ApeMaterno":' + '"' + PerApeMatA + '"' +
        ',"EstCivil":' + '"' + PerECivA + '"' +
        ',"Email":' + '"' + PerEmailA + '"' +
        ',"Ocupacion":' + '"' + OcuCodA + '"' +
        ',"Nacionalidad":' + '"' + PerNacionA + '"' +
        ',"Pais":' + '"' + cboIPPais_APO + '"' +
        ',"Departamento":' + '"' + cboIPDepartamentoApo + '"' +
        '+,"Provincia":' + '"' + cboIPProvinciaApo + '"' +
        ',"Distrito":' + '"' + cboIPDIstritoApo + '"' +
        ',"Direccion":' + '"' + DireccionApo + '"' +
        ',"DireccionCompleta":' + '"' + " " + '"' +
        ',"NumeroCta":"","Otro":' + '"' + PerObserA + '"}]';



    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerPoderes.php", "op=Insert_Poderes&PodFch=" + "2020-04-25" + "&PodTip=" + "PO" + "&PodNumero=" + 0 + "&PodNumFch=" +
        "1000-01-01" + "&PodNumCta=" + " " + "&PodEst=" + "P" + "&PodHtml=" + "Texto plano" + "&PodFJud=" + "S" + "&PodFAdm=" + "S" + "&PodFConCiv=" + "S" + "&PodFConMer=" + "S" + "&PodFBan=" +
        "S" + "&PodFEsp=" + "S" + "&PodPoderdantes=" + poderante + "&PodApoderados=" + apoderado,
        function (result) {

            ResultInsertPoderONP=result;
            console.log(ResultInsertPoderONP);
            callback()

            if (result == 1) {
                
            } else {
                grabarLog(result,'InsertPoderONP','PODER COBRO ONP')
            }
        });

};

function InsertPodernante() {

    var PodPerTide = $("#CBO_T_DOC_PO_SM").val();
    var PodPerIdeNro = $("#TXT_N_PSM").val();
    var PodPerTipo = 'P';
    var PodPerApeP = $("#ApellidoPaterno").val();
    var PodPerApeM = $("#ApellidoMaterno").val();
    var PodPerEstCiv = $("#cboEstadoCivil_PO").val();
    var PodPerOcupacion = $("#ocupo").val();;
    var PodPerNac = $("#cboNacionalidad_PO").val();
    var PodPerPais = $("#cboNacionalidad_PO").val();
    var PodPerDpto = $("#cboIPDepartamento").val();
    var PodPerDire = $("#txtIPDireccion").val();
    var PodPerDist = $("#cboIPDIstrito").val();
    var PodPerProv = $("#cboIPProvincia").val();
    var PodPerNom = $("#txtNombresP").val();
    var PodPerEmail = $("#Email").val();
    var PodPerTlf = $("#telefono_po").val();

    $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerPoderes.php", "op=PartPoderes&PodPerTide=" + PodPerTide +
        "&PodPerIdeNro=" + PodPerIdeNro + "&PodPerTipo=" + PodPerTipo + "&PodPerApeP=" + PodPerApeP +
        "&PodPerApeM=" + PodPerApeM + "&PodPerEstCiv=" + PodPerEstCiv + "&PodPerOcupacion=" + PodPerOcupacion +
        "&PodPerNac=" + PodPerNac + "&PodPerPais=" + PodPerPais + "&PodPerDpto=" + PodPerDpto + "&PodPerDire=" + PodPerDire +
        "&PodPerDist=" + PodPerDist + "&PodPerProv=" + PodPerProv + "&PodPerNom=" + PodPerNom + "&PodPerEmail=" + PodPerEmail +
        "&PodPerTlf=" + PodPerTlf,
        function (result) {
            if (result == 1) {
                InsertPodernanteTMPER10()
            } else {
                console.log(result);
                InsertPodernanteTMPER10()
                grabarLog(result,'InsertPodernante','PODER COBRO ONP')
            }
        });
};

function InsertApoderado() {

    var PodPerTide = $("#CBO_T_APO").val();
    var PodPerIdeNro = $("#TXT_N_COMPRA").val();
    var PodPerTipo = 'A';
    var PodPerApeP = $("#ApellidoPaternoApo").val();
    var PodPerApeM = $("#ApellidoMaternoApo").val();
    var PodPerEstCiv = $("#cboEstadoCivil_AP").val();
    var PodPerOcupacion = $("#ocuapo").val();;
    var PodPerNac = $("#cboNacionalidad_AP").val();
    var PodPerPais = $("#cboIPPais_APO").val();
    var PodPerDpto = $("#cboIPDepartamentoApo").val();
    var PodPerDire = $("#DireccionApo").val();
    var PodPerDist = $("#cboIPDIstritoApo").val();
    var PodPerProv = $("#cboIPProvinciaApo").val();
    var PodPerNom = $("#txtNombresPApo").val();
    var PodPerEmail = $("#EmailApo").val();
    var PodPerTlf = $("#TelApo").val();

    $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerPoderes.php", "op=PartPoderes&PodPerTide=" + PodPerTide +
        "&PodPerIdeNro=" + PodPerIdeNro + "&PodPerTipo=" + PodPerTipo + "&PodPerApeP=" + PodPerApeP +
        "&PodPerApeM=" + PodPerApeM + "&PodPerEstCiv=" + PodPerEstCiv + "&PodPerOcupacion=" + PodPerOcupacion +
        "&PodPerNac=" + PodPerNac + "&PodPerPais=" + PodPerPais + "&PodPerDpto=" + PodPerDpto + "&PodPerDire=" + PodPerDire +
        "&PodPerDist=" + PodPerDist + "&PodPerProv=" + PodPerProv + "&PodPerNom=" + PodPerNom + "&PodPerEmail=" + PodPerEmail +
        "&PodPerTlf=" + PodPerTlf,
        function (result) {
            if (result == 1) {
                InsertApoderadoTMPER10()
            } else {
                console.log(result);
                InsertApoderadoTMPER10()
                grabarLog(result,'InsertApoderado','PODER COBRO ONP')
            }
        });
};


function InsertPodernanteTMPER10() {
    var TipoClient = 'PM';
    var PerTide = $("#CBO_T_DOC_PO_SM").val();
    var PerIdeNro = $("#TXT_N_PSM").val();
    var PerTPer = 'N';
    var PerApePat = $("#ApellidoPaterno").val();
    var PerApeMat = $("#ApellidoMaterno").val();
    var PerNom = $("#txtNombresP").val();
    var PerNomCo = $("#ApellidoPaterno").val() + ' ' + $("#ApellidoMaterno").val() + ' ' + $("#txtNombresP").val();
    var PerECiv = $("#cboEstadoCivil_PO").val();
    var PerNacion = $("#cboNacionalidad_PO").val();
    var PerTlfNro = $("#telefono_po").val();
    var PerEmail = $("#Email").val();
    var PerObser = '';
    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = '';
    var PerDirDes = $("#txtIPDireccion").val();
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
            console.log(result);
            if (result == 1) {

            } else {
                grabarLog(result,'InsertPodernanteTMPER10','PODER COBRO ONP')
            }
        });

};

function InsertApoderadoTMPER10() {
    var TipoClient = 'PM';
    var PerTide = $("#CBO_T_APO").val();
    var PerIdeNro = $("#TXT_N_COMPRA").val();
    var PerTPer = 'N';
    var PerApePat = $("#ApellidoPaternoApo").val();
    var PerApeMat = $("#ApellidoMaternoApo").val();
    var PerNom = $("#txtNombresPApo").val();
    var PerNomCo = $("#ApellidoPaternoApo").val() + ' ' + $("#ApellidoMaternoApo").val() + ' ' + $("#txtNombresPApo").val();
    var PerECiv = $("#cboEstadoCivil_AP").val();
    var PerNacion = $("#cboNacionalidad_AP").val();
    var PerTlfNro = $("#TelApo").val();
    var PerEmail = $("#EmailApo").val();
    var PerObser = '';
    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = '';
    var PerDirDes = $("#DireccionApo").val();
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
            console.log(result);
            if (result == 1) {
                $('input[type="number"]').val('');
                $('input[type="text"]').val('');
            } else {
                grabarLog(result,'InsertApoderadoTMPER10','PODER COBRO ONP')
            }
        });

};


function ComboDocsIdentidad() {
    //op variable
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);


        $("#CBO_T_DOC_PO_SM_T").html("");
        $("#CBO_T_DOC_PO_SM").html("");
        $("#CBO_T_APO").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CBO_T_DOC_PO_SM").append(opciones);
            $("#CBO_T_DOC_PO_SM_T").append(opciones);

            $("#CBO_T_APO").append(opciones);
            //$("#CBO_T_APO").append(opciones);
        });
        Preload()
    });
}






/*ESTADO CIVIL*/


function fnComboEstaCivil() {
    $("#cboEstadoCivil_PO").html("");
    $("#cboEstadoCivil_PO_ADD").html("");
    $("#cboEstadoCivil_AP").html("");
    $("#cboEstadoCivil_AP_ADD").html("");


    //$("#CBO_T_APO").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_EstadoCivil", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.ECivCod + "'>" + item.ECivDes + "</option>";
            $("#cboEstadoCivil_PO").append(opciones);
            $("#cboEstadoCivil_PO").val('07');


            $("#cboEstadoCivil_AP").append(opciones);
            $("#cboEstadoCivil_AP").val('07');

            $("#cboEstadoCivil_PO_ADD").append(opciones);
            //$("#CBO_T_APO").append(opciones);
        });
    });
}


//NACIONALIDAD

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



function DetPoder() {


    var PerTide = $("#CBO_T_DOC_PO_SM").val();
    var PerIdeNro = $("#TXT_N_PSM").val();

    var PerTPerAPO = $("#CBO_T_APO").val();
    var PerIdeNroAPO = $("#TXT_N_COMPRA").val();
    var cat = "CONP";
    var redactar = "";
    var codtipopen = $("#codpen").val();
    var tipopen = $("#tpension").val();
    var nrocuenta = "";
    var tdocpoadd = "";
    var ndocpoadd = "";
    var tdocapoadd = "";
    var ndocapoadd = "";
    var tdoctest = "";
    var ndoctest = "";

    if (apoderadoadd == true) {
        var tdocapoadd = $("#CBO_T_DOC_PO_SM_APOADD").val();
        var ndocapoadd = $("#TXT_N_PSM_APOADD").val();
        console.log("Apoderado add estado = ", apoderadoadd);


    } else if (apoderadoadd == false) {
        var tdocapoadd = "";
        var ndocapoadd = "";
        console.log("Apoderado add estado = ", apoderadoadd);
    }

    if (testr == true) {
        var tdoctest = $("#CBO_T_DOC_PO_SM_T").val();
        var ndoctest = $("#TXT_N_PSM_T").val();

        console.log("add test = ", testr);

    } else if (testr == false) {
        var tdoctest = "";
        var ndoctest = "";
        console.log("add test = ", testr);
    }

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerPoderes.php", "op=sp_insrt_det_PoderSinMinuta&PerTidePO=" + PerTide + "&PerIdeNroPO=" + PerIdeNro +
        "&PerTideAPO=" + PerTPerAPO +
        "&PerIdeNroAPO=" + PerIdeNroAPO +
        "&cat=" + cat +
        "&redactar=" + redactar +
        "&codtipopen=" + codtipopen +
        "&tipopen=" + tipopen +
        "&nrocuenta=" + nrocuenta +
        "&tdocpoadd=" + tdocpoadd +
        "&ndocpoadd=" + ndocpoadd +
        "&tdocapoadd=" + tdocapoadd +
        "&ndocapoadd=" + ndocapoadd +
        "&codtipopen=" + codtipopen +
        "&tdoctest=" + tdoctest +
        "&ndoctest=" + ndoctest
        /*var tdocpoadd="";
        var ndocpoadd="";
        var tdocapoadd= "";
        var ndocapoadd="";
        var tdoctest="";
        var ndoctest="";*/
        ,
        function (result) {
            console.log(result);
            if (result == 1) {

                Swal.fire({
                    icon: 'success',
                    title: 'Registrado Correctamente',
                    text: 'Poder Cobro de pensión ONP',
                })

            } else {

            }
        });


}

function InsertClientVIP_TESTRUEGO() {

    var PerTide = $("#CBO_T_DOC_PO_SM_T").val();
    var PerIdeNro = $("#TXT_N_PSM_T").val();
    var PerTPer = '';
    var PerApePat = $("#ApellidoPaternoT").val();
    var PerApeMat = $("#ApellidoMaternoT").val();
    var PerNom = $("#txtNombresPT").val();
    var PerNomCo = $("#ApellidoPaternoT").val() + ' ' + $("#ApellidoMaternoT").val() + ' ' + $("#txtNombresPT").val();
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

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {
        console.log(result);
        if (result == 1) {
            console.log("registro de testigo adicional", result);



            // AgregarDomicilioDBAADDPO();

            //AgregarHijosDBA();
        } else {
            //UpdateClientVIP();


            // AgregarDomicilioDBA_POADD();

            //AgregarHijosDBA();
        }
    });

};




function InsertClientVIP() {

    var PerTide = $("#CBO_T_DOC_PO_SM").val();
    var PerIdeNro = $("#TXT_N_PSM").val();
    var PerTPer = '';
    var PerApePat = $("#ApellidoPaterno").val();
    var PerApeMat = $("#ApellidoMaterno").val();
    var PerNom = $("#txtNombresP").val();
    var PerNomCo = $("#ApellidoPaterno").val() + ' ' + $("#ApellidoMaterno").val() + ' ' + $("#txtNombresP").val();
    var PerECiv = $("#cboEstadoCivil_PO").val();
    var PerNacion = $("#cboNacionalidad_PO").val();
    var PerTlfNro = $("#telefono_po").val();
    var PerEmail = $("#Email").val();
    var PerObser = '';

    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = $("#ocupo").val();
    var PerDirDes = '';
    var PerTIdeP = '';
    var PerIdeNroP = '';
    var PerTIdeM = '';
    var PerIdeNroM = '';
    var PerFchNac = '';
    var PerRazSoc = '';
    var PerRazSocEmail = '';

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {
        console.log(result);
        if (result == 1) {
            AgregarDomicilioDBA();

            if (chbapoderado_add == true) {
                InsertClientVIP_APOADD();

            } else if (chbapoderado_add == false) {


            }

            if (chkTestigoRuego == true) {
                InsertClientVIP_TESTRUEGO();
            } else if (chkTestigoRuego == false) {

            }


            DetPoder();

            Swal.fire({
                icon: 'success',
                title: 'Registrado Correctamente',
                text: 'Cobro de pensión ONP',
            })

            //AgregarHijosDBA();
        } else {
            //UpdateClientVIP();

            UpdateClientVIP()
            AgregarDomicilioDBA();

            //AgregarHijosDBA();
        }
    });

};


function UpdateClientVIP() {
    var PerTIde = $("#CBO_T_DOC_PO_SM").val();
    var PerIdeNro = $("#TXT_N_PSM").val();
    var PerApePat = $("#txtApePaterno").val();
    var PerApeMat = $("#txtApeMaterno").val();
    var PerNom = $("#txtNombresP").val();
    var PerECiv = $("#cboEstadoCivil_PO").val();
    var PerNacion = $("#cboNacionalidad_PO").val();
    var PerEmail = $("#txtEmail").val();
    var PerTlfNro = $("#telefono_po").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Cliente&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerEmail=" + PerEmail + "&PerTlfNro=" + PerTlfNro + "&PerTIde=" + PerTIde + "&PerIdeNro=" + PerIdeNro, function (result) {

    });

};



function UpdateClientVIPAPO() {
    var PerTIde = $("#CBO_T_APO").val();
    var PerIdeNro = $("#TXT_N_COMPRA").val();
    var PerApePat = $("#ApellidoPaternoApo").val();
    var PerApeMat = $("#ApellidoMaternoApo").val();
    var PerNom = $("#txtNombresPApo").val();
    var PerECiv = $("#cboEstadoCivil_AP").val();
    var PerNacion = $("#cboNacionalidad_AP").val();
    var PerEmail = $("#EmailApo").val();
    var PerTlfNro = $("#TelApo").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Cliente&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerEmail=" + PerEmail + "&PerTlfNro=" + PerTlfNro + "&PerTIde=" + PerTIde + "&PerIdeNro=" + PerIdeNro, function (result) {

    });

};

function InsertClientVIP_APO() {

    var PerTide = $("#CBO_T_APO").val();
    var PerIdeNro = $("#TXT_N_COMPRA").val();
    var PerTPer = '';
    var PerApePat = $("#ApellidoPaternoApo").val();
    var PerApeMat = $("#ApellidoMaternoApo").val();
    var PerNom = $("#txtNombresPApo").val();
    var PerNomCo = $("#ApellidoPaternoApo").val() + ' ' + $("#ApellidoMaternoApo").val() + ' ' + $("#txtNombresPApo").val();
    var PerECiv = $("#cboEstadoCivil_AP").val();
    var PerNacion = $("#cboNacionalidad_AP").val();
    var PerTlfNro = $("#TelApo").val();
    var PerEmail = $("#EmailApo").val();
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

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {
        console.log(result);
        if (result == 1) {
            AgregarDomicilioDBAAPO();
            //AgregarHijosDBA();
        } else {
            //UpdateClientVIP();
            UpdateClientVIPAPO();
            AgregarDomicilioDBA();

            Swal.fire({
                icon: 'success',
                title: 'Actualizado Exitosamente(Poder Sin Minuta)',
                text: 'PODERES'
            })
            //AgregarHijosDBA();
        }
    });

};

function MENSJ(result) {
    Preload();
    if (result == 1) {
        Swal.fire(
            'Registro Agregado Exitosamente',
            'Poder Cobro ONP',
            'success'
        )
        Notif();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Poder Cobro ONP',
            text: '¡Sucedió algo inesperado!'
        })
    }

};

/* GUAR LOS DATOS MOMENTANEOS EN EL BOTON*/

$("#btn_Guardar_PSM").click(function () {
    var info = $("#CHK_VAL_INFO").val();
    var cons = $("#CHK_VAL_CONS").val();
    console.log(info,cons)

    if(info=="S" &&  cons=="S")
    {
    MostrarPreload();
    InsertPoderONP(function (){
        InsertPodernante();
        InsertApoderado();
        setTimeout(() => {
            if(ResultInsertPoderONP==1){
                MENSJ(1);
            }else{
                MENSJ(2);
                GuardarErrorLOG();
            }
        }, 2000);
    });

}else 
{
 
    Swal.fire(
        'Información',
        'Debe aceptar las declaraciones para continuar.',
        'error'
    )
}
});

var apoderadoadd = false;

$("#chbapoderado_add ").change(function () {
    if ($("#chbapoderado_add").prop("checked") == true) {
        //console.log("TRUE");
        $("#APO_ADD").show();

        apoderadoadd = true;
        //apoderadoadd 
        console.log("Check apo add", apoderadoadd)
    }
    if ($("#chbapoderado_add").prop("checked") == false) {
        //console.log("false");
        $("#APO_ADD").hide();

        apoderadoadd = false;

        chbapoderado_add = console.log("Check apo add", apoderadoadd);
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









$("#update_apo").click(function () {
    console.log("Disteclick");
    var p_AUTOCOD = $("#autocod").val();
    var p_AP_T_DOC_APO = $("#CBO_T_APO").val();
    var p_AP_N_DOC_APO = $("#TXT_N_COMPRA").val();
    //DATOS COMUNES
    var p_NOMBRES_APO = $("#txtNombresPApo").val();
    var p_APEPA_APO = $("#ApellidoPaternoApo").val();
    var p_APEMA_APO = $("#ApellidoMaternoApo").val();
    var p_EMAIL_APO = $("#EmailApo").val();
    var p_TEL_APO = $("#TelApo").val();
    var p_EST_CIVIL_APO = $("#cboEstadoCivil_AP").val();
    var p_NAC_APO = $("#cboNacionalidad_AP").val();
    var p_OCU_APO = $("#cboTVOcupacion_APO").val();

    //MODAL
    var p_PAIS_APO = $("#cboIPPais_APO").val();
    var p_DEP_APO = $("#cboIPDepartamentoApo").val();
    var p_PRO_APO = $("#cboIPProvinciaApo").val();
    var p_DIS_APO = $("#cboIPDIstritoApo").val();
    var p_DIR_APO = $("#DireccionApo").val();


    F_UPDATE_S_PODER_APO(
        p_AUTOCOD,
        p_AP_T_DOC_APO,
        p_AP_N_DOC_APO,
        p_NOMBRES_APO,
        p_APEPA_APO,
        p_APEMA_APO,
        p_EMAIL_APO,
        p_TEL_APO,
        p_EST_CIVIL_APO,
        p_NAC_APO,
        p_OCU_APO,
        p_PAIS_APO,
        p_DEP_APO,
        p_PRO_APO,
        p_DIS_APO,
        p_DIR_APO);
    //AgregarDomicilioDBA();
    //AgregarHijosDBA();



});






/*INSERTAR ONP*/
$('#CHK_VAL_INFO').val("N");
$('#CHK_VAL_CONS').val("N");


$("#CHK_DEC_INFO").change(function () {
    if ($("#CHK_DEC_INFO").prop("checked") == true) {
        $('#CHK_VAL_INFO').val("S");
    }
    if ($("#CHK_DEC_INFO").prop("checked") == false) {
        $('#CHK_VAL_INFO').val("N");
    }
});




$("#CHK_DEC_CONS").change(function () {
    if ($("#CHK_DEC_CONS").prop("checked") == true) {
        $('#CHK_VAL_CONS').val("S");
    }
    if ($("#CHK_DEC_CONS").prop("checked") == false) {
        $('#CHK_VAL_CONS').val("N");
    }
});








//UPDATE




//BUSCAR
function fnBuscarPerPoderes() {

    //console.log("clic");
    //MostrarPreload();
    var PerTide = $("#CBO_T_DOC_PO_SM").val();
    var PerIdeNro = $("#TXT_N_PSM").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerPoderes.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);
        if (arreglo.length == 0) {
            //MostrarPreload();
            Swal.fire({
                icon: 'error',
                title: '¡El Cliente No Existe!',
                text: 'PODER COBRO ONP',
            })

            $("#txtNombreP").val("");
            $("#txtApePaterno").val("");
            $("#txtApeMaterno").val("");
            $("#txtEmail").val("");
            var txtTelefono = "";
            $("#txtTelefono").val("");

        } else {

            //MostrarPreload();
            //$('.actualizar_po').show();
            //$('.actualizar_apo').show();
            $('.actualizar_all').show();
            $.each(arreglo, function (idx, item) {


                //DATOS COMUNES

                $("#autocod").val(item.AUTOCOD);
                $("#txtNombresP").val(item.NOMBRES_PO);
                $("#ApellidoPaterno").val(item.APEPA_PO);
                $("#ApellidoMaterno").val(item.APEMA_PO);
                $("#Email").val(item.EMAIL_PO);
                $("#telefono_po").val(item.TEL_PO);
                $("#cboEstadoCivil_PO").val(item.EST_CIVIL_PO);
                $("#cboNacionalidad_PO").val(item.NAC_PO);
                $("#cboTVOcupacion_PO").val(item.OCU_PO);

                //MODAL
                $("#cboIPPais_APO").val(item.PAIS_PO);
                $("#cboIPDepartamento").val(item.DEP_PO);
                $("#cboIPProvincia").val(item.PRO_PO);
                $("#cboIPDIstrito").val(item.DIS_PO);
                $("#Direccion").val(item.DIR_PO);

                //PODERADO, ADD
                var p_PO_ADD = "";
                var p_PO_T_DOC_ADD_P = "";
                var p_PO_N_DOC_ADD_P = "";
                //APODERADO
                $("#CBO_T_APO").val(item.AP_T_DOC_APO);
                $("#TXT_N_COMPRA").val(item.AP_N_DOC_APO);
                //DATOS COMUNES
                $("#txtNombresPApo").val(item.NOMBRES_APO);
                $("#ApellidoPaternoApo").val(item.APEPA_APO);
                $("#ApellidoMaternoApo").val(item.APEMA_APO);
                $("#EmailApo").val(item.EMAIL_APO);
                $("#TelApo").val(item.TEL_APO);
                $("#cboEstadoCivil_AP").val(item.EST_CIVIL_APO);
                $("#cboNacionalidad_AP").val(item.NAC_APO);
                $("#cboTVOcupacion_APO").val(item.OCU_APO);

                //MODAL
                $("#cboIPPais_APO").val(item.PAIS_APO);
                $("#cboIPDepartamentoApo").val(item.DEP_APO);
                $("#cboIPProvinciaApo").val(item.PRO_APO);
                $("#cboIPDIstritoApo").val(item.DIS_APO);
                $("#DireccionApo").val(item.DIR_APO);

                var p_AP_T_DOC_ADD_P = ""
                var p_AP_N_DOC_ADD_P = ""

                // TOOGLE
                $("#CHK_VAL_INFO").val(item.DEC_INFO);
                $("#CHK_VAL_CONS").val(item.DEC_CONS);


                /*var p_COD_PENSION = "";
                var p_TIP_PENSION = "";
                var p_OBS_REDACT = "";
                var p_TEST_RUEGO = "";
                var p_TEST_T_DOC_RUEGO = "";
                var p_TEST_N_DOC_RUEGO = 321;
                var p_N_CUENTA = "";
                var p_CAT_PODER = "Poder sin minuta ";*/
            });
            fnBuscarDomicilio(PerTide, PerIdeNro);
        }
    });


    // fnBuscarHijos(PerIdeNro, PerTide);
}

//BUSCAR DOMILICIO

function fnBuscarDomicilio(Tipodocumen, NumDocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerPoderes.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#Direccion").html("");
        if (arreglo.length == 0) {
            filahtml = "";
            filahtml += "<tr><td colspan='3'>No existen registros</td></tr>";

            $("#Direccion").append(filahtml);
            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {
                filahtml = "";

                filahtml += "<tr>";




                filahtml += "<td data-label='Pais'> " + item.PAIS_PO + "</td>";
                filahtml += "<td data-label='Departamento'> " + item.DEP_PO + "</td>";
                filahtml += "<td data-label='Direccion'> " + item.DIR_PO + "</td>";
                filahtml += "<td data-label='Acciones'> <a id='bt_del' class='btn red' onclick='ConfirmDelete();'> <i class='fas fa-trash-alt'></i> </a> &nbsp; <a id='btnEditarDomiclio' name='btnEditarDomiclio' class='btn' data-toggle='modalb' data-target='#ModalEdicionDomicilio' onclick='fnDatosDomicilio(" + item.PerDirCod + ");'> <i class='fas fa-edit'></i> </a> </td>";
                filahtml += "</tr>";

                $("#tbDireccion").append(filahtml);
                $('.tabs').tabs();

                fnBuscarDomicilioapo(Tipodocumen, NumDocumen);
            });
        }



    });
}


function fnBuscarDomicilioapo(Tipodocumen, NumDocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerPoderes.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        var arreglo = JSON.parse(result);
        $("#Direccion").html("");
        if (arreglo.length == 0) {
            filahtml = "";
            filahtml += "<tr><td colspan='3'>No existen registros</td></tr>";

            $("#Direccion").append(filahtml);
            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {
                filahtml = "";
                filahtml += "<tr>";




                filahtml += "<td data-label='Pais'> " + item.PAIS_APO + "</td>";
                filahtml += "<td data-label='Departamento'> " + item.DEP_APO + "</td>";
                filahtml += "<td data-label='Direccion'> " + item.DIR_APO + "</td>";
                filahtml += "<td data-label='Acciones'> <a id='bt_del' class='btn red' onclick='ConfirmDelete();'> <i class='fas fa-trash-alt'></i> </a> &nbsp; <a id='btnEditarDomiclio' name='btnEditarDomiclio' class='btn' data-toggle='modalb' data-target='#ModalEdicionDomicilio' onclick='fnDatosDomicilio(" + item.PerDirCod + ");'> <i class='fas fa-edit'></i> </a> </td>";
                filahtml += "</tr>";

                $("#tbDireccion_apo").append(filahtml);
                $('.tabs').tabs();

            });
        }



    });
}


//cargar bomos preload


function fnLlenarPais() {
    $("#cboIPPais_PO").html("");
    $("#cboIPPais_APO").html("");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#cboIPPais_PO").append("<option value='00'>Seleccione</option>");

        $("#cboIPPais_APO").append("<option value='00'>Seleccione</option>");

        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboIPPais_PO").append(opciones);
            $("#cboIPPais_APO").append(opciones);

            $("#cboIPPais_PO").val("1309");

            $("#cboIPPais_APO").val("1309");

        });
    });
}

//PODERANTE

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

//APODERADO

function fnLlenarDepartamentoApo() {
    $("#cboIPDepartamentoApo").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDepartamentoApo").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamentoApo").append(opciones);
            $("#cboIPDepartamentoApo").val("15");
        });
    });
    fnLlenarDistritoApo("15");
}

$("#cboIPDepartamentoApo").change(function () {
    fnLlenarDistritoApo($(this).val());
});


// distrito

function fnLlenarDistritoApo(Departamento) {
    $("#cboIPProvinciaApo").html("");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPProvinciaApo").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvinciaApo").append(opciones);
            $("#cboIPProvinciaApo").val("05");
        });
    });
    $("#cboIPDIstritoApo").html("");
    $("#cboIPDIstritoApo").append("<option value='00'>Seleccione</option>");
    fnLlenarProvinciaApo("15", "05");
}


$("#cboIPProvinciaApo").change(function () {
    fnLlenarProvinciaApo($("#cboIPDepartamentoApo").val(), $(this).val());
});

function fnLlenarProvinciaApo(Departamento, provincia) {
    $("#cboIPDIstritoApo").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPDIstritoApo").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstritoApo").append(opciones);
            $("#cboIPDIstritoApo").val("01");
        });
    });
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
//-------------------------------cbo FRM Padre----------------------------------------------------------------------//

function ComboDocumento() {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CboTipoDocumento").html("");
        $.each(arreglo, function (idx, item) {
            var op = "<option value ='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumento").append(op);
        });

    });
}

function FnLlenarPais() {
    $("#cboNacionalidad").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var op = "<option value='" + item.PaiCod + "' >" + item.PaiDes + "</option>";
            $("#cboNacionalidad").append(op);
        });
    });
}


function fnRestFormDocimilio() {
    FnLlenarPais();
    FnLlenarDepartamento();
    $("#cboIPProvincia").html("");
    $("#cboIPProvincia").append("<option value='00'>Seleccione</option>");
    $("#cboIPDIstrito").html("");
    $("#cboIPDIstrito").append("<option value='00'>Seleccione</option>");
}

$("#cboIPProvincia").change(function () {
    FnLlenarProvincia($("#cboIPDepartamento").val(), $(this).val());
});


function FnAgregarDomicilio() {
    var tbDicracion = $("#tboPVIDireccion").html("");
    if ($("#tboPVIDireccion").html() == "No existen registros") {
        $("#tboPVIDireccion").html("");
    }

    var NomPais = $('#cboNacionalidad option:selected').html();
    var NomDepartamento = $('#cboIPDepartamento option:selected').html();
    var NomProvincia = $('cboIPProvincia option:selected').html();
    var NomDistrito = $('#cboIPDIstrito option:selected').html();
    var NomDireccion = $("#Direccion").val();

    filahtml = "";
    filahtml += "<tr>";
    filahtml += "<td data-label='Pais'>" + NomPais + "</td>";
    filahtml += "<td data-label='Departamento'>" + NomDepartamento + "</td>";
    filahtml += "<td data-label='Provincia'>" + NomProvincia + "</td>";
    filahtml += "<td data-label='Distrito'>" + NomDistrito + "</td>";
    filahtml += "<td data-label='Direccion'>" + NomDireccion + "</td>";
    filahtml += "</tr>";


    $("#tboPVIDireccion").append(filahtml);
    $('.tabs').tabs();
}

function ComboEstadoCivil() {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_EstadoCivil", function (result) {

        var arreglo = JSON.parse(result);

        $("#cboEstadoCivil").html("");
        $.each(arreglo, function (idx, item) {
            var op = "<option value='" + item.ECivCod + "' >" + item.ECiDes + "</option>";
            $("#cboEstadoCivil").append(op);
        });
    });
}

function FnBuscarPerPadre() {
    var Per = $("#CboTipoDocumento").val();
    var NroPer = $("#txtNumeroDocP").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + Per + "&PerIdeNro=" + NroPer, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            $("#txtNombresP").val(item.PerNom);
            $("#ApellidoPaterno").val(item.PerApePat);
            $("#ApellidoMaterno").val(item.PerApeMat);
            $("#cboEstadoCivil").val(item.PereCiv);
            $("#Email").val(item.PerEmail);
            $("#cboNacionalidad").val(item.PerNacion);
            $("#first_name").val(item.PerTlfNro);
        });
    });
}

//AGREGAR DOMICILO TABLA
function fnAddDomicilo_apo() {
    var tbbPVIDireccion = $("#tbDireccion_apo").html();
    if ($("#tbDireccion").html() == "No existen registros") {
        $("#tbDireccion").html("");
    }

    var nomcboIPPais = $('#cboIPPais_APO option:selected').html();
    var cboIPDepartamento = $('#cboIPDepartamentoApo option:selected').html();
    var txtIPDireccion = $("#DireccionApo").val();

    filahtml = "";
    filahtml += "<tr>";
    filahtml += "<td data-label='Pais'> " + nomcboIPPais + "</td>";
    filahtml += "<td data-label='Departamento'> " + cboIPDepartamento + "</td>";
    //filahtml += "<td> " + item.NomProv + "</td>";
    //filahtml += "<td> " + item.NomDist + "</td>";
    filahtml += "<td data-label='Direccion'> " + txtIPDireccion + "</td>";
    filahtml += "<td data-label='Acciones'> <a id='bt_del' class='btn red'><i class='fas fa-trash-alt'></i></a>&nbsp;<a id='btnEditar' class='btn'><i class='fas fa-edit'></i></a></td>";
    filahtml += "</tr>";

    $("#tbDireccion_apo").append(filahtml);
    $('.tabs').tabs();
}

//confirmacion de eliminacion de dir
function ConfirmDelete(PerDirCod) {
    Swal.fire({
        title: 'Estas seguro(a)?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, bórralo!'
    }).then((result) => {
        if (result.value) {
            var PerTide = $("#CBO_T_DOC_PO_SM").val();
            var PerIdeNro = $("#TXT_N_PSM").val();
            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
                if (result == 1) {
                    Swal.fire(
                        'Deleted!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                    fnBuscarDomicilio(PerTide, PerIdeNro);
                }
            });

        }
    })
};



function disableupdatall() {


    //$("#buscarapo").click(function () {

    //$('#actualizarap').attr('disabled', false);
    $('.actualizar_all').hide();

}

function disableupdatepo() {


    //$("#buscarapo").click(function () {

    //$('#actualizarap').attr('disabled', false);
    $('.actualizar_po').hide();

}

function disableupdateapo() {


    //$("#buscarapo").click(function () {

    //$('#actualizarap').attr('disabled', false);
    $('.actualizar_apo').hide();

}
//eliminar 

var arregloa = [];

function grabarDomicilioapo() {

    let locationData = {
        PerTIde: $("#CBO_T_APO").val(),
        PerIdeNro: $("#TXT_N_COMPRA").val(),
        PerPais: $("#cboIPPais_APO").val(),
        PerDept: $("#cboIPDepartamentoApo").val(),
        PerProv: $("#cboIPProvinciaApo").val(),
        PerDist: $("#cboIPDIstritoApo").val(),
        PerDirecc: $("#DireccionApo").val()
    }
    arregloa.push(locationData);
    console.log(arregloa);
}


//GRABAR ARRAY DOMICIOLIOS

/*---------------------------------------------------------------------------------------*/
//Buscar Cliente Por Dni
function fnBuscarCliente() {
    MostrarPreload();
    var validator = $("#DivCSTranVehicular").validate();
    validator.resetForm();
    var PerTide = $("#CBO_T_DOC_PO_SM").val();
    var PerIdeNro = $("#TXT_N_PSM").val();
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
            Preload()

            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'PODER COBRO ONP',
            })
        } else {


            $.each(arreglo, function (idx, item) {

                $("#txtNombresP").val(item.PerNom);
                $("#ApellidoPaterno").val(item.PerApePat);
                $("#ApellidoMaterno").val(item.PerApeMat);
                $("#Email").val(item.PerEmail);
                $("#telefono_po").val(item.PerTlfNro);
                $("#cboEstadoCivil_PO").val(item.PereCiv);
                $("#cboNacionalidad_PO").val(item.PerNacion);
            });
            Preload();
        }
    });

}

//Busca los Domicilios Registrado del Cliente
function fnBuscarDomicilioCliente(Tipodocumen, NumDocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        Preload()
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
                    ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px">Actualizar</labe>' +
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


//Buscar Cliente Por Dni
function FnBuscarApo() {
    MostrarPreload();
    var validator = $("#DivCSDatosComprador").validate();
    validator.resetForm();
    var PerTide = $("#CBO_T_APO").val();
    var PerIdeNro = $("#TXT_N_COMPRA").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_personaXnumdoc&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);
        if (arreglo.length == 0) {


            $("#txtNombresPApo").val("");
            $("#ApellidoPaternoApo").val("");
            $("#ApellidoMaternoApo").val("");
            $("#EmailApo").val("");
            var txtTelefono = "";
            $("#TelApo").val("");
            Preload()
            Swal.fire({
                icon: 'error',
                title: '¡Documento no encontrado!',
                text: 'PODER COBRO ONP',
            })
        } else {


            $.each(arreglo, function (idx, item) {

                $("#txtNombresPApo").val(item.PerNom);
                $("#ApellidoPaternoApo").val(item.PerApePat);
                $("#ApellidoMaternoApo").val(item.PerApeMat);
                $("#EmailApo").val(item.PerEmail);
                $("#TelApo").val(item.PerTlfNro);
                $("#cboEstadoCivil_AP").val(item.PereCiv);
                $("#cboNacionalidad_AP").val(item.PerNacion);
            });
            Preload();
        }
    });
}

function fnBuscarDomicilioClienteApo(Tipodocumen, NumDocumen) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=get_DomicilioXnumdoc&PerTide=" + Tipodocumen + "&PerIdeNro=" + NumDocumen, function (result) {
        Preload()
        var arreglo = JSON.parse(result);
        $("#DivDomicilioTBApo").html("");
        if (arreglo.length == 0) {
            $("#DivDomicilioTBApo").append("");
            $("#DivDomicilioTBApo").append('<div class="row col s12">' +
                '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro Ningun Domicilio Registrador:</b></label></div>' +
                '</div>');

            $('.tabs').tabs();
        } else {
            $.each(arreglo, function (idx, item) {

                $("#DivDomicilioTBApo").append("");
                $("#DivDomicilioTBApo").append('<div class="card" >' +
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
                    '<a class="btn btn-primary" style="font-size:10px" data-toggle="modalb" data-target="#ModalEdicionDomicilioApo" onclick="fnDatosDomicilioApo(\'' + item.PerDirCod + '\',\'' + item.PerPais + '\',\'' + item.PerDept + '\',\'' + item.PerProv + '\',\'' + item.PerDist + '\');">' +
                    ' <i class="fas fa-edit " style="font-size: 12px;"></i><labe style="font-size:9px">Actualizar</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6">' +
                    '<a class="btn red" style="font-size:10px" id="btnEliminarDomicilio" onclick="ConfirmDeleteAPO(' + item.PerDirCod + ');">' +
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

//Arreglo de Domiclio Cliente
var arreglo = [];

function grabarDomicilio() {

    let locationData = {
        PerTIde: $("#CBO_T_DOC_PO_SM").val(),
        PerIdeNro: $("#TXT_N_PSM").val(),
        PerPais: $("#cboIPPais_PO").val(),
        PerDept: $("#cboIPDepartamento").val(),
        PerProv: $("#cboIPProvincia").val(),
        PerDist: $("#cboIPDIstrito").val(),
        PerDirecc: $("#txtIPDireccion").val()
    }
    arreglo.push(locationData);
    console.log(arreglo);
}



//Arreglo de Domiclio Cliente
var arregloAPO = [];

function grabarDomicilioAPO() {

    let locationData = {
        PerTIde: $("#CBO_T_APO").val(),
        PerIdeNro: $("#TXT_N_COMPRA").val(),
        PerPais: $("#cboIPPais_APO").val(),
        PerDept: $("#cboIPDepartamentoApo").val(),
        PerProv: $("#cboIPProvinciaApo").val(),
        PerDist: $("#cboIPDIstritoApo").val(),
        PerDirecc: $("#DireccionApo").val()
    }
    arregloAPO.push(locationData);
    console.log(arregloAPO);
}

$("#btnGrabarIPDir").click(function () {
    fnAddDomiciloClienteAPO();
    grabarDomicilioAPO();
});



$("#btnGrabarIPDir_po").click(function () {
    fnAddDomiciloCliente();
    grabarDomicilio();
});

//LLenar Datos los CBO Update

function fnLlenarPaisEdicion() {
    $("#cboIPPaisEdicion").html("");
    $("#cboIPPaisEdicionAPO").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Nacionalidad", function (result) {
        var arreglo = JSON.parse(result);
        $("#cboIPPaisEdicion").append("<option value='00'>Seleccione</option>");
        $("#cboIPPaisEdicionAPO").append("<option value='00'>Seleccione</option>");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.PaiCod + "'>" + item.PaiDes + "</option>";
            $("#cboIPPaisEdicion").append(opciones);
            $("#cboIPPaisEdicion").val("00");

            $("#cboIPPaisEdicionAPO").append(opciones);
            $("#cboIPPaisEdicionAPO").val("00");

        });
    });
}

function fnLlenarDepartamentoEdicion() {
    $("#cboIPDepartamentoEdicion").html("");
    $("#cboIPDepartamentoEdicionAPO").html("");
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Departamento", function (result) {
        var arreglo = JSON.parse(result);

        $("#cboIPDepartamentoEdicion").append("<option value='00'>Seleccione</option>");
        $("#cboIPDepartamentoEdicionAPO").append("<option value='00'>Seleccione</option>");

        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DptoCod + "'>" + item.DptoDes + "</option>";
            $("#cboIPDepartamentoEdicion").append(opciones);
            $("#cboIPDepartamentoEdicion").val("00");

            $("#cboIPDepartamentoEdicionAPO").append(opciones);
            $("#cboIPDepartamentoEdicionAPO").val("00");

        });
    });

}

$("#cboIPDepartamentoEdicion").change(function () {
    fnLlenarDistritoEdicion($(this).val());
});

$("#cboIPDepartamentoEdicionAPO").change(function () {
    fnLlenarDistritoEdicion($(this).val());
});

function fnLlenarDistritoEdicion(Departamento) {
    $("#cboIPProvinciaEdicion").html("");
    $("#cboIPProvinciaEdicionAPO").html("");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Provincia&depart=" + Departamento, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.Provcod + "'>" + item.ProvDes + "</option>";
            $("#cboIPProvinciaEdicion").append(opciones);
            $("#cboIPProvinciaEdicionAPO").append(opciones);
        });
    });
    $("#cboIPDIstritoEdicion").html("");
    $("#cboIPDIstritoEdicion").append("<option value='00'>Cargando..</option>");
    $("#cboIPProvinciaEdicion").append("<option value='00'>Cargando..</option>");

    $("#cboIPDIstritoEdicionAPO").html("");
    $("#cboIPDIstritoEdicionAPO").append("<option value='00'>Cargando..</option>");
    $("#cboIPProvinciaEdicionAPO").append("<option value='00'>Cargando..</option>");
}


$("#cboIPProvinciaEdicion").change(function () {
    fnLlenarProvinciaEdicion($("#cboIPDepartamentoEdicion").val(), $(this).val());
});

$("#cboIPProvinciaEdicionAPO").change(function () {
    fnLlenarProvinciaEdicion($("#cboIPDepartamentoEdicionAPO").val(), $(this).val());
});

function fnLlenarProvinciaEdicion(Departamento, provincia) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_Distrito&depart=" + Departamento + "&distrito=" + provincia, function (result) {
        var arreglo = JSON.parse(result);
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.DistCod + "'>" + item.DistDes + "</option>";
            $("#cboIPDIstritoEdicion").append(opciones);
            $("#cboIPDIstritoEdicionAPO").append(opciones);
        });
    });
}


//Busca los datos y los Imprime en el Formulario de Actualizar Domiclio
function fnDatosDomicilio(Codigo, Pais, Departamento, Provincia, Distrito) {
    fnLlenarDistritoEdicion(Departamento);
    fnLlenarProvinciaEdicion(Departamento, Provincia);
    console.log(Departamento, Provincia)

    var PerTide = $("#CBO_T_DOC_PO_SM").val();
    var PerIdeNro = $("#TXT_N_PSM").val();

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
    });
};

function fnDatosDomicilioApo(Codigo, Pais, Departamento, Provincia, Distrito) {
    fnLlenarDistritoEdicion(Departamento);
    fnLlenarProvinciaEdicion(Departamento, Provincia);
    console.log(Departamento, Provincia)

    var PerTide = $("#CBO_T_APO").val();
    var PerIdeNro = $("#TXT_N_COMPRA").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/AutoriMenores.php", "op=sel_DomicilioUpdt&PerDirCod=" + Codigo + "&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        $.each(arreglo, function (idx, item) {

            $("#txtCodigoDomicilioAPO").val(item.PerDirCod);
            $("#cboIPPaisEdicionAPO").val(item.PerPais);
            $("#cboIPDepartamentoEdicionAPO").val(item.PerDept);
            $("#cboIPProvinciaEdicionAPO").val(item.PerProv);
            $("#cboIPDIstritoEdicionAPO").val(item.PerDist);
            $("#txtIPDireccionEdicionAPO").val(item.PerDirecc);

        });
    });
};

//Agrega los domicios que se encuentra en el arreglo ala dba
function AgregarDomicilioDBA() {
    $.each(arreglo, function (idx, item) {
        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_Domicilio&PerTIde=" + item.PerTIde + "&PerIdeNro=" + item.PerIdeNro + "&PerPais=" + item.PerPais + "&PerDept=" + item.PerDept + "&PerProv=" + item.PerProv + "&PerDist=" + item.PerDist + "&PerDirecc=" + item.PerDirecc, function (result) {
            console.log(result);
        });
    });
}

function AgregarDomicilioDBAAPO() {
    $.each(arregloAPO, function (idx, item) {
        $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_Domicilio&PerTIde=" + item.PerTIde + "&PerIdeNro=" + item.PerIdeNro + "&PerPais=" + item.PerPais + "&PerDept=" + item.PerDept + "&PerProv=" + item.PerProv + "&PerDist=" + item.PerDist + "&PerDirecc=" + item.PerDirecc, function (result) {
            console.log(result);
        });
    });
}

function fnAddDomicilo() {
    var tbbPVIDireccion = $("#tbDireccion").html();
    if ($("#tbDireccion").html() == "No existen registros") {
        $("#tbDireccion").html("");
    }

    var nomcboIPPais = $('#cboIPPais_PO option:selected').html();
    var cboIPDepartamento = $('#cboIPDepartamento option:selected').html();
    var txtIPDireccion = $("#Direccion").val();

    filahtml = "";
    filahtml += "<tr>";
    filahtml += "<td data-label='Pais'> " + nomcboIPPais + "</td>";
    filahtml += "<td data-label='Departamento'> " + cboIPDepartamento + "</td>";
    //filahtml += "<td> " + item.NomProv + "</td>";
    //filahtml += "<td> " + item.NomDist + "</td>";
    filahtml += "<td data-label='Direccion'> " + txtIPDireccion + "</td>";
    filahtml += "<td data-label='Acciones'> <a id='bt_del' class='btn red'><i class='fas fa-trash-alt'></i></a>&nbsp;<a id='btnEditar' class='btn'><i class='fas fa-edit'></i></a></td>";
    filahtml += "</tr>";

    $("#tbDireccion").append(filahtml);
    $('.tabs').tabs();
}

//AGREGAR DOMICILO TABLA
function fnAddDomiciloCliente() {
    var tbbPVIDireccion = $("#DivDomicilioTB").html();
    if ($("#DivDomicilioTB").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro Ningun Domicilio Registrador:</b></label></div>' +
        '</div>') {
        $("#DivDomicilioTB").html("");
    }

    var nomcboIPPais = $('#cboIPPais_PO option:selected').html();
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
        '<a class="btn red" style="font-size:10px" id="bt_del" onClick="ConfirmEliminarElementoClienteD(\'' + idDomicilioDiv + '\',\'' + txtIPDireccion + '\')">' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div >' +
        '</div >');
}

function fnAddDomiciloClienteAPO() {
    var tbbPVIDireccion = $("#DivDomicilioTBApo").html();
    if ($("#DivDomicilioTBApo").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro Ningun Domicilio Registrador:</b></label></div>' +
        '</div>') {
        $("#DivDoDivDomicilioTBApomicilioTB").html("");
    }


    var nomcboIPPais = $('#cboIPPais_APO option:selected').html();
    var cboIPDepartamento = $('#cboIPDepartamentoApo option:selected').html();
    var cboIPProvincia = $('#cboIPProvinciaApo option:selected').html();
    var cboIPDIstrito = $('#cboIPDIstritoApo option:selected').html();
    var txtIPDireccion = $("#DireccionApo").val();
    var idDomicilioDiv = txtIPDireccion.replace(/ /g, "");
    console.log(idDomicilioDiv);
    $("#DivDomicilioTBApo").append("");
    $("#DivDomicilioTBApo").append('<div class="card" id="' + idDomicilioDiv + '">' +
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
        '<a class="btn red" style="font-size:10px" id="bt_del" onClick="ConfirmEliminarElementoClienteDAPO(\'' + idDomicilioDiv + '\',\'' + txtIPDireccion + '\')">' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div >' +
        '</div >');
}
//Funcion para Eliminar el Domicilio en el Arreglo no en la dba
function ConfirmEliminarElementoClienteD(idDomicilio, busqueda) {
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

            Eliminar_ElementoCliente(arreglo, indice, 1)
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

function ConfirmEliminarElementoClienteDAPO(idDomicilio, busqueda) {
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
            var indice = arregloAPO.findIndex(tipodoc => tipodoc.PerDirecc == busqueda);

            console.log(indice);

            Eliminar_ElementoCliente(arregloAPO, indice, 1)
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

//Funcion para Enviar el Indice del Arreglo que sera Eliminado
function Eliminar_ElementoCliente(my_array, posicion, cant) {
    my_array.splice(posicion, cant);
    return my_array;
}

//Elimina el Domicilio de la dba
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
            var PerTide = $("#CBO_T_DOC_PO_SM").val();
            var PerIdeNro = $("#TXT_N_PSM").val();
            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
                console.log(result);
                if (result == 1) {
                    Swal.fire(
                        'Procesado!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                    fnBuscarDomicilioCliente(PerTide, PerIdeNro);
                }
            });

        }
    })
};

function ConfirmDeleteAPO(PerDirCod) {
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
            var PerTide = $("#CBO_T_APO").val();
            var PerIdeNro = $("#TXT_N_COMPRA").val();
            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=dlt_Domicilio&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + PerDirCod, function (result) {
                console.log(result);
                if (result == 1) {
                    Swal.fire(
                        'Procesado!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                    fnBuscarDomicilioClienteApo(PerTide, PerIdeNro);
                }
            });

        }
    })
};

var podernanteadd = false;


$("#chbpoderante_add").change(function () {
    if ($("#chbpoderante_add").prop("checked") == true) {
        console.log("TRUE");
        $("#APO_ADD").show();
        podernanteadd = true;
        console.log("Chekeador podernante adicional : ", podernanteadd);

    }
    if ($("#chbpoderante_add").prop("checked") == false) {
        console.log("false");
        $("#APO_ADD").hide();
        podernanteadd = false;
        console.log("Chekeador podernante adicional : ", podernanteadd);
    }
});



var testr = false;

$("#chkTestigoRuego").change(function () {
    if ($("#chkTestigoRuego").prop("checked") == true) {
        console.log("TRUE");
        $("#TEST_ADD").show();
        testr = true;
        console.log("Chekeador add TEST : ", testr);


    }
    if ($("#chkTestigoRuego").prop("checked") == false) {
        console.log("false");
        testr = false;
        $("#TEST_ADD").hide();
        console.log("Chekeador add TEST : ", testr);
    }
});


function InsertClientVIP_APOADD() {

    var PerTide = $("#CBO_T_DOC_PO_SM_ADD").val();
    var PerIdeNro = $("#TXT_N_PSM_POADD").val();
    var PerTPer = '';
    var PerApePat = $("#ApellidoPaterno_POADD").val();
    var PerApeMat = $("#ApellidoMaterno_POADD").val();
    var PerNom = $("#txtNombresP_POADD").val();
    var PerNomCo = $("#ApellidoPaterno_POADD").val() + ' ' + $("#ApellidoMaterno_POADD").val() + ' ' + $("#txtNombresP_POADD").val();
    var PerECiv = $("#cboEstadoCivil_POADD").val();
    var PerNacion = $("#cboNacionalidad_POADD").val();
    var PerTlfNro = $("#telefono_POADD").val();
    var PerEmail = $("#Email_POADD").val();
    var PerObser = '';

    var PerConyTIde = '';
    var PerConyIde = '';
    var OcuCod = $("#ocupoadd").val();
    var PerDirDes = '';
    var PerTIdeP = '';
    var PerIdeNroP = '';
    var PerTIdeM = '';
    var PerIdeNroM = '';
    var PerFchNac = '';
    var PerRazSoc = '';
    var PerRazSocEmail = '';

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=insrt_ClienteALL&PerTide=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerTPer=" + PerTPer + "&PerApePat=" + PerApePat + "&PerApeMat=" + PerApeMat + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerECiv=" + PerECiv + "&PerNacion=" + PerNacion + "&PerTlfNro=" + PerTlfNro + "&PerEmail=" + PerEmail + "&PerObser=" + PerObser + "&PerConyTIde=" + PerConyTIde + "&PerConyIde=" + PerConyIde + "&OcuCod=" + OcuCod + "&PerDirDes=" + PerDirDes + "&PerTIdeP=" + PerTIdeP + "&PerIdeNroP=" + PerIdeNroP + "&PerTIdeM=" + PerTIdeM + "&PerIdeNroM=" + PerIdeNroM + "&PerFchNac=" + PerFchNac + "&PerRazSoc=" + PerRazSoc + "&PerRazSocEmail=" + PerRazSocEmail, function (result) {
        console.log(result);
        if (result == 1) {
            console.log("registro de podernante adicional", result);

            Swal.fire({
                icon: 'success',
                title: 'Registrado Correctamente',
                text: 'Poderes cobro de pensión ONP',
            })

            AgregarDomicilioDBAADDPO();

            //AgregarHijosDBA();
        } else {
            //UpdateClientVIP();


            // AgregarDomicilioDBA_POADD();

            //AgregarHijosDBA();
        }
    });

};


function AgregarDomicilioDBAADDPO() {

    var PerTIde = $("#CBO_T_DOC_PO_SM_POADD");
    var PerIdeNro = $("#TXT_N_PSM_POADD");
    var PerPais = $("#cboIPPais_POADD");
    var PerDept = $("#cboIPDepartamento_POADD");
    var PerProv = $("#cboIPProvincia_POADD");
    var PerDist = $("#cboIPDIstrito_POADD");
    var PerDirecc = $("#Direccion_POADD");


    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php",
        "op=insrt_Domicilio&PerTIde=" + PerTIde + "&PerIdeNro=" + PerIdeNro + "&PerPais=" + PerPais + "&PerDept=" + PerDept + "&PerProv=" + PerProv + "&PerDist=" + PerDist + "&PerDirecc=" + PerDirecc,
        function (result) {
            console.log(result);
        });

}



//Actualiza El Domicilio Seleccionado
function ActualizarDomicilio() {

    var Codigo = $("#txtCodigoDomicilio").val();
    var PerTide = $("#CBO_T_DOC_PO_SM").val();
    var PerIdeNro = $("#TXT_N_PSM").val();
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
                'PODER COBRO ONP',
                'success')
            fnBuscarDomicilioCliente(PerTide, PerIdeNro);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'PODER COBRO ONP',
                text: '¡Sucedió algo inesperado!'
            })
        }

    })
};

//Evento Onclick para el Boton del Modal Actualizar
$("#btnGrabarIPDir_po_edit").click(function () {
    ActualizarDomicilio();
});


function ActualizarDomicilioAPO() {

    var Codigo = $("#txtCodigoDomicilioAPO").val();
    var PerTide = $("#CBO_T_APO").val();
    var PerIdeNro = $("#TXT_N_COMPRA").val();
    var PerPais = $("#cboIPPaisEdicionAPO").val();
    var PerDept = $("#cboIPDepartamentoEdicionAPO").val();
    var PerProv = $("#cboIPProvinciaEdicionAPO").val();
    var PerDist = $("#cboIPDIstritoEdicionAPO").val();
    var PerDirecc = $("#txtIPDireccionEdicionAPO").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerCliente.php", "op=updt_Domicilio&PerPais=" + PerPais + "&PerDept=" + PerDept + "&PerProv=" + PerProv + "&PerDist=" + PerDist + "&PerDirecc=" + PerDirecc + "&PerTIde=" + PerTide + "&PerIdeNro=" + PerIdeNro + "&PerDirCod=" + Codigo, function (result) {
        console.log(result);

        if (result == 1) {
            Swal.fire(
                'Registro Actualizado Exitosamente',
                'PODER COBRO ONP',
                'success')
            fnBuscarDomicilioClienteApo(PerTide, PerIdeNro);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'PODER COBRO ONP',
                text: '¡Sucedió algo inesperado!'
            })
        }

    })
};

//Evento Onclick para el Boton del Modal Actualizar
$("#btnGrabarIPDir_po_editapo").click(function () {
    ActualizarDomicilioAPO();
});

/*-----------------------------------------------------------------------------------*/


function fnAddDomiciloClienteAPO() {
    var tbbPVIDireccion = $("#DivDomicilioTBApo").html();
    if ($("#DivDomicilioTBApo").html() == '<div class="row col s12">' +
        '<div class="col s12" align="center"><label style="font-size:11px;color:black;"><b>No se Encontro Ningun Domicilio Registrador:</b></label></div>' +
        '</div>') {
        $("#DivDoDivDomicilioTBApomicilioTB").html("");
    }


    var nomcboIPPais = $('#cboIPPais_APO option:selected').html();
    var cboIPDepartamento = $('#cboIPDepartamentoApo option:selected').html();
    var cboIPProvincia = $('#cboIPProvinciaApo option:selected').html();
    var cboIPDIstrito = $('#cboIPDIstritoApo option:selected').html();
    var txtIPDireccion = $("#DireccionApo").val();
    var idDomicilioDiv = txtIPDireccion.replace(/ /g, "");
    console.log(idDomicilioDiv);
    $("#DivDomicilioTBApo").append("");
    $("#DivDomicilioTBApo").append('<div class="card" id="' + idDomicilioDiv + '">' +
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
        '<a class="btn red" style="font-size:10px" id="bt_del" onClick="ConfirmEliminarElementoClienteDAPO(\'' + idDomicilioDiv + '\',\'' + txtIPDireccion + '\')">' +
        '<i class="fas fa-trash-alt" style="font-size: 12px;"></i><labe style="font-size:9px"> Eliminar</labe>' +
        '</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div >' +
        '</div >');
}

function GuardarErrorLOG() {
    $.each(LogArreglo, function (idx, item) {
        $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerLog.php", "op=sp_LOG&logerror=" + item.logerror + "&logfunction=" + item.logfunction + "&logmodulo=" + item.logmodulo, function (result) {
            console.log(result)
        });
    });
}