import { getCategories } from '../../../js/api.js'
import { genreMovies } from './genreMovies.js'

function categories () {
  getCategories().then((genres) => {
    const categoriesSection = document.getElementById('categories')
    categoriesSection.innerHTML = ''

    const divContainer = document.createElement('div')
    divContainer.className = 'main__container'

    genres.forEach(category => {
      const button = document.createElement('button')
      button.textContent = category.name
      button.className = 'main__button'
      button.addEventListener('click', () => {
        location.hash = `#category=${category.id}-${category.name}` // eslint-disable-line
        genreMovies(category.id, category.name)
      })
      divContainer.appendChild(button)
      return categoriesSection.appendChild(divContainer)
    })
  })
}

export { categories }
