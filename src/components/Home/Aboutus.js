import React from "react"
import Title from "../Globals/Title"
import Maps from "../../images/Maps.png"

const Aboutus = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <Title title="Our Mission" />
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-5">
                HOLA AMIGOS!!<br></br>We are Happily Serving our Customers from
                2008 with great Quality Food and Pleasant Ambience.<br></br>We
                continue to deliver the same Taste and Expand Scoopy's Family!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <h3>Owned By: </h3>
              <br></br>
              <h3>
                Address:Scoopy's Cafe 10th Cross, Shankarmutt Road, K R Puram,
                Hassan
              </h3>
              <h3>Phone Number:8277322858</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Aboutus
