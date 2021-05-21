import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"
import Map from "../components/Map/Map"

const location = {
  address:
    "Scoopy'S, near Hotel Gokul, Krishnaraja Pura, Hassan, Karnataka 573201",
  lat: 13.010243702620011,
  lng: 76.1058429051856,
}

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info />
    <Map location={location} zoomLevel={17} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default AboutPage
