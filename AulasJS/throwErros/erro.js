function validaArray(array, n){

	try {
		
		if(!array && !n)throw new ReferenceError("passe os parametros");
		if(typeof(array)!='object')throw new TypeError("Array invalido");
		if(typeof(n)!='number')throw new TypeError("numero invalido");
		if(array.length!==n)throw new RangeError("numero nao corresponde ao tamanho do array");

		return array;
		
	} catch (e) {
		if(e instanceof ReferenceError){
			console.log("Erro de referencia");
			console.log(e.message);
		
		}

		else if(e instanceof RangeError){
			console.log("erro de correspondencia");
			console.log(e.message);
			
		}
		else if(e instanceof TypeError){
			console.log("erro de tipo");
			console.log(e.message);
			
		}else{
			console.log('erro nao esperado:	' + e);
		}
		
		
	}
	
}

console.log(validaArray([1,2,3], 3));