document.getElementById('btn').addEventListener('click', function () {
  window.location.href = 'portfolio.html';
});
document.addEventListener('DOMContentLoaded', function() {
    // Website opening animation
    const container = document.querySelector('.portfolio-container');
    container.style.opacity = '0';
    container.style.transform = 'scale(0.8) translateY(20px)';
    container.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    // Start opening animation
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'scale(1) translateY(0)';
    }, 100);

    // Simple staggered fade-in for all animated elements
    const elements = document.querySelectorAll('.about-card, .social-card, .skills-card, .skill-item');
    elements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 + i * 50);
    });
});
window.addEventListener('click', () => {
  const audio = document.getElementById('bg-music');
  audio.play().catch(e => console.error('Playback error:', e));
}, { once: true });