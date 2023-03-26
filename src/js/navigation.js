import { trending } from './components/trending.js'
import { genreMovies } from './components/genreMovies.js'

window.addEventListener('DOMContentLoaded', () => navigator(), false)
window.addEventListener('hashchange', () => navigator(), false)

function homePage () {
  trending()
  genreMovies()
}

function trends () {
  console.log('Trends')
}

function movies () {
  console.log('movies')
}

function categories () {
  console.log('categories')
}

function search () {
  console.log('Search')
}

export default function navigator () {
  if (location.hash.startsWith('#trends')) {
    trends()
  } else if (location.hash.startsWith('#search=')) {
    search()
  } else if (location.hash.startsWith('#movie=')) {
    movies()
  } else if (location.hash.startsWith('#categories=')) {
    categories()
  } else {
    homePage()
  }
}
