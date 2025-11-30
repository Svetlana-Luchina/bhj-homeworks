const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let currentWidth = 200;
let isIncreasing = false;

cookie.onclick = function() {
  counter.textContent = Number(counter.textContent) + 1;

  if (isIncreasing) {
    currentWidth = 200;
    cookie.style.width = currentWidth + 'px';
  } else {
    currentWidth = 250;
    cookie.style.width = currentWidth + 'px';
  }
  isIncreasing = !isIncreasing;
};