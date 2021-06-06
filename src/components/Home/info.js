import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              The Best Tasting Experience! Stylish Atmosphere & Attentive
              Service<br></br>
              You Can't Just Eat Good Food...You've got to Talk About It Tooo..
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                Xplore More Here!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
