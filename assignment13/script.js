$(document).ready(function() {
  function makeBoxes(num, col, cost) {
    if(isNaN(num)){
      $("#box-holder").html("Please enter a valid number 1 - 1000");
    } else if(num > 1000) {
        $("#box-holder").html("Sorry, Box Union doesn't pay overtime! Orders must be 1000 boxes or less");
      } 
        //had to specify range here to avoid condition running
        //on undefined value for quantity
        else if(num >=1 && num <= 1000) { 
          $("#box-holder").html("");  
          for(var i=1; i<=num; i++){
            $("#box-holder").append("<div><p>" + i + "</p></div>");
          }
          $("#box-holder").children().css("background-color", col);
          $("#history").prepend("<p>" + num + " " + col + " boxes @ $" + cost + " each = $" + (num*cost) + "</p>");
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