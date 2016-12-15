var outputString;
var shiftValue = 13;
document.getElementById("input").onkeyup = function(){
	outputString = document.getElementById("input").value.toUpperCase();	  
  rot13(outputString);
};

function rot13(str) { // ENCODER FUNCTION
  var encodedValues = [];
  var letterCode;
  var shiftedLetterCode;
  var decodedString = '';
  
	// iterates through str and pushes converted utf code to array
	for(i=0; i<str.length; i++){
    letterCode = str.charCodeAt(i);
    if(letterCode <= 64 || letterCode >= 91) {
      encodedValues.push(letterCode);
    } else if (letterCode > 64 && letterCode < 91) {
	      shiftedLetterCode = letterCode + shiftValue;
	    		if(shiftedLetterCode > 90) {
						shiftedLetterCode = 64 + (shiftedLetterCode - 90);
					}
				encodedValues.push(shiftedLetterCode);	
	    }    
	} 
	//logs resulting array to check accuracy  
  console.log(encodedValues);
	//iterates through value of true utf codes - concatenates onto string  
  for(j=0; j<encodedValues.length; j++) {
    decodedString = decodedString + String.fromCharCode(encodedValues[j]);
  }  
  console.log(decodedString);
  document.getElementById("output").innerHTML = decodedString;  
}


/* ORIGINAL FUNCTION	  

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
*/