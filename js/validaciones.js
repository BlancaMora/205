
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

if (codigo == "1111" && password== "admin"){

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

//--------------Formulario usuariosAdministrador busca codigo

function eliminado(){

alert("Eliminado Correctamente");

}


function validaformulario(){
	var codigo_buscar = document.getElementById("codigo_buscar").value;
	
if (codigo_buscar == ""){
	alert("no se permiten datos vacios");
return;
}

if (codigo_buscar != parseInt(codigo_buscar)){
	alert("codigo debe ser un valor numerico");
return;
}

document.getElementById(Buscar_por_codigo).submit();

}

function agregarNuevoUsuario(){
	//alert("No se permite Agregar con Datos Vacios");

var codigo_agregar = document.getElementById("agregar_codigo").value;
var password_agregar = document.getElementById("agregar_password").value;

if (codigo_agregar == "" || password_agregar == ""){
	alert("No se permite Agregar con Datos Vacios");
	return;
}

if (codigo_agregar != parseInt(codigo_agregar)){

	alert("Ingresar un codigo numerico");
	return;
}

if ( password_agregar.length < 4 ){
		alert("Ingrese un password con mas caracteres");
return;
}
document.getElementById(admin_agregarUsuario).submit();

}

function agregarFestivoALista(){

	alert("dia festivo agregado");
}

function agregarCiclo(){

alert("Ciclo Agregado");
}



