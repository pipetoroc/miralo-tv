import { trending } from './components/trending.js'
import { categories } from './components/categories.js'
import { searchInput } from './components/searchInput.js'

function homePage () {
  trending()
  categories()
  searchInput()
}

export { homePage }
