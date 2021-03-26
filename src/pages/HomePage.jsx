import React, { Component } from "react";
import NavBar from "../components/NavBar";
import MovieSection from "../components/MovieSection";
import {
  GET_MOVIES_BY_SEARCH,
  GET_MOVIE_BY_ID,
} from "../services/movies.service";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <MovieSection sectionTitle="Pirates Movies" searchQuery="pirates" />
        <MovieSection sectionTitle="Pirates Movies" searchQuery="harry" />
        <MovieSection sectionTitle="Pirates Movies" searchQuery="nightmare" />
      </div>
    );
  }
}

export default HomePage;
