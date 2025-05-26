
document.addEventListener('DOMContentLoaded', function() {
    // Simple progress bar animation
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const animateProgressBars = () => {
        progressBars.forEach((bar, index) => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'width 0.8s ease';
                bar.style.width = width;
            }, index * 100 + 300);
        });
    };

    // Simple card fade-in
    const cards = document.querySelectorAll('.about-card, .social-card, .skills-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease';
            card.style.opacity = '1';
        }, index * 100 + 200);
    });

    // Simple profile image fade-in
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        profileImage.style.opacity = '0';
        profileImage.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            profileImage.style.opacity = '1';
        }, 100);
    }

    // Initialize animations
    setTimeout(animateProgressBars, 500);
});


