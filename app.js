$(document).ready(function(){ 

 	const tabla = document.querySelector('tbody');
	const archivo = new Request('https://jsonplaceholder.typicode.com/users');
 	fetch(archivo)
  .then(response => response.json())
    .then(data => {
 	var numero_fila = 0;
    for (const user of data) {
    	let row = document.createElement('tr')
    	row.classList.add('temporal')
    	let listItem = document.createElement('td');

    	// let button = document.createElement('input')
    	// button.type = "button";
    	// button.classList.add('buscador_elemento')
    	// button.setAttribute('id', numero_fila);
    	// button.setAttribute('value', "Editar")
    	listItem.appendChild(
        document.createElement('normal')
      	).textContent = user.name;
      	// row.appendChild(button)
    	row.appendChild(listItem);
    	listItem = document.createElement('td');


    	listItem.appendChild(
        document.createElement('normal')
      	).textContent = user.username;

    	row.appendChild(listItem);
		listItem = document.createElement('td');

    	listItem.appendChild(
        document.createElement('normal')
      	).textContent = user.email;
    	listItem.setAttribute('contenteditable','true')
    	row.appendChild(listItem);
    	listItem = document.createElement('td');

    	listItem.appendChild(
        document.createElement('normal')
      	).textContent = user.phone;
    	listItem.setAttribute('contenteditable','true')
    	row.appendChild(listItem);
    	tabla.appendChild(row);
    	numero_fila=numero_fila+1
    }
  })




  $('#nombre').click(function(){
 	const tabla = document.querySelector('table');
 	
	const archivo = new Request('https://jsonplaceholder.typicode.com/users');
 	fetch(archivo)
  	.then(response => response.json())
    .then(data => {
    	for (const user of data) {
    		const temporal = document.querySelector('.temporal');
 			temporal.remove()
     }
     for (const user of data) {
		let row = document.createElement('tr')
		row.classList.add('temporal')
    	let listItem = document.createElement('td');
    	listItem.appendChild(
        document.createElement('normal')
      	).textContent = user.name;

    	row.appendChild(listItem);
    	tabla.appendChild(row);
     }
  })
 });

  $('#username').click(function(){
 	const tabla = document.querySelector('table');
 	
	const archivo = new Request('https://jsonplaceholder.typicode.com/users');
 	fetch(archivo)
  .then(response => response.json())
    .then(data => {
    	for (const user of data) {
    		const temporal = document.querySelector('.temporal');
 			temporal.remove()
     }
     for (const user of data) {
		let row = document.createElement('tr')
		row.classList.add('temporal')
    	let listItem = document.createElement('td');
    	listItem.appendChild(
        document.createElement('normal')
      	).textContent = user.username;

    	row.appendChild(listItem);
    	tabla.appendChild(row);
     }
  })
 });

  $('#email').click(function(){
 	const tabla = document.querySelector('table');
 	
	const archivo = new Request('https://jsonplaceholder.typicode.com/users');
 	fetch(archivo)
  .then(response => response.json())
    .then(data => {
    	for (const user of data) {
    		const temporal = document.querySelector('.temporal');
 			temporal.remove()
     }
     for (const user of data) {
		let row = document.createElement('tr')
		row.classList.add('temporal')
    	let listItem = document.createElement('td');
    	listItem.appendChild(
        document.createElement('normal')
      	).textContent = user.email;

    	row.appendChild(listItem);
    	tabla.appendChild(row);
     }
  })
 });


  $('#phone').click(function(){
  	console.log("a")
 	const tabla = document.querySelector('table');
 	
	const archivo = new Request('https://jsonplaceholder.typicode.com/users');
 	fetch(archivo)
  .then(response => response.json())
    .then(data => {
    	for (const user of data) {
    		const temporal = document.querySelector('.temporal');
 			temporal.remove()
     }
     for (const user of data) {
		let row = document.createElement('tr')
		row.classList.add('temporal')
    	let listItem = document.createElement('td');
    	listItem.appendChild(
        document.createElement('normal')
      	).textContent = user.phone;

    	row.appendChild(listItem);
    	tabla.appendChild(row);
     }
  })
 });

  $("#search").keyup(function(){

        _this = this;

            $.each($("#datos tbody tr"), function() {

            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)

            $(this).hide();

            else

            $(this).show();

            });

        });

});
