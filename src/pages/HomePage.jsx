import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'

import {
  GET_MOVIES_BY_SEARCH,
  GET_MOVIE_BY_ID
} from '../services/movies.service'

class HomePage extends Component {
  state = {}
  render() {
    return (
      <div>
        <NavBar />

        <MovieCard />
      </div>
    )
  }
}

export default HomePage
