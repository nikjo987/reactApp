import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { paginate } from "./paginate";
import Like from "../common/like";
import List from "../common/list";
import Input from "../common/input";
import Counter from "../common/counter";
import CustomTable from "../common/customTable";
import { getMovies } from "../DataProvider/moviesProvider";
import { getGenres } from "../DataProvider/genresProvider";
import "bootstrap/dist/css/bootstrap.css";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: [{ name: "All Genres", id: 0 }, ...getGenres()],
    currentPage: 1,
    currentGenre: "All Genres",
    pageSize: 5,
    sortColumn: { column: "title", order: "asc" },
    search: ""
  };

  render() {
    const tableColumns = [
      { name: "rank", title: "Rank" },

      {
        name: "title",
        title: "Name",
        content: movie => (
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              params: { moviesInfo: movie }
            }}
          >
            {movie.title}
          </Link>
        )
      },
      { name: "genre", title: "Genre" },
      { name: "imdb", title: "IMDb" },
      {
        name: "liked",
        title: "Liked",
        content: item => (
          <Like
            counter={item}
            onLiked={() => {
              this.handleLike(item);
            }}
          ></Like>
        )
      },

      {
        name: "Delete",
        title: "",
        content: item => (
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        )
      },
      {
        name: "Counter",
        title: "",
        content: item => (
          <Counter
            counter={item}
            onIncrement={() => this.handleIncrement(item)}
            onDecrement={() => this.handleDecrement(item)}
          />
        )
      }
    ];

    // Object destructuring
    const {
      movies,
      genres,
      currentPage,
      currentGenre,
      pageSize,
      sortColumn,
      search
    } = this.state;

    const filteredMovies = this.getFilteredMovies();

    // Sorting movies on basis of sort column
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.column],
      [sortColumn.order]
    );

    // Previously filtered movies now reduced or used as it is as per page size
    const moviesList = paginate(sortedMovies, currentPage, pageSize);

    return (
      <div>
        {/* <Navbar totalCount={() => this.handleTotalCount(movies)} /> */}
        <div className="row">
          <div className="col-3">
            <br />
            <br />
            <List
              itemList={genres}
              onCliked={this.handleGenreCliked}
              currentGenre={currentGenre}
              // Very important :- passed an extra parameter along with one coming from List Component.
              // Also, the function is directly called without any event
              onBadgeCount={item => this.handleBadgeCount(movies, item)}
            />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-2">
                <button className="btn btn-outline-primary btn-sm m-3">
                  <Link to={{ pathname: `/movies/newMovie` }}>New Movie</Link>
                </button>
              </div>
              <div className="col-5">
                <Input
                  type="text"
                  id="search"
                  onChange={this.handleSearchChange}
                  value={search}
                  placeholder="Search"
                />
              </div>
            </div>
            {/* <h4>{this.getMovieCount(filteredMovies.length)} </h4> */}
            <CustomTable
              caption={"Top Curated movies by R<sup>2</sup>."}
              columns={tableColumns}
              itemList={moviesList}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              totalCount={filteredMovies.length}
              pageSize={pageSize}
              onPageClicked={this.handlePageClicked}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }

  getFilteredMovies() {
    const { search, currentGenre, movies } = this.state;
    if (search) {
      return movies.filter(movie =>
        _.startsWith(movie.title.toLowerCase(), search.toLowerCase(), 0)
      );
    } else {
      // Filtering movies on basis of genre
      return currentGenre !== "All Genres"
        ? movies.filter(movie => movie.genre === currentGenre)
        : movies;
    }
  }

  //#region Handlers
  handleTotalCount = moviesList => {
    return moviesList
      .filter(movie => movie.value)
      .reduce((acc, movie) => {
        return acc + movie.value;
      }, 0);
  };

  getMovieCount = length => {
    const count = length;
    return count === 0
      ? "No movies left for rental"
      : `There are ${count} movie(s) left for rental!`;
  };

  handleSearchChange = ({ currentTarget: input }) => {
    this.setState({ search: input.value });
  };

  handleDelete = item => {
    const movies = this.state.movies.filter(movie => movie.id !== item.id);
    this.setState({
      movies
    });
    //Updating Total Count in parent
    this.props.onCount(movies);
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleGenreCliked = genre => {
    this.setState({ currentGenre: genre.name, currentPage: 1 });
  };

  handlePageClicked = page => {
    this.setState({ currentPage: page });
  };

  handleIncrement = counter => {
    const counters = [...this.state.movies];
    const index = counters.indexOf(counter);
    counters[index].value += 1;
    this.setState({ movies: counters });
    //Updating Total Count in parent
    this.props.onCount(this.state.movies);
  };

  handleDecrement = counter => {
    if (counter.value > 0) {
      const counters = [...this.state.movies];
      const index = counters.indexOf(counter);
      counters[index].value -= 1;
      this.setState({ movies: counters });
      //Updating Total Count in parent
      this.props.onCount(this.state.movies);
    }
  };

  handleBadgeCount = (movies, item) => {
    if (item.id === 0) return movies.length;
    else return movies.filter(movie => movie.genre === item.name).length;
  };

  handleSort = sortColumn => {
    this.setState({
      sortColumn
    });
  };

  //#endregion Handlers
}

export default Movies;
