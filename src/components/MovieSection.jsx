import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import { GET_MOVIES_BY_SEARCH } from "../services/movies.service";

class MovieSection extends React.Component {
  state = {
    moviesArray: [],
  };

  async componentDidMount() {
    const searchResults = await GET_MOVIES_BY_SEARCH(this.props.searchQuery); // returns array
    this.setState({ moviesArray: searchResults.Search });
  }

  render() {
    return (
      <>
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
