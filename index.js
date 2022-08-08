module.exports = inputInteger

const d = document
const sheet = new CSSStyleSheet
const theme = get_theme()
sheet.replaceSync(theme)

function inputInteger(min, max) {
    const el = d.createElement('div')
    const shadow = el.attachShadow({ mode: 'closed' })
    const input = d.createElement('input')
    input.type = 'number'
    input.min = min
    input.max = max
    input.onkeyup = (e) => keyupHandle(e, input, min, max)
    input.onmouseleave = (e) => mouseleave_or_blur_handle(e, input, min, max)
    input.onblur = (e) => mouseleave_or_blur_handle(e, input, min)
    shadow.append(input)
    shadow.adoptedStyleSheets = [sheet]
    return el
}


function get_theme() {
    return `
        input {
            height: 100%;
            width: 200px;
            padding: 20px;
            font-size: 22px;
            outline: none;
            border: none;
            color: #595959;
            background: #dde1e7;
            border-radius: 25px;
            box-shadow: inset 2px 2px 5px #babecc,
                        inset -5px -5px 10px #ffffff73;
        }
        input:focus {
            outline: 2px solid #b8b8b8;
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