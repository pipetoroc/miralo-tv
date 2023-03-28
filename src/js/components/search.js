import { getCollection } from '../api.js'
import { showResults } from './showResults.js'

function search () {
  const lentIcon = document.getElementById('header__search')

  const showInput = () => {
    const main = document.getElementsByClassName('main')
    const form = document.createElement('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
    })
    form.className = 'main__form'
    const i = document.createElement('i')
    i.className = 'fa-solid fa-magnifying-glass main__icon'
    const input = document.createElement('input')
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const query = input.value
        showResults(query)
      }
    })
    input.className = 'main__input'
    input.placeholder = 'What are you looking for?'

    form.appendChild(i)
    form.appendChild(input)

    main[0].prepend(form)
  }
  lentIcon.addEventListener('click', showInput)
}

export { search }
