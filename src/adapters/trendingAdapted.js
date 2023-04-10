function trendingAdapted (response) {
  return response.map((item) => {
    return {
      id: item.id,
      title: item.title,
      posterPath: item.poster_path,
      backdropPath: item.backdrop_path,
      overview: item.overview,
      voteAverage: item.vote_average,
      genreIds: item.genre_ids
    }
  })
}

export { trendingAdapted }
