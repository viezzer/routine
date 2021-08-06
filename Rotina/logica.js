/*ROWS*/
const actionButtonsRow = document.querySelector("#create-remove-buttons")
const addEventForm = document.querySelector("#row-event-form")
const removeEventForm = document.querySelector("#row-remove-event-form")

/*COLS*/
const eventInput = document.querySelector("#event-textInput")

/*BUTTONS*/
const btnCriaEvento = document.querySelector("#btn-cria-evento")
const btnRemoverEvento = document.querySelector("#btn-remover-evento")
const btnEnviarDados = document.querySelector("#btn-enviar")
const btnRemoverDados = document.querySelector("#btn-remover-dados")
const btnBackArrow = document.querySelector("#back-arrow")

/*INPUTS*/
const evento = document.querySelector("#event")
const horario = document.querySelector("#time")
const btn1 = document.querySelector("#btncheck1")
const btn2 = document.querySelector("#btncheck2")
const btn3 = document.querySelector("#btncheck3")
const btn4 = document.querySelector("#btncheck4")
const btn5 = document.querySelector("#btncheck5")
const btn6 = document.querySelector("#btncheck6")
const btn7 = document.querySelector("#btncheck7")


btnCriaEvento.addEventListener('click', function() {
	actionButtonsRow.classList.add("d-none")
	btnEnviarDados.classList.toggle("d-none")
	eventInput.classList.toggle("d-none")
	addEventForm.classList.toggle("d-none")
});

btnRemoverEvento.addEventListener('click', function() {
	actionButtonsRow.classList.add("d-none")
	btnRemoverDados.classList.toggle("d-none")
	addEventForm.classList.toggle("d-none")
});

btnEnviarDados.addEventListener('click', function(click) {
	let time = horario.value
	/*console.log(time)*/
	let checkBoxes = {
		segunda: btn1.checked,
		terca: btn2.checked,
		quarta: btn3.checked,
		quinta: btn4.checked,
		sexta: btn5.checked,
		sabado: btn6.checked,
		domingo: btn7.checked
	}
	/*ARRAY COM NOME DOS DIAS DA SEMANA EM FORMATO STRING*/
	let dias = Object.keys(checkBoxes)
	/*console.log('Dias', dias)*/

	/*ARRAY COM OS VALORES DE CADA CHECKBOX/DIA DA SEMANA EM BOOLEANO*/
	let values = Object.values(checkBoxes)
	/*console.log('Valores', values)*/

	/*CHECA OS DIAS DA SEMANA SELECIONADOS E APLICA O EVENTO */
	for (var i = 0; i <7; i++) {
		if (values[i]) {
			let tdId = "#" + dias[i] + "-" + time
			/*console.log(tdId)*/
			document.querySelector(tdId).innerText = ""
			document.querySelector(tdId).append(evento.value)
		}
	}
	/*DISPLAY*/
	addEventForm.classList.add("d-none")
	btnEnviarDados.classList.add("d-none")
	eventInput.classList.add("d-none")
	actionButtonsRow.classList.toggle("d-none")
});

btnRemoverDados.addEventListener('click', function() {
	let time = horario.value
	/*console.log(time)*/
	let checkBoxes = {
		segunda: btn1.checked,
		terca: btn2.checked,
		quarta: btn3.checked,
		quinta: btn4.checked,
		sexta: btn5.checked,
		sabado: btn6.checked,
		domingo: btn7.checked
	}
	/*ARRAY COM NOME DOS DIAS DA SEMANA EM FORMATO STRING*/
	let dias = Object.keys(checkBoxes)
	/*console.log('Dias', dias)*/

	/*ARRAY COM OS VALORES DE CADA CHECKBOX/DIA DA SEMANA EM BOOLEANO*/
	let values = Object.values(checkBoxes)
	/*console.log('Valores', values)*/

	/*CHECA OS DIAS DA SEMANA SELECIONADOS E APLICA O EVENTO */
	for (var i = 0; i <7; i++) {
		if (values[i]) {
			let tdId = "#" + dias[i] + "-" + time
			/*console.log(tdId)*/
			document.querySelector(tdId).innerText = ""
		}
	}
	/*DISPLAY*/
	addEventForm.classList.add("d-none")
	btnRemoverDados.classList.add("d-none")
	actionButtonsRow.classList.toggle("d-none")
});

btnBackArrow.addEventListener('click', function() {
	addEventForm.classList.add("d-none")
	btnEnviarDados.classList.add("d-none")
	btnRemoverDados.classList.add("d-none")
	actionButtonsRow.classList.toggle("d-none")
});