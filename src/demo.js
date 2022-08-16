const rangeSlider = require('..')

const age = rangeSlider(1, 140)
const birthYear = rangeSlider(1872, 2022)

const section = document.createElement('div')
section.innerHTML = `
    <h1>Input integer</h1>
    <h3>Enter age:</h3>
    <x></x>
    <h3>Enter birth year:</h3>
    <y></y>
`
section.querySelector('x').replaceWith(age)
section.querySelector('y').replaceWith(birthYear)

document.body.append(section)
