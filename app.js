'use strict';

let finishValue;
let players = 0;
let start = 0;
let roundNum = 0;


$('body').ready(startUp);
$('.add-players').click(playerModal);


function startUp(){
	finishValue = prompt(' Enter the value you want to finish the game with.', '500');
	$('.add-players').focus();
}

function playerModal() {
	$('#playerModal').modal('show');
	$("#playerModal").on('shown.bs.modal', function () {
		$('#submitPlayer').click(addPlayer);
		$('input#PlayerName').focus();
		$('#PlayerName').keydown(pressEnter);		//in javascript ---- document.getElementById("PlayerName").addEventListener("keydown", pressEnter);
		
	})
}

function addPlayer() {
	$('#tableHead').append(`<th>${$('#PlayerName').val()}</th>`);
	$('#tableBody').append(`<td class="roundValue">0</td>`);
	players++;

	if (start < 1) $('.form-inline').append(`<button type="button" onClick="addValues()" class="btn btn-primary btn-lg">Submit</button>`);

	while (start < players) {
		start++
		$('.form-inline').append(`<label for="${$('#PlayerName').val()}">${$('#PlayerName').val()}:</label>
		<input type="number" class="form-control small-form" id="${$('#PlayerName').val()}">`);
		$('input#PlayerName').val('');
	}


}

function addValues() {
	roundNum++;
	let values = $('.form-control').toArray().map(e => {
		return parseInt(e.value ? e.value : 0);
	});

	let priorValues = $('tbody>tr').last().children().toArray().map(e => {
		return parseInt(isNaN(e.textContent) ? 0 : e.textContent );
	});


	$('tbody:last-child').append(`<tr id="round-${roundNum}"></tr>`);

	for (let i = 0; i < values.length; i++) {  
		$(`#round-${roundNum}`).append(`<td >${priorValues[i] + values[i]}</td>`);
	}

	checkTable();
}

function checkTable() {
	let round = $('tbody>tr').last().children().toArray().map(e => {
		return e.textContent;
	});
	const min = Math.min(...round);
	const max = Math.max(...round);

	console.log($('tbody>tr').last().children().filter((i, e) => {
		e.textContent == min;
		console.log('i:', i);
		console.log('e:', e);
		console.log($('tbody>tr').last().children().filter((i, e) => e.textContent == min).parents().filter((i,e)=> e));
	})
	);
	$('tbody>tr').last().children().filter((i, e) => e.textContent == min).toggleClass('bg-success');
	$('tbody>tr').last().children().filter((i, e) => e.textContent == max).toggleClass('bg-danger');

	if(max>= finishValue){
		$('#winningModal').modal('show');
		$('.winner').text(`Game finished!!`);
		// $('.winner').text('The Winner: Jordi');
		// $('.losser').text('The Losser: Fernando');
	}
}