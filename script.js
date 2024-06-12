
let current_score = 0
let failed = false
let croissantIntervId;

const container = document.getElementById('container');
const score = document.querySelector(".score span")


function createCroissant() {
    const croissant = document.createElement('img');
    croissant.src = "./croissant.png";
    croissant.classList.add('croissant');
    croissant.style.left = Math.random() * 80 + '%';
    croissant.style.animationDuration = 12 + Math.random() - (current_score * 0.03) * 5 + 's';
    container.appendChild(croissant);

    croissant.addEventListener('animationend', () => {
        handlefailed()
    });

    container.appendChild(croissant);
}

document.addEventListener('DOMContentLoaded', () => {
    function startRain() {
        croissantIntervId = setInterval(createCroissant, 700);
    }
    startRain();
});

function handlefailed() {
    document.body.removeChild(container)
    clearInterval(croissantIntervId)
    const failDiv = document.createElement("div")
    const tryAgainBtn = document.createElement("button")
    const scoreSpan = document.createElement("span")

    scoreSpan.textContent = `Your score: ${current_score}`
    failDiv.className = "failed"

    tryAgainBtn.textContent = "Try Again"
    tryAgainBtn.onclick = () => {
        location.reload()
    }
    failDiv.appendChild(scoreSpan)
    failDiv.appendChild(tryAgainBtn)

    document.body.appendChild(failDiv)
}


addEventListener("click", (e) => {
    if (e.target.className === "croissant") {
        current_score++
        score.textContent = current_score
        container.removeChild(e.target);
    }
})


