const images = document.querySelectorAll('img');
const nbIMG = images.length;

const gauche = document.querySelector(".gauche");
const droite = document.querySelector(".droite");

let numImg = 0;


droite.addEventListener("click", function () {

    images[numImg].classList.remove('active');

    if (numImg < nbIMG - 1) {
        numImg++;
    } else {
        numImg = 0;
    }
    images[numImg].classList.add('active');
});

gauche.addEventListener("click", function () {

    images[numImg].classList.remove('active');

    if (numImg > 0) {
        numImg--;
    } else {
        numImg = nbIMG - 1;
    }

    images[numImg].classList.add('active');
});
