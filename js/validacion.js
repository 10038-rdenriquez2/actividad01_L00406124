function Numeros(string){//Solo numeros
	var out = '';
	var filtro = '1234567890';//Caracteres validos
		    
	//Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
	for (var i=0; i<string.length; i++)
		 	if (filtro.indexOf(string.charAt(i)) != -1) 
		             //Se añaden a la salida los caracteres validos
		    	out += string.charAt(i);
		    
	//Retornar valor filtrado
	return out;
}  

function Letras(string){//Solo letras
	var out = '';
	var filtro = 'qwertyuiopñlkjhgfdsazxcvbnmMNBVCXZÑLKJHGFDSAPOIUYTREWQáéíóúÁÉÍÓÚ ';//Caracteres validos
		    
	//Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
	for (var i=0; i<string.length; i++)
		  if (filtro.indexOf(string.charAt(i)) != -1) 
		             //Se añaden a la salida los caracteres validos
		    out += string.charAt(i);
		    
	//Retornar valor filtrado
	return out;
} 

function validarNumero(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  }
  return true;
}

function valEmail(input) {
  const regexSoloLetras = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regexSoloLetras.test(input.value)) {
    alert("ingrese un email valido");
       input.value = "";
  }
}
