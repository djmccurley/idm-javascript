$(document).ready(function () {
	//changes bg color based on data-type attribute (assingment 10.1)
	$("[data-type='vitamin']").css("background", "#3d9323");
	$("[data-type='mineralwater']").css("background", "#42b6f4");
	$("[data-type='proteinbar']").css("background", "#9b42f4");

	//assignment 10.2 - hide/display products on checkbox selection
	//:checked property solution found here: http://stackoverflow.com/questions/2834350/get-checkbox-value-in-jquery
	//.parent, .hide solutions from jQuery API documentation
	$('#proteinbar').click(function() {
		if($('#proteinbar').is(':checked')) {
			$("[data-type='proteinbar']").parent().show();
		} else {
			$("[data-type='proteinbar']").parent().hide();
		}
	});	
	$('#mineralwater').click(function() {
		if($("#mineralwater").is(':checked')) {
			$("[data-type='mineralwater']").parent().show();
		} else {
			$("[data-type='mineralwater']").parent().hide();
		}
	});	
	$('#vitamin').click(function() {
		if($('#vitamin').is(':checked')) {
			$("[data-type='vitamin']").parent().show();
		} else {
			$("[data-type='vitamin']").parent().hide();
		}
	});	
});
