/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, metakeywords, title }) {
  const { pathname } = useLocation()

  const {
    wp: { generalSettings: siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        wp {
          generalSettings {
            description
            title
          }
        }
      }
    `
  )

  const metaDescription = description || siteMetadata.description
  const metaKeywords = metakeywords || siteMetadata.metakeywords
  const defaultTitle = title || siteMetadata.title
  const url = `https://connect2.studio${pathname}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      titleTemplate={defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },

        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: "https://connect2.studio/og_img.png",
        },
        {
          name: `google-site-verification`,
          content: "t_m7eJWXQTDt6pJTFNPdNReYsFGeLjvAiOpMlCt0SrI",
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `de`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,

  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
