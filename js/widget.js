$(document).ready(function(){

});

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){		
			console.log(xhr.responseText);		
	}
};
xhr.open('GET', 'data/employees.json');
xhr.send();


