//speech object constructor
function Speech(name, year, bce) {
	this.name = name;
	this.year = year;
	this.bce = bce;
} 

//speeches on page
var firstSpeech = new Speech("Winston Churchill", "June 18, 1940", false);
var secondSpeech = new Speech("Ghandi", "August 8, 1942", false);
var thirdSpeech = new Speech("Demosthenes", "342 B.C.E.", true);

var allSpeeches = [firstSpeech, secondSpeech, thirdSpeech];

//There is probably a more elegant way to make this work, but I like this round about solution.
var timePassed = 	parseInt(allSpeeches[1].year.substring(
										allSpeeches[1].year.length-4, allSpeeches[1].year.length)) - 
									parseInt(allSpeeches[0].year.substring(
										allSpeeches[0].year.length-4, allSpeeches[0].year.length));


//window.onload event
window.onload = function() {
	console.log('Ghandi\'s speech and Churchill\'s speech are ' + timePassed + ' years apart.');
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log('There are ' + allSpeeches.length + ' speeches on the page.');
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + allSpeeches[0].name + 
  	' in ' + allSpeeches[0].year + '. It is ' + allSpeeches[0].bce + 
  	' that this year is B.C.E.');
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
    console.log('This speech was written by ' + allSpeeches[1].name + 
  	' in ' + allSpeeches[1].year + '. It is ' + allSpeeches[1].bce + 
  	' that this year is B.C.E.');
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
    console.log('This speech was written by ' + allSpeeches[2].name + 
  	' in ' + allSpeeches[2].year + '. It is ' + allSpeeches[2].bce + 
  	' that this year is B.C.E.');
});