/* Constructor Tarea */
function Tarea(nombre) {
	this.nombreTarea = nombre;
	this.editarNombreTarea = function (name) {
		this.nombreTarea = name;
	}
}
/* Constructor Lista */
function Lista(nombre) {
	this.nombreLista = nombre;
	this.editarNombreLista = function (name) {
		this.nombreLista = name;
	}
	var tareas = {};
}

window.onload = function init() {
	var contenedor = document.getElementById('contenedorListas');
	var listas = [];

	function crearLista() {
		var cajaLista= document.createElement('div');
		cajaLista.className = 'lista';
		var botonLista = document.createElement('button');
		botonLista.classList = 'btn btn-lista';
		botonLista.onclick = function nuevaLista(){
			cajaLista.innerHTML = "";
			var form = document.createElement('form');
			var inputNombreLista = document.createElement('input');
			inputNombreLista.placeholder = "Añadir una lista...";
			inputNombreLista.type = 'text';
			inputNombreLista.value = "";
			var botonNombreLista = document.createElement('button');
			var botonNombreListaText = document.createTextNode('Guardar');
			botonNombreLista.classList = 'btn btn-guardar';
			botonNombreLista.appendChild(botonNombreListaText);
			var botonNombreListaCancel = document.createElement('button');
			botonNombreListaCancel.classList = 'btn btn-cancel';
			form.appendChild(inputNombreLista);
			form.appendChild(botonNombreLista);
			form.appendChild(botonNombreListaCancel);
			cajaLista.appendChild(form);

			console.log(listas);
			botonNombreLista.onclick = function guardarNombre(){
				cajaLista.innerHTML = "";
				const newList = new Lista (inputNombreLista.value);
				listas.push(newList);
				
				var listaInnerH2 = document.createElement('h2');
				var listaInnerH2Text = document.createTextNode(inputNombreLista.value);
				listaInnerH2.appendChild(listaInnerH2Text);
				var listaInnerEditar = document.createElement('button');
				listaInnerEditar.classList = 'btn btn-edit';
				var listaInnerHeader = document.createElement('header');
				listaInnerHeader.appendChild(listaInnerH2);
				listaInnerHeader.appendChild(listaInnerEditar);
				var listaInner = document.createElement('div');
				listaInner.className = "inner";				
				listaInner.appendChild(listaInnerHeader);
				var cajaNueva = document.createElement('div');
				cajaNueva.className = 'lista';
				cajaNueva.appendChild(listaInner);
				contenedor.appendChild(cajaNueva);
				
				listaInnerEditar.onclick = function cambiarNombre() {
					//newList.nombreLista();
					alert('cambiar nombre');
				}
			}
			botonNombreListaCancel.onclick = function cancel() {
				// body...
				alert('cancelar nueva lista')
			}
			return false;
		};
		var botonListaText = document.createTextNode('Añadir una lista...');
		botonLista.appendChild(botonListaText);
		cajaLista.appendChild(botonLista);
		contenedor.appendChild(cajaLista);
		return false;
	}
	crearLista();
}