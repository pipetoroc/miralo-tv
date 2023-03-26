import { getCategories } from '../api.js'
import { genreMovies } from './genreMovies.js'

function categories () {
  getCategories().then((genres) => {
    const categories = document.getElementById('categories')
    categories.innerHTML = ''

    let container = document.querySelector('.main__container')
    if (!container) {
      container = document.createElement('div')
    }
    container.className = 'main__container'

    genres.map((category) => {
      const button = document.createElement('button')
      button.textContent = category.name
      button.className = 'main__button'
      button.addEventListener('click', () => {
        location.hash = `#category=${category.id}-${category.name}`
        genreMovies(category.id, category.name)
      })
      return container.appendChild(button)
    })
    categories.appendChild(container)
  })
}

export { categories }
