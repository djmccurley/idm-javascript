$(document).ready(function() {
	function updateRecipe (recipeID) {
		$(".recipe_display").children().hide();
		$(recipeID).fadeIn(600);	
	}

	$("#applesauce_button").click(function() {
		updateRecipe("#applesauce");
	});
	$("#muffin_button").click(function() {
		updateRecipe("#muffins");
	});
	$("#turkey_button").click(function() {
		updateRecipe("#brine");
	});
	$("#chili_button").click(function() {
		updateRecipe("#chili");
	});
	$("#pork_button").click(function() {
		updateRecipe("#pork");
	});
	$("#mojito_button").click(function() {
		updateRecipe("#mojito");
	});
	$("#soup_button").click(function() {
		updateRecipe("#soup");
	});

	$(".button").hover(
		function() {
			$(this).animate({
				"padding-left": "1rem"
			}, 200);}, 
			function() {
				$(this).animate({
					"padding-left": ".5rem"
				}, 200);
		});
});