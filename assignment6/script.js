//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  for (j=0; j < speechesArray.length; j++) {
    if (favoriteSpeechPrompt === speechesArray[j].author) {
      console.log(speechesArray[j].author + ' was ' + speechesArray[j].authorAge + ' during this speech.');
    } 
  }
});

/*  switch(favoriteSpeechPrompt){
    case 'Churchill':
      console.log(speechesArray[0].author + ' was ' + speechesArray[0].authorAge + ' during this speech.');
      break;
    case 'Ghandi':
      console.log(speechesArray[1].author + ' was ' + speechesArray[1].authorAge + ' during this speech.');
      break;
    case 'Demosthenes':
      console.log(speechesArray[2].author + ' was ' + speechesArray[2].authorAge + ' during this speech.');
      break;
    default:
      console.log('Did you spell that name correctly?');
      break;
  }
});*/

// this bit sets the variables of the oldest and newest speeches on the page
var oldestYear = speechesArray[0].year;
var newestYear = speechesArray[0].year;

for(k=0; k < speechesArray.length; k++) {
  if (speechesArray[k].year < oldestYear) {
    oldestYear = speechesArray[k].year;
  } else if (speechesArray[k].year > newestYear) {
    newestYear = speechesArray[k].year;
  }
}

//this function checks the speech against the oldestYear/newestYear variables
function ageChecker(speechYear) {
  if (speechYear === oldestYear) {
    console.log('This is the oldest speech on the page.');
  } else if (speechYear === newestYear) {
    console.log('This is the most recent speech on the page.');
  }
}


document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  ageChecker(churchillSpeech.year);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  ageChecker(ghandiSpeech.year);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  ageChecker(demosthenesSpeech.year);
});

var i = 0;

while (i < speechesArray.length) {
  console.log('This speech is written by ' + speechesArray[i].author + '.');
  i++;
}



/* userNamePrompt = window.prompt('Hello, what is your name?');

if(typeof userNamePrompt === 'string' && userNamePrompt !== ''){
  console.log('Hi ' + userNamePrompt + '!');
}else{
  console.log('Ok, I\'ll just call you User.');
  userNamePrompt = 'User';
} */