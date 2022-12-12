// Set variables
var angle = 0;
var color_angle = 0;
// If a sign is not passed, the default is to rotate clockwise
function galleryspin(sign) {
  // Get the spinner
    spinner = document.querySelector("#spinner");
    // For logo color change
    if (Math.abs(color_angle) == 360) {
      color_angle = 0;
    }
    if (!sign) {
      color_angle = color_angle + 40;
    } else {
      color_angle = color_angle - 40;
    }
    if (!sign) {
      angle = angle + 40;
    } else {
      angle = angle - 40;
    }
    // spin the spinner
    spinner.setAttribute(
      "style",
      "-webkit-transform: rotateY(" +
        angle +
        "deg); -moz-transform: rotateY(" +
        angle +
        "deg); transform: rotateY(" +
        angle +
        "deg);"
    );
    // Hard code color angles for logo
    if (
      color_angle == -360 ||
      color_angle == -40 ||
      color_angle == 0 ||
      color_angle == 320 ||
      color_angle == 360
    ) {
      document.getElementById("logo").src = "./images/red logo.png";
      //document.body.style.backgroundColor = "#800102";
    } else if (
      color_angle == -320 ||
      color_angle == -200 ||
      color_angle == -80 ||
      color_angle == 40 ||
      color_angle == 160 ||
      color_angle == 280
    ) {
      document.getElementById("logo").src = "./images/gradient logo.png";
    } else if (
      color_angle == -280 ||
      color_angle == -240 ||
      color_angle == 80 ||
      color_angle == 120
    ) {
      document.getElementById("logo").src = "./images/purple logo.png";
    } else if (
      color_angle == -160 ||
      color_angle == -120 ||
      color_angle == 200 ||
      color_angle == 240
    ) {
      document.getElementById("logo").src = "./images/blue logo.png";
    } else {
      document.getElementById("logo").src = "./images/gradient logo.png";
    }
    // Display the angle for testing
    document.getElementById("Cdemo").innerHTML = angle;
  }

  // Variables for scrolling implementation
  var scrollPlus = 1;
  var scrollMinus = 1;
  var x;
  var num = 40;
// For the scrolling implementation
function galleryScrollSpin(sign) { 

    // For logo color change
    if (Math.abs(color_angle) == 360) {
      color_angle = 0;
    }
    if (!sign) {
      color_angle = color_angle + 40;
    } else {
      color_angle = color_angle - 40;
    }

    /*x = angle;
    angle = ((angle - x) + (num * scrollPlus)) - x; 
      scrollPlus++;
    */

    // spin the spinner
    spinner = document.querySelector("#spinner");
    if (!sign) { 
      angle = angle + num;
    } else { 
      angle = angle - num; 
    }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    
    //angle = angle - x;

    // Hard code color angles for logo
    if (
      color_angle == -360 ||
      color_angle == -40 ||
      color_angle == 0 ||
      color_angle == 320 ||
      color_angle == 360
    ) {
      document.getElementById("logo").src = "./images/red logo.png";
      //document.body.style.backgroundColor = "#800102";
    } else if (
      color_angle == -320 ||
      color_angle == -200 ||
      color_angle == -80 ||
      color_angle == 40 ||
      color_angle == 160 ||
      color_angle == 280
    ) {
      document.getElementById("logo").src = "./images/gradient logo.png";
    } else if (
      color_angle == -280 ||
      color_angle == -240 ||
      color_angle == 80 ||
      color_angle == 120
    ) {
      document.getElementById("logo").src = "./images/purple logo.png";
    } else if (
      color_angle == -160 ||
      color_angle == -120 ||
      color_angle == 200 ||
      color_angle == 240
    ) {
      document.getElementById("logo").src = "./images/blue logo.png";
    } else {
      document.getElementById("logo").src = "./images/gradient logo.png";
    }

    // Display the angle for testing
    document.getElementById("Ademo").innerHTML = angle;

    //document.getElementById("counterDemo").innerHTML = scrollPlus;
    }

function scrollSpin() {
    window.addEventListener("wheel", ev => {
    
        var direction_2 = ev.wheelDeltaY;
    
        if (direction_2 > 0){ 
            galleryScrollSpin('-');
            document.getElementById("demo").innerHTML = direction_2 + " up wheel " + angle;
        }
        if (direction_2 < 0){
            galleryScrollSpin('');
            document.getElementById("demo").innerHTML = direction_2 + " down wheel " + angle;
        }
    });
    
}
