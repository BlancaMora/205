<<<<<<< HEAD
function validaformulario(){

//var regex = /^\d{5}$/
//var form = document.getElementById('codigo');
//var codigo = document.getElementById('codigo');

var boton = document.getElementById('enviado');


//if ()
// 
/*
if(codigo.value==regex){
	var div = document.createElement('div');
	div.setAttribute('id','status_error');

	var msg = document.createTextNode('Debes escribir algo');
	div.appendChild(msg);
*/




=======
function validaLogin(){

	var codigo = document.getElementById("codigo").value;
	var password = document.getElementById("password").value;

if (codigo == "" || password == ""){
	alert("codigo o password vacios");
return;
}

if ( codigo != parseInt(codigo)){
	alert("solo se permiten numeros en el codigo");
return;
}

if (codigo == "206724639" && password== "admin"){

	window.open("administrador.html");
}
if (codigo == "1234" && password== "maestro"){

	window.open("index.html");
}
if (codigo == "5678" && password== "alumno"){

	window.open("alumno.html");
}


document.getElementById(login).submit();

>>>>>>> fc86609ad6e2f5ea8ecfae6f63169f9c03b0aca6
}