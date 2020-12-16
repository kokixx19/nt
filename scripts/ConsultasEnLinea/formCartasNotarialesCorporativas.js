$(document).ready(function () {
 
    $("#busqueda").show();
    $("#pdf_form").hide();
    $("#return").hide();
    Preload();
    console.log("hello world!!");
    buscarCarta();
    //BuscarCarta();

    var usuario=localStorage.getItem('user-corp');
    var pass=localStorage.getItem('pass-corp');

    console.log("usuarios obtenidos por el local storage en formCartas : ",usuario,pass);
});




function Preload() {
    window.setTimeout(function () {

        $("#contenerdor_Carga").fadeTo(500, 0);
        $("#contenerdor_Carga").fadeOut('fast', function () {
            $("#contenerdor_Carga").delay(500).hide();
        });
    }, 200)

}

function pdf_viewer_cons(){

    url="https://wwww.dotnetsa.com/documents/C1.pdfhttps://dotnetsa.com/documents/C1.pdf";
    MostrarPreload();
    //var UrlPdf=localStorage.getItem('urlpdfdoc');
    
   $("#pdf_form").html("");
   $("#pdf_form").append('<embed src='+url+' type="application/pdf" width="100%" height="550px" />');
   Preload();
   
}

function pdf_viewer(url){

    //url="https://dotnetsa.com/documents/C1.pdf";

    console.log("#pdf_con")
    MostrarPreload();
    //pdf_viewer();
    $("#busqueda").hide();
    $("#pdf_form").show();
    $("#return").show();
   
    //Preload();
    


    //MostrarPreload();
 
    
   $("#pdf_form").html("");
   $("#pdf_form").append('<embed src='+url+' type="application/pdf" width="100%" height="550px" />');
   Preload();
   
}

$( "#pdf").click(function() {
    
});



$( "#pdf_con").click(function() {
    console.log("#pdf_con")
    MostrarPreload();
    //pdf_viewer_cons();
    $("#busqueda").hide();
    $("#pdf_form").show();
    $("#return").show();
    
    Preload();
    
});



$( "#return" ).click(function() {
    MostrarPreload();
    $("#busqueda").show();
    $("#pdf_form").hide();
    $("#return").hide();
    Preload();
});





function MostrarPreload() {
    $("#contenerdor_Carga").fadeTo(980, 1);
    $("#contenerdor_Carga").show();
}


function buscarCarta() {

    MostrarPreload();

    var usuario=localStorage.getItem('user-corp');
    var pass=localStorage.getItem('pass-corp');
    var iduser  = localStorage.getItem('id-corp');


    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumDocumento").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerMisTramites.php", "op=sp_get_cartasCorp&_id=" + iduser , function (result) {
        var arreglo = JSON.parse(result);
        var Afianzado;
        
        console.log(arreglo);
        if (arreglo.length >0) {


            $.each(arreglo, function (idxx, item) {

              



                $("#lista-corp").html("");
                $("#lista-corp").append('<div class="row ">'+
                                    '<div class="col s6">'+
                                        '<span style="font-size:12px; color: black;font-weight: 600;">Fecha ing. : </span>'+
                                        '<span class="" style="font-size: 12px;font-weight: 600; color: black;">'+item.fechaIng+'</span>'+
                                    '</div>'+
                                    '<div class="col s6">'+
    
    
                                        '<label style="font-size: 12px; font-weight: 600;">Nro Carta : <span style="font-weight: 600; font-size: 12px;">'+item.idcarta+'</span> </label>'+
    
    
                                    '</div>'+
                                '</div>'+
    
    
    
    
    
    
    
    
                                '<div class="row">'+
    
    
                                    '<div class="col s3" style="justify-items: right;"><label style="font-size:11px;color:black"><b>Nom. Remitente:</b></label>'+
                                    '</div>'+
                                    '<div class="col s3"><label style="font-size:10px">'+item.nombreRemitente+'</label>'+
                                    '</div>'+
    
    
                                    '<div class="col s3" style="justify-items: right;"><label style="font-size:11px;color:black"><b>Nom. Destinatario:</b></label>'+
                                    '</div>'+
                                    '<div class="col s3"><label style="font-size:10px">'+item.nombreDestinatario+'</label>'+
                                    '</div>'+
    
    
    
    
                                '</div>'+
                           
    
                                '<div class="row">'+
    
    
                                    '<div class="col s3" style="justify-items: right;"><label style="font-size:11px;color:black">'+
                                    '<b>Nom. Afianzado</b></label>'+
                                    '</div>'+
                                    '<div class="col s3">'+
                                    '<label style="font-size:10px">'+item.nombreAfianzado+'</label>'+
                                    '</div>'+
    
    
                                    '<div class="col s3" style="justify-items: right;">'+
                                    '<label style="font-size:11px;color:black"><b>Distrito</b></label>'+
                                    '</div>'+
                                    '<div class="col s3">'+
                                    '<label style="font-size:10px">'+item.distrito+'</label>'+
                                    '</div>'+
                                '</div>'+

                                '<div class="row">'+

    
                                    '<div class="col s3" style="justify-items: right;">'+
                                    '<label style="font-size:11px;color:black">'+
                                    '<b>Est. Cert.</b></label>'+
                                    '</div>'+

                                    '<div class="col s3" style="justify-items: right;">'+
                                    '<span class="new badge" data-badge-caption="">'+item.estadoCertificado+'</span>'+
                                    '</div>'+
                                    
                                

                                    '<div class="col s3" style="justify-items: right;">'+
                                    '<label style="font-size:11px;color:black">'+
                                    '<b>Fech. Entrega </b></label>'+
                                    '</div>'+

                                    '<div class="col s3"><label style="font-size:10px">'+item.fechaEntrega+'</label></div>'+
                                    '</div>'+

                                '<div class="row">'+
                                    '<div class="col s3" style="justify-items: right;"><label style="font-size:11px;color:black"><b>Estado </b></label></div>'+
                                    '<div class="col s3"><label style="font-size:10px">'+
                                    '<label style="font-size: 10px;">'+item.estado+'</label></div>'+
                            
                                    '<div class="col s3" style="justify-items: right;"><label style="font-size:11px;color:black"><b>PDF </b></label></div>'+
                                        '<div class="col s3"><img style="width: 35%;" src="images/img/pdf.svg" id="pdf" onclick="pdf_viewer(`'+item.pdf+'`)">'+
                                    '<img style="width: 10%;padding: 3px;" src="images/img/success.svg" alt=""></div>'+
                                '</div>');
    
                                $("#lista-corp").append('</div>'+
    
                                '<div class="row">'+
    
    
                                    '<div class="col s3" style="justify-items: right;">'+
                                    '<label style="font-size:11px;color:black"><b>Estregado: </b></label>'+
                                    '</div>'+
                                    '<div class="col s3"><label style="font-size:10px">'+
                                    '<img data-target="#modalDetalle" data-toggle="modalb" style="width: 40%;" src="images/img/user.svg" alt="" onclick=    "entregado('+item.iduser+')">'+
                                    '<img style="width: 35%" src="images/img/success.svg" alt=""></span></label>'+
                                    '</div>'+

                                    '<div class="col s3" style="justify-items: right;">'+
                                    '<label style="font-size:11px;color:black"><b>Cod. Recla.: </b></label></div>'+
                                 
                                    '<div class="col s3">'+
                                        '<label style="font-size:10px">Si hay</label>'+
                                    '</div>');
                                    
                        
                                    
                                    

    
    
    
                                    $("#lista-corp").append('</div>'+
    
                                    '<div class="row">'+
    
    
                                    '<div class="col s3" style="justify-items: right;"><label style="font-size:11px;color:black"><b>Consol.: </b></label></div>'+
                                    '<div class="col s3">'+
                                    '<img style="width: 35%;" src="images/img/pdf.svg" id="pdf_con" onclick="pdf_viewer(`'+item.consolidado+'`)">'+
                                       '<img style="width: 10%;padding: 3px;" src="images/img/success.svg" alt="">'+
                                       '</div>');
                                       

                               
    
    
    
    
                               

                
                
                
            });


           
           
                
           
        } else  if (arreglo.length==0){

            Preload();

            Swal.fire({
                title: "Documento no encontrado",
                text: "verifique el codigo",
                confirmButtonText: "Aceptar",
                icon: 'waring',

            })
        }else{
            Preload();

            Swal.fire({
                title: "Documento no encontrado",
                text: "verifique el codigo",
                confirmButtonText: "Aceptar",
                icon: 'waring',

            })
        }
    });

}



    
function entregado(iduser) {
    MostrarPreload();


    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerMisTramites.php", "op=sp_get_userEntregado&_id=" + iduser,
    function (result) {
        var arreglo = JSON.parse(result);

        console.log(" jsom obtenido ",iduser);
        if (arreglo.length >0) {
            $.each(arreglo, function (idxx, item) {
         

                if (item.message ==1 ) {
                    

                        $.each(arreglo, function (idxx, item) {

                            var arr = JSON.parse(item.entregado);
                            console.log(arr);
                            $.each(arr, function (idxx, ix){
                                console.log(ix.fecha,ix.entregado);

                            $("#fecha_entregado").text(ix.fecha) ;
                            $("#entregado_nombres").text(ix.entregado) ;
                            $("#dni_entregado").text(ix.Dni) ;
                            

                             });
                             Preload();

    
    
                            
            
                        });
 
                } else {

                    Preload();
                }

                
            });


         
            
           
           
                
           
        } else  if (arreglo.length==0){
            Preload();

            Swal.fire({
                title: "Aun no disponible",
                text: "No se ha entregado aun",
                confirmButtonText: "Aceptar",
                icon: 'warning',

            })
         
        }else{


            Preload();
            Swal.fire({
                title: "Documento no encontrado",
                text: "verifique el codigo",
                confirmButtonText: "Aceptar",
                icon: 'warning',
            })

            
        }
    });

}

    




