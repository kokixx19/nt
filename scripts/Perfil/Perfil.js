$(document).ready(function () {

     tipodocu = sessionStorage.getItem('dni_user');
    tdoc_user = sessionStorage.getItem('tdoc_user');

    BuscarCliente(tipodocu, tdoc_user);


    var user_ver = $("#txtUsuarioPerfil").val();

            var pass_ver = $("#txtClavePerfil").val();
    //LoadUser(user_ver,pass_ver);

    cargarValidacionpadre();
   
    
    //$('#btncode').hide();
 

    $("#txtDocPerfil").val(tipodocu);
    console.log(tdoc_user, tipodocu)
    
    $("#divContenido").removeClass("swal2-shown swal2-height-auto");
    $('#DivPerfilUsuario').bind('keyup blur click', function () { // fires on every keyup & blur
        if ($('#DivPerfilUsuario').validate().checkForm()) {                   // checks form for validity
            $('#registro').removeClass('button_disabled').attr('disabled', false); // enables button
        } else {
            $('#registro').addClass('button_disabled').attr('disabled', true);   // disables button
        }
    });
    
});

function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }

function cargarValidacionpadre() {

    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#DivPerfilUsuario").validate({
        rules: {
            txtDocPerfil: {
                required: true,
                number: true,
                minlength: 8
            },txtNomPerfil: {
                required: true,
            },txtApePerfil: {
                required: true,
            },txtApeMaPerfil: {
                required: true,
            },txtDireccionPerfil: {
                required: true,
            },txtTelefonoPerfil: {
                required: true,
                number: true,
                maxlength: 9
            },
            txtEmailPerfil: {
                required: true
            },txtUsuarioPerfil: {
                required: true
            },
            txtClavePerfil: {
                required: true
            },
        },
        messages: {
            txtDocPerfil: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
            txtNomPerfil: {
                required: "Campo requerido",
            },
            txtApePerfil: {
                required: "Campo requerido",
            },
            txtApeMaPerfil: {
                required: "Campo requerido",
            },
            txtDireccionPerfil: {
                required: "Campo requerido",
            },
            txtTelefonoPerfil: {
                required: "Campo requerido",
                number: "Solo numeros se Acepta Numeros"
            },
            txtEmailPerfil: {
                required: "Campo requerido",
            },
            txtUsuarioPerfil: {
                required: "Campo requerido",
            },
            txtClavePerfil: {
                required: "Campo requerido",
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}



function Preload() {
    window.setTimeout(function () {

        $("#contenerdor_Carga").fadeTo(500, 0);
        $("#contenerdor_Carga").fadeOut('fast', function () {
            $("#contenerdor_Carga").delay(500).hide();
        });
    }, 200)

}

var userid=0;
var userxx="null";
var passxx="null";

function MostrarPreload() {
    $("#contenerdor_Carga").fadeTo(980, 1);
    $("#contenerdor_Carga").show();
}

function BuscarCliente(PerIdeNro, PerTide) {
    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", 
    "op=PerfilINFO&PerIdeNro=" + PerIdeNro + "&PerTide=" + PerTide, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);
        if (arreglo.length == 0) {
            $("#txtNomPerfil").val("");
            $("#txtApePerfil").val("");
            $("#txtApeMaPerfil").val("");
            $("#txtDireccionPerfil").val("");
            $("#txtTelefonoPerfil").val("");
            $("#txtEmailPerfil").val("");
            $("#txtClavePerfil").val("");
            $("#txtUsuarioPerfil").val("");
            Preload();
        } else {

         

            $.each(arreglo, function (idx, item) {

                   
            var userid= item.idusuario;

             sessionStorage.setItem('id-user',item.idusuario);
                $("#txtNomPerfil").val(item.PerNom);
                $("#txtApePerfil").val(item.PerApePat);
                $("#txtApeMaPerfil").val(item.PerApeMat);
                $("#txtDireccionPerfil").val(item.PerDirDes);
                $("#txtTelefonoPerfil").val(item.telf);
                $("#txtEmailPerfil").val(item.email);
                $("#txtClavePerfil").val(item.pass);
                $("#txtUsuarioPerfil").val(item.usuario);
               
           
                

                console.log("ID DEL USUARIO",userid)
                if(item.key_val==0)
                { 
                    
                    $("#sendmail").show();
                    $('#checkval').hide();

                    $('#btncode').hide();
                    
                    console.log(" val 0", "idusuario "+userid);
                    
                   
                  
                }
                else if(item.key_val==1)
                {
                    $('#statusval').text("Verificado")

                    $('#sendmail').hide();
                    
                    $('#checkval').show();
                    console.log(" val 1" , "idusuario "+userid);

        $('#btncode').hide();
                }else if(item.key_val>0) {
                    $('#checkval').show();
                    console.log(" val mayor a  1", "idusuario "+userid);
                    $('#btncode').show();
                    $("#sendmail").hide();
                   
                    $("#checkval").hide();
                    
                }
                Preload();
            });

        }
    });
}


function registrar_cliente() {
    var PerTide = sessionStorage.getItem('tdoc_user');
    var PerIdeNro = $("#txtDocPerfil").val();
    var PerNom = $("#txtNomPerfil").val();
    var PerNomCo = $("#txtApePerfil").val() + ' ' + $("#txtApeMaPerfil").val() + ' ' + $("#txtNomPerfil").val();
    var PerApePat = $("#txtApePerfil").val();
    var PerApeMat = $("#txtApeMaPerfil").val();
    var PerDirDes = $("#txtDireccionPerfil").val();
    var PerTlfNro = $("#txtTelefonoPerfil").val();
    var PerEmail = $("#txtEmailPerfil").val();
    var usuario = $("#txtUsuarioPerfil").val();
    var pass = $("#txtClavePerfil").val();

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=agregar_cliente&PerTide=" + PerTide +
        "&PerIdeNro=" + PerIdeNro + "&PerNom=" + PerNom + "&PerNomCo=" + PerNomCo + "&PerApePat=" + PerApePat +
        "&PerApeMat=" + PerApeMat + "&PerDirDes=" + PerDirDes + "&PerTlfNro=" + PerTlfNro +
        "&PerEmail=" + PerEmail + "&usuario=" + usuario + "&pass=" + pass,
        function (result) {
            var arreglo = JSON.parse(result);
            console.log(arreglo)
            if (result == 'true') {
                Swal.fire({
                    title: 'Registro actualizado  exitosamente',
                    text: 'Perfil usuario',
                    icon: 'success'
                });
            } else {
                $.each(arreglo, function (idx, item) {
                    Swal.fire({
                        title: item.Titulo,
                        text: item.Mensaje,
                        icon: item.Icono
                    });
                });
            }
        });
}



function sendCodeToDB(codex) {

    var cod = codex;
            var user_ver = $("#txtUsuarioPerfil").val()//localStorage.getItem('user_saved');  

            var pass_ver = $("#txtClavePerfil").val()//localStorage.getItem('pass_saved');


            console.log(cod, " ",user_ver," ", pass_ver);

            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", 
            "op=sp_Insert_Code&cod=" + cod + "&_user=" + user_ver+"&_pass="+pass_ver,
    
    
    function(result) {

        var arr = (JSON.parse(result));


        console.log(arr);
        
            });



}


/*function LoadUser() {

    var user_ver = $("#txtUsuarioPerfil").val();//localStorage.getItem('user_saved');  

    var pass_ver = $("#txtClavePerfil").val();//localStorage.getItem('pass_saved');
    console.log("CARGANDO LOAD");

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", 
    "op=sp_List_User&_user=" + userxx + "&_pass=" + passxx, function (result) {
        var arreglo = JSON.parse(result);
        console.log(arreglo);
        
    });

    
            


            

}*/

function sendVerified() {


            var user_ver = $("#txtUsuarioPerfil").val()//localStorage.getItem('user_saved');  

            var pass_ver = $("#txtClavePerfil").val()//localStorage.getItem('pass_saved');


            console.log("verificando email",user_ver," ", pass_ver);

            $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", 
            "op=sp_verified_user&_user=" + user_ver+"&_pass="+pass_ver,
    
    
    function(result) {

        var arr = (JSON.parse(result));


        console.log("Verfificado "+user_ver+" "+arr);
        
            });



}

function envioCorreo() {
    

    console.log(sessionStorage.getItem('id-user'));
   var uuid= sessionStorage.getItem('id-user');

    var  cod = Math.floor(Math.random() * (9999 - 1111)) + 1111;

    console.log("codigo : "+cod); 
    var codigo =cod;
    var email = "jlsistemastec@gmail.com";//$("txtNomPerfil").val()+ " "+$("txtApePerfil").val();
    var nom = $("#txtEmailPerfil").val();

    sendCodeToDB(cod);
    

    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/services/index.php", "cod="+codigo+"&email="+nom+"&nom="+"Usuario"+"&id="+uuid,  
    
    
    function(result) {

        var arreglo = JSON.parse(result);


        $.each(arreglo, function (idx, item) {


            //console.log(item.status);
            

        });
    });



}








$("#registro").click(function () {
    registrar_cliente()


});

var perCod=0;

function ValEmail(){

    var user_ver = $("#txtUsuarioPerfil").val()//localStorage.getItem('user_saved');  

            var pass_ver = $("#txtClavePerfil").val()//localStorage.getItem('pass_saved');


    $.post("https://www.dotnetsa.com/PAINOSERVICE/app/controller/ControllerUsuario.php", "op=valEmail&_user="+user_ver+"&_pass="+pass_ver,  
    
    
    function(result) {

        var arreglo = JSON.parse(result);


        $.each(arreglo, function (idx, item) {

            
            if(item.key_val.length>0)
            {
                perCod=item.key_val;
                console.log("confirmacion completa",item.key_val)
            
            }
            else if(item.key_val==null){
                console.log("codigo incorrecto");

               
            }
            

        });
    });

}


$("#inCode").click(function () {

    ValEmail();
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        progressSteps: ['1']
      }).queue([
        {
          title: 'Ingresar código',
          text: 'Escriba su código de verificación'
        }
        
        
      ]).then((result) => {

        
        if (result.value==perCod) {

            var perCodx = result.value;

            console.log("codigo :  "+perCodx, "codigo generado : "+perCod);

            //if(perCodx!=perCod)
           // {
                Swal.fire({
                    title: 'Codigo Verificado correntamente',
                    html: `
                      
                      <pre><code><img style="    width: 20%;" src="images/ok_mail.svg"></code></pre>
                    `,
                    confirmButtonText: 'OK'
                  })

                  sendVerified();

                  sessionStorage.setItem('verif', 'true');
                  $('#loademail').show();
                  $('#btncode').hide();
                  $('#statusval').text("Verificado")
                  $('#sendmail').hide();
                  $('#checkval').show();
                  
                  
                }
                else if(result.value=="")
                {
                    Swal.fire({
                        title: 'Codigo incorrecto o campo inclompleto',
                        html: `
                          
                          <pre><code><img style="    width: 20%;" src="images/cod_error.svg"></code></pre>
                        `,
                        confirmButtonText: 'OK'
                      })
                }

            //}else if (perCodx==perCod){

                //$('#btncode').hide();
                
              
              //  }
   
          
      })


});


$("#verMail").click(function () {

  
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Desea verificar su correo?',
        text: "Se le enviará un correo de confirmación",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Correo enviado correctamente',
            'Verifique su bandeja de entrada o spam de su correo',
            'success'
          )
          

          $('#sendmail').hide();
          $('#btncode').show();
        
          envioCorreo();
          
          
            

        } else if (
          
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado correctamente',
            '',
            'error'
          )
        }
      })
});



