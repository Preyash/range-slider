class App extends HTMLElement {
    constructor() {
        super()

        let shadowEl = this.attachShadow({ mode: 'closed' })
        let d = document
        let elementRoot = d.createElement('div')

        let ageLabel = d.createElement('label')
        ageLabel.innerText = 'Enter age: '

        let birthYearLabel = d.createElement('label')
        birthYearLabel.innerText = 'Enter birth year: '

        let age = d.createElement('input')
        let birthYear = d.createElement('input')

        elementRoot.append(ageLabel)
        elementRoot.append(age)
        elementRoot.append(d.createElement('br'))
        elementRoot.append(birthYearLabel)
        elementRoot.append(birthYear)

        let spanOutput = d.createElement('span')
        elementRoot.append(d.createElement('br'))
        elementRoot.append(spanOutput)

        this.nameElChange = () => {
            spanOutput.innerHTML = `Hello ${age.value} ${birthYear.value}`
        }

        age.addEventListener('keyup', this.nameElChange)
        birthYear.addEventListener('keyup', this.nameElChange)

        shadowEl.append(elementRoot)
    }
}

customElements.define('input-integer', App)
