document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.glass-container');
    const motionMatch = window.matchMedia("(prefers-reduced-motion)");

    if (!motionMatch.matches) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 250;
            const y = (window.innerHeight / 2 - e.pageY) / 250;

            card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });

        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }
});
