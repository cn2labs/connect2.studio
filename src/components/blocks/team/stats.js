import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"

import Section from "../../styles/section"
import Outline from "../../ui/outline"
import Grid from "../../styles/grid"

const Stats = () => {
  const [commits, setCommits] = useState(0)

  // Get all public repos on page load
  useEffect(() => {
    const commitsPerRepo = 30

    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/orgs/cn2labs/repos")
        if (!res.ok) throw Error()
        const repos = await res.json()
        setCommits(repos.length * commitsPerRepo)
      } catch (error) {
        // Hard code a value if the API doesn't work or the rate limit hits
        setCommits(142)
      }
    }

    fetchRepos()
  }, [])

  return (
    <Fade delay={200}>
      <Section>
        <Grid repeatCols="3">
          <Outline>
            <span>1 Team</span>
          </Outline>
          <Outline>
            <span>4 Mitglieder</span>
          </Outline>
          <Outline>
            <span>{commits} Commits</span>
          </Outline>
        </Grid>
      </Section>
    </Fade>
  )
}

export default Stats
