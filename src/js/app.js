import { genreMovies } from '../pages/home/components/genreMovies.js'
import { showResults } from '../pages/search/components/showResults.js'
import { homePage } from '../pages/home/homePage.js'
import { detailsPage } from '../pages/details/detailsPage.js'

const logoHome = document.getElementById('logoHome')
logoHome.addEventListener('click', () => {
  history.replaceState(null, null, ' ') //eslint-disable-line
  location.reload() // eslint-disable-line
})

window.addEventListener('DOMContentLoaded', () => navigator(), false)
window.addEventListener('hashchange', () => navigator(), false)

function homeNavigation () {
  homePage()
}

function detailPage () {
  // const movieId = location.hash.split('=')[1] // obtener el id de la película de la URL
  // detailsPage(null, null, movieId, null, null, null, null) // pasar el id a la función detailsPage
  detailsPage()
}

function categoriesPage () {
  genreMovies()
}

function searchPage () {
  showResults()
}

export default function navigator () {
  if (location.hash.startsWith('#categories=')) { // eslint-disable-line
    categoriesPage()
  } else if (location.hash.startsWith('#search-movie=')) { // eslint-disable-line
    searchPage()
  } else if (location.hash.startsWith('#movie-detail=')) { // eslint-disable-line
    detailPage()
  } else {
    homeNavigation()
  }
}
