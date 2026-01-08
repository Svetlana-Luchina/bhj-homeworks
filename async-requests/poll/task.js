(async () => {
  try {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
    const data = await response.json();
    
    const pollTitle = document.getElementById('poll__title');
    pollTitle.textContent = data.data.title;
    
    const pollAnswers = document.getElementById('poll__answers');
    
    data.data.answers.forEach(answer => {
      const button = document.createElement('button');
      button.className = 'poll__answer';
      button.textContent = answer;
      
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
      
      pollAnswers.appendChild(button);
    });
    
  } catch (error) {
    console.error('Ошибка при загрузке опроса:', error);
  }
})();