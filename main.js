
var red = document.getElementById('changeToRed');
var yellow = document.getElementById('changeToYellow');
var green = document.getElementById('changeToGreen');


// Denne starter fargene
colors();

/*Her ser vi hvordan fargene skal byttes, 
og hvor lang tid det skal være i mellom 
den viser en farge, også må den fargen bli "hvit"
før den kan gå til neste farge, så det bare
er en farge av gangen.*/

function colors() {
    red.style.backgroundColor = "red";

    setTimeout(function () {
        red.style.backgroundColor = "white"
    }, 2000)

    setTimeout(function () {
        yellow.style.backgroundColor = "yellow"
    }, 3000)

    setTimeout(function () {
        yellow.style.backgroundColor = "white"
    }, 5000)

    setTimeout(function () {
        green.style.backgroundColor = "green"
    }, 6000)
    setTimeout(function () {
        green.style.backgroundColor = "white"
    }, 8000)

    setTimeout(function () {
        yellow.style.backgroundColor = "yellow"
    }, 9000)

    setTimeout(function () {
        yellow.style.backgroundColor = "white"
    }, 11000)
    setInterval(colors, 12000)
}





/*function changeColor1(color) {
    document.getElementById('changeToRed').style.backgroundColor= color;
    document.getElementById('changeToYellow').style.backgroundColor='';
    document.getElementById('changeToGreen').style.backgroundColor='';
}
function changeColor2(color){
    document.getElementById('changeToRed').style.backgroundColor='';
    document.getElementById('changeToYellow').style.backgroundColor= color;
    document.getElementById('changeToGreen').style.backgroundColor='';
}
function changeColor3(color){
    document.getElementById('changeToRed').style.backgroundColor='';
    document.getElementById('changeToYellow').style.backgroundColor='';
    document.getElementById('changeToGreen').style.backgroundColor= color;
}*/


