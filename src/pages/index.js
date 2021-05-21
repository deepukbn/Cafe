import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"
import Menu from "../components/Home/Menu"
import Product from "../components/Home/Product"
import Contact from "../components/Home/Contact"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Scoopy's Cafe"
    />
    <Info />
    {
      //<Menu items={data.menu} />
    }
    <Product items={data.product} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "backgroundimage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    product: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          category
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage
