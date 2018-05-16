let players = 0;
let start=0;

function playerModal(){
	$('#playerModal').modal('show');
	$('input#PlayerName').focus();
}

function addPlayer(){
	$('#tableHead').append(`<th>${$('#PlayerName').val()}</th>`);
	$('#tableBody').append(`<td class="roundValue">0</td>`);
	players++;

	if(start<1) $('.form-inline').append(`<button type="button" onClick="addValues()" class="btn btn-primary">Submit</button>`);
	
	while (start<players) {
		start++
		$('.form-inline').append(`<label for="${$('#PlayerName').val()}">${$('#PlayerName').val()}:</label>
		<input type="number" class="form-control small-form" id="${$('#PlayerName').val()}">`);
	}
	
}