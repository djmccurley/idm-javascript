function makeBoxes(num) {
  if(isNaN(num)){
    alert("Please enter a valid number!");
  } else {
      document.getElementById("box-holder").innerHTML = "";  
      for(var i=1; i<=num; i++){
        document.getElementById("box-holder").innerHTML += "<div><p>" + i + "</p></div>";
      }
    }  
}

document.getElementById("start").onclick = function() {
  var boxes = prompt("How many boxes do you want?");
  makeBoxes(boxes);
}