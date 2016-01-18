$(document).ready(function(){

});

/*--------------------EMPLOYEE LIST---------------------*/
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){		
			var employees = JSON.parse(xhr.responseText);
			
			var statusHTML = '';
			for (var i = 0; i < employees.length; i ++){
				if(employees[i].inoffice === true){
					statusHTML += '<div class="col-xs-12 employee-btn"><a class="btn btn-success btn-xs in" role="button">IN</a>';
				} else{
					statusHTML += '<div class="col-xs-12 employee-btn"><a class="btn btn-danger btn-xs out" role="button">OUT</a>';
				}
				statusHTML += employees[i].name;
				statusHTML += '</div>';
			}
			
			document.getElementById('employees-list').innerHTML = statusHTML;
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();


var roomstatus = new XMLHttpRequest();
roomstatus.onreadystatechange = function(){
	if(roomstatus.readyState === 4){		
			var rooms = JSON.parse(roomstatus.responseText);			
			var output = '';
			
			for (var i = 0; i < rooms.length; i ++){
				if(rooms[i].available === 'full'){
					output += '<div class="col-xs-3 room-btn"><a class="btn btn-danger btn-xs room-full" role="button">'
					output += rooms[i].roomNumber
					output += '</a>';
				} else{
					output += '<div class="col-xs-3 room-btn"><a class="btn btn-success btn-xs room-empty" role="button">'
					output += rooms[i].roomNumber
					output += '</a>';
				}
				
				output += '</div>';
			}
			console.log(output);
			document.getElementById('room-list').innerHTML = output;
	}
};
roomstatus.open('GET', 'data/rooms.json');
roomstatus.send();




