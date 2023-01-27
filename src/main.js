const API_KEY = '05b80c31b8ddf6ca35cb30a17cc64420';
const URL = `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`;

async function getMovies(API_KEY) {
  const trend = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

  const response = await fetch(trend);
  const data = await response.json();

  const { results } = data;

  console.log(results);

  results.map((item) => {
    const {
      title, name, overview, poster_path,
    } = item;

    if (title) {
      const h2 = document.createElement('h2');
      h2.innerHTML = title;
      document.body.appendChild(h2);
    } else {
      const h2 = document.createElement('h2');
      h2.innerHTML = name;
      document.body.appendChild(h2);
    }
  });
}

getMovies(API_KEY);
