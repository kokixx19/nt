$(document).ready(function () {


    localStorage.setItem('urlpdf', '');    
    Preload();
    //Verificar();
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
$("#epdf").click(function () {

    //fnpintarformMenu("ConsultasEnLinea/DocumentEPDF.html");
    
    BuscarPDF();
  

});


function BuscarPDF() {

    MostrarPreload();

    var serie=$("#serie").val();
    var numero=$("#numero").val();
    var fecha=$("#fecha").val();
    var documento=$("#documento").val();
    console.log("Serie : ",serie," Numero : ",numero," Fecha :",fecha," Documento :",documento );

    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumDocumento").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerMisTramites.php", "op=sp_get_fact&serie=" + serie + "&numero=" + numero  +"&fecha=" + fecha+
    "&documento="+documento, function (result) {
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

                            localStorage.setItem('urlpdf',i.url);
                            console.log(localStorage.getItem('urlpdf'));
                            fnpintarformMenu('ConsultasEnLinea/DocumentEPDF.html');
                        } else {
    
                        }
        
                        //console.log("Nombre ech",i.Nombre);
        
                    });

                   
                    
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