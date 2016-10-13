var newH1 = document.createElement('h1');
var newP = document.createElement('p');

newH1.innerHTML = "A Big Old Heading";
newP.innerHTML = 	"This is an exceptionally well-written paragraph about some topic in web development. It is riveting and not at all boring or dry. In fact, you might even get a chuckle or two out of it.";

document.getElementById('empty-div').appendChild(newH1);
document.getElementById('empty-div').appendChild(newP);

newP.setAttribute('align', 'right');