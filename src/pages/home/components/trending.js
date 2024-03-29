import { getRecomendation } from '../../../js/api.js'
import { detailsPage } from '../../details/detailsPage.js'

function trending () {
  const recomendationSection = document.getElementById('recomendations')

  getRecomendation().then((results) => {
    let count = 1
    results.forEach((item) => {
      const { backdrop_path: backdropPath, genre_ids: genreIds, id, overview, poster_path: posterPath, title, vote_average: voteAverage } = item

      const article = document.createElement('article')
      article.className = 'recomendations__article'

      const poster = document.createElement('img')
      poster.addEventListener('click', () => {
        location.hash = `#movie-detail=${id}` // eslint-disable-line
        detailsPage(backdropPath, genreIds, id, overview, posterPath, title, voteAverage)
      })

      poster.src = `https://image.tmdb.org/t/p/w300/${posterPath}`
      poster.className = 'main__img'
      poster.setAttribute('alt', `Imagen de poster ${title}`)
      poster.setAttribute('loading', 'lazy')
      article.appendChild(poster)

      const description = document.createElement('p')
      description.innerHTML = overview
      description.className = 'main__overview'
      description.id = `description${count++}`

      description.addEventListener('click', (e) => {
        const parrafo = document.getElementById(e.target.id)
        parrafo.classList.toggle('noShow')
      })

      article.appendChild(description)

      recomendationSection.appendChild(article)
    })
  })
}

export { trending }
