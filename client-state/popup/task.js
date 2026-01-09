    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');
    
    function getCookie(name) {
        const cookies = document.cookie.split('; ');
        const cookie = cookies.find(c => c.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    
    if (!getCookie('modalClosed')) {
        modal.classList.add('modal_active');
    }

    closeButton.addEventListener('click', () => {
        modal.classList.remove('modal_active');

        document.cookie = 'modalClosed=true; path=/';
    });
