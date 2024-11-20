let counter = 1;

const http = new XMLHttpRequest();
http.open("GET", "bible.txt", false);
http.send();
const bible = http.responseText.split("\n");

function getTimestamp() {
    const date = new Date();
    const timestamp = ('0' + date.getDate()).slice(-2) + '/'
          + ('0' + (date.getMonth()+1)).slice(-2) + '/'
          + date.getFullYear() + ' '
	  + ('0' + date.getHours()).slice(-2) + ':'
	  + ('0' + date.getMinutes()).slice(-2) + ':'
    	  + ('0' + date.getSeconds()).slice(-2);

    return timestamp; 
}

function callHolySpirit(event) {
    if (event.code !== 'Space') {
	return;
    }
    
    const container    = document.getElementById("rng");
    const div          = document.createElement("div");
    const wordOfGod    = document.createElement("p");
    const pTimestamp   = document.createElement("p");
    const timestamp    = getTimestamp();
    
    wordOfGod.innerHTML = "[" + counter + "]" + ": " + bible[Math.floor(Math.random() * bible.length)];
    pTimestamp.innerHTML = "[" + timestamp + "]";
    div.appendChild(wordOfGod);
    div.appendChild(pTimestamp);
    container.appendChild(div);
    counter++;
}

document.addEventListener('keypress', callHolySpirit);
