import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import CommentsModal from "../components/CommentsModal";
import { GET_COMMENT_BY_ID } from "../services/comments.service";

class HomePage extends React.Component {
  state = {
    modalShow: false,
    movieID: "",
    comments: [],
    searchInput: "",
  };
  onQueryChange = (e) => {
    this.setState({ searchInput: e.currentTarget.value });
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
        <NavBar
          search={this.state.searchInput}
          setQueryState={this.onQueryChange}
        />
        <Container>
          <CommentsModal
            commentslist={this.state.comments}
            show={this.state.modalShow}
            movieID={this.state.movieID}
            onHide={() => this.setModalShow(false, "")}
          />
          <MovieSection
            setModalShow={this.setModalShow}
            sectionTitle="Beacuse you saw Pirates..."
            searchQuery="pirates"
          />
          <MovieSection
            setModalShow={this.setModalShow}
            sectionTitle="Based in your likes..."
            searchQuery="nightmare"
          />
          <MovieSection
            setModalShow={this.setModalShow}
            sectionTitle="Could you like also Harry..."
            searchQuery="harry"
          />
        </Container>
        <Footer />
      </>
    );
  }
}

export default HomePage;
