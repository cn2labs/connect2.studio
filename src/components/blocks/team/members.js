import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import Section from "../../styles/section"
import Image from "../../img"

const MemberStyles = styled.div`
  position: relative;
  h3 {
    margin: 2rem 0 1rem;
  }

  div.mask {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.5s;
    opacity: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8001401244091386) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 20;
    width: 100%;
    max-width: 300px;
    min-height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    font-family: var(--headline-font);
    color: var(--mommys-blonde-boy);
    p {
      padding: 1.75rem;
    }
  }

  .member--position {
    color: var(--almost-white);
    display: block;
    font-family: var(--headline-font);
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  .member-img {
    width: 100%;
    max-width: 300px;
    min-height: 500px;
  }

  :hover {
    div.mask {
      opacity: 1;
    }
  }
`

const Member = ({ member }) => (
  <MemberStyles>
    <div className="mask">
      <p>"{member.quote}"</p>
    </div>
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
      <div className="grid col-1 gap-7 md-col-2  l-col-4 l-gap-5">
        {members.map(member => (
          <Member key={member.mail} member={member} />
        ))}
      </div>
    </Section>
  </Fade>
)

export default Members
