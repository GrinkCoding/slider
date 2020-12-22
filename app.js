const imageBox = document.querySelector(".img-box");
const gauche = document.querySelector(".gauche");
const droite = document.querySelector(".droite");
const position = document.querySelector(".position-box");


const slider = [
    "https://images.unsplash.com/photo-1576346618381-facf2a17af3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1451408446993-f6a39d2e667e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1607442436078-10606378d956?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1605992678821-17fb316eb4a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
]

// const slider = [
//     "ressource/photo1.jpg",
//     "ressource/photo2.jpg",
//     "ressource/photo3.jpg",
//     "ressource/photo4.jpg",
// ]

let numImg = 0;
imageBox.innerHTML= `<img src=${slider[numImg]} alt="photo_noel">`

droite.addEventListener("click", function(){
   
    if(numImg !== (slider.length-1)){
        numImg++;

    } else{
        numImg=0;
    }
    imageBox.innerHTML= `<img src=${slider[numImg]} alt="photo_noel">`;
});

gauche.addEventListener("click", function(){
   

    if(numImg > 0){
        numImg--;
    } else{
        numImg=slider.length-1;
    }

    imageBox.innerHTML= `<img src=${slider[numImg]} alt="photo_noel">`;
});

