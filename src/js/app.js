import { showDetails } from '../pages/details/components/showDetails.js'
import { genreMovies } from '../pages/home/components/genreMovies.js'
import { showResults } from '../pages/search/components/showResults.js'
import { homePage } from '../pages/home/homePage.js'

const logoHome = document.getElementById('logoHome')
logoHome.addEventListener('click', () => {
  location.reload() // eslint-disable-line
})

window.addEventListener('DOMContentLoaded', () => navigator(), false)
window.addEventListener('hashchange', () => navigator(), false)

function homeNavigation () {
  homePage()
}

function detailPage () {
  showDetails()
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
