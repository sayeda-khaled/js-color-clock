
//window.onload = function(){




//console.log(currentDate);

let clockDisplay = document.querySelector('.clock-display');

let clockColor = document.querySelector('.clock');

setInterval(function(){
  let currentDate = new Date();

  //console.log(currentDate.toLocaleTimeString());

clockDisplay.innerHTML = currentDate.toLocaleTimeString('en-US', { hour12: false }); //.innerHTML to change HTML

  //clockDisplay.innerHTML = currentDate; //.innerHTML to change HTML.. Used the above, so that I can change the time format

  let randomColor = Math.floor(Math.random()*16777215).toString(16); //generating random colors

  clockColor.style.backgroundColor = "#" + randomColor; //.style for css formating
  //console.log(randomColor);
}, 1000);



//const clock-display = document.querySelector('.clock-display');




//clockDisplay = "Hey!";
//console.log(clockDisplay);




//}
