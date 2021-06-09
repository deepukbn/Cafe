import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Aboutus from "../components/Home/Aboutus"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Aboutus />
    <a href="https://goo.gl/maps/gfJ5bdX9x1dAQTY57">
      <BackgroundSection
        img={data.map.childImageSharp.fluid}
        title=" "
        styleClass="about-background"
      />
    </a>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "aboutusdee.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    map: file(relativePath: { eq: "Maps.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default AboutPage
