import React, { Component } from "react";
import Input from "../common/input";
import { getGenres } from "../DataProvider/genresProvider";
import Joi from "joi-browser";
import { getMovies, saveMovies } from "../DataProvider/moviesProvider";
import SelectInput from "./selectInput";
import ReactPlayer from "react-player";

class MoviesForm extends Component {
  state = {
    genres: getGenres(),
    movies: getMovies(),
    movie: {
      id: "",
      title: "",
      imdb: 0,
      genre: "Suspence",
      link: ""
    },
    errors: {}
  };

  schema = {
    id: Joi.string().required(),

    title: Joi.string()
      .min(5)
      .max(150)
      .required(),

    genre: Joi.string().required(),

    imdb: Joi.number()
      .min(0)
      .max(10)
      .required(),

    link: Joi.string().uri()
  };

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

    if (movie === undefined) return this.props.history.replace("/not-found");

    this.setState({
      movie: this.getModelData(movie)
    });
  }

  getModelData = movie => {
    return {
      id: movie.id,
      title: movie.title,
      imdb: movie.imdb,
      genre: movie.genre,
      link: movie.link,
      rank: this.state.movies.length + 1
    };
  };
  render() {
    const { genres, movie, errors } = this.state;
    return (
      <div className="row">
        <div className="col-2">
          <form style={{ width: 350, margin: 30 }} onSubmit={this.handleSubmit}>
            <Input
              label="Movie Name"
              id="title"
              value={movie.title}
              onChange={this.handleChange}
              type="text"
              errors={errors}
            />
            <SelectInput
              label="Genre"
              id="genre"
              items={genres}
              value={movie.genre}
              onChange={this.handleChange}
              errors={errors}
            />
            <Input
              label="IMDb"
              id="imdb"
              value={movie.imdb}
              type="number"
              min={0}
              step={0.1}
              max={10}
              onChange={this.handleChange}
              errors={errors}
            />
            {this.getTrialerLink(movie)}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-3"></div>
        <ReactPlayer controls url={movie.link} />
      </div>
    );
  }

  getTrialerLink(movie) {
    return this.props.match.params.id === "newMovie" ? (
      <Input
        label="Trailer Link"
        id="link"
        value={movie.link}
        type="text"
        onChange={this.handleChange}
        errors={this.state.errors}
      />
    ) : null;
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else delete errors[input.id];

    this.setState({ errors });

    const movie = this.state.movie;
    movie[input.id] = input.value;
    this.setState({ movie });
  };

  validateProperty({ id, value }) {
    const obj = { [id]: value };
    const objSchema = { [id]: this.schema[id] };
    const { error } = Joi.validate(obj, objSchema, { abortEarly: false });
    console.log(error);
    return error ? error.details[0].message : null;
  }

  handleSubmit = e => {
    e.preventDefault();

    const movie = this.state.movie;
    const result = Joi.validate(movie, this.schema);
    if (result.error) {
      console.log(result);
    }

    this.saveMovies();

    console.log("Subbmitted");
    this.props.history.push("/movies");
  };

  saveMovies() {
    const { movies } = this.state;
    const movie = this.state.movie;
    const oldMovie = movies.filter(mv => mv.id === movie.id)[0];
    const index = movies.indexOf(oldMovie);
    if (index !== -1) {
      oldMovie.title = movie.title;
      oldMovie.genre = movie.genre;
      oldMovie.imdb = movie.imdb;
      const moviesList = movies;
      moviesList[index] = oldMovie;
      this.setState({ movies: moviesList });
    } else {
      const newMovie = this.getModelData(movie);
      movies.push(newMovie);
      this.setState({ movies });
    }
    saveMovies(movies);
  }
}

export default MoviesForm;
