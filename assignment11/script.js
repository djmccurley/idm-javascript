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
	//move even numbered LI elements 5px to the right (cheated and used padding-left)
	$("#sidebar_content_1 li:odd").css("padding-left", "5px");
	//replace content div on h2 clicks with a picture of Chuck Norris
	$("#content h2").click(function() {
		$("#content").html("<img src='chuckles.jpg'><h2>Great Job!</h2>");
	});
	/* 	toggle sidebar lists - I was all ready to use .detach and all
			that on this one, but turns out .toggle() without any arguments
			toggles visibility by default! http://api.jquery.com/toggle/ 
	*/		
	$("#sidebar_content_1 h2").click(function() {
		$(this).siblings().toggle();
	});
	$("#sidebar_content_2 h2").click(function() {
		$(this).siblings().toggle();
	});
});