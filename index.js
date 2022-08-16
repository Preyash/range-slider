// module.exports = Component

const d = document
const sheet = new CSSStyleSheet
const theme = get_theme()
sheet.replaceSync(theme)

function Component() {
    const el = d.createElement('div')
    el.classList.add('container')
    const shadow = el.attachShadow({ mode: 'closed' })
    const input = d.createElement('input')
    input.type = 'range'
    // input.min = min
    // input.max = max
    // input.onkeyup = (e) => keyupHandle(e, input, min, max)
    // input.onmouseleave = (e) => mouseleave_or_blur_handle(e, input, min, max)
    // input.onblur = (e) => mouseleave_or_blur_handle(e, input, min)
    shadow.append(input)
    shadow.adoptedStyleSheets = [sheet]
    document.body.append(el)
    return el
}

Component()

function get_theme() {
    return `
        :host(.container) {

        }
        input {
            width: 100%;
        }
    `
}

function keyupHandle(e, input, min, max) {
    let val = Number(e.target.value)
    let valLen = val.toString().length
    let minLen = min.toString().length
    if (valLen == minLen && val < min) input.value = ''
    else if (val > max) input.value = max
}

function mouseleave_or_blur_handle(e, input, min) {
    let val = Number(e.target.value)
    if (val < min) input.value = ''
}