import React from "react"
import styled from "styled-components"

import Section from "../../styles/section"

const ContactStyles = styled.div`
  margin-top: 4rem;

  h4 {
    margin-bottom: 1rem;
  }

  strong {
    color: #fff;
    display: block;
    margin-top: 1.5rem;
  }
`

const Contact = ({ data }) => (
  <Section smallPaddingTop>
    <h3 className="size-h4">So erreichst du uns</h3>
    <ContactStyles>
      <div className="grid col-1 gap-5 md-col-2">
        <div>
          <h4>Büro (im Moment wegen Corona nicht besetzt)</h4>
          <div dangerouslySetInnerHTML={{ __html: data.office }}></div>
        </div>
        <div>
          <h4>Ruf an oder schreib uns</h4>
          <div dangerouslySetInnerHTML={{ __html: data.contact }}></div>
        </div>
      </div>
    </ContactStyles>
  </Section>
)

export default Contact
