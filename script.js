const sweets = {
    "croissant": {
        points: 1,
        filetype: "png"
    },
    "donuts": {
        points: 3,
        filetype: "jpg"
    },
    "muffin": {
        points: 2,
        filetype: "jpg"
    },
    "cinnamon-rolls": {
        filetype: "jpg",
        points: 4
    },

}
let current_score = 0
let sweets_list = Object.keys(sweets)

const container = document.getElementById('container');
const score = document.querySelector(".score span")

function createSweet() {
    let random_item = sweets_list[Math.floor(Math.random() * sweets_list.length)]
    const imgSrc = `./assets/${random_item}.${sweets[random_item].filetype}`;
    const sweet = document.createElement('img');

    sweet.src = imgSrc;
    sweet.classList.add(random_item);
    sweet.classList.add('sweet');
    sweet.style.left = Math.random() * window.innerWidth + 'px';
    sweet.style.animationDuration = 12 + Math.random() * 5 + 's';

    container.appendChild(sweet);
    sweet.addEventListener('animationend', () => {
        container.removeChild(sweet);
    });
}

document.addEventListener('DOMContentLoaded', () => {

    function startRain() {
        setInterval(createSweet, 900);
    }

    startRain();
});


addEventListener("click", (e) => {
    let classlist = e.target.classList
    let sweet_name = Array.from(classlist).filter(c => sweets_list.includes(c))
    if (sweet_name.length > 0) {
        current_score += sweets[`${sweet_name[0]}`]?.points ?? 0
        score.textContent = current_score
        container.removeChild(e.target);
    }
})


