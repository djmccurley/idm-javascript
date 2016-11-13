$(document).ready(function() {
	var mainHeader = $("#header");
	//add attached icon to nav li
	$("#menu a").prepend('<img src="icon.png">');
	//click listener on h1 turns bg color of header div
	$("#header h1").click(function() {
		mainHeader.css('background-color', '#e31f32');
	});
	//change color of first li (actually the a within that li) in sidebar 
	$("#sidebar_content_2 li:first-of-type a").css("color", "red");
	console.log('li color changed!');
});