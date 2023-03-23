const API_KEY = '05b80c31b8ddf6ca35cb30a17cc64420'

async function getRecomendation () {
  const URL_TREND = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  const recomendationSection = document.getElementById('recomendations')

  const response = await fetch(URL_TREND)
  const data = await response.json()

  const { results } = data

  let count = 1
  results.forEach((item) => {
    const {
      title, name, overview, poster_path
    } = item

    const article = document.createElement('article')
    article.className = 'recomendations__article'

    const poster = document.createElement('img')
    poster.src = `https://image.tmdb.org/t/p/w500/${poster_path}`
    poster.className = 'main__img'
    poster.setAttribute('alt', `Imagen de poster ${title}`)
    poster.setAttribute('loading', 'lazy')
    article.appendChild(poster)

    const description = document.createElement('p')
    description.innerHTML = overview
    description.className = 'main__overview'
    description.id = `description${count++}`

    description.addEventListener('click', (e) => {
      const parrafo = document.getElementById(e.target.id)
      parrafo.classList.toggle('noShow')
    })

    article.appendChild(description)

    recomendationSection.appendChild(article)
  })
}

async function getCategories () {
  const URL_CATEGORY = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  const categories = document.getElementById('categories')

  categories.innerHTML = ''

  let container = document.querySelector('.main__container')
  if (!container) {
    container = document.createElement('div')
  }
  container.className = 'main__container'

  const response = await fetch(URL_CATEGORY)
  const data = await response.json()

  const { genres } = data

  genres.map((category) => {
    const button = document.createElement('button')
    button.textContent = category.name
    button.className = 'main__button'
    button.addEventListener('click', () => {
      location.hash = `#category=${category.id}-${category.name}`
      getGenre(category.id, category.name)
    })
    return container.appendChild(button)
  })
  categories.appendChild(container)
}

async function getGenre (id, name) {
  const URL_GENRE = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=${API_KEY}`
  const genreSecton = document.getElementById('genre')

  genreSecton.innerHTML = ''
  const h2 = document.createElement('h2')
  h2.className = 'main__h2'
  h2.innerHTML = name
  h2.setAttribute('id', 'genreTitle')
  genreSecton.appendChild(h2)

  const ulContainer = document.createElement('ul')
  ulContainer.className = 'main__container main__container--div'
  ulContainer.setAttribute('id', 'ulContainer')

  const response = await fetch(URL_GENRE)
  const data = await response.json()

  const { results } = data
  console.log(results)

  results.forEach(movie => {
    const item = document.createElement('li')
    const poster = document.createElement('img')
    poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    poster.className = 'genre__img'
    poster.setAttribute('alt', `Imagen de poster ${movie.title}`)
    poster.setAttribute('loading', 'lazy')
    poster.addEventListener('click', () => {
      location.hash = `#detail=${movie.id}`
      getDetail(movie.id, movie.title, movie.poster_path)
    })
    item.appendChild(poster)
    ulContainer.appendChild(item)
    return genreSecton.appendChild(ulContainer)
    // results.map((movie) => {
    // const poster = document.createElement('img')
    // poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    // poster.className = 'genre__img'
    // poster.setAttribute('alt', `Imagen de poster ${movie.title}`)
    // poster.setAttribute('loading', 'lazy')
    // poster.addEventListener('click', () => {
    //   location.hash = `#detail=${movie.id}`
    //   getDetail(movie.id, movie.title, movie.poster_path)
    // return genreSecton.appendChild(poster)
  })
}

// async function getDetail (id) {

// }
