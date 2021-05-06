
//window.onload = function(){




//console.log(currentDate);

let clockDisplay = document.querySelector('.clock-display');

let clockColor = document.querySelector('.clock');

let hexDisplay = document.querySelector('.clock-progress-bar');

setInterval(function(){
  let currentDate = new Date();

  //console.log(currentDate.toLocaleTimeString());

clockDisplay.innerHTML = currentDate.toLocaleTimeString('en-US', { hour12: false }); //.innerHTML to change HTML. Also got the format time here..

  //clockDisplay.innerHTML = currentDate; //.innerHTML to change HTML.. Used the above, so that I can change the time format

  let randomColor = Math.floor(Math.random()*16777215).toString(16); //generating random colors

  clockColor.style.backgroundColor = "#" + randomColor; //.style for css formating
  //console.log(randomColor);

  clockDisplay.onmouseover = function () {
    clockDisplay.innerHTML = randomColor;
    
    //title.innerHTML = "Please stop hovering me";
  };

}, 1000);









//clockDisplay = "Hey!";
//console.log(clockDisplay);




//}
