import { getCategories } from '../../../js/api.js'
import { genreMovies } from './genreMovies.js'

function categories () {
  getCategories().then((genres) => {
    const categoriesSection = document.getElementById('categories')
    categoriesSection.innerHTML = ''

    categoriesSection.classList.add('main__container')

    genres.forEach(category => {
      const button = document.createElement('button')
      button.textContent = category.name
      button.className = 'main__button'
      button.addEventListener('click', () => {
        location.hash = `#category=${category.id}-${category.name}` // eslint-disable-line
        genreMovies(category.id, category.name)
      })
      return categoriesSection.appendChild(button)
    })
  })
}

export { categories }
