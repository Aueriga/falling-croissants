document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const croissantSrc = 'croissant.png';

    function createCroissant() {
        const croissant = document.createElement('img');
        croissant.src = croissantSrc;
        croissant.classList.add('croissant');
        croissant.style.left = Math.random() * window.innerWidth + 'px';
        croissant.style.animationDuration = 12 + Math.random() * 5 + 's';
        container.appendChild(croissant);


        croissant.addEventListener('animationend', () => {
            container.removeChild(croissant);
        });
    }

    function startRain() {
        setInterval(createCroissant, 900);
    }

    startRain();
});
const score = document.querySelector(".score span")
addEventListener("click", (e) => {
    if (e.target.className === "croissant") {
        score.textContent++
        e.target.style = { display: "none" }
    }
})