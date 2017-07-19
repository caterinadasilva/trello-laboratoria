var listas = [];

/* Constructor Lista */
function Lista(nombre) {
	this.nombreLista = nombre;
	this.editarNombreLista = function (name) {
		this.nombreLista = name;
	}
	this.tareas = [];
}

/* Constructor Tarea */
function Tarea(nombre) {
	this.nombreTarea = nombre;
	this.editarNombreTarea = function (name) {
		this.nombreTarea = name;
	}
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
			if (inputNombreLista.value != "") {
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

				crearTarea.onclick = function crearNuevaTareaForm(event) {
					listaInner.removeChild(crearTarea);

					var nuevaTareaForm = document.createElement('form');
					var inputNombreTarea = document.createElement('input');
					inputNombreTarea.placeholder = "Añadir una tarea...";
					inputNombreTarea.type = 'text';
					inputNombreTarea.value = "";
					var botonNombreTarea = document.createElement('button');
					var botonNombreTareaText = document.createTextNode('Guardar');
					botonNombreTarea.classList = 'btn btn-guardar';
					botonNombreTarea.appendChild(botonNombreTareaText);
					var botonNombreTareaCancel = document.createElement('button');
					botonNombreTareaCancel.classList = 'btn btn-cancel';
					nuevaTareaForm.appendChild(inputNombreTarea);
					nuevaTareaForm.appendChild(botonNombreTarea);
					nuevaTareaForm.appendChild(botonNombreTareaCancel);
					listaInner.appendChild(nuevaTareaForm);

					botonNombreTarea.onclick = function anadirTarea() {
						if(inputNombreTarea.value != "") {
							listaInner.removeChild(nuevaTareaForm);

							var cajaTarea = document.createElement('div');
							cajaTarea.className = 'tarea';
							var nombreTareaH3 = document.createElement('h3');
							var nombreTareaH3Text = document.createTextNode(inputNombreTarea.value);
							var botonNombreTareaDelete = document.createElement('button');
							botonNombreTareaDelete.classList = 'btn btn-cancel';

							nombreTareaH3.appendChild(nombreTareaH3Text);
							cajaTarea.appendChild(nombreTareaH3);
							cajaTarea.appendChild(botonNombreTareaDelete);
							listaInner.appendChild(cajaTarea);

							botonNombreTareaDelete.onclick = function borrarTarea() {
								listaInner.removeChild(cajaTarea);
								return false;
							}

							listaInner.appendChild(crearTarea);

							return false;
						} else {
							alert("Por favor, rellene el campo antes de guardar.")
							return false;
						}
					}

					botonNombreTareaCancel.onclick = function cancel() {
						listaInner.removeChild(nuevaTareaForm);
						listaInner.appendChild(crearTarea);
						return false;
					}
					return false;
				}

				var cajaNueva = document.createElement('div');
				cajaNueva.className = 'lista';
				cajaNueva.appendChild(listaInner);
				contenedor.appendChild(cajaNueva);
				
				listaInnerEditar.onclick = function cambiarNombre() {
					alert("Cambiar nombre");
				}
				return false;
			} else {
				alert("Por favor, rellene el campo antes de guardar.")
				return false;
			}
		}
		botonNombreListaCancel.onclick = function cancel() {
			cajaLista.removeChild(form);
		}
		return false;
	};
	return false;
}