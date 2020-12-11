$(document).ready(function () {
    $("#divContenido").removeClass("swal2-shown swal2-height-auto");
    Preload();
    $("#GenerarReporte").hide();
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


function fnGenerarCabeceraTvh(TVCods)
{
    var TVFch;
    var TVKardex;

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerReporteVH.php", "op=sp_CabeceraTvh&TVCod=" + TVCods, function (result) {
        var arreglo = JSON.parse(result);
        
        var cantidad = arreglo.length;
        console.log(arreglo);
        
        $.each(arreglo, function (idx, item) {
            TVFch=item.TVFch;
            TVKardex=item.TVKardex;
        });
        $("#lblFecha").text(TVFch)
        $("#lblKardex").text(TVKardex)
    });
}

function fnGenerarParticipanteTvhV(TVCods)
{
    var Nombres;
    var Documentos;
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerReporteVH.php", "op=sp_ParticipantesTvhV&TVCod=" + TVCods, function (result) {
        var arreglo = JSON.parse(result);

        $("#lblDocumentos").text("");
        $("#lblNombres").text("");

        var cantidad = arreglo.length;
        console.log(arreglo);
        $.each(arreglo, function (idx, item) {
            if(item.TVPerTIde=='R'){
                Documentos=item.TIdeDes+' / '+item.TVPerIdeNro;
                Nombres=item.TVPerRazSoc;
            }else{
                Documentos=item.TIdeDes+' '+item.TVPerIdeNro;
                Nombres=item.TVPerNomCom;
            }
            
        });
        $("#lblDocumentos").text(Documentos)
        $("#lblNombres").text(Nombres)
    });
}

function fnGenerarParticipanteTvhC(TVCods)
{
    var Nombres;
    var Documentos;
    
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerReporteVH.php", "op=sp_ParticipantesTvhC&TVCod=" + TVCods, function (result) {
        var arreglo = JSON.parse(result);
        $("#lblDocumentosC").text("")
        $("#lblNombresC").text("")

        var cantidad = arreglo.length;
        console.log(arreglo);
        $.each(arreglo, function (idx, item) {
            if(item.TVPerTIde=='R'){
                 console.log(item.TVPerRazSoc);
                Documentos=item.TIdeDes+' / '+item.TVPerIdeNro;
                Nombres=item.TVPerRazSoc;
            }else{
                Documentos=item.TIdeDes+' '+item.TVPerIdeNro;
                Nombres=item.TVPerNomCom;
            } 
        });
        $("#lblDocumentosC").text(Documentos)
        $("#lblNombresC").text(Nombres)
        $("#GenerarReporte").show();
        Preload();
    });
}


function generarReporteVH()
{
    MostrarPreload()
    var TVCod;
    var TVVehMoneda;
    var TVVehMonto;
    var TVVehPlaca;
   
   var TVVehPlacas = $("#placa").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerReporteVH.php", "op=sp_PlacasTvh&TVVehPlaca=" + TVVehPlacas, function (result) {
        var arreglo = JSON.parse(result);
        
        $("#lblMoneda").text("")
        $("#lblPlaca").text("")
        $("#lblMonto").text("") 

        if(arreglo.length==0){
            Swal.fire({
                icon: 'error',
                title: 'Transferencia De Vehículos',
                text: '¡Reporte no Encontrado!'
            })
            Preload();
        }else{
            
            var cantidad = arreglo.length;
            console.log(arreglo);
            $.each(arreglo, function (idx, item) {
                TVCod=item.TVCod;
                TVVehMoneda=item.TVVehMoneda;
                TVVehMonto=item.TVVehMonto;
                TVVehPlaca=item.TVVehPlaca;
            });
            
            fnGenerarCabeceraTvh(TVCod)
            fnGenerarParticipanteTvhV(TVCod)
            fnGenerarParticipanteTvhC(TVCod)
    
             $("#lblMoneda").text(TVVehMoneda)
             $("#lblPlaca").text(TVVehPlaca)
             $("#lblMonto").text(TVVehMonto)

             BuscarCompradoresAdicionales(TVVehPlaca)
             BuscarVendedoresAdicionales(TVVehPlaca)
        }

        
    });
}

/*function HTMLaPDF(){
    var doc  =  new jsPDF()
    var HTMLelement = $('#GenerarReporte').html()
    doc.fromHTML(HTMLelement,10,10,{
        'width':190
    })
    doc.save('reporte_transferencia_vehicular');
}*/


function footer(doc, pageNumber, totalPages){

    var str = "Page " + pageNumber + " of " + totalPages
   
    doc.setFontSize(10);
    doc.text(str, margins.left, doc.internal.pageSize.height - 20);
    
};

var base64Img = null;


imgToBase64('images/logo/Android/Logo_Paino.png', function(base64) {
    base64Img = base64; 
});


function imgToBase64(url, callback, imgVariable) {
 
    if (!window.FileReade) {
        callback(null);
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
      imgVariable = reader.result.replace('text/xml', 'image/jpeg');
            callback(imgVariable);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
};

function header(doc)
{
    doc.setFontSize(30);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
  
    if (base64Img) {
       doc.addImage(base64Img, 'JPEG', margins.left, 10, 40,40);        
    }
      
    doc.text("NOTARIA PAINO", margins.left + 160, 50 );
  
    doc.line(3, 70, margins.width + 43,70); // horizontal line
};
function headerFooterFormatting(doc)
{
    var totalPages  = doc.internal.getNumberOfPages();

    for(var i = totalPages; i >= 1; i--)
    { //make this page, the current page we are currently working on.
        doc.setPage(i);      
                      
        header(doc);
        
        footer(doc, i, totalPages);
        
    }
};

function HTMLaPDF(){

    var d = new Date();
    var strDatedb = d.getFullYear() + "-" + "0" + (d.getMonth() + 1) + "-" + d.getDate();
    $("#FechaFin").val(strDatedb);
    //var strDate = d.getDate() + 
    var pdf = new jsPDF('p', 'pt', 'a4');
  pdf.setFontSize(18);
  pdf.fromHTML(document.getElementById('GenerarReporte'), 
    margins.left, // x coord
    margins.top,

    {
      // y coord
      width: margins.width// max width of content on PDF
    },function(dispose) {
      headerFooterFormatting(pdf)
    }, 
    margins);
    pdf.save('Report_Transference_'+strDatedb+'_Vehiculo'+gloplaquita+'.pdf');
    
  /*var iframe = document.createElement('iframe');
  iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
  document.body.appendChild(iframe);
  
  iframe.src = pdf.output('datauristring');*/
    
}




function BuscarCompradoresAdicionales(plaquita){
    MostrarPreload()
    var plaquita = plaquita;
   
   

    $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerReporteVH.php", "op=sp_ParticipantesTvhRC&TVCod=" + plaquita, function (result) {
        var arreglo = JSON.parse(result);
      

        console.log("compradores adicionales",result);

        if(arreglo.length==0){

            $("#CompradoresAdicionales").empty();
           
        }else{


            $("#CompradoresAdicionales").empty();

            $.each(arreglo, function (idx, item) {

               

            $("#CompradoresAdicionales").html("");
            $("#CompradoresAdicionales").append("");

            $("#CompradoresAdicionales").append('<div class="row">'+
                        '<center>'+
                        '<div class="col s12">'+
                            '<span class="new badge" data-badge-caption="" style="/* padding: 0 20%; */font-weight: 600;/* float: none; */font-size: inherit;background-color: #a73924;/* box-sizing: content-box; */width: 100%;/* border: solid #5B6DCD 10px; *//* padding: 5px; */;     border-radius: 50px;">DATOS DE COMPRADORES ADICIONALES</span>'+
                        '</div>'+
                    '</center>'+
                    '</div>'+

                    '<div style="margin-top:10px;">'+

                    '<div class="row col s12">'+
                        '<div class="col s6"><label style="font-size:11px;color:black;text-transform: uppercase;"><b>Documento:</b></label></div>'+
                        '<div class="col s6"><label style="font-size:11px;text-transform: uppercase;" >'+item.tipdoc+" "+item.TVPerIdeNro+'</label></div>'+
                    '</div>'+
                    '<div class="row col s12">'+
                        '<div class="col s6"><label style="font-size:11px;color:black;text-transform: uppercase;"><b>Nombre o Razón Social:</b></label></div>'+
                        '<div class="col s6"><label style="font-size:11px;text-transform: uppercase;">'+item.TVPerNomCom+'</label></div>'+
                    '</div>'+
                    
                    
                '</div>');
                
            });
            
           


        }

        
    });
}

var gloplaquita;

function BuscarVendedoresAdicionales(plaquita){
    MostrarPreload()
    var plaquita = plaquita;
   
   
   var TVVehPlacas = $("#placa").val();
    gloplaquita = TVVehPlacas;
    $.post("https://dotnetsa.com/PAINOSERVICE/app/controller/ControllerReporteVH.php", "op=sp_ParticipantesTvhRV&TVCod=" + plaquita, function (result) {
        var arreglo = JSON.parse(result);
      

        console.log("vendedores adicionales",result);

        if(arreglo.length==0){

            $("#VendedoresAdicionales").empty();
           
        }else{


            $("#VendedoresAdicionales").empty();

            $.each(arreglo, function (idx, item) {

               

            $("#VendedoresAdicionales").html("");
            $("#VendedoresAdicionales").append("");

            $("#VendedoresAdicionales").append('<div class="row">'+
                        '<center>'+
                        '<div class="col s12">'+
                            '<span class="new badge" data-badge-caption="" style="/* padding: 0 20%; */font-weight: 600;/* float: none; */font-size: inherit;background-color: #a73924;/* box-sizing: content-box; */width: 100%;/* border: solid #5B6DCD 10px; *//* padding: 5px; */    border-radius: 50px;">DATOS DE VENDEDORES ADICIONALES</span>'+
                        '</div>'+
                    '</center>'+
                    '</div>'+

                    '<div style="margin-top:10px;">'+
                    '<div class="row col s12">'+
                        '<div class="col s6"><label style="font-size:11px;color:black;text-transform: uppercase;"><b>DOCUMENTO:</b></label></div>'+
                        '<div class="col s6"><label style="font-size:11px;text-transform: uppercase;" >'+item.tipdoc+" "+item.TVPerIdeNro+'</label></div>'+
                    '</div>'+
                    '<div class="row col s12">'+
                        '<div class="col s6"><label style="font-size:11px;color:black;text-transform: uppercase;"><b>NOMBRE O RAZÓN SOCIAL:</b></label></div>'+
                        '<div class="col s6"><label style="font-size:11px;text-transform: uppercase;">'+item.TVPerNomCom+'</label></div>'+
                    '</div>'+
                    
                    
                '</div>');
                
            });
            
           


        }

        
    });
}



