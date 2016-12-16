var CodeKey = {
	a: 12,
	b: 14,
	c: 16
};
var codeChannel;
var shiftValue;
var inputString = '';

document.getElementById("input").onkeyup = function(){
	inputString = document.getElementById("input").value.toUpperCase();	  
  if(document.getElementById('mode_encode').checked) {
  	encode(inputString);	
  } else if(document.getElementById('mode_decode').checked) {
  	decode(inputString);
  }
};

function encode(str) { // ENCODER FUNCTION
  var encodedValues = [];
  var letterCode;
  var shiftedLetterCode;
  codeChannel = document.getElementById('codeChannel').value;
  shiftValue = CodeKey[codeChannel];
  
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
  return(updateDisplay(encodedValues));
}

function decode(str) { // DECODER FUNCTION
  var decodedValues = [];
  var letterCode;
  var shiftedLetterCode;
  codeChannel = document.getElementById('codeChannel').value;
  shiftValue = CodeKey[codeChannel];
  
	// iterates through str and pushes converted utf code to array
	for(i=0; i<str.length; i++){
    letterCode = str.charCodeAt(i);
    if(letterCode <= 64 || letterCode >= 91) {
      decodedValues.push(letterCode);
    } else if (letterCode > 64 && letterCode < 91) {
	      shiftedLetterCode = letterCode - shiftValue;
	    		if(shiftedLetterCode < 65) {
						shiftedLetterCode = 90 - (64 - shiftedLetterCode);
					}
				decodedValues.push(shiftedLetterCode);	
	    }    
	} 
	//logs resulting array to check accuracy  
  console.log(decodedValues);
  return(updateDisplay(decodedValues));
}

	//iterates through value of true utf codes - concatenates onto string  
function updateDisplay(utfArray) { 
	var outputString = '';
	var tweetData;
  for(j=0; j<utfArray.length; j++) {
    outputString = outputString + String.fromCharCode(utfArray[j]);
  }  
  console.log(outputString);
  document.getElementById("output").innerHTML = outputString;
  document.getElementById("tweet").setAttribute("href", 'https://twitter.com/intent/tweet?text=' + outputString);  
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