import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../styles/section"
import Outline from "../../ui/outline"

const Stats = ({ members }) => (
  <Fade delay={200}>
    <Section>
      <div className="grid col-1 md-col-2 l-col-3 gap-4">
        <Outline as="h4" looksLike="h4">
          <span>1 Team</span>
        </Outline>
        <Outline as="h4" looksLike="h4">
          <span>{members} Mitglieder</span>
        </Outline>
        <Outline as="h4" looksLike="h4">
          <span>1337 Commits</span>
        </Outline>
      </div>
    </Section>
  </Fade>
)

export default Stats
