let movies = [
  {
    title: "The Shawshank Redemption",
    rank: "1",
    id: "tt0111161",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 9.4,
    link: "https://www.youtube.com/watch?v=6hB3S9bIaco"
  },
  {
    title: "The Godfather",
    rank: "2",
    id: "tt0068646",
    genre: "Crime",
    liked: false,
    value: 0,
    imdb: 9.3,
    link: "https://www.youtube.com/watch?v=sY1S34973zA"
  },
  {
    title: "The Godfather: Part II",
    rank: "3",
    id: "tt0071562",
    genre: "Crime",
    liked: false,
    value: 0,
    imdb: 9.2,
    link: "https://www.youtube.com/watch?v=9O1Iy9od7-A"
  },
  {
    title: "Pulp Fiction",
    rank: "4",
    id: "tt0110912",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 9.1,
    link: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  },
  {
    title: "The Good, the Bad and the Ugly",
    rank: "5",
    id: "tt0060196",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 9.0,
    link: "https://www.youtube.com/watch?v=WCN5JJY_wiA"
  },
  {
    title: "The Dark Knight",
    rank: "6",
    id: "tt0468569",
    genre: "Fiction",
    liked: true,
    value: 0,
    imdb: 8.9,
    link: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    title: "12 Angry Men",
    rank: "7",
    id: "tt0050083",
    genre: "Suspence",
    liked: true,
    value: 0,
    imdb: 8.8,
    link: "https://www.youtube.com/watch?v=_13J_9B5jEk"
  },
  {
    title: "Schindler's List",
    rank: "8",
    id: "tt0108052",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 8.7,
    link: "https://www.youtube.com/watch?v=gG22XNhtnoY"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    rank: "9",
    id: "tt0167260",
    genre: "Fiction",
    liked: false,
    value: 0,
    imdb: 8.6,
    link: "https://www.youtube.com/watch?v=r5X-hFf6Bwo"
  },
  {
    title: "Fight Club",
    rank: "10",
    id: "tt0137523",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 8.5,
    link: "https://www.youtube.com/watch?v=qtRKdVHc-cE"
  }
];

export function getMovies() {
  return movies;
}

export function saveMovies(moviesP) {
  movies = moviesP;
}
