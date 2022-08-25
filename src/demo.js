const rangeSlider = require('shadow-range-slider')

const range = rangeSlider(0, 10)

const main = document.createElement('div')
main.classList.add('demo')

const style = document.createElement('style')
style.textContent = `
    .demo {
    }
`
main.append(range)
document.body.append(main, style)
