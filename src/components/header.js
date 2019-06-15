import React from "react"
import "./Header.less"

function Header(props) {
  return (
    <nav class="navbar navbar-expand-md navbar-dark">
      <a class="navbar-brand" href="#">
        <img src={require("../images/logo.png")} />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="https://docs.rekit.org">
              Docs
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
              About
            </a>
          </li>
        </ul>
        <div class="icon-links mt-2 mt-md-0">
          <a href="#"><img src={require("../images/github.png")} /></a>
          <a href="#"><img src={require("../images/twitter.png")} /></a>
          <a href="#"><img src={require("../images/discord.png")} /></a>
        </div>
      </div>
    </nav>
  )
}

export default Header
