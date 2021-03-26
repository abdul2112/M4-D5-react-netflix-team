import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <Link class="navbar-brand" to="/">
        <img
          class="size-grow"
          src="./assets/src/Netflix-Logo.wine.svg"
          width="130px"
          height="auto"
          alt=""
        />
      </Link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="./indexNetflix.html">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./backOfficeNetflix.html">
              BackOffice
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item px-2">
            <span class="material-icons">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <span class="material-icons"> Search </span>
          </li>
        </ul>
        <div class="navbar-nav btn-group">
          <button
            type="button"
            class="btn btn-ghost dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="/assets/src/adult-1.png" class="mr-1" width="32px" />
            <span class="material-icons">User Name</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right special-background">
            <button class="dropdown-item" type="button">
              Login BackOffice
            </button>
            <button class="dropdown-item" type="button">
              Share
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
