import React from "react"
import styled from "styled-components"

import Section from "../../styles/section"
import Grid from "../../styles/grid"
import Image from "../../img"

const MemberStyles = styled.div`
  h3 {
    margin: 2rem 0 1rem;
  }

  .member--position {
    display: block;
    font-family: var(--headline-font);
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  img {
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
    }
  }
`

const Member = ({ member }) => (
  <MemberStyles>
    <Image
      fluid
      src={member.img.localFile.childImageSharp.fluid}
      alt={member.img.altText}
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
  <Section>
    <Grid repeatCols="4" gap="100">
      {members.map(member => (
        <Member key={member.mail} member={member} />
      ))}
    </Grid>
  </Section>
)

export default Members
