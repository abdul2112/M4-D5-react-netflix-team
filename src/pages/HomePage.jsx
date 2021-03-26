import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'

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
