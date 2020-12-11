$(document).ready(function () {

    $("#DivFrmConsultas").hide();
    $("#DivFrmConsultasPoderes").hide();
    $("#divfrmConstSociedad").hide();
    $("#DivFormConstHipotecas").hide();
    $("#DivFormRPartidas").hide();
    $("#DivFormSIntestada").hide();
    $("#DivFormDivorcios").hide();
    $("#DivFormACapaces").hide();
    $("#DivFormFirmas").hide();
    $("#DivFormCopias").hide();
    $("#DivFormLibros").hide();
    $("#DivFormProtestos").hide();
    $("#DivFormCartasNotariales").hide();

});


/*Compra y Venta*/
$("#btnFormularioCV").click(function () {
    $("#DivFrmConsultas").show();
    $("#DivConsultasDeContrato").hide();
});
$("#Ocultar").click(function () {
    $("#DivFrmConsultas").hide();
    $("#DivConsultasDeContrato").show();
});

/*Poderes*/
$("#btnFormularioPD").click(function () {
    $("#DivFrmConsultasPoderes").show();
    $("#DivConsultasPoderes").hide();
});
$("#OcultarPD").click(function () {
    $("#DivFrmConsultasPoderes").hide();
    $("#DivConsultasPoderes").show();
});

/*Constitucion de Sociedades*/
$("#btnFormularioCS").click(function () {
    $("#divfrmConstSociedad").show();
    $("#DivConsultasConstDeSociedad").hide();
});

$("#OcultarCS").click(function () {
    $("#divfrmConstSociedad").hide();
    $("#DivConsultasConstDeSociedad").show();
});

/*Constitucion de Hipotecas*/
$("#btnFormularioHP").click(function () {
    $("#DivFormConstHipotecas").show();
    $("#DivConsultasHipotecas").hide();
});
$("#OcultarHP").click(function () {
    $("#DivFormConstHipotecas").hide();
    $("#DivConsultasHipotecas").show();
});

/*--------------Asuntos no Contenciosos-------------------*/
/*Rectificacion Partidas*/
$('#btnFormularioRPartidas').click(function () {
    $("#DivFormRPartidas").show();
    $("#DivConsultasRPartidas").hide();
});
$("#OcultarRPartidas").click(function () {
    $("#DivFormRPartidas").hide();
    $("#DivConsultasRPartidas").show();
});
/*Sucesion Intestada*/
$('#btnFormIntestada').click(function () {
    $("#DivFormSIntestada").show();
    $("#DivConsultaSIntestada").hide();
});
$("#OcultarSIntestada").click(function () {
    $("#DivFormSIntestada").hide();
    $("#DivConsultaSIntestada").show();
});
/*Patrimonio Familiar*/
$('#btnFormularioPFamiliar').click(function () {
    $("#DivFormPFamiliar").show();
    $("#DivConsultasPFamiliar").hide();
});
$("#OcultarPFamiliar").click(function () {
    $("#DivFormPFamiliar").hide();
    $("#DivConsultasPFamiliar").show();
});
/*Divorcios*/
$('#btnFormularioDivorcios').click(function () {
    $("#DivFormDivorcios").show();
    $("#DivConsultasDivorcios").hide();
});
$("#OcultarDivorcios").click(function () {
    $("#DivFormDivorcios").hide();
    $("#DivConsultasDivorcios").show();
});
/*Adopccion Personas Capaces*/
$("#btnFormularioPerCapaces").click(function () {
    $("#DivFormACapaces").show();
    $("#DivConsultasCapaces").hide();
});
$("#OcultarPerCapaces").click(function () {
    $("#DivFormACapaces").hide();
    $("#DivConsultasCapaces").show();
});

/*--------------------- Legalizaciones--------------------- */
$("#btnFormularioFirmas").click(function () {
    $("#DivFormFirmas").show();
    $("#DivConsultaFirmas").hide();
});

$("#OcultarFirmas").click(function () {
    $("#DivFormFirmas").hide();
    $("#DivConsultaFirmas   ").show();
});

$("#btnFormularioCopias").click(function () {
    $("#DivFormCopias").show();
    $("#DivConsultasCopias").hide();
});
$("#OcultarCopias").click(function () {
    $("#DivFormCopias").hide();
    $("#DivConsultasCopias").show();
});

/*Libros*/
/*Persona Natural*/
$("#btnFormularioPNLibros").click(function () {
    $("#DivFormLibros").show();
    $("#DivPrimerosPN").hide();
});

$("#OcultarLibros").click(function () {
    $("#DivFormLibros").hide();
    $("#cboDLFPersJuridica").show();
    $("#cboDLFPersNatural").show();

    $("#cboDLFPersNatural").val(0);
    $("#cboDLFPersJuridica").val(0);
});

$("#btnFormularioSPNLibros").click(function () {
    $("#DivFormLibros").show();
    $("#DivSegundoLPN").hide();
});
/*Persona Jurica*/


$("#btnFormularioPrimerosPJ").click(function () {
    $("#DivFormLibros").show();
    $("#DivPrimerosPJ").hide();
});

$("#btnFormularioSegundoLPJ").click(function () {
    $("#DivFormLibros").show();
    $("#DivSegundoLPJ").hide();
});

/* Protesto */
$("#btnFormularioProtestos").click(function () {
    $("#DivFormProtestos").show();
    $("#DivConsultaProtestos").hide();
});
$("#OcultarProtestos").click(function () {
    $("#DivFormProtestos").hide();
    $("#DivConsultaProtestos").show();
});

/*Carta Notariales*/
$("#btnFormularioCartasNotariales").click(function () {
    $("#DivFormCartasNotariales").show();
    $("#DivConsultaCartasNotariales").hide();
});
$("#OcultarCartasNotariales").click(function () {
    $("#DivFormCartasNotariales").hide();
    $("#DivConsultaCartasNotariales").show();
});
