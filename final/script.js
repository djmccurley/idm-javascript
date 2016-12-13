	var outputString;
	document.getElementById("input").onkeyup = function(){
		outputString = document.getElementById("input").value.toUpperCase();	  
	  rot13(outputString);
	};

	function rot13(str) { // LBH QVQ VG!
	  var decodedValues = [];
	  var letterCode;
	  var decodedString = '';
	  
	// iterates through str and pushes converted utf code to array
	  for(i=0; i<str.length; i++){
	    letterCode = str.charCodeAt(i);
	    if(letterCode <= 64) {
	      decodedValues.push(letterCode);
	    } else if (letterCode > 64 && letterCode < 78) {
	      decodedValues.push(letterCode + 13);
	    } else if (letterCode > 64 && letterCode >= 78) {
	      decodedValues.push(letterCode - 13);
	    }
	  }
	//logs resulting array to check accuracy  
	  console.log(decodedValues);
	  
	//iterates through value of true utf codes - concatenates onto string  
	  for(j=0; j<decodedValues.length; j++) {
	    decodedString = decodedString + String.fromCharCode(decodedValues[j]);
	  }
	  
	  console.log(decodedString);
	  document.getElementById("output").innerHTML = decodedString;

   
  
}
