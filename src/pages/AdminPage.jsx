import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import {
  GET_MOVIES_BY_SEARCH,
  GET_MOVIE_BY_ID
} from '../services/movies.service'

class AdminPage extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    const movieSearchResult = await GET_MOVIES_BY_SEARCH('pirates') // returns array
    const movie = await GET_MOVIE_BY_ID('tt0325980') // returns single movie

    console.log(movieSearchResult)
    console.table(movie)
  }
  render() {
    return (
      <div>
        <NavBar />
        <h3 className="text-white">AdminPage</h3>
      </div>
    )
  }
}

export default AdminPage
