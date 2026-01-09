  const signinForm = document.getElementById('signin__form');
  const signin = document.getElementById('signin');
  const welcome = document.getElementById('welcome');
  const userIdSpan = document.getElementById('user_id');

  const storedUserId = localStorage.getItem('user_id');
  if (storedUserId) {
    showWelcome(storedUserId);
  }

  signinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(signinForm);

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('user_id', data.user_id);
          showWelcome(data.user_id);
          signinForm.reset();
        } else {
          alert('Неверный логин/пароль');
          signinForm.reset();
        }
      })
      .catch(error => {
        console.error('Ошибка при отправке запроса:', error);
        alert('Произошла ошибка при подключении к серверу');
      });
  });

  function showWelcome(userId) {
    userIdSpan.textContent = userId;
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
  }