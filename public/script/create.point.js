const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const stateEl = document.querySelector('select[name=state]')
const citiesEl = document.querySelector('select[name=city]')
const stateInput = document.querySelector('[name=stateSelected]')

function getStates() {
    fetch(url)
        .then(res => res.json())
        .then(states => {
            states.sort(order)
            states.forEach(state => {
                const option = document.createElement('option')
                option.value = state.id
                option.innerHTML = state.nome
                stateEl.appendChild(option)
            })

        })
}
function getCities(event) {
    citiesEl.disabled = false
    citiesEl.innerHTML = ''
    const uf = event.target.value
    const indexOfselectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfselectedState].text
    fetch(`${url}/${uf}/municipios`)
        .then(res => res.json())
        .then(cities => {
            cities.sort(order)
            for (let city of cities) {
                const option = document.createElement('option')
                option.value = city.nome
                option.innerHTML = city.nome
                citiesEl.appendChild(option)
            }
        })
}

function order(a, b) {
    if (a.nome < b.nome) return -1
    if (a.nome > b.nome) return 1;
    return 0
}

getStates()

stateEl.addEventListener('change', getCities)

const listItems = document.querySelectorAll('.items-grid li')

for (const item of listItems) {
    item.addEventListener('click', handleSelectedItem)
}
let items = []
const collectedItems = document.querySelector('[name=items]')
function handleSelectedItem(event) {
    const selectedItem = event.target
    selectedItem.classList.toggle('selected')
    const selectedId = selectedItem.dataset.id
    console.log(selectedId)
    const isSelected = items.findIndex(item => {
        return item == selectedId
    })
    if (isSelected >= 0) {
        const filteredItems = items.filter(item => {
            return item != selectedId
        })
        items = filteredItems
    } else {
        items.push(selectedId)
    }
    console.log('items', items)
    collectedItems.value = items
    console.log(collectedItems.value)
}