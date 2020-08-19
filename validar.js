function validar(){
    var nombre
    nombre = document.getElementById("nombre").value;
    var apellidos
    apellidos = document.getElementById("apellidos").value;
    var correo
    correo = document.getElementById("correo").value;
    var correo
    correo=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;  
    var usuario
    usuario = document.getElementById("usuario").value;
    var telefono
    telefono= document.getElementById("telefono").value;
    var pass
    var pass= document.getElementById("pass").value;


    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    if (apellidos=== ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (apellidos.length>80){
        alert("El apellido es muy largo");
        return false;
    }
    if (correo=== ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {
        alert("Debe poseer un ‘@’ y un punto ‘.’ ");
        return false;
      }
    if (usuario=== ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (usuario.length>20){
        alert("El usuario es muy largo");
        return false;
    }  
    if (telefono=== ""){
        alert("Todos los campos son obligatorios");
        return false;
    } 
    else if (telefono.length>15){
        alert("El telefono es muy largo");
        return false;
    } 
    else if(isNaN (telefono)){
        alert("Solo números");
        return false;
    }   
    if ((nombre != "") && (apellidos != "")  && (correo != "") && (usuario != "")&& (pass != "") && (telefono != "")){
        alert("Gracias por registrarte!"+nombre+" "+apellidos+" "+pass+" "+usuario+" ")
    }
}

