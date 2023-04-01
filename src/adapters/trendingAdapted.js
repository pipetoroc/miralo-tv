import { getRecomendation } from '../js/api.js'

async function trendingAdapted () {
  getRecomendation().then((results) => {
    const moviesAdapted = results.forEach(movie => {
      const { backdrop_path: backDrop, id, genre_ids: genreIds, original_title: originalTitle, overview, poster_path: posterPath, vote_average: voteAverage } = movie

      return {
        backDrop,
        id,
        genreIds,
        originalTitle,
        overview,
        posterPath,
        voteAverage
      }
    })
    console.log(moviesAdapted)
    return moviesAdapted
  })
}

export { trendingAdapted }
