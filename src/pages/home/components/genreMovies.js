import { getGenre } from '../../../js/api.js'
import { detailsPage } from '../../details/detailsPage.js'

function genreMovies (id, name) {
  const genreSecton = document.getElementById('genre')
  genreSecton.innerHTML = ''

  const h2 = document.createElement('h2')
  h2.className = 'main__h2'
  h2.innerHTML = name
  h2.setAttribute('id', 'genreTitle')
  genreSecton.appendChild(h2)

  const ulContainer = document.createElement('ul')
  ulContainer.className = 'main__container'
  ulContainer.setAttribute('id', 'ulContainer')

  getGenre(id).then((results) => {
    results.forEach(movie => {
      console.log(movie)
      const item = document.createElement('li')
      item.className = 'search__li'
      const poster = document.createElement('img')
      poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      poster.className = 'genre__img'
      poster.setAttribute('alt', `Imagen de poster ${movie.title}`)
      poster.setAttribute('loading', 'lazy')
      poster.addEventListener('click', () => {
        location.hash = `#movie-detail=${movie.id}` // eslint-disable-line
        detailsPage(movie.id, movie.overview, movie.poster_path, movie.title) // eslint-disable-line
      })
      item.appendChild(poster)
      ulContainer.appendChild(item)
      genreSecton.appendChild(ulContainer)
    })
    genreSecton.scrollIntoView({ behavior: 'smooth' })
  })
}

export { genreMovies }
