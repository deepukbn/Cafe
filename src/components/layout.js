import * as React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"
import { FaWhatsapp } from "react-icons/fa"
import "./layout.css"

import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <a
      href="https://wa.me/+918277322858"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="fa-whatsapp" />
    </a>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
