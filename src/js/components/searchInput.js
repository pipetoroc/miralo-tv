import { showResults } from './showResults.js'

function searchInput () {
  const lentIcon = document.getElementById('header__search')

  const showInput = () => {
    const main = document.querySelector('main')
    const existingForm = document.querySelector('.main__form')

    if (existingForm) {
      return
    }

    const form = document.createElement('form')
    form.className = 'main__form'
    const i = document.createElement('i')
    i.className = 'fa-solid fa-magnifying-glass main__icon'

    form.addEventListener('submit', (e) => {
      e.preventDefault()
    })
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

    main.prepend(form)
    input.focus()
  }
  lentIcon.addEventListener('click', showInput)
}

export { searchInput }
