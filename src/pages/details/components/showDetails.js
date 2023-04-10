import { genreMovies } from '../../home/components/genreMovies.js'
import { getMovie } from '../../../js/api.js'

function showDetails () {
  window.scrollTo(0, 0)

  const recomendationSection = document.getElementById('recomendations')
  recomendationSection.classList.add('inactive')

  const categoriesSection = document.getElementById('categories')
  categoriesSection.classList.add('inactive')

  const trendingTitle = document.getElementById('trendingTitle')
  trendingTitle.classList.add('inactive')

  const genreSection = document.getElementById('genre')
  genreSection.classList.add('inactive')

  const searchSection = document.getElementById('search')
  searchSection.classList.add('inactive')

  const headerNav = document.querySelector('.header__nav')
  headerNav.classList.add('search')

  const sectionDetails = document.getElementById('details')
  sectionDetails.classList.remove('inactive')

  const movieId = location.hash.split('=')[1] //eslint-disable-line
  getMovie(movieId).then((data) => {
    console.log(data)
    const { backdrop_path: backdropPath, genres: genreIds, overview, title, vote_average: voteAverage } = data

    if (!document.querySelector('.detail__div')) {
      const divDetail = document.createElement('div')
      divDetail.className = 'detail__div'

      const poster = document.createElement('img')
      poster.className = 'detail__poster'
      poster.src = `https://image.tmdb.org/t/p/original/${backdropPath}`

      const divContainer = document.createElement('div')
      divContainer.className = 'detail__text-container'

      const h2 = document.createElement('h2')
      h2.innerHTML = title
      h2.className = 'detail__h2'

      const p = document.createElement('p')
      p.innerHTML = overview
      p.className = 'detail__p'

      const vote = document.createElement('p')
      vote.innerHTML = voteAverage
      vote.className = 'detail__vote-average'

      divContainer.append(h2, p, vote)

      const divButtons = document.createElement('div')
      divButtons.className = 'main__container detail__buttons'

      divDetail.appendChild(poster)
      sectionDetails.append(divDetail, divContainer, divButtons)

      genreIds.forEach(category => {
        const button = document.createElement('button')
        button.textContent = category.name
        button.className = 'main__button'
        button.addEventListener('click', () => {
        location.hash = `#category=${category.id}-${category.name}` // eslint-disable-line
          genreMovies(category.id, category.name)
        })
        divButtons.appendChild(button)
        sectionDetails.appendChild(divButtons)
      })
    } else {
      const poster = document.querySelector('.detail__poster')
      poster.src = `https://image.tmdb.org/t/p/original/${backdropPath}`

      const h2 = document.querySelector('.detail__h2')
      h2.textContent = title

      const p = document.querySelector('.detail__p')
      p.textContent = overview

      const vote = document.querySelector('.detail__vote-average')
      vote.textContent = voteAverage
    }
  })
}

export { showDetails }
