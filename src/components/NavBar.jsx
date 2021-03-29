import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import { render } from "@testing-library/react";

const NavBar = (props) => {
  render();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        <img
          className="size-grow"
          src="./assets/src/Netflix-Logo.wine.svg"
          width="130px"
          height="auto"
          alt=""
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              BackOffice
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item px-2">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                value={props.search}
                onChange={(e) => props.setQueryState(e)}
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </li>
          <li>
            <h3></h3>
          </li>
        </ul>
        <div className="navbar-nav btn-group">
          <button
            type="button"
            className="btn btn-ghost dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="/assets/src/adult-1.png" className="mr-1" width="32px" />
            <span className="material-icons">User Name</span>
          </button>
          <div className="dropdown-menu dropdown-menu-right special-background">
            <button className="dropdown-item" type="button">
              Login BackOffice
            </button>
            <button className="dropdown-item" type="button">
              Share
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
