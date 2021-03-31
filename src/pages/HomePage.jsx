import React from "react";
import { Container } from "react-bootstrap";
import SearchSection from "../components/SearchSection";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import CommentsModal from "../components/CommentsModal";
import { GET_COMMENT_BY_ID } from "../services/comments.service";


class HomePage extends React.Component {
  state = {
    modalShow: false,
    movieID: "",
    comments: [],
  };

  setModalShow = async (bool, movieId) => {
    this.setState({ modalShow: bool, movieID: movieId });
    if (bool) {
      let commentsResults = await GET_COMMENT_BY_ID(movieId); //returns array of comments for movie ID
      this.setState({ comments: commentsResults });
    }
  };
  render() {
    console.log(this.state.searchInput);
    return (
      <>
        <Container>
          <CommentsModal
            commentslist={this.state.comments}
            show={this.state.modalShow}
            movieID={this.state.movieID}
            onHide={() => this.setModalShow(false, "")}
          />
          {this.props.resultsQuery.length > 0 && (
            <SearchSection
              resultsQuery={this.props.resultsQuery}
              setModalShow={this.setModalShow}
              sectionTitle="Results for"
            />
          )}
          <MovieSection
            setModalShow={this.setModalShow}
            sectionTitle="Beacuse you saw Pirates..."
            suggestContent="pirates"
          />
          <MovieSection
            setModalShow={this.setModalShow}
            sectionTitle="Based in your likes..."
            suggestContent="nightmare"
          />
          <MovieSection
            setModalShow={this.setModalShow}
            sectionTitle="Could you like also Harry..."
            suggestContent="harry"
          />
        </Container>
        <Footer />
      </>
    );
  }
}

export default HomePage;
