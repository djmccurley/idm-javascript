function Speech(name, year, bce) {
	this.name = name;
	this.year = year;
	this.bce = bce;
} 

var firstSpeech = new Speech("Winston Churchill", "June 18, 1940", false);
var secondSpeech = new Speech("Ghandi", "August 8, 1942", false);
var thirdSpeech = new Speech("Demosthenes", "342 B.C.E.", true);

var allSpeeches = [firstSpeech, secondSpeech, thirdSpeech];



document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log(allSpeeches[1].name);
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