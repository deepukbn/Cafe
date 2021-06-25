import React, { Component } from "react"
import { Link } from "gatsby"
import { FaCartArrowDown } from "react-icons/fa"
import "./Navbar.css"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about us",
      },
      {
        id: 3,
        path: "/gallery",
        text: "gallery",
      },
      {
        id: 4,
        path: "/menus",
        text: "menu",
      },
      {
        id: 5,
        path: "/contactus",
        text: "Reach us",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm
        bg-light navbar-light"
      >
        <h1 className="navbar-brand">Scoopy's</h1>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            {
              //<li className="nav-item">
              // <li className="nav-item">
              //   <a
              //     href="#"
              //     class=" nav-link text-capitalize snipcart-user-logout"
              //   >
              //     Logout
              //   </a>
              // </li>
            }
            <li className="nav-item ml-sm-20">
              <FaCartArrowDown
                className="cart-icon
                            snipcart-checkout
                            snipcart-summary"
              />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
