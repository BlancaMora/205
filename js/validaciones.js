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

}