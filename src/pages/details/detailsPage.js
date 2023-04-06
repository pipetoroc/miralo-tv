import { relatedMovies } from './components/relatedMovies.js'
import { showDetails } from './components/showDetails.js'

let relatedMoviesCalled = false

function detailsPage (backdropPath, genreIds, id, overview, posterPath, title, voteAverage) {
  showDetails(backdropPath, genreIds, id, overview, posterPath, title, voteAverage)
  if (!relatedMoviesCalled) {
    relatedMovies(id)
    relatedMoviesCalled = true
  }
}

export { detailsPage }
