/* Constructor Tarea */
function Tarea(nombre) {
	this.nombreTarea = nombre;
	this.editarNombreTarea = function (name) {
		this.nombreTarea = name;
	}
}
var listas = [];
/* Constructor Lista */
function Lista(nombre) {
	this.nombreLista = nombre;
	this.editarNombreLista = function (name) {
		this.nombreLista = name;
	}
	this.tareas = [];
}

window.onload = function init() {
	var contenedor = document.getElementById('contenedorListas');
	var cajaLista = document.getElementsByClassName('lista')[0];
	var botonLista = document.getElementsByClassName('btn-lista')[0];

	botonLista.onclick = function nuevaLista(){

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
			cajaLista.removeChild(form);
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

			var crearTarea = document.createElement('button');
			crearTarea.classList = 'btn btn-tarea';
			var crearTareaText = document.createTextNode('Añadir una tarea...');
			crearTarea.appendChild(crearTareaText);

			var listaInner = document.createElement('div');
			listaInner.className = "inner";				
			listaInner.appendChild(listaInnerHeader);
			listaInner.appendChild(crearTarea);

			var cajaNueva = document.createElement('div');
			cajaNueva.className = 'lista';
			cajaNueva.appendChild(listaInner);
			contenedor.appendChild(cajaNueva);
			
			listaInnerEditar.onclick = function cambiarNombre() {
			}
			return false;
		}
		botonNombreListaCancel.onclick = function cancel() {
		}
		return false;
	};
	return false;
}