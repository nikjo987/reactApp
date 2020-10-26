let movies = [
  {
    title: "The Shawshank Redemption",
    rank: "1",
    id: "tt0111161",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 9.4
  },
  {
    title: "The Godfather",
    rank: "2",
    id: "tt0068646",
    genre: "Crime",
    liked: false,
    value: 0,
    imdb: 9.3
  },
  {
    title: "The Godfather: Part II",
    rank: "3",
    id: "tt0071562",
    genre: "Crime",
    liked: false,
    value: 0,
    imdb: 9.2
  },
  {
    title: "Pulp Fiction",
    rank: "4",
    id: "tt0110912",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 9.1
  },
  {
    title: "The Good, the Bad and the Ugly",
    rank: "5",
    id: "tt0060196",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 9.0
  },
  {
    title: "The Dark Knight",
    rank: "6",
    id: "tt0468569",
    genre: "Fiction",
    liked: true,
    value: 0,
    imdb: 8.9
  },
  {
    title: "12 Angry Men",
    rank: "7",
    id: "tt0050083",
    genre: "Suspence",
    liked: true,
    value: 0,
    imdb: 8.8
  },
  {
    title: "Schindler's List",
    rank: "8",
    id: "tt0108052",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 8.7
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    rank: "9",
    id: "tt0167260",
    genre: "Fiction",
    liked: false,
    value: 0,
    imdb: 8.6
  },
  {
    title: "Fight Club",
    rank: "10",
    id: "tt0137523",
    genre: "Suspence",
    liked: false,
    value: 0,
    imdb: 8.5
  }
];

export function getMovies() {
  return movies;
}

export function saveMovies(moviesP) {
  movies = moviesP;
}
