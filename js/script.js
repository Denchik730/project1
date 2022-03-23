const numberOfFilms = +prompt('How many movies have you seen?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the movies I watched?', ''),
      b = prompt('How much would you rate it?'),
      c = prompt('One of the movies I watched?', ''),
      d = prompt('How much would you rate it?');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;



console.log(personalMoviesDB);