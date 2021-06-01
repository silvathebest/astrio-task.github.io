const slider = document.querySelector('.slider-line')
const images = document.querySelectorAll('.slider .slider-line img')

let count = 0

const init = () => {
    const width = document.querySelector('.slider').offsetWidth

    slider.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px';
    })

    rollSlider()
}

const rollSlider = () => {
    const width = document.querySelector('.slider').offsetWidth

    slider.style.transform = 'translate(-' + count * width + 'px)'
}

window.addEventListener('resize', init)

init()

document.querySelector('.prev-btn').addEventListener('click', () => {
    count--

    if (count < 0) count = images.length - 1

    rollSlider()
})
document.querySelector('.next-btn').addEventListener('click', () => {
    count++

    if (count >= images.length) count = 0

    rollSlider()
})