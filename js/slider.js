const slider = document.querySelector('.slider__line')
const images = document.querySelectorAll('.slider .slider__line img')

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

document.querySelector('.slider__prev-btn').addEventListener('click', () => {
    count--

    if (count < 0) count = images.length - 1

    rollSlider()
})
document.querySelector('.slider__next-btn').addEventListener('click', () => {
    count++

    if (count >= images.length) count = 0

    rollSlider()
})