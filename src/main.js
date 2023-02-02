const API_KEY = '05b80c31b8ddf6ca35cb30a17cc64420';

async function getRecomendation() {
  const URL_TREND = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const recomendationSection = document.getElementById('recomendations');

  const response = await fetch(URL_TREND);
  const data = await response.json();

  const { results } = data;
  console.log(results);

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
  const container = document.createElement('div');
  container.className = 'main__container';

  const response = await fetch(URL_CATEGORY);
  const data = await response.json();

  const { genres } = data;

  genres.map((category) => {
    const button = document.createElement('button');
    button.textContent = category.name;
    button.className = 'main__button';
    container.appendChild(button);
  });
  categories.appendChild(container);
}
