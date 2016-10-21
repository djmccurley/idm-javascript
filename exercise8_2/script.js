

/* 	=====================
		Script allows users to add 
		new song/artist entries to 
		their playlist
		=====================  */

/* 	newEntry function gets the input data from the form
		and enters it into the playlist before 
		resetting the input fields */
function newEntry() {
	/* variables hold strings entered by user */
	var title = document.getElementById('song_title').value;
	var artist = document.getElementById('artist').value;
	/* this creates <p> element in playlist for the song and artist */
	document.getElementById('playlist').innerHTML += "<p>" + title + " - " + artist + "</p>";
	document.getElementById('song_title').value = ""; /* clears song title input */
	document.getElementById('artist').value = ""; /* clears artist input */
}

/* Click event listener on button - runs function newEntry on each click */
document.getElementById("add_song").addEventListener("click", newEntry);