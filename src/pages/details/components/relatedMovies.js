import { getRelated } from '../../../js/api.js'
import { detailsPage } from '../detailsPage.js'

function relatedMovies (id) {
  const detailSection = document.getElementById('details')

  const ulContainer = document.createElement('ul')
  ulContainer.className = 'main__container'
  ulContainer.setAttribute('id', 'ulContainer')

  getRelated(id).then((results) => {
    console.log(results)

    results.forEach(movie => {
      const { backdrop_path: backdropPath, genre_ids: genreIds, id, overview, poster_path: posterPath, title, vote_average: voteAverage } = movie

      const item = document.createElement('li')
      item.className = 'search__li'

      const poster = document.createElement('img')
      poster.src = `https://image.tmdb.org/t/p/w300/${posterPath}`
      poster.className = 'genre__img'
      poster.setAttribute('alt', `Imagen de poster ${title}`)
      poster.setAttribute('loading', 'lazy')
      poster.addEventListener('click', () => {
        location.hash = `#movie-detail=${id}` // eslint-disable-line
        detailsPage(backdropPath, genreIds, id, overview, posterPath, title, voteAverage) // eslint-disable-line
      })

      item.appendChild(poster)
      ulContainer.appendChild(item)
    })
    const h2 = document.createElement('h2')
    h2.className = 'main__h2 main__h2--detail'
    h2.innerHTML = 'Similar Movies'

    detailSection.append(h2, ulContainer)
  })
}

export { relatedMovies }
