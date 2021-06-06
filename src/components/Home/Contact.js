import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="  py-5">
      <Title title="Get in Touch" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            {/* name */}
            <div className="form-group">
              <label htmlFor="name"> First Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder=""
              />
            </div>
            <br />
            {/*Last name*/}
            <div className="form-group">
              <label htmlFor="name"> Last Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder=""
              />
            </div>
            <br />
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="abc@email.com"
              />
            </div>
            <br />
            {/* Message*/}
            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <textarea
                name="Message"
                id="Message"
                className="form-control"
                rows="5"
                placeholder="your message..."
              />
            </div>
            {/*submit*/}
            <button
              type="submit"
              className=" text-center btn btn-yellow btn-block 
                    text-capitalize mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
