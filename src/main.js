const API_KEY = '05b80c31b8ddf6ca35cb30a17cc64420';

async function getRecomendation() {
  const URL_TREND = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const recomendationSection = document.getElementById('recomendations');

  const response = await fetch(URL_TREND);
  const data = await response.json();

  const { results } = data;

  let count = 1;
  results.forEach((item) => {
    const {
      title, name, overview, poster_path,
    } = item;

    const article = document.createElement('article');
    article.className = 'recomendations__article';

    const poster = document.createElement('img');
    poster.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    poster.className = 'main__img';
    poster.setAttribute('alt', `Imagen de poster ${title}`);
    poster.setAttribute('loading', 'lazy');
    article.appendChild(poster);

    const description = document.createElement('p');
    description.innerHTML = overview;
    description.className = 'main__overview';
    description.id = `description${count++}`;

    description.addEventListener('click', (e) => {
      const parrafo = document.getElementById(e.target.id);
      parrafo.classList.toggle('noShow');
    });

    article.appendChild(description);

    recomendationSection.appendChild(article);
  });
}

async function getCategories() {
  const URL_CATEGORY = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  const categories = document.getElementById('categories');

  let container = document.querySelector('.main__container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'main__container';
  }

  const response = await fetch(URL_CATEGORY);
  const data = await response.json();

  const { genres } = data;

  genres.map((category) => {
    const button = document.createElement('button');
    button.textContent = category.name;
    button.className = 'main__button';
    button.addEventListener('click', () => {
      location.hash = `#category=${category.id}`;
      getGenre(category.id);
    });
    return container.appendChild(button);
  });
  if (!document.querySelector('.main__container')) {
    categories.appendChild(container);
  }
}

async function getGenre(id) {
  const URL_GENRE = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=${API_KEY}`;
  const genreSecton = document.getElementById('genre');

  const response = await fetch(URL_GENRE);
  const data = await response.json();

  const { results } = data;

  results.map((movie) => {
    const poster = document.createElement('img');
    poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    poster.className = 'genre__img';
    poster.setAttribute('alt', `Imagen de poster ${movie.title}`);
    poster.setAttribute('loading', 'lazy');
    genreSecton.appendChild(poster);
  });
}
