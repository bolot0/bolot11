var message = document.querySelector(".message");
var score = document.querySelector(".score");
var buttons = document.querySelectorAll("button");
var playerCount = document.querySelector('.player')
var computerCount = document.querySelector('.computer')


var winnerScore = [0, 0];


for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", play);
  buttons[i].addEventListener('click', counter);
}

function play(event) {
  var playerSelect = event.target.innerText;

  var computerSelect = Math.random();

  if (computerSelect < 0.34) {
    computerSelect = "Камень";
  } else if (computerSelect <= 0.67) {
    computerSelect = "Бумага";
  } else {
    computerSelect = "Ножницы";
  }

  var result = checkWinner(playerSelect, computerSelect);


  if (result === "Игрок") {
    winnerScore[0]++;
  }
 
  if (result === "Компьютер") {
    winnerScore[1]++;
  }

  console.log("Игрок:", playerSelect, "Компьютер:", computerSelect);
  console.log('Победитель:'+ result, winnerScore);
}

function checkWinner(player, computer) {
  if (player === "Камень" && computer === "Бумага" || 
  player === 'Бумага' && computer === 'Ножницы' || 
  player === 'Ножницы' && computer === 'Камень') {
    return "Компьютер";
  }

  if (player === "Ножницы" && computer === "Бумага" || 
  player ==="Камень" && computer === "Ножницы" ||
  player ==="Бумага" && computer ==="Камень") {
    return "Игрок";
  } 

  if  (player === 'Ножницы'&& computer ==="Ножницы" ||
  player === 'Камень' && computer === 'Камень' ||
  player === 'Бумага' && computer === 'Бумага'){
   return 'Ничья';
  } 

}
function counter(){
   playerCount.innerHTML = winnerScore[0];
   computerCount.innerHTML = winnerScore[1];
}