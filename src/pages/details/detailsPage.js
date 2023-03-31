import { showDetails } from './components/showDetails.js'

function detailsPage (id, overview, poster_path, title, vote_average) {
  showDetails(id, overview, poster_path, title, vote_average)
}

export { detailsPage }
