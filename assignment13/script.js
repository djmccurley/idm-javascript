$(document).ready(function() {
  //function creates boxes or outputs error messages based on input from user
  //accepts 3 arguments - quantity of boxes, color, and cost per unit
  function makeBoxes(num, col, cost) {
    var boxOutput = $("#box-slider");                                           //used in multiple places so stored in variable
    var colorName = $("#color option:selected").attr("name");                   //get name attribute of selected color - allows value to store hex code instead
    if(isNaN(num) || (!num)){                                                   //checks for non-numeric or undefined values
      boxOutput.html("<h3>Invalid Amount</h3><p>Please enter a valid number 1 - 1000</p>");
    } else if(num > 1000) {                                                     //checks for quantities over 1000 boxes
        boxOutput.html("<h3>Sorry, Box Maker Union doesn't pay overtime!</h3> <p>Orders must be 1000 boxes or less.</p>");
      } 
        else if(num) {                                                          //probably don't need to use boolean anymore given !num above, but this one guards/guarded against weird inputs and blank orders
          boxOutput.html("").css("display", "none");                            //clears and hides box-slider from view while making boxes
          for(var i=1; i<=num; i++){                                            //loop to create boxes based on num value (quantity)
            boxOutput.append("<div class='box'><p>" + i + "</p></div>");        //appends div into box-slider div (same as +=)
          }
          boxOutput.children().css("background-color", col);                    //colors boxes using col value
          boxOutput.slideDown(800);                                             //slides boxes into view
          $("#history").prepend("<p>" + num + " " + colorName + " @ $" + cost + " each = $" + (num*cost) + "</p>");     //logs order summary to history div
        }  

  }

  //#start button gets input values and passes to makeBoxes function
  $("#start").click(function() { 
    var numberOfBoxes = $("#quantity").val();
    var colorOfBoxes = $("#color").val();
    var costOfBoxes = $("#cost").val();

    makeBoxes(numberOfBoxes, colorOfBoxes, costOfBoxes);
  });

  //shows/hides order history div
  $("#view-history").click(function(){
    $("#history").slideToggle();
  });
});  