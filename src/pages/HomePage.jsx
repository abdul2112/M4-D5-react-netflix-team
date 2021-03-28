import React, { Component } from "react";
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
    comments: "",
  };
  setModalShow = async (bool, movieId) => {
    this.setState({ modalShow: bool, movieID: movieId });
    if (bool) {
      let commentsResults = await GET_COMMENT_BY_ID(movieId);
      this.setState({ comments: commentsResults });
      console.log("printing comments", this.state.comments);
      console.log("printing comments", commentsResults);
    }
  };
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <CommentsModal
            show={this.state.modalShow}
            movieID={this.state.movieID}
            onHide={() => this.setModalShow(false, "")}
          />
          <MovieSection
            setModalShow={this.setModalShow}
            sectionTitle="Pirates Movies"
            searchQuery="pirates"
          />
          <MovieSection
            setModalShow={this.setModalShow}
            sectionTitle="Pirates Movies"
            searchQuery="nightmare"
          />
          <MovieSection
            setModalShow={this.setModalShow}
            sectionTitle="Pirates Movies"
            searchQuery="harry"
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
