const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let lo = 0

let int = setInterval(blurrying, 30)

function blurrying() {
    lo++
    if (lo > 99) {
        clearInterval(int)
    }

    loadText.innerText = lo + '%'
    loadText.style.opacity = scale(lo, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(lo, 0, 100, 30, 0)}px)`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}