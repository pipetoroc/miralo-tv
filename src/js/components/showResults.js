import { getCollection } from '../api.js'

function showResults (query) {
  const section = document.getElementById('search')
  section.classList.remove('inactive')

  const ul = document.createElement('ul')
  ul.className = 'main__container main__container--div'

  getCollection(query).then((results) => {
    console.log(results)

    results.forEach(element => {
      const { title, poster_path } = element
      const li = document.createElement('li')
      const img = document.createElement('img')
      const posterTitle = document.createElement('h3')

      img.src = `https://image.tmdb.org/t/p/w500/${poster_path}`
      img.className = 'genre__img'
      img.alt = title
      posterTitle.innerText = title
      posterTitle.className = 'search__title'

      li.appendChild(img)
      li.appendChild(posterTitle)
      ul.appendChild(li)
    })
    section.appendChild(ul)
  })
}

export { showResults }
