import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Link className="navbar-brand" to="/">
          <Navbar.Brand href="#home">
            <img
              className="size-grow"
              src="./assets/src/Netflix-Logo.wine.svg"
              width="130px"
              height="auto"
              alt="LogoNetflix"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/admin">
              BackOffice
            </Link>
          </Nav>
          <Nav className="px-2">
            <Form onSubmit={(e) => props.handleSubmit(e)}>
              <FormControl
                type="text"
                placeholder="Type and press Enter"
                value={props.search}
                onChange={(e) => props.setQueryState(e)}
                className="mr-sm-2"
              />
            </Form>
          </Nav>
          <div className="navbar-nav btn-group">
            <button
              type="button"
              className="btn btn-ghost dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="/assets/src/adult-1.png"
                className="mr-1"
                width="32px"
                alt="usersPic"
              />
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
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default withRouter(NavBar);
