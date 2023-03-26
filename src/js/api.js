const API_KEY = '05b80c31b8ddf6ca35cb30a17cc64420'
const URL = 'https://api.themoviedb.org/3'

async function getRecomendation () {
  const URL_TREND = `${URL}/trending/movie/day?api_key=${API_KEY}`

  const response = await fetch(URL_TREND)
  const data = await response.json()

  const { results } = data
  console.log(results)
  return results
}

async function getCategories () {
  const URL_CATEGORY = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

  const response = await fetch(URL_CATEGORY)
  const data = await response.json()

  const { genres } = data
  return genres
}

async function getGenre (id) {
  const URL_GENRE = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=${API_KEY}`

  const response = await fetch(URL_GENRE)
  const data = await response.json()

  const { results } = data
  console.log(results)
  return results
}

export { getRecomendation, getCategories, getGenre }
