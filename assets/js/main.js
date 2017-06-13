function aa(){
	var nomb = document.getElementById("usr").value;
	var tele = document.getElementById("tel").value;
	var corr = document.getElementById("email").value;
	var sele = document.getElementById("sel1").value;
	var comen = document.getElementById("comment").value;

	function nombre(){
		var filter6 = /^[A-Za-z]+$/;
		if(nomb === ""){
			var contenedor = document.getElementsByClassName("input-box")[0];
			var span = document.createElement("span");
			var texto = document.createTextNode("Campo obligatorio");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}else if(!/^([a-zA-Z])*$/.test(nomb)){
			var contenedor = document.getElementsByClassName("input-box")[0];
			var span = document.createElement("span");
			var texto = document.createTextNode("Solo pueden ser letras");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}
	}
	nombre();
	function celular(){
		if(tele === ""){
			var contenedor = document.getElementsByClassName("input-box")[1];
			var span = document.createElement("span");
			var texto = document.createTextNode("Campo obligatorio");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}else if(!/^([0-9])*$/.test(tele)){
			var contenedor = document.getElementsByClassName("input-box")[1];
			var span = document.createElement("span");
			var texto = document.createTextNode("Deben ser solo números");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}
	}
	celular();
	function correo(){ 
		if(corr === ""){
			var contenedor = document.getElementsByClassName("input-box")[2];
			var span = document.createElement("span");
			var texto = document.createTextNode("Campo obligatorio");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(corr))){
			var contenedor = document.getElementsByClassName("input-box")[2];
			var span = document.createElement("span");
			var texto = document.createTextNode("Debe ser un correo válido");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}
	}
	correo();
	function select(){
		var sel22 = document.getElementById("uno").value;
		var sel23 = document.getElementById("dos").value;
		if(sele == 0){
			var contenedor = document.getElementsByClassName("input-box")[3];
			var span = document.createElement("span");
			var texto = document.createTextNode("Campo obligatorio");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}else if(sel22){
			var contenedor = document.getElementById("resp");
			var p = document.createElement("p");
			p.setAttribute("id", "respuesta");
			var text = document.createTextNode("Gracias por contactarte con nosotros");
			p.appendChild(text);
			contenedor.appendChild(p);
			return false;
		}else if(sel23){
			alert("klsdf");
		}
	}
	select();
	function comentario(){
		if(comen === ""){
			var contenedor = document.getElementsByClassName("input-box")[4];
			var span = document.createElement("span");
			var texto = document.createTextNode("Campo obligatorio");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}
	}
	comentario();		
}
