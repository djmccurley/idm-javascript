$(document).ready(function() {
	var mainHeader = $("#header");
	//add attached icon to nav li
	$("#menu a").prepend('<img src="icon.png">');
	//click listener on h1 turns bg color of header div
	$("#header h1").click(function() {
		mainHeader.css('background-color', '#e31f32');
	})
});