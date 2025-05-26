
document.addEventListener('DOMContentLoaded', function() {
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

    // Skill items animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100 + 500);
    });
});


