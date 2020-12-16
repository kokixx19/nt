$(document).ready(function () {


    Preload();
console.log("hello world!!");
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

$("#logincorp").click(function () {

        var user = $("#txtUsuario").val();
        var pass = $("#txtContra").val();


    localStorage.setItem('user-corp',user);
    localStorage.setItem('pass-corp',pass);


    user_local= localStorage.getItem('user-corp');
    pass_local= localStorage.getItem('pass-corp');

        console.log(user_local,pass_local);
        findUser(user_local,pass_local);
        

});


function findUser(_user,_pass) {

    MostrarPreload();

    //var _user  = localStorage.getItem('user-corp');
    //var _pass  = localStorage.getItem('pass-corp');

    var PerTide = $("#CboTipoDocumento").val();
    var PerIdeNro = $("#txtNumDocumento").val();
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerMisTramites.php", "op=sp_get_userCarta&_user=" + _user+"&_pass="+_pass,
    function (result) {
        var arreglo = JSON.parse(result);

        console.log(" jsom obtenido ",arreglo);
        if (arreglo.length >0) {

            

            $.each(arreglo, function (idxx, item) {
                MostrarPreload();

                localStorage.setItem('id-corp',item.id);
                console.log("id de usuario coorporativo :",localStorage.getItem('id-corp'));


                if (item.message ==1 ) {
                    Preload();

                    Swal.fire({
                        title: "Usuario Encontrado",
                        text: "",
                        confirmButtonText: "Ver Ahora",
                        icon: 'success',
                    })
                    .then(resultado => {
    
                        $.each(arreglo, function (idxx, i) {
    
    
                            if (resultado.value) {
    
                               
                                fnpintarformMenu('ConsultasEnLinea/CartasNotarialesCorporativas/CartasNotariales.html');
                                
                            } else {
        
                            }
            
                            //console.log("Nombre ech",i.Nombre);
            
                        });
                        
                       
                        
                    });

                    
                } else {

                    Preload();
                    Swal.fire({
                        title: "Usuario no encontrado",
                        text: "",
                        confirmButtonText: "Aceptar",
                        icon: 'error',
                    })

                }

                
            });


         
            
           
           
                
           
        } else  if (arreglo.length==0){
            Preload();

            Swal.fire({
                title: "Usuario no encontrado",
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

