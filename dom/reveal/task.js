document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < windowHeight && elementBottom > 0) {
                element.classList.add('reveal_active');
            } else {
                element.classList.remove('reveal_active');
            }
        });
    }
    
    checkVisibility();
    
    window.addEventListener('scroll', checkVisibility);
});