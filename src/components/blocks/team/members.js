import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import Section from "../../styles/section"
import Image from "../../img"

const MemberStyles = styled.div`
  h3 {
    margin: 2rem 0 1rem;
  }

  .member--position {
    color: #fff;
    display: block;
    font-family: var(--headline-font);
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  img {
    filter: grayscale(100%);
  }

  .member-img {
    width: 100%;
    max-width: 300px;
  }
`

const Member = ({ member }) => (
  <MemberStyles>
    <Image
      fluid
      src={member.img.localFile.childImageSharp.fluid}
      alt={member.img.altText}
      className="member-img"
    />
    <h3>{member.name}</h3>
    <span className="member--position">{member.position}</span>
    <a
      href={`mailto:${member.mail}`}
      title={`Schreib eine Mail an ${member.name}`}
    >
      {member.mail}
    </a>
  </MemberStyles>
)

const Members = ({ members }) => (
  <Fade delay={200}>
    <Section smallPaddingTop aside="Behind the scenes">
      <div className="grid col-1 md-col-2  l-col-4 l-gap-5">
        {members.map(member => (
          <Member key={member.mail} member={member} />
        ))}
      </div>
    </Section>
  </Fade>
)

export default Members
