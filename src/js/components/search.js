function search () {
  const lentIcon = document.getElementById('header__search')

  const showInput = () => {
    const main = document.getElementsByClassName('main')
    const form = document.createElement('form')
    form.className = 'main__form'
    const i = document.createElement('i')
    i.className = 'fa-solid fa-magnifying-glass main__icon'
    const input = document.createElement('input')
    input.className = 'main__input'
    input.placeholder = 'What are you looking for?'

    form.appendChild(i)
    form.appendChild(input)

    main[0].prepend(form)
  }
  lentIcon.addEventListener('click', showInput)
}

export { search }
