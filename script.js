const totalScreens = 29;

let currentScreen = 1;

const image = document.getElementById("screen");
const counter = document.getElementById("counter");

function updateScreen(){

const number = String(currentScreen).padStart(2,"0");

image.src = `assets/screens/screen_${number}.jpg`;

counter.textContent =
`${currentScreen} / ${totalScreens}`;

}

function nextScreen(){

currentScreen++;

if(currentScreen > totalScreens){

currentScreen = 1;

}

updateScreen();

}

function previousScreen(){

currentScreen--;

if(currentScreen < 1){

currentScreen = totalScreens;

}

updateScreen();

}

updateScreen();