import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"
import "./Product.css"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}
export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      CoffeeItem: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }
  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { CoffeeItem: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { CoffeeItem: items }
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Order Now!" />
            {/*categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow 
                                    text-capitalize m-3"
                      onClick={() => {
                        this.handleItems(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/*items*/}
            <div className="row ">
              {this.state.CoffeeItem.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-8 col-sm-8 col-md-6 col-lg-4 mx-auto my-3"
                  >
                    <div className="card" style={{ maxHeight: "70%" }}>
                      <Img
                        fluid={node.image.fluid}
                        className="card-img-top"
                        // style={{ maxHeight: "70%", maxWidth: "70%" }}
                      />
                      <div className="card-body text-center">
                        <h6>{node.title}</h6>
                        <h6>Rs.{node.price}</h6>
                        <button
                          className="btn btn-yellow mt-3
                text-capitalize snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.title}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-url="https://scoopycafe.netlify.app/"
                        >
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text capitalize">
                <h1>There are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
