import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import NavBar from "./components/NavBar";
import { GET_MOVIES_BY_SEARCH } from "./services/movies.service";

class App extends React.Component {
  state = {
    searchInput: "",
    resultsQueryUser: [],
  };
  onQueryChange = (e) => {
    this.setState({ searchInput: e.currentTarget.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let searchQueryUser = await GET_MOVIES_BY_SEARCH(
      this.state.searchInput.toLowerCase().replaceAll(" ", "+")
    ); // returns array
    this.setState({ resultsQueryUser: searchQueryUser.Search });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar
            search={this.state.searchInput}
            setQueryState={this.onQueryChange}
            handleSubmit={this.handleSubmit}
          />
          <Route path="/" exact render={(routerProps) => <HomePage {...routerProps}  resultsQuery={this.state.resultsQueryUser}/>} />
          <Route path="/admin" component={AdminPage} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
