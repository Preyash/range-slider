(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = inputInteger

const d = document
d.body.innerHTML = `<h1>Input integer</h1>`

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

},{}],2:[function(require,module,exports){
const inputInteger = require('..')

const age = inputInteger(1, 140)
const birthYear = inputInteger(1872, 2022)

const section = document.createElement('div')
section.innerHTML = `
    <h3>Enter age:</h3>
    <x></x>
    <h3>Enter birth year:</h3>
    <y></y>
`
section.querySelector('x').replaceWith(age)
section.querySelector('y').replaceWith(birthYear)

document.body.append(section)

},{"..":1}]},{},[2]);
