import React from "react";
import { Container, Spinner, Row } from "react-bootstrap";
import SearchSection from "../components/SearchSection";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import CommentsModal from "../components/CommentsModal";
import { GET_COMMENT_BY_ID } from "../services/comments.service";

class HomePage extends React.Component {
  state = {
    modalShow: false,
    movieID: null,
    comments: null,
  };

  setModalShow = async (bool, movieId) => {
    this.setState({ modalShow: bool, movieID: movieId });
    if (bool) {
      let commentsResults = await GET_COMMENT_BY_ID(movieId); //returns array of comments for movie ID
      this.setState({ comments: commentsResults });
    } else {
      this.setState({ comments: null, movieID: null });
    }
  };
  render() {
    console.log(this.state);
    return (
      <>
        <Container>
          <CommentsModal
            commentslist={this.state.comments}
            show={this.state.modalShow}
            movieid={this.state.movieID}
            onHide={this.setModalShow}
          />
          <Row className="justify-content-center align-items-center">
            {this.props.isLoading && (
              <>
                <h2 className="px-4">Searching</h2>
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
          {this.props.resultsQuery && (
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
