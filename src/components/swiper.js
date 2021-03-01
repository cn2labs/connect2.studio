import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"
// Import Swiper styles
import "swiper/swiper-bundle.min.css"

import Section from "../components/styles/section"

import Test from "../assets/images/hands.svg"

const ImageStyles = styled.div`
  display: flex;
  flex-direction: columns;
  align-items: flex-end;
  padding: 3rem;
  color: var(--almost-white);
  h3 {
    text-transform: uppercase;
  }
`

const Img = ({
  src,
  headline,
  subline,
  size = "cover",
  pos = "center center",
  width = "100%",
  height = "auto",
}) => (
  <ImageStyles
    style={{
      background: `url(${src}) no-repeat ${pos} / ${size}`,
      width: `${width}`,
      height: `${height}`,
    }}
  >
    <div>
      <h3 className="title-1">{headline}</h3>
      <p>{subline}</p>
    </div>
  </ImageStyles>
)

export default () => {
  return (
    <Section>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <Img
            src={Test}
            headline="Test"
            subline="Website Redesign"
            height="500px"
            width="550px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            src={Test}
            headline="Test"
            subline="Website Redesign"
            height="500px"
            width="550px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            src={Test}
            headline="Test"
            subline="Website Redesign"
            height="500px"
            width="550px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            src={Test}
            headline="Test"
            subline="Website Redesign"
            height="500px"
            width="550px"
          />
        </SwiperSlide>
      </Swiper>
    </Section>
  )
}
