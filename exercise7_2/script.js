function playPacMan() {
  document.getElementById('ghost').onclick = function () {
    if (document.getElementById('ghost').className == "clicked") {
      document.getElementById('ghost').className = "";
		} else {
			document.getElementById('ghost').className = "clicked";
		}
  };
}

window.onload = function () {
  playPacMan();
};