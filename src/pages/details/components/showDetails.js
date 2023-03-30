function showDetails (id, poster_path) { // eslint-disable-line
  console.log('mostrando details')
  const recomendationSection = document.getElementById('recomendations')
  recomendationSection.classList.add('inactive')

  const categoriesSection = document.getElementById('categories')
  categoriesSection.classList.add('inactive')

  const sectionDetails = document.createElement('section')
  sectionDetails.className = 'main__details'
  const poster = document.createElement('img')
  poster.className = 'detail__poster'
  poster.src = `https://image.tmdb.org/t/p/w500/${poster_path}` // eslint-disable-line

  sectionDetails.appendChild(poster)
  const main = document.querySelector('main')
  main.appendChild(sectionDetails)
}

export { showDetails }
