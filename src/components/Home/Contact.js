import React from "react"
import Title from "../Globals/Title"
import { useFormik } from "formik"

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  Message: "",
}

const validate = values => {
  let errors = {}

  if (!values.firstName) {
    errors.firstName = "Required"
  }

  if (!values.lastName) {
    errors.lastName = "Required"
  }

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format"
  }

  if (!values.Message) {
    errors.Message = "Required"
  }
  return errors
}

const onSubmit = values => {
  console.log("Form data", values)
}

export default function Contact() {
  const formik = useFormik({
    initialValues,

    validate,
  })

  return (
    <section className="  py-5">
      <Title title="Get in Touch" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/f/xgeryndr" method="post">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name"> First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
                placeholder=""
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div style={{ color: "red" }}>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <br />
            {/*Last name*/}
            <div className="form-group">
              <label htmlFor="name"> Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
                placeholder=""
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red" }}>{formik.errors.lastName}</div>
              ) : null}
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
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Message}
              />
              {formik.touched.Message && formik.errors.Message ? (
                <div style={{ color: "red" }}>{formik.errors.Message}</div>
              ) : null}
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
