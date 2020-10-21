import React, { Component } from "react";
import Movies from "./components/movies";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./common/notFound";
import Navbar from "./common/navbar";
import { FiShoppingCart } from "react-icons/fi";
import MoviesForm from "./components/moviesForm";

class RentalSquare extends Component {
  state = {
    totalCount: 0
  };
  render() {
    return (
      <div>
        <Navbar />
        <span
          className="badge badge-pills badge-primary mr-sm-2 my-2 my-sm-0"
          style={{ position: "absolute", right: 30 }}
        >
          <FiShoppingCart size={40} />
          {this.state.totalCount}
        </span>
        <div className="content">
          <Switch>
            <Route path="/movies/:id" component={MoviesForm}></Route>
            <Route
              path="/"
              exact
              render={props => (
                <Movies
                  onCount={movies => this.handleTotalCount(movies)}
                  {...props}
                />
              )}
            ></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/movies" to="/"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }0

  handleTotalCount = movies => {
    let totalCount = 0;
    if (movies !== undefined) {
      totalCount = parseInt(
        movies
          .filter(movie => movie.value)
          .reduce((acc, movie) => {
            return acc + movie.value;
          }, 0)
      );
    }
    if (this.state.totalCount !== totalCount) this.setState({ totalCount });
  };
}

export default RentalSquare;

// style={{
//   backgroundImage: `url(${image})`,
//   innerHeight: 100,
//   backgroundPosition: "center",
//   backgroundSize: "cover"
// }}
