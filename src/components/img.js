import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Image = ({ fluid, fixed, src, ...props }) => {
  if (fluid && fixed) {
    return (
      <div style={{ border: "4px solid red", padding: "10px" }}>
        You can't use a fluid and fixed Img component at the same time. Please
        choose one.
      </div>
    )
  }

  if (fluid) {
    return <Img fluid={src} {...props} />
  }

  if (fixed) {
    return <Img fixed={src} {...props} />
  }
}

Image.propTypes = {
  fluid: PropTypes.bool,
  fixed: PropTypes.bool,
  src: PropTypes.string.isRequired,
}

export default Image
