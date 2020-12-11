$(document).ready(function () {
    $("#tsoli").hide();
    $("#precio").hide();
    $("#direccion").hide();
    $("#razonsocial").hide();
    $("#contacto").hide();


    CargarFechaIni();

    $("#divContenido").removeClass("swal2-shown swal2-height-auto");



    $("#tbTramistes").hide();
    //FechaSystem();
    Preload();

    $('.loader').hide();
    //$("#DivTraTB").hide();

    $("#banco").hide();


    var dni_user = sessionStorage.getItem('dni_user');
    var tdoc_user = sessionStorage.getItem('tdoc_user');

    $('#CBO_T_DOC_PO_SM').val(tdoc_user);

    $('#txtNroDoc').val(dni_user);
});

function CargarFechaIni() {
    var d = new Date();
    var strDatedb = d.getFullYear() + "-" + "0" + (d.getMonth() + 1) + "-" + d.getDate();
    $("#FechaFin").val(strDatedb);
    //var strDate = d.getDate() + "-" + "0" + (d.getMonth() + 1) + "-" + d.getFullYear();
    var ano = d.getFullYear();

    var strDate = ano + "-01-01";
    //console.log("variable date",d);

    $("#FechaInicio").val(strDate);
}

/* Fucion para mostrar y ocultar preload*/

function ComboDocsIdentidad() {

    //op variable
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {

        var arreglo = JSON.parse(result);

        $("#CBO_T_DOC_PO_SM").html("");
        //$("#CBO_T_APO").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CBO_T_DOC_PO_SM").append(opciones);

            $("#CBO_T_APO").append(opciones);
        });

        $("#CBO_T_DOC_PO_SM").html("");
        //$("#CBO_T_APO").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CBO_T_DOC_PO_SM").append(opciones);
            // $("#CBO_T_APO").append(opciones);
        });

    });
}







function FechaSystem() {
    var f = new Date();
    var date = (f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate());
    FechaFin = $("#FechaFin").val(date);
    $("#FechaInicio").val("2020-1-01")
}




function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
            y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}


function fnBuscarDatalle(prm1, prm2) {

    MostrarPreload();
    var kardex = prm1;
    var cat = prm2;

    var ndoc = $('#txtNroDoc').val();

    console.log(kardex, cat, ndoc);
    console.log(prm1, prm2, ndoc);

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerMisTramites.php", "op=sp_get_mis_detalles_tramite&kardex=" + kardex + "&ndoc=" + ndoc + "&cat=" + cat, function (result) {

        var arreglo = JSON.parse(result);

        console.log("datos del arreglo ", arreglo);
        var tpenx;

        console.log("Categoria", $("#cbocat").val())
        console.log(arreglo)

        $.each(arreglo, function (idx, item) {

            $('#id').text(item.id);

            if ($("#cbocat").val() == 01) {
                console.log("alo")
                $("#doc").text(item.PodPerTide);
                $("#nombre").text(item.PodPerNom + ' ' + item.PodPerApeP + ' ' + item.PodPerApeM);
                $("#cargo").text(item.cargo);
                $("#modulo").text(item.seccion);
                $("#fecha").text(item.fecha);
                $("#acciones").text('Aun no asignado.');
                $("#obs").text('No hay datos Adicionales.');
                if (item.Estado == "PENDIENTE") {
                    $("#iconespera").remove();
                    $("#mensajeicon").remove();
                    $("#est").html('<div id="iconespera"><i class="fas fa-clock"></i></div><div id="mensajee" style="margin-top: -18px; margin-left: 200px;"><span style="margin-right: 70px;" class="new badge blue" data-badge-caption="Pendiente" ></span></div>');

                } else if (item.Estado == "GENERADO") {

                    $("#iconespera").remove();
                    $("#mensajeicon").remove();
                    $("#est").html('<div id="iconespera"><i class="fas fa-check"></i></div><div id="mensajee" style="margin-top: -18px;' +
                        'margin-left: 200px;"><span style="margin-right: 70px;" class="new badge" data-badge-caption="Generado" ></span></div>');

                } else if (item.Estado == "ANULADO") {
                    $('#verpass').removeClass('new badge blue');
                    $('#estado').addClass('new badge red');

                    $("#iconespera").append('');
                    $("#iconespera").append('<i class = "material-icons tiny">cloud</i>');

                }

            } else if ($("#cbocat").val() == 02) {
                $("#doc").text(item.doc);
                $("#nombre").text(item.nombre);
                if (item.cargo == '') {
                    $("#cargo").text('No identificado');
                }else if (item.cargo == undefined) {
                    $("#cargo").text("Solicitante ó Solicitado.");
                }


                $("#fecha").text(item.fecha);
                $("#modulo").text(item.seccion);

                if (item.acciones == undefined) {
                    $("#acciones").text('Aun no asignado.');

                } else {
                    $("#acciones").text(item.acciones);
                }

                if (item.observacion == undefined) {
                    $("#obs").text('Aun no asignado.');
                } else {
                    $("#obs").text(item.observacion);
                }


                if (item.Estado == "PENDIENTE") {


                    $("#iconespera").remove();
                    $("#mensajeicon").remove();


                    $("#est").html('<div id="iconespera"><i class="fas fa-clock"></i></div><div id="mensajee" style="margin-top: -18px; margin-left: 200px;"><span style="margin-right: 70px;" class="new badge blue" data-badge-caption="Pendiente" ></span></div>');


                } else if (item.Estado == "GENERADO") {

                    $("#iconespera").remove();
                    $("#mensajeicon").remove();



                    $("#est").html('<div id="iconespera"><i class="fas fa-check"></i></div><div id="mensajee" style="margin-top: -18px;' +
                        'margin-left: 200px;"><span style="margin-right: 70px;" class="new badge" data-badge-caption="Generado" ></span></div>');

                } else if (item.Estado == "ANULADO") {



                    $('#verpass').removeClass('new badge blue');
                    $('#estado').addClass('new badge red');

                    $("#iconespera").append('');
                    $("#iconespera").append('<i class = "material-icons tiny">cloud</i>');



                }
                if (item.razonsocial != "") {

                    $("#dir").remove();
                    $("#env").remove();
                    $("#obs").html("");

                    $("#obs").append(

                        "<div id='dir'><strong>BANCO EMISOR : " + item.razonsocial + "</strong></div>" +
                        "<div id='env'><strong>RUC :" + item.bancoruc + "</strong></div>");


                } else {
                    if (item.precio != 0 || item.prov != "") {

                        $("#dir").remove();
                        $("#env").remove();

                        $("#detob").remove();
                        $("#obs").html("");

                        $("#obs").append("<div id=''><strong>Envio a : " + item.prov + "</strong></div>" +

                            "<div id='dir'><strong>Direcciòn : " + item.direccion + "</strong></div>" +
                            "<div id='env'><strong>Costo : S / " + item.precio + ".00</strong></div>");
                        //$("#obs").append("<div id=''><strong>Envio a : "+ item.prov  +"</strong></div>");
                    } else {



                    }



                }




                //-------------------


            } else {
                $("#doc").text(item.doc);
                $("#nombre").text(item.nombre);
                if (item.cargo == '') {
                    $("#cargo").text('No identificado');
                } else if (item.cargo == '34') {
                    $("#cargo").text('Vendedor');
                } else if (item.cargo == '40') {
                    $("#cargo").text('Comprador');
                } else if (item.cargo == undefined) {
                    $("#cargo").text("Solicitante ó Solicitado.");
                } else {
                    $("#cargo").text(item.cargo);
                }


                $("#fecha").text(item.fecha);
                $("#modulo").text(item.seccion);

                if (item.acciones == undefined) {
                    $("#acciones").text('Aun no asignado.');

                } else {
                    $("#acciones").text(item.acciones);
                }

                if (item.observacion == undefined) {
                    $("#obs").text('Aun no asignado.');
                } else {
                    $("#obs").text(item.observacion);
                }


                if (item.Estado == "PENDIENTE") {


                    $("#iconespera").remove();
                    $("#mensajeicon").remove();


                    $("#est").html('<div id="iconespera"><i class="fas fa-clock"></i></div><div id="mensajee" style="margin-top: -18px; margin-left: 200px;"><span style="margin-right: 70px;" class="new badge blue" data-badge-caption="Pendiente" ></span></div>');


                } else if (item.Estado == "GENERADO") {

                    $("#iconespera").remove();
                    $("#mensajeicon").remove();



                    $("#est").html('<div id="iconespera"><i class="fas fa-check"></i></div><div id="mensajee" style="margin-top: -18px;' +
                        'margin-left: 200px;"><span style="margin-right: 70px;" class="new badge" data-badge-caption="Generado" ></span></div>');

                } else if (item.Estado == "ANULADO") {



                    $('#verpass').removeClass('new badge blue');
                    $('#estado').addClass('new badge red');

                    $("#iconespera").append('');
                    $("#iconespera").append('<i class = "material-icons tiny">cloud</i>');



                }
                //$("#estado").text(item.Estado);



            }














        });
    });


    Preload();
}





$("#buscar").click(function () {
    PerIdenro = $("#txtNroDoc").val();
    FechaInicio = $("#FechaInicio").val();
    FechaFin = $("#FechaFin").val();


    if ($("#cbocat").val() == "00") {
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Seleccione una opción valida.',
            showConfirmButton: false,
            timer: 1500
        })


    } else {
        MostrarPreload();
        fnGtabla2(PerIdenro, FechaInicio, FechaFin, $("#cbocat").val());

    }





});

/*$("#cbocat").change(function () {
    //$("#DivTraTB").append('<div><center><i class="fa fa-spinner" aria-hidden="true"></i><label>&nbsp;Cargando...</label></center></div>');
    //$(".loader").show()
    PerIdenro = $("#txtNroDoc").val();
    FechaInicio = $("#FechaInicio").val();
    FechaFin = $("#FechaFin").val();
    //setTimeout(ocultar_load(), 1000);  

    fnGtabla2(PerIdenro, FechaInicio, FechaFin,$(this).val());
 
    //$("#DivTraTB").show();
});*/





function del_Mistramites1(
    autocod, kardex, dni
) {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerMisTramites.php",
        "op=get_del_MisTramites&autocod=" + autocod +
        "&kardex=" + kardex +
        "&dni=" + dni,


        function (result) {
            if (result == true) {
                Swal.fire(
                    'Anulado Correctamente',
                    'Mis Tramites',

                    'success'
                )

            }
            console.log(result);
        });

};


function del_Mistramites(autocod, kardex, dni, cat) {

    console.log(autocod, kardex, dni, cat);
    Swal.fire({
        title: 'Confirmación de anulación',
        text: "Nota : No podrás revertir esto.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar ',
        cancelButtonText: 'Cancelar '
    }).then((result) => {

        if (result.value) {
            PerIdenro = $("#txtNroDoc").val();
            FechaInicio = $("#FechaInicio").val();
            FechaFin = $("#FechaFin").val();


            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerMisTramites.php", "op=get_del_MisTramites&autocod=" + autocod +


                "&kardex=" + kardex +
                "&dni=" + dni +
                "&cat=" + cat,
                function (result) {
                    console.log(result);
                    if (result == 1) {
                        Swal.fire(
                            'Anulado Exitosamente',
                            'El registro ha sido Anulado.',
                            'success'
                        )


                        fnGtabla2(PerIdenro, FechaInicio, FechaFin, $("#cbocat").val())
                    } else {

                        Swal.fire(
                            'Anulado Exitosamente',
                            'El registro ha sido Anulado.',
                            'success'
                        )

                        fnGtabla2(PerIdenro, FechaInicio, FechaFin, $("#cbocat").val())

                    }
                });

        }
    })
};






function fnGtabla2(PerIdenro, FechaInicio, FechaFin, cbocat) {
    PerIdenro = $("#txtNroDoc").val();
    FechaInicio = $("#FechaInicio").val();
    FechaFin = $("#FechaFin").val();
    //setTimeout(ocultar_load(), 1000);  
    //$("#DivTraTB").append('<div><center><i class="fa fa-spinner" aria-hidden="true"></i><label>&nbsp;Cargando...</label></center></div>');

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerMisTramites.php", "op=sp_get_MisTramistes2&PerIdenro=" + PerIdenro + "&FechaInicio=" + FechaInicio + "&FechaFin=" + FechaFin + "&cbocat=" + cbocat, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);

        $("#DivTraTB").html("");

        if (arreglo.length == 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'No hay registros.',
                showConfirmButton: false,
                timer: 1500
            })

        } else {
            //fnBuscarDomicilioapo(Tipodocumen, NumDocumen);
            $.each(arreglo, function (idx, item) {

                console.log(item.Kardex);

                var dni = PerIdenro;
                var kardex = item.Kardex;
                var autocod = item.Nro_Ope;
                var tipo = item.Tipo;
                var sec = ""

                if (tipo == "E") {

                    sec = 1;
                } else if (tipo == "I") {
                    sec = 2;
                }



                $("#DivTraTB").append("");
                $("#DivTraTB").append('<br\>' +
                    '<div class="card" style="border-radius: 20px;" >' +
                    '<div class="card-content p-3">' +

                    '<div class="row ">' +
                    '<div class="col s12">' +
                    '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:35px;"></span><img src="images/img/date.png" style="margin-right: 100px;" alt="House" height="32" width="32"><label style="    font-weight: 1000;">' + item.F_Ope + '</label> </div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s6" style="text-align: right;"><label style="font-size:11px;color:black"><b>Fecha Operacion:</b></label></div>' +
                    '<div class="col s6"><label style="font-size:10px">' + item.F_Ope + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12 "  ">' +
                    '<div class="col s6" style="text-align: right;"><label style="font-size:11px;color:black"><b>Kardex:</b></label></div>' +
                    '<div class="col s6"><label style="font-size:10px">' + item.Kardex + '</label></div>' +
                    '</div>' +
                    '<div class="row col s12">' +
                    '<div class="col s6" style="text-align: right;"><label style="font-size:11px;color:black"><b>Nº Operacion:</b></label></div>' +
                    '<div class="col s6"><label style="font-size:10px">' + item.Nro_Ope + '</label></div>' +
                    ' </div>' +
                    '<div class="row col s12">' +
                    '<div class="col s6" style="text-align: right;"><label style="font-size:11px;color:black"><b>Detalle:</b></label></div>' +
                    '<div class="col s6"><label style="font-size:10px">' + item.Detalle + '</label></div>' +
                    '</div>' +
                    ' <div class="row col s12">' +
                    ' <div class="col s6" style="text-align: right;"><label style="font-size:11px;color:black"><b>Estado:</b></label></div>' +
                    '<div class="col s6"><label style="font-size:10px">' + item.Estado + '</label></div>' +
                    ' </div>' +

                    '<br />' +

                    ' <div class="row">' +
                    '<div class="col s12" style="margin-top: 2%;">' +
                    '<div class="col s6 "   style="text-align: center;">' +
                    '<a class="btn btn-primary" style="font-size:10px; border-radius: 20px;" data-toggle="modalb" data-target="#modalDetalle" onclick="fnBuscarDatalle(' + item.Kardex + ',\'' + item.Tipo + '\');">' +
                    ' <i class="fas fa-info " style="font-size: 12px;"></i><labe style="font-size:9px"> Detalles</labe>' +
                    '</a>' +
                    ' </div>' +
                    '<div class="col s6" style="text-align: center;">' +
                    '<a class="btn red" style="font-size:10px; border-radius: 20px;" id="btnEliminarDomicilio" onclick="del_Mistramites(' + autocod + ',' + kardex + ',' + dni + ',\'' + item.Tipo + '\');">' +
                    '<i class="fas fa-window-close" style="font-size: 12px;"></i><labe style="font-size:9px"> Anular</labe>' +
                    '</a>' +
                    '</div>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>' +
                    '</div >' +
                    '</div >');
            });


            $("#DivTraTB").show();

        }
        Preload();


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