import React from "react"
import Menu from "../components/Home/Menu"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const MenusPage = ({ data }) => {
  return (
    <Layout>
      <Menu items={data.menu} />
      {console.log(data)}
    </Layout>
  )
}

export const query = graphql`
  {
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
  }
`

export default MenusPage
