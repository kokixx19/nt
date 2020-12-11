$(document).ready(function () {
    $("#DivPrimerosPN").hide();
    $("#DivSegundoLPN").hide();

    $("#DivPrimerosPJ").hide();
    $("#DivSegundoLPJ").hide();
    $("#wsp").hide();

});
/-------------------------------------------------------------------/
$("#PersonaNPL").click(function () {
  
        $("#DivPrimerosPN").show();
        $("#DivSegundoLPN").hide();
        $("#DivConsultaLibros").hide();
        $("#wsp").show();
});

$("#PersonaNSL").click(function () {

    $("#DivSegundoLPN").show();
    $("#DivPrimerosPN").hide();
    $("#DivConsultaLibros").hide();
    $("#wsp").show();
});
/-------------------------------------------------------------------/
$("#PersonaJPL").click(function () {

    $("#DivPrimerosPJ").show();
    $("#DivSegundoLPJ").hide();
    $("#DivConsultaLibros").hide();
    $("#wsp").show();
});

$("#PersonaJSL").click(function () {

    $("#DivSegundoLPJ").show();
    $("#DivPrimerosPJ").hide();
    $("#DivConsultaLibros").hide();
    $("#wsp").show();
});
/-------------------------------------------------------------------/
/*Regresar*/
$("#OcultarPLPN").click(function () {

    $("#DivPrimerosPN").hide();
    $("#DivSegundoLPN").hide();
    $("#DivConsultaLibros").show();
    $("#wsp").hide();
});

$("#OcultarSLPN").click(function () {

    $("#DivSegundoLPN").hide();
    $("#DivPrimerosPN").hide();
    $("#DivConsultaLibros").show();
    $("#wsp").hide();
});

/---------------------------------------------------------/
$("#OcultarPLPJ").click(function () {

    $("#DivSegundoLPJ").hide();
    $("#DivPrimerosPJ").hide();
    $("#DivConsultaLibros").show();
    $("#wsp").hide();
});

$("#OcultarSLPJ").click(function () {
    $("#DivSegundoLPJ").hide();
    $("#DivPrimerosPJ").hide();
    $("#DivConsultaLibros").show();
    $("#wsp").hide();
});