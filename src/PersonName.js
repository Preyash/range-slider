class PersonName extends HTMLElement {
    constructor() {
        super()

        let shadowEl = this.attachShadow({ mode: 'closed' })
        let d = document
        let elementRoot = d.createElement('div')

        let fNameLabel = d.createElement('label')
        fNameLabel.innerText = 'First Name: '

        let lNameLabel = d.createElement('label')
        lNameLabel.innerText = 'Last Name: '

        let fName = d.createElement('input')
        let lName = d.createElement('input')

        elementRoot.append(fNameLabel)
        elementRoot.append(fName)
        elementRoot.append(d.createElement('br'))
        elementRoot.append(lNameLabel)
        elementRoot.append(lName)

        let spanOutput = d.createElement('span')
        elementRoot.append(d.createElement('br'))
        elementRoot.append(spanOutput)

        this.nameElChange = () => {
            spanOutput.innerHTML = `Hello ${fName.value} ${lName.value}`
        }

        fName.addEventListener('keyup', this.nameElChange)
        lName.addEventListener('keyup', this.nameElChange)

        shadowEl.append(elementRoot)
    }
}

customElements.define('person-name', PersonName)
