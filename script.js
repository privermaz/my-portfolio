
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars on load
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const animateProgressBars = () => {
        progressBars.forEach((bar, index) => {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = width;
            }, index * 200 + 500);
        });
    };

    // Animate cards on load
    const cards = document.querySelectorAll('.about-card, .social-card, .skills-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150 + 300);
    });

    // Animate profile image
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        profileImage.style.transform = 'scale(0)';
        profileImage.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            profileImage.style.transform = 'scale(1)';
        }, 100);
    }

    // Add hover effects to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        icon.addEventListener('click', function() {
            this.style.animation = 'pulse 0.3s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });

    // Add click effect to skill bars
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            const progressFill = this.querySelector('.progress-fill');
            progressFill.style.animation = 'pulse-glow 0.5s ease';
            setTimeout(() => {
                progressFill.style.animation = '';
            }, 500);
        });
    });

    // Initialize animations
    setTimeout(animateProgressBars, 800);

    // Add floating animation to profile image
    if (profileImage) {
        profileImage.addEventListener('animationend', function() {
            this.style.animation = 'float-gentle 3s ease-in-out infinite';
        });
    }
});

// Add custom animations via CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes pulse-glow {
        0% { box-shadow: 0 0 0 rgba(0, 188, 212, 0.7); }
        50% { box-shadow: 0 0 20px rgba(0, 188, 212, 0.7); }
        100% { box-shadow: 0 0 0 rgba(0, 188, 212, 0.7); }
    }
    
    @keyframes float-gentle {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-5px) scale(1); }
    }
`;
document.head.appendChild(style);
