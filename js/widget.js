$(document).ready(function(){

});

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){		
			var employees = JSON.parse(xhr.responseText);	
			console.log(typeof employees);
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();


