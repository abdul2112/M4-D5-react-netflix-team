import React from "react";
import { Row, Spinner } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import { GET_MOVIES_BY_SEARCH } from "../services/movies.service";

class MovieSection extends React.Component {
  state = {
    moviesArray: [],
    isLoading: false,
    errorAPI: null,
  };

  async componentDidMount() {
    try {
      this.setState({
        isLoading: true,
      });
      let searchResults = await GET_MOVIES_BY_SEARCH(this.props.suggestContent); // returns array
      if (searchResults.Response === "True") {
        this.setState({
          moviesArray: searchResults.Search,
          isLoading: false,
        });
      } else {
        console.log(searchResults.Error);
        this.setState({
          errorAPI: searchResults.Error,
          isLoading: false,
        });
        console.log(this.state.errorAPI);
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Row className="justify-content-center align-items-center">
          {this.state.isLoading && (
            <>
              <h2 className="px-4">Loading</h2>
              <Spinner
                className="mx-1"
                animation="grow"
                variant="light"
                size="sm"
              />
              <Spinner
                className="mx-1"
                animation="grow"
                variant="light"
                size="sm"
              />
              <Spinner
                className="mx-1"
                animation="grow"
                variant="light"
                size="sm"
              />
            </>
          )}
        </Row>
        <h2 className="text-white">{this.props.sectionTitle}</h2>
        <Row className="no-gutters row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-4">
          {this.state.moviesArray.slice(0, 4).map((movie) => (
            <MovieCard
              setModalShow={this.props.setModalShow}
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </Row>
      </>
    );
  }
}

export default MovieSection;
