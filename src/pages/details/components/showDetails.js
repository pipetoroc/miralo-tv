import { getCategories } from '../../../js/api.js'
import { genreMovies } from '../../home/components/genreMovies.js'

function showDetails (backdropPath, genreIds, id, overview, posterPath, title, voteAverage) {
  console.log(genreIds)
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

  let sectionDetails = document.querySelector('.main__details')
  if (!sectionDetails) {
    sectionDetails = document.createElement('section')
    sectionDetails.className = 'main__details'

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

    const main = document.querySelector('main')
    main.appendChild(sectionDetails)

    getCategories().then(genres => {
      console.log(genres)

      for (const category of genres) {
        genreIds.forEach(id => {
          if (id === category.id) {
            console.log(category.name)
            const button = document.createElement('button')
            button.textContent = category.name
            button.className = 'main__button'
            button.addEventListener('click', () => {
              location.hash = `#category=${genres.id}-${genres.name}` // eslint-disable-line
              genreMovies(genres.id, genres.name)
            })
            divButtons.appendChild(button)
            main.appendChild(divButtons)
          }
        })
      }
    })
  }

  window.scrollTo(0, 0)
}

export { showDetails }
