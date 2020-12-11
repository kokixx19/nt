$(document).ready(function(){
     WelcomeMessageNewUser();

     $('#verpass2').hide()


     $('#dni-ce').on('input', function () { 
        this.value = this.value.replace(/[^0-9]/g,'');
    });

    $('#telf').on('input', function () { 
        this.value = this.value.replace(/[^0-9]/g,'');
    });


    $("#dni-ce").keyup(function() {
     
        dnicon();
    });

    $("#user-register").keyup(function() {
     
        usercon();
    });




});


var st = -505;

function dnicon()
{
    var usercontexT= $("#dni-ce").val();
    if(usercontexT.length<8){
        

        $("#msg").empty();
        $("#msg").html("")

            $("#msg").append("<img style='width: 30px;' src='images/cross.svg'>");
        
       
        st=-1;
        console.log("Documemto invalido",st);
    }else{
        
        

        console.log("Escrito",usercontexT);

        valUSer(usercontexT);

    }
}

function usercon()
{
    var usercontexT= $("#user-register").val();
    if(usercontexT.length<8){
        

        $("#msg1").empty();
        $("#msg1").html("")

            $("#msg1").append("<img style='width: 30px;' src='images/cross.svg'>");
        
       
        st=-1;
        console.log("Documemto invalido",st);
    }else{
        
        

        console.log("Escrito",usercontexT);

        valUSer_USER(usercontexT);

    }
}




function valUSer_USER(usercontext) {
    console.log(st);


            $("#msg1").empty();
            $("#msg1").html("")
            $("#msg1").append("<img style='width: 30px;margin-top:-3px;' src='images/load.svg'>");
    

    //console.log("la fecha es ", pagFecha);
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=ValUSER&_param=" + usercontext,
        function (result) {

            var arreglo=JSON.parse(result);

            console.log(arreglo);

            $.each(arreglo, function (idx, item) {
               if(item.ms==0){
            $("#msg1").empty();
            $("#msg1").html("")
            $("#msg1").append("<img style='width: 30px;margin-top:-3px;' src='images/ok.svg'>");
            st=1;
            console.log(st);

               }else if(item.ms==1 || item.ms==null){


                $("#msg1").empty();
                $("#msg1").html("")

                $("#msg1").append("<img style='width: 30px;;' src='images/cross.svg'>");
                st=-1
                console.log(st);
                //IN USE
               }else{

                $("#msg1").empty();
            $("#msg1").html("")

                $("#msg1").append("<img style='width: 30px;margin-top:-10px;' src='images/load.svg'>");
                 st=3;
                 console.log(st);
               }
            }); 
        });

}



function valUSer(usercontext) {
    console.log(st);


            $("#msg").empty();
            $("#msg").html("")
            $("#msg").append("<img style='width: 30px;margin-top:-3px;' src='images/load.svg'>");
    

    //console.log("la fecha es ", pagFecha);
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=ValDNI&_param=" + usercontext,
        function (result) {

            var arreglo=JSON.parse(result);

            console.log(arreglo);

            $.each(arreglo, function (idx, item) {
               if(item.ms==0){
            $("#msg").empty();
            $("#msg").html("")
            $("#msg").append("<img style='width: 30px;margin-top:-3px;' src='images/ok.svg'>");
            st=1;
            console.log(st);

               }else if(item.ms==1 || item.ms==null){


                $("#msg").empty();
                $("#msg").html("")

                $("#msg").append("<img style='width: 30px;;' src='images/cross.svg'>");
                st=-1
                console.log(st);
                //IN USE
               }else{

                $("#msg").empty();
            $("#msg").html("")

                $("#msg").append("<img style='width: 30px;margin-top:-10px;' src='images/load.svg'>");
                 st=3;
                 console.log(st);
               }
            }); 
        });

}


$('#verpass').click(function () {
    $('#verpass2').show()
    $('#verpass').hide()
    $('#pass-register').removeAttr('type');
});

$('#verpass2').click(function () {
    $('#verpass').show()
    $('#verpass2').hide()
    $('#pass-register').attr('type', 'password');
});

var unew = "";

function RegistrarUsuario()
{
    var TipoDoc ;
    var username = $('#user-register').val();
    var user_new = $('#user-register').val();


    var pass = $("#pass-register").val();
    var Numdoc = $("#dni-ce").val();
    var telf = $("#telf").val();
    var email = $("#email").val();
    unew = $('#user-register').val();

    if ($("#dni-ce").val().length <= 8)
    {
        TipoDoc = 'D';
        console.log(TipoDoc)

    }else if ($("#dni-ce").val().length > 8)
    {
        TipoDoc = 'CE';
        console.log(TipoDoc)
    }

    


    if(Numdoc != "" &&  username!="")
        {   


            console.log(username,pass,TipoDoc, Numdoc, telf, email);

            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=insrt_usu&user="+username+ "&pass=" + pass+ "&TipoDoc=" + TipoDoc + "&NumDoc=" + Numdoc + "&telf=" + telf + "&email=" + email, function (result) {
        
                console.log(result);
                var arregloRegister = JSON.parse(result);
        
                if(result=='true')
                {

                    Swal.fire({
                        title: 'Registro agregado exitosamente',
                        text: '',
                        icon: 'success'
                    });

                    fnpintarpaginas('Menu/Menu.html');
                    console.log(unew);
                    sessionStorage.setItem('tdoc_user', TipoDoc)
                    sessionStorage.setItem('user', unew)

                    sessionStorage.setItem('user_new', user_new)
                    sessionStorage.setItem('pass', pass)
                    sessionStorage.setItem('dni_user', Numdoc)
                    sessionStorage.setItem('telf', telf)
                    sessionStorage.setItem('email', email)

                    
                }else{

                    Swal.fire({
                        title: 'Algo salio mal.',
                        text: '',
                        icon: 'warning'
                    });
                    
                }
        
                
            });

            

                

                

            
            
           
            
        }
        else
        {
            Swal.fire({
                title: 'Error hay campos vacios.',
                text: 'Asegúrese  de  llenar todo los campos.',
                icon: 'warning'
            });
        }


   
}

function WelcomeMessageNewUser()
{
    setTimeout(function () {

        $("#WelcomeMessageNewUser").fadeTo(2500, 0);
        $("#WelcomeMessageNewUser").fadeOut('fast', function () {
            $("#WelcomeMessageNewUser").delay(2500).hide();
        });
    }, 5000);

    // Swal.fire({
    //     icon: 'info',
    //     text: 'Ingrese al Módulo de perfil para completar sus datos',
    //     confirmButtonText: 'Aceptar'
    // });

}
function CloseWelcomeMessageNewUser(){
    $("#WelcomeMessageNewUser").delay(1000).hide();
};

function fnpintarpaginas(paginaurl) {
    var DivContenido = $("#divContenido");
    $.get("./view/" + paginaurl, function (response) {
        DivContenido.html(response);
    });
}

$("#btnSession").click(function () {

    var ndoc = $("#dni-ce").val();
    var uname = $("#user-register").val();
    var upass=$("#pass-register").val();
 ;
    var tel = $("#telf").val();
    var email = $("#email").val();
   

    console.log("valor st :  " ,st);

    if(st==1){
        if(ndoc.length==0|| uname.length==0 ||upass.length==0|| tel.length==0|| email.length==0)
        {

            Swal.fire(
                'Campos vacíos',
            'Complete los campos requeridos',
                'error'
            )

        }else{
            RegistrarUsuario();
        }
        
        
        

    }else if(st==-505){

        Swal.fire(
            'Datos incorrectos',
        'N° doc vacio, rellene los datos correctamente',
            'error'
        )

    }else{
        Swal.fire(
            'Error general',
        'Contacte con soporte de la aplicación',
            'error'
        )
    }
    
});