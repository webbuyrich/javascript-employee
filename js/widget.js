$(document).ready(function(){

});

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){		
			var employees = JSON.parse(xhr.responseText);
			console.log(employees);	
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
			console.log(statusHTML);
			document.getElementById('employees-list').innerHTML = statusHTML;
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();


