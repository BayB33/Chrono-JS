//init variables:
let heures = 0;
let minutes = 0;
let secondes = 0;
let temps;

//Getting Elements by their ID Variables
let compteHeures = document.getElementById('heures');
let compteMinutes = document.getElementById('minutes');
let compteSecondes = document.getElementById('secondes');
let boutonStart = document.getElementById('start');
let boutonStop = document.getElementById('stop');
let boutonReset = document.getElementById('reset');

//incrementing seconds to minutes to hours
function tic() {
  secondes++;
  if(secondes >= 60){
    secondes = 0;
    minutes++;
    if(minutes >= 60){
      minutes = 0;
      heures++;
    }
  }
}

//Writing the logic of the display
function passeTemps() {
  tic();
  compteSecondes.textContent = (secondes > 9 ? secondes : "0" + secondes);
  compteMinutes.textContent = (minutes > 9 ? minutes : "0" + minutes);
  compteHeures.textContent = (heures > 9 ? heures : "0" + heures);
  timer();
}


function timer() {
  temps = setTimeout(passeTemps, 1000);
}

// linking the buttons with the functions
boutonStart.onclick = () => {
  timer();
  boutonStart.disabled = true;
}
boutonStop.onclick = () => {
  clearTimeout(temps);
  boutonStart.disabled = false;
}

boutonReset.onclick = () => {
  compteSecondes.textContent = "00";
  compteMinutes.textContent = "00";
  compteHeures.textContent = "00";
  secondes = 0;
  minutes = 0;
  heures = 0;
  boutonStart.disabled = false;
  clearTimeout(temps);
}