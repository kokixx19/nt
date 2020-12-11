
$(document).ready(function () {

    fnpintarpaginas("Logon/Login.html");

});

function fnpintarpaginas(paginaurl) {
    var DivContenido = $("#divContenido");
    $.get("./view/" + paginaurl, function (response) {
        DivContenido.html(response);
    });
}


function fnhrefSegAnt(etiqueta, fnNext = "") {
    if (fnNext == "") {
        $("#" + etiqueta).hide();
    } else {
        $("#" + etiqueta).prop("href", "javascript:" + fnNext + "();");
        $("#" + etiqueta).show();
    }
}

function fnfaschAnteTimeline(nomdivshow, nomdivhide, pintaborde = "", despintacirculo = "") {
    $("#" + nomdivshow).show();
    var arreglodivs = [];
    arreglodivs = nomdivhide;
    if (pintaborde != "") {
        $("#" + pintaborde).prop("class", "pgactual");
    }
    if (despintacirculo != "") {
        $("#" + despintacirculo).prop("class", "");
    }
    $.each(arreglodivs, function (idx, item) {
       // console.log(idx + "idx");
        if (item != nomdivshow) {
            $("#" + item).hide();
        }

    });
}       

//funcion para pasar a la siguiente paguina de la linea de tiempo
// parametros nomdivshow: div que mostrara,nomdivhid: las paginas que mostrara(div),pintaborde: pinta el borde del circulo cuado esta
// en la pagina, pintacirculo: pinta todo el circulo de la linea tiempo
function fnfaschNextTimeline(nomdivshow, nomdivhide, pintaborde = "", pintacirculo ="") {
    //console.log(nomdivshow + "div");
    
    $("#" + nomdivshow).show();
    //console.log(nomdivhide);
    var arreglodivs = [];
    arreglodivs = nomdivhide;
    //console.log("---" + pointli+"--LI--");
    if (pintaborde !=""){
        $("#" + pintaborde).prop("class", "pgactual");
    }
    if (pintacirculo != ""){
        $("#" + pintacirculo).prop("class", "active pgactual");
    }
    //console.log(arreglodivs);
    $.each(arreglodivs, function (idx, item) {
        //console.log(idx+"idx");
        if (item != nomdivshow){
            $("#" + item).hide();
        }
    });
}


