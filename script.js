document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const croissantSrc = 'croissant.png';

    function createCroissant() {
        const croissant = document.createElement('img');
        croissant.src = croissantSrc;
        croissant.classList.add('croissant');
        croissant.style.left = Math.random() * window.innerWidth + 'px';
        croissant.style.animationDuration = 3 + Math.random() * 5 + 's';
        container.appendChild(croissant);

        
        croissant.addEventListener('animationend', () => {
            container.removeChild(croissant);
        });
    }

    function startRain() {
        setInterval(createCroissant, 300); 
    }

    startRain();
});
