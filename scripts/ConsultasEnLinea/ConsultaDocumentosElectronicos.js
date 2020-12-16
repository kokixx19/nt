$(document).ready(function () {
    Preload();
    
});


$("#btnVerificar").click(function () {
MostrarPreload();
    console.log("agrenado html js delectronico");
    BuscarPDF();
    


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



function BuscarPDF() {

    //MostrarPreload();

    var dato=$("#dato").val();
   
    console.log("Dato : ",dato );

    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumDocumento").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerMisTramites.php", "op=sp_get_doc&dato=" + dato,
    function (result) {
        var arreglo = JSON.parse(result);

        console.log(arreglo);
        if (arreglo.length >0) {


            Preload();
            
           
           
                Swal.fire({
                    title: "Documento Encontrado",
                    text: "",
                    confirmButtonText: "Ver Ahora",
                    icon: 'success',
                })
                .then(resultado => {

                    $.each(arreglo, function (idxx, i) {


                        if (resultado.value) {

                            console.log("url pdf : ",i.url);   

                            localStorage.setItem('urlpdfdoc',i.url);
                            console.log(localStorage.getItem('urlpdfdoc'));
                            fnpintarformMenu('ConsultasEnLinea/DocumentAutPdf.html');
                        } else {
    
                        }
        
                        //console.log("Nombre ech",i.Nombre);
        
                    });
                    Preload();
                   
                    
                });
           
        } else  if (arreglo.length==0){
            Preload();

            Swal.fire({
                title: "Documento no encontrado",
                text: "verifique el codigo",
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