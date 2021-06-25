import React from "react"
import SEO from "../components/seo"
import Gallery from "../components/Home/Gallery"
import Layout from "../components/layout"

const GalleryPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      <Gallery />
    </Layout>
  )
}

export default GalleryPage
