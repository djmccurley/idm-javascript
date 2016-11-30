$(document).ready(function() {
  function makeBoxes(num, col, cost) {
    var boxOutput = $("#box-slider");
    if(isNaN(num) || (!num)){
      boxOutput.html("<h3>Please enter a valid number 1 - 1000</h3>");
    } else if(num > 1000) {
        boxOutput.html("<h3>Sorry, Box Maker Union doesn't pay overtime! Orders must be 1000 boxes or less</h3>");
      } 
        //had to use boolean here to avoid this chunk running on undefined value
        else if(num) { 
          boxOutput.html("").css("display", "none");  
          for(var i=1; i<=num; i++){
            boxOutput.append("<div class='box'><p>" + i + "</p></div>");
          }
          boxOutput.children().css("background-color", col);
          boxOutput.slideDown();
          $("#history").prepend("<p>" + num + " " + col + " @ $" + cost + " each = $" + (num*cost) + "</p>");
        }  

  }

  $("#start").click(function() {
    var numberOfBoxes = $("#quantity").val();
    var colorOfBoxes = $("#color").val();
    var costOfBoxes = $("#cost").val();

    makeBoxes(numberOfBoxes, colorOfBoxes, costOfBoxes);
  });

  $("#view-history").click(function(){
    $("#history").slideToggle();
  });
});  