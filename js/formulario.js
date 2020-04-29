/*	vamos a llamar a nuestra funcino autoinvocada  */

	var formulario =document.formulario_registro,
		elementos=formulario.elements; //aqui esta los elementos de nuestro formulario_registro

		//Funciones
		var validarInputs=function(){
			for(var i=0;i<elementos.length;i++){
				if(elementos[i].type=='text'||
					elementos[i].type=='email'||
					elementos[i].type=='password'){
						// Verificamos si el usuario a puesto texto
						if(elementos[i].value.length==0){
							console.log("el campo "+elementos[i].name+" esta Incompleto");
							//Agregando la clase error si no se lleno nada de texto
							elementos[i].className =elementos[i].className+' error';
							return false;
						} else{
							elementos[i].className =elementos[i].className.replace(" error","");

						}
					}
			}

			if(elementos.pass.value!==elementos.pass2.value){
				elementos.pass.value="";
				elementos.pass2.value="";
				//cambiando a la clase error no las contraseñas no son iguales
				elementos.pass.className=elementos.pass.className+ " error";
				elementos.pass2.className=elementos.pass2.className+ " error";

			}else{
				//vamos a cambiar la clase error
				elementos.pass.className=elementos.pass.className.replace("error","");
				elementos.pass2.className=elementos.pass2.className.replace("error","");
			}
			return true;
		}

		var validarRadios=function(){
			var opciones =document.getElementsByName("sexo");
				resultado=false;

			for (var i = 0; i < elementos.length; i++) {
				if(elementos[i].type=="radio"&&elementos[i].name=="sexo"){
					for(var o=0; o<opciones.length;o++){
						if(opciones[o].checked){
							resultado = true;
							break;
						}
					}
					if(resultado==false){
						elementos[i].parentNode.className=
						elementos[i].parentNode.className+ " error";
						console.log("el campo sexo esta incompleto");
						return false;
				}else{
					elementos[i].parentNode.className=
					elementos[i].parentNode.className.replace( " error","");
					return true;
				}
				}
			}
		}
		//funcion de validar checkbox
		var validarCheckbox=function(){
			var opciones =document.getElementsByName("terminos");
				resultado=false;

			for (var i = 0; i < elementos.length; i++) {
				if(elementos[i].type=="checkbox"){
					for(var o=0; o<opciones.length;o++){
						if(opciones[o].checked){
							resultado = true;
							break;
						}
					}
					if(resultado==false){
						elementos[i].parentNode.className=
						elementos[i].parentNode.className+ " error";
						console.log("los terminos no fueron aceptados");
						return false;
				}else{
					elementos[i].parentNode.className=
					elementos[i].parentNode.className.replace(" error","");
					return true;
				}
				}
			}
		}
		var enviar=function(e){
		//esta funcion va a comprobar todas las demas validaciones
		if(!validarInputs()){
			console.log("Falto validar los inputs");
			e.preventDefault();//previene el enviio de datos si no queremos
		}	else if (!validarRadios()) {
			console.log("Falto validar los radios");
			e.preventDefault();//previene el enviio de datos si no queremos
		}else if (!validarCheckbox()) {
			console.log("Falto validar los Checkbox");
			e.preventDefault();//previene el enviio de datos si no queremos
		} else{
			console.log("Enviados Correctamente");
			//comentar la linea cuando tengamos todo listo
			e.preventDefault();
		}
		};

		//funciones blur y focus
		var focusInput=function(){
			this.parentElement.children[1].className="label active";
			// reemplazamos la clase error por nada
			this.parentElement.children[0].className=
			this.parentElement.children[0].className.replace(" error","");
		}
		var blurInput=function(){
			// si el usuario no puso nada de texto
			if (this.value<=0) {
				this.parentElement.children[1].className="label";
				this.parentElement.children[0].className=
				this.parentElement.children[0].className+" error"

			}
		}
		//Eventos
		//vamos a usar 2 eventos, "CLICK","BLUR"
		formulario.addEventListener("submit",enviar);
		//usamos un vector para recorrer todos los elementos y verificamos su tipo
		for(var i=0;i<elementos.length;i++){
			if(elementos[i].type=='text'||
				elementos[i].type=='email'||
				elementos[i].type=='password'){
					//agregando el evento focus a los diferentes elementos
					elementos[i].addEventListener("focus",focusInput);
					elementos[i].addEventListener("blur",blurInput);

				}
		}
