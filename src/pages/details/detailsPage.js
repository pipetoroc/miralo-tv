import { showDetails } from './components/showDetails.js'

function detailsPage (backdropPath, genreIds, id, overview, posterPath, title, voteAverage) {
  showDetails(backdropPath, genreIds, id, overview, posterPath, title, voteAverage)
}

export { detailsPage }
