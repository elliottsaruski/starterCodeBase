const counterValue = document.getElementById('counter-value');
const decreaseButton = document.getElementById('decrease-button');
const resetButton = document.getElementById('reset-button');
const increaseButton = document.getElementById('increase-button');

let counter = 0;

decreaseButton.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
  });

increaseButton.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
  }); 

resetButton.addEventListener('click', reset);

function reset(){
  counter = 0;
  counterValue.innerHTML = counter;
};

