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
    donatePrompt;

// function returns string including speech author and year
function getAuthorAndYearString(speech) {
  return 'This speech was written by ' + speech.author + ' in ' + speech.year + '.<br>';
}

//function checks if year is BCE or not
function displayBCEString(speech) {
   if(speech.yearIsBCE === true){
    return 'This speech took place before the common era.<br>';
  } else {
    return 'This speech took place during the common era.<br>';
  }
}

//function determines oldest and newest years and returns appropriate string
function getOldestOrYoungestString(speech) {
  // sets oldest and newest based on first item in array
  /*  
      not sure if declaring these variable in the function makes the most sense -
      maybe make it a separate chunk that runs on windo load so oldest and newest
      are available globally?
  */

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;
  // iterates through speechesArray to set oldest and newest variables
  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }
  //checks argument against possible outcomes (oldest/newest/middle)
  if(speech.year === oldest) {
    return 'This is the oldest speech on the page.<br>';
  } else if(speech.year === newest) {
      return 'This is the most recent speech on the page.<br>';
    } else {
        return '';
      }
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(speechesArray[0]);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(speechesArray[0]);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(speechesArray[0]);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(speechesArray[1]);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(speechesArray[1]);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(speechesArray[1]);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(speechesArray[2]);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(speechesArray[2]);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(speechesArray[2]);
});