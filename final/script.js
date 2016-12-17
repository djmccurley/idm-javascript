window.onload = function() {
	// clipboard functionality from https://clipboardjs.com/
	var clipboard = new Clipboard('.copy');
	/*
		CodeKey object {
			KEY(value from selected code channel): VALUE(number to offset rotXX code)
		}
	*/
	var CodeKey = {
		a: 12,
		b: 14,
		c: 16
	};
	var codeChannel;
	var shiftValue;
	var inputString = '';

	/*
		Encode and decode functions check code channel and determine offset value from
		CodeKey object. Then functions iterate through passed string finding utf code
		for each character. For characters A-Z, utf codes are shifted by value
		of offset - other character codes passed through as is. All codes pushed
		to resulting array encodedValues/decodedValues. 

		Encode adds shift value to utf code
		Decode subtracts shift value from utf codes

		resulting array passed to updateDisplay function

	*/

	// ENCODER FUNCTION
	function encode(str) { 
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
		    		//conditional checks if shifted utf code is beyond A-Z range, 
		    		//then corrects it by offsetting from 64, right before A(65)
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

	// DECODER FUNCTION
	function decode(str) {
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
		    		//conditional checks if shifted utf code is below A-Z range, 
		    		//then corrects it by offsetting from 90(Z)
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

	/*
		Function iterates through value of true utf codes & concatenates onto string.
		Logs string for accuracy
		Places string into DOM in output div
		Updates href of twitter link with string  
	*/
	function updateDisplay(utfArray) { 
		var outputString = '';
	  for(j=0; j<utfArray.length; j++) {
	    outputString = outputString + String.fromCharCode(utfArray[j]);
	  }  
	  console.log(outputString);
	  document.getElementById("output").innerHTML = outputString;
	  document.getElementById("tweet").setAttribute(
	  	"href", 'https://twitter.com/intent/tweet?text=' + outputString);  
	}

		/*
		Every time key released in textinput area, resulting string is:
			1) converted to upper case (to simplify ASCII codes)
			2) passed to encode/decode functions based on radio button selection
	*/
	document.getElementById("input").onkeyup = function(){
		inputString = document.getElementById("input").value.toUpperCase();	  
	  if(document.getElementById('mode_encode').checked) {
	  	encode(inputString);	
	  } else if(document.getElementById('mode_decode').checked) {
	  	decode(inputString);
	  }
	};

	/* 
		Displays about information - added jQuery listener
		as rest of script is vanilla js
	*/
	$("#about_link").click(function(){
		$("#output").text(
			"ALERT: This is my final project for Web Dev: JS and jQuery @ MCAD");
	});
};


/* ---- inspiration for this project ----
	ORIGINAL FUNCTION - written for freeCodeCamp.com exercise
	

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