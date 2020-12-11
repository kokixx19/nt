$(document).ready(function () {
    //$("#tbTramistes").addClass('hide');
    Preload();
    ComboDocsIdentidadVendedor();
    $("#GenerarConsultaContrato").addClass('hide');
    $("#GenerarConsultaDatosRegistro").addClass('hide');
    
});

function Preload()
{
    setTimeout(function ()
    {

        $("#contenerdor_Carga").fadeTo(500, 0);
        $("#contenerdor_Carga").fadeOut('fast', function ()
        {
            $("#contenerdor_Carga").delay(500).hide();
        });
    }, 500)
}

function MostrarPreload()
{
    $("#contenerdor_Carga").fadeTo(980, 1);
    $("#contenerdor_Carga").show();
}

var kard = [];


function GenerarContrato()
{
    MostrarPreload();

    var documento = $("#txtNumeroDocP").val();
    var tipodoc = $("#CboTipoDocumento").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ConsultaContrato.php", "op=get_Contrato&PerTIde=" + tipodoc + "&PerIdeNro=" + documento, function (result)
    {
        filahtml = "";
        var tabla = $("#tbTramistes").DataTable();
        tabla.destroy();

        var arreglo = JSON.parse(result);

        var cantidad = arreglo.length;
        
        console.log(documento, tipodoc);

        //OCULTAMOs
        $("#GenerarConsultaContrato").addClass("hide");
        $("#GenerarConsultaDatosRegistro").addClass("hide");
        

        if (cantidad == 0)
        {
            Preload();
            Swal.fire({
                icon: 'error',

                title: 'No se encontraron datos',
                text: 'Consulta Contrato',
            });

            //$("#tbTramistes").hide();
            $('.tabs').tabs();

            $("#tableResult").html("");

        }
        else
        {
            Preload();
            //$.fn.dataTable.ext.errMode = 'none';
            //$("#tbTramistes").removeClass('hide');
            
            

            $.each(arreglo, function (idx, item) {

                kard = item.Kardex;
                console.log(kard);
                var Fecha = item.Fecha;
                var cont = item.Contrato;
                var indi = item.Indicación;

                //$('#tbTramistes').DataTable();

                filahtml += "";
                filahtml += "<tr>";
                filahtml += "<td data-label='Pais' >" + kard + "</td>";
                filahtml += "<td data-label='Fecha'> " + Fecha + "</td>";
                filahtml += "<td data-label='Contrato'>" + "<a href='#' class='kar' data-id='" + kard +"'>"+cont+"</a>" + "</td>";
                filahtml += "<td data-label='Indicacion'>" + indi + "</td>";

                filahtml += "</tr>";

            });


            $("#tableResult").html(filahtml);
            $('.tabs').tabs();


        }

        //ARMAMOS DATATABLE
        $('#tbTramistes').DataTable({
            "columnDefs": [
                { reponsivePriority: 1, taregts: 0 },
                { reponsivePriority: 2, targets: -1 }
            ],

            "responsive": {
                details:
                {
                    display: $.fn.dataTable.Responsive.display.childRow
                }
            },

             language: {
                "decimal": "",
                "emptyTable": "No hay información",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ Entradas",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "Sin resultados encontrados",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            },

             "lengthChange": false
        });

    });
}

$("#Consulta").click(function () {
    GenerarContrato();
});


/*function ComboDocsIdentidadVendedor() {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/Combos.php", "op=get_DocsIdentidad", function (result) {
        var arreglo = JSON.parse(result);

        $("#CboTipoDocumento").html("");
        $.each(arreglo, function (idx, item) {
            var opciones = "<option value='" + item.TIdeCod + "'>" + item.TIdeDes + "</option>";
            $("#CboTipoDocumento").append(opciones);
        });
    });
}*/

$("#tableResult").on("click", ".kar", function () {
    var id = $(this).data("id");
    DetalleContrato(id);
    DatosRegistro(id);
});

function DetalleContrato(id)
{

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ConsultaContrato.php", "op=get_Det_Contrato&AUTOCOD=" + id, function (result) {

        var arreglo = JSON.parse(result);

        var cantidad = arreglo.length;

        if (cantidad == 0)
        {
            $("#GenerarConsultaContrato").addClass('hide');
            Swal.fire({
                icon: 'error',

                title: 'No se encontraron datos',
                text: 'Consulta Contrato',
            });
            
        }
        else
        {
            $("#GenerarConsultaContrato").removeClass('hide');
            $.each(arreglo, function (idx, item) {

                var Kardex = item.AUTOCOD;
                var FechaIngr = item.FECH_INGR;
                var Contrato = item.CONTRATO;
                var Indicacion = item.INDICACION;
                var FechConclu = item.FECH_CONCLU;
                var FechaMinuta = item.FECH_MINUTA;
                var Abogado = item.ABOGADO;
                var Fech_Escri = item.FECH_ESCRITURA;
                var Fech_ult_Firma = item.FECH_ULT_FIRMA;
                var Abogado_Int = item.ABOGADO_INT;



                //$("#GenerarReporte").append("");
                $("#GenerarConsultaContrato").html('<div class="card" id="">' + '<div class="card-content p-3">'
                    + '<div class="row">'
                    + '<div class="col s12">'
                    + '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:14px;">' + 'Detalle Consulta Contrato' + '</span></div>'
                    + '</div>'
                    + '</div><br />'
                    + '<div class="row col s12">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Kardex:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Kardex + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Fecha:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + FechaIngr + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Contrato:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Contrato + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Indicación:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Indicacion + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Fecha Conclución:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + FechConclu + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Fecha Minuta:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + FechaMinuta + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Abogado:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Abogado + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Fecha Escritura:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Fech_Escri + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Fecha Ultima Firma:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Fech_ult_Firma + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Abogado Interior:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Abogado_Int + '</label></div>'
                    + '</div>'
                    + '</div>'
                    + '</div>');
            });
        }
    });
}


function DatosRegistro(idx) {

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ConsultaContrato.php", "op=get_Datos_Registro&AUTOCOD=" + idx, function (result) {

        var arregloDa = JSON.parse(result);

        var cantidadCA = arregloDa.length;

        if (cantidadCA == 0) {
            $("#GenerarConsultaDatosRegistro").addClass('hide');
            Swal.fire({
                icon: 'error',

                title: 'No se encontraron datos',
                text: 'Datos de Registro',
            });

        }
        else {
            $("#GenerarConsultaDatosRegistro").removeClass('hide');
            $.each(arregloDa, function (idx, item) {

                
                var Fecha = item.FECHA;
                var Num_titulo = item.NUM_TITULO;
                var Estado_titulo = item.ESTADO_TITULO;
                var Fecha_Estado = item.FECHA_ESTADO;



                //$("#GenerarReporte").append("");
                $("#GenerarConsultaDatosRegistro").html('<div class="card" id="">' + '<div class="card-content p-3">'
                    + '<div class="row">'
                    + '<div class="col s12">'
                    + '<div class="col s12" style="text-align:center;"><span class=" font-weight-bold" style="font-size:14px;">' + 'Datos de Registro' + '</span></div>'
                    + '</div>'
                    + '</div><br />'
                    + '<div class="row col s12">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Fecha:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Fecha + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Número Título:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Num_titulo + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Estado Título:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Estado_titulo + '</label></div>'
                    + '</div>'
                    + '<div class="row col s12" id="">'
                    + '<div class="col s6"><label style="font-size:11px;color:black"><b>Fecha Estado:</b></label></div>'
                    + '<div class="col s6"><label style="font-size:11px">' + Fecha_Estado + '</label></div>'
                    + '</div>'
                    + '</div>'
                    + '</div>');
            });
        }
    });
}