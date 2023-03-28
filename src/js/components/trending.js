import { getRecomendation } from '../api.js'

function trending () {
  const recomendationSection = document.getElementById('recomendations')

  getRecomendation().then((results) => {
    let count = 1
    results.forEach((item) => {
      const {
        title, name, overview, poster_path
      } = item

      const article = document.createElement('article')
      article.className = 'recomendations__article'
      article.addEventListener('click', () => console.log('mostrar los detalles de la película'))

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
  })
}

export { trending }