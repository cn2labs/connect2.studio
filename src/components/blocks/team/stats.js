import React from "react"
import Fade from "react-reveal/Fade"

import Section from "../../styles/section"
import Outline from "../../ui/outline"
import Grid from "../../styles/grid"

const Stats = ({ members }) => (
  <Fade delay={200}>
    <Section>
      <Grid cols="3">
        <Outline as="h4" looksLike="h3">
          <span>1 Team</span>
        </Outline>
        <Outline as="h4" looksLike="h3">
          <span>{members} Mitglieder</span>
        </Outline>
        <Outline as="h4" looksLike="h3">
          <span>1337 Commits</span>
        </Outline>
      </Grid>
    </Section>
  </Fade>
)

export default Stats
