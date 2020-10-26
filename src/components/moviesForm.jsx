import React, { Component } from "react";
import Input from "../common/input";
import { getGenres } from "../DataProvider/genresProvider";
import Joi from "joi-browser";
import { getMovies, saveMovies } from "../DataProvider/moviesProvider";

class MoviesForm extends Component {
  state = {
    genres: getGenres(),
    movies: getMovies(),
    movie: {
      id: "",
      title: "",
      imdb: 0,
      genre: "",
      rank: 0,
      liked: 0,
      value: 0
    }
  };

  schema = new Joi.object().keys({
    id: Joi.string().required(),

    title: Joi.string()
      .max(150)
      .required(),

    genre: Joi.string().required(),

    imdb: Joi.number()
      .min(0)
      .max(10)
      .required()
  });

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id === "newMovie") {
      const { movie } = this.state;
      movie.id = Date.now().toString();
      this.setState({ movie });
      return;
    }

    const movie = this.state.movies.filter(movie => movie.id === id)[0];
    // this.props.location.push("/movies");

    if (movie === undefined) return this.props.location.replace("/not-found");

    this.setState({
      movie: this.getModelData(movie, id)
    });
  }

  getModelData = (movie, id) => {
    return {
      id: id,
      title: movie.title,
      imdb: movie.imdb,
      genre: movie.genre,
      liked: false,
      rank: 0,
      value: 0
    };
  };
  render() {
    const { genres, movie } = this.state;
    return (
      <form style={{ width: 350, margin: 30 }} onSubmit={this.handleSubmit}>
        <Input
          label="Movie Name"
          id="movieName"
          onChange={this.handleChange}
          value={movie.title}
          type="text"
        />
        <label>Genre</label>
        <select
          className="form-control"
          id="movieGenre"
          onChange={this.handleChange}
          value={movie.genre}
        >
          {genres.map(genre => (
            <option key={genre.name}>{genre.name}</option>
          ))}
        </select>
        <br />
        <Input
          label="IMDb"
          id="movieIMDb"
          onChange={this.handleChange}
          value={movie.imdb}
          type="number"
          min={0}
          step={0.1}
          max={10}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }

  handleChange = ({ currentTarget: input }) => {
    const movie = this.state.movie;
    console.log(input);
    movie[input.id] = input.value;
    this.setState({ movie });
  };

  handleSubmit = e => {
    e.preventDefault();

    const movie = this.state.movie;
    const result = Joi.validate(movie, this.schema);
    if (result.error) console.log(result.error);

    this.saveMovies();

    console.log("Subbmitted");
  };

  saveMovies() {
    const { movies } = this.state;
    const movie = this.state.movie;
    const oldMovie = movies.filter(mv => mv.id === movie.id)[0];
    const index = movies.indexOf(oldMovie);
    if (index !== -1) {
      oldMovie.title = movie.title;
      oldMovie.genre = movie.movieGenre;
      oldMovie.imdb = movie.imdb;
      const moviesList = movies;
      moviesList[index] = oldMovie;
      this.setState({ movies: moviesList });
    } else {
      console.log(movie);
      const newMovie = this.getModelData(movie, movie.id);
      console.log(movies);
      movies.push(newMovie);
      this.setState({ movies });
    }
    saveMovies(movies);
  }
}

export default MoviesForm;
