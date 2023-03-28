import { categories } from './components/categories.js'
import { trending } from './components/trending.js'
import { searchInput } from './components/searchInput.js'

const logoHome = document.getElementById('logoHome')
logoHome.addEventListener('click', () => {
  location.reload() // eslint-disable-line
})

trending()
categories()
searchInput()
