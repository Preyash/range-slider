(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = Component

const d = document
const sheet = new CSSStyleSheet
const theme = get_theme()
sheet.replaceSync(theme)

function Component(min, max) {
    const el = d.createElement('div')
    el.classList.add('container')
    const shadow = el.attachShadow({ mode: 'closed' })
    const input = d.createElement('input')
    input.type = 'range'
    input.min = min
    input.max = max
    input.value = min
    input.onchange = (e) => handleChange(e)

    const bar = document.createElement('div')
    bar.classList.add('bar')

    const ruler = document.createElement('div')
    ruler.classList.add('ruler')

    const fill = document.createElement('div')
    fill.classList.add('fill')

    bar.append(ruler, fill)
    shadow.append(input, bar)
    shadow.adoptedStyleSheets = [sheet]
    document.body.append(el)
    return el

    function handleChange(e) {
        const val = Number(e.target.value)
        console.log(val)
        fill.style.width = `${(val / max)*100}%`
    }
}


function get_theme() {
    return `
        *, *:before, *:after { box-sizing: inherit; }
        :host {
            --white: hsla(0, 0%, 100%, 1);
            --transparent: hsla(0, 0%, 0%, 0);
            --grey: hsla(0, 0%, 90%, 1);
            --blue: hsla(207, 88%, 66%, 1);
            box-sizing: border-box;
            position: relative;
            width: 100%;
            height: 16px;
        }
        
        input {
            position: absolute;
            inset: 0;
            width: 100%;
            -webkit-appearance: none;
            margin: 0;
            outline: none;
            z-index: 2;
            background-color: var(--transparent);
        }
        .bar {
            position: absolute;
            top: 3px;
            left: 0;
            z-index: 0;
            height: 10px;
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            background-color: var(--grey);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .ruler {
            position: absolute;
            height: 6px;
            width: 100%;
            trasform: scale(-1, 1);
            background-size: 20px 8px;
            background-image: repeating-linear-gradient(to right,
                var(--grey) 0px,
                var(--grey) 17px,
                var(--white) 17px,
                var(--white) 20px
            )
        }
        .fill {
            position: absolute;
            height: 100%;
            width: 0%;
            background-color: var(--blue);
        }
        input:focus + .bar .fill,
        input:focus-within + .bar .fill,
        input:active  + .bar .fill {
            background-color: var(--blue);
        }
        input::-webkit-slider-thumb{
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: var(--white);
            border: 1px solid var(--grey);
            cursor: pointer;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .4);
            transition: background-color .3s, box-shadow .15s linear;
        }
        input::-webkit-slider-thumb:hover {
            box-shadow: 0 0 0 10px rgba(94, 170, 245, .8);
        }
    `
}

},{}],2:[function(require,module,exports){
const rangeSlider = require('..')

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

},{"..":1}]},{},[2]);
