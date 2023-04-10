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
    console.log(results)
    results.forEach(movie => {
      const { backdrop_path: backdropPath, id, overview, poster_path: posterPath, title, vote_average: voteAverage } = movie
      const item = document.createElement('li')
      item.className = 'search__li'
      const poster = document.createElement('img')
      poster.src = `https://image.tmdb.org/t/p/w300/${posterPath}`
      poster.className = 'genre__img'
      poster.setAttribute('alt', `Imagen de poster ${title}`)
      poster.setAttribute('loading', 'lazy')
      poster.addEventListener('click', () => {
        location.hash = `#movie-detail=${id}` // eslint-disable-line
        detailsPage(backdropPath, id, overview, posterPath, title, voteAverage) // eslint-disable-line
      })
      item.appendChild(poster)
      ulContainer.appendChild(item)
      genreSecton.appendChild(ulContainer)
    })
    genreSecton.scrollIntoView({ behavior: 'smooth' })
  })
}

export { genreMovies }
