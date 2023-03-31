function showDetails (id, overview, poster_path, title, vote_average) {
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
    poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`

    const divContainer = document.createElement('div')
    divContainer.className = 'detail__text-container'

    const h2 = document.createElement('h2')
    h2.innerHTML = title
    h2.className = 'detail__h2'

    const p = document.createElement('p')
    p.innerHTML = overview
    p.className = 'detail__p'

    const voteAverage = document.createElement('p')
    voteAverage.innerHTML = vote_average
    voteAverage.className = 'detail__vote-average'

    divContainer.append(h2, p, voteAverage)

    divDetail.appendChild(poster)
    sectionDetails.append(divDetail, divContainer)

    const main = document.querySelector('main')
    main.appendChild(sectionDetails)
  }
  window.scrollTo(0, 0)
}

export { showDetails }
