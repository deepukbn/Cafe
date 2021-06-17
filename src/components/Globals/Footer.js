import React from "react"
import "./Footer.css"
import "../bootstrap.min.css"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { SiWhatsapp } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>ADDRESS</h6>
            <p className="text-justify">
              Scoopy's Cafe 10th Cross, Shankarmutt Road, K R Puram, Hassan.
              <br></br>
              Phone Number:8277322858<br></br>
              Email :scoopscafehassan@gmail.com
            </p>
            <br></br>
            <br></br>

            <h6>Site Maintained By:</h6>
            <p className="text-justify">
              Department of Information Science and Engineering<br></br>
              Malnad College of Engineering, Hassan
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Opening Hours</h6>
            <ul className="footer-links">
              <li>Monday 10:00AM - 10:00PM</li>
              <li>Tuesday 10:00AM - 10:00PM</li>
              <li>Wednesday 10:00AM - 10:00PM</li>
              <li>Thursday 10:00AM - 10:00PM</li>
              <li>Friday 10:00AM - 10:00PM</li>
              <li>Saturday 09:30AM - 10:30PM</li>
              <li>Sunday 09:30AM - 10:30PM</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by Scoopy's Cafe
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <FaTwitter></FaTwitter>
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <FaInstagram></FaInstagram>
                </a>
              </li>
              <li>
                <a className="whatsapp" href="#">
                  <SiWhatsapp></SiWhatsapp>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
