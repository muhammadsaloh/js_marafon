const slides = document.querySelectorAll('.slide');

for(let slide of slides){
    slide.onclick = () => {
        removeClass()
        slide.classList.add('active')
    }
}

function removeClass () {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}



