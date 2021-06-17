import { usseStaticQuery, graphql } from "gatsby"
import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Img from "gatsby-image"
import Slide1 from "../../images/Slide1.jpeg"
import Slide2 from "../../images/Slide2.jpeg"
import Slide3 from "../../images/Slide3.jpeg"
import Slide4 from "../../images/Slide4.jpeg"
import Scoopys from "../../images/Scoopys.jpg"
import S1 from "../../images/1.png"
import S2 from "../../images/2.png"
import S3 from "../../images/3.png"
import S4 from "../../images/4.png"
import S5 from "../../images/5.png"
import S6 from "../../images/6.png"
import S7 from "../../images/7.png"
import S8 from "../../images/8.png"

const Gallery = ({ data }) => {
  return (
    <div>
      <Carousel nextLabel="" prevLabel="" indicators>
        <Carousel.Item>
          <img
            width={900}
            height={600}
            className="d-block w-100"
            src={Scoopys}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={600}
            className="d-block w-100"
            src={Slide1}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={Slide2}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={Slide3}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={S1}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={S2}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={S3}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={S4}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={S5}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={S6}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={S7}
            alt="first image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width={900}
            height={600}
            src={S8}
            alt="first image"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Gallery
