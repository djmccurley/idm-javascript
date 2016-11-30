$(document).ready(function() {
  function makeBoxes(num) {
    if(isNaN(num)){
      alert("Please enter a valid number!");
    } else {
        $("#box-holder").html("");  
        for(var i=1; i<=num; i++){
          $("#box-holder").append("<div><p>" + i + "</p></div>");
        }
      }  
  }

  $("#start").click(function() {
    var boxes = prompt("How many boxes do you want?");
    makeBoxes(boxes);
  });
});  