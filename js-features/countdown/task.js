let timerElement = document.getElementById('timer');

let timeLeft = Number(timerElement.textContent);

const countdown = setInterval(() => {
    timeLeft--;
    
    timerElement.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
    }
}, 1000);