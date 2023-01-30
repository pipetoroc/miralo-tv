const API_KEY = '05b80c31b8ddf6ca35cb30a17cc64420';

async function getRecomendation() {
  const URL_TREND = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const recomendationSection = document.getElementById('recomendations');

  const response = await fetch(URL_TREND);
  const data = await response.json();

  const { results } = data;

  results.map((item) => {
    const {
      title, name, overview, poster_path,
    } = item;

    const article = document.createElement('article');
    article.className = 'recomendations__article';

    // if (title) {
    //   const h2 = document.createElement('h2');
    //   h2.innerHTML = title;
    //   h2.className = 'main__h2';
    //   article.appendChild(h2);
    // } else {
    //   const h2 = document.createElement('h2');
    //   h2.innerHTML = name;
    //   h2.className = 'main__h2';
    //   article.appendChild(h2);
    // }

    const poster = document.createElement('img');
    poster.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    poster.className = 'main__img';
    poster.setAttribute('alt', `Imagen de poster ${title}`);
    article.appendChild(poster);

    const description = document.createElement('p');
    description.innerHTML = overview;
    description.className = 'main__overview';
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
  console.log(data);

  const { genres } = data;

  genres.map((category) =>{
    const button = document.createElement('button');
    button.textContent = category.name;
    button.className = 'main__button';
    container.appendChild(button);
  });
  categories.appendChild(container);
}

getRecomendation(API_KEY);
getCategories(API_KEY);
