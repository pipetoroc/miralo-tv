function showDetails (id, title, poster_path) { // eslint-disable-line

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

  let sectionDetails = document.querySelector('.main__details')
  if (!sectionDetails) {
    sectionDetails = document.createElement('section')
    sectionDetails.className = 'main__details'
    const poster = document.createElement('img')
    poster.className = 'detail__poster'
    poster.src = `https://image.tmdb.org/t/p/w500/${poster_path}` // eslint-disable-line

    sectionDetails.appendChild(poster)
    const main = document.querySelector('main')
    main.appendChild(sectionDetails)
  }
  window.scrollTo(0, 0)
}

export { showDetails }
