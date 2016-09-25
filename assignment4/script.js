function Speech(name, year, bce) {
	this.name = name;
	this.year = year;
	this.bce = bce;
} 

var firstSpeech = new Speech("Winston Churchill", "June 18, 1940", false);
var secondSpeech = new Speech("Ghandi", "August 8, 1942", false);
var thirdSpeech = new Speech("Demosthenes", "342 B.C.E.", true);

var allSpeeches = [firstSpeech, secondSpeech, thirdSpeech];

//There is probably a more elegant way to make this work, but I like this round about solution.
var timePassed = 	parseInt(allSpeeches[1].year.substring(
										allSpeeches[1].year.length-4, allSpeeches[1].year.length)) - 
									parseInt(allSpeeches[0].year.substring(
										allSpeeches[0].year.length-4, allSpeeches[0].year.length));


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log(timePassed);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});