function homePage() {
  console.log('home');
  getRecomendation(API_KEY);
  getCategories(API_KEY);
}

function trends() {
  console.log('Trends');
}

function movies() {
  console.log('movies');
}

function categories() {
  console.log('categories');
}

function search() {
  console.log('Search');
}

function navigator() {
  if (location.hash.startsWith('#trends')) {
    trends();
  } else if (location.hash.startsWith('#search')) {
    search();
  } else if (location.hash.startsWith('#movie')) {
    movies();
  } else if (location.hash.startsWith('#categories')) {
    categories();
  } else {
    homePage();
  }
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

navigator();
