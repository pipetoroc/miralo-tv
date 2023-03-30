import { getCollection } from '../../../js/api.js'
import { detailsPage } from '../../details/detailsPage.js'

function showResults (query) {
  const sectionSearch = document.getElementById('search')
  sectionSearch.classList.remove('inactive')

  const recomendationSection = document.getElementById('recomendations')
  recomendationSection.classList.add('inactive')

  const trendingTitle = document.getElementById('trendingTitle')
  trendingTitle.classList.add('inactive')

  const categoriesSection = document.getElementById('categories')
  categoriesSection.classList.add('inactive')

  const genreSection = document.getElementById('genre')
  genreSection.classList.add('inactive')

  const ul = document.createElement('ul')
  ul.className = 'main__container'

  getCollection(query).then((results) => {
    sectionSearch.innerHTML = ''

    results.forEach(element => {
      const { title, poster_path, id } = element // eslint-disable-line
      const li = document.createElement('li')
      li.addEventListener('click', () => {
        location.hash = `#movie-detail=${id}`
        detailsPage(id, title, poster_path)
      })
      const div = document.createElement('div')
      div.className = 'search__li'
      const img = document.createElement('img')
      const posterTitle = document.createElement('h3')

      img.src = `https://image.tmdb.org/t/p/w500/${poster_path}` // eslint-disable-line
      img.className = 'genre__img'
      img.alt = title
      posterTitle.innerText = title
      posterTitle.className = 'search__title'

      div.appendChild(img)
      li.appendChild(div)
      li.appendChild(posterTitle)
      ul.appendChild(li)
    })
    sectionSearch.appendChild(ul)
  })
}

export { showResults }
