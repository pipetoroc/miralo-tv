const API_KEY = '05b80c31b8ddf6ca35cb30a17cc64420'
const URL = 'https://api.themoviedb.org/3'

async function getRecomendation () {
  const URL_TREND = `${URL}/trending/movie/day?api_key=${API_KEY}`

  const response = await fetch(URL_TREND)
  const data = await response.json()

  const { results } = data
  return results
}

async function getCategories () {
  const URL_CATEGORY = `${URL}/genre/movie/list?api_key=${API_KEY}`

  const response = await fetch(URL_CATEGORY)
  const data = await response.json()

  const { genres } = data
  return genres
}

async function getGenre (id) {
  const URL_GENRE = `${URL}/discover/movie?with_genres=${id}&api_key=${API_KEY}`

  const response = await fetch(URL_GENRE)
  const data = await response.json()

  const { results } = data
  return results
}

async function getCollection (query) {
  const URL_COLLECTION = `${URL}/search/movie?api_key=${API_KEY}&query=${query}`

  const response = await fetch(URL_COLLECTION)
  const data = await response.json()
  const { results } = data
  return results
}

async function getRelated (movieId) {
  const URL_RELATED = `${URL}/movie/${movieId}/similar?api_key=${API_KEY}`

  const response = await fetch(URL_RELATED)
  const data = await response.json()
  const { results } = data
  return results
}

async function getMovie (id) {
  const URL_MOVIE = `${URL}/movie/${id}?api_key=${API_KEY}`

  const response = await fetch(URL_MOVIE)
  const data = await response.json()
  return data
}

export { getRecomendation, getCategories, getGenre, getCollection, getRelated, getMovie }
