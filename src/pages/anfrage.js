import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Formik, Field, Form } from "formik"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { LandingHero } from "../components/blocks/hero"
import Container from "../components/styles/container"

const FormStyle = styled(Form)`
  width: 70%;
  margin: 0 auto;
  div {
    margin-bottom: 5rem;
    width: 100%;
  }

  label {
    font-family: var(--headline-font);
    color: var(--candy-strawberrys);
    margin-bottom: 3px;
    margin-top: 2rem;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  label.justify {
    display: flex;
    align-items: center;
    font-family: var(--text-font);
    font-size: inherit;
    text-transform: none;
    color: var(--almost-wwhite);
  }

  input {
    border: none;
    color: var(--almost-white);
    font-size: 1.6rem;
    border-bottom: 1px solid var(--lavender-soap);
    background: none;
    padding: 3px;
    width: 100%;
    max-width: 280px;
    height: 35px;
  }

  input[type="checkbox"],
  input[type="radio"] {
    padding: 0;
    height: 17px;
    width: 17px;
    margin-right: 7px;
  }

  button {
    font-family: var(--headline-font);
    font-size: 1.5rem;
    padding: 1.3rem 2rem;
    background: none;
    border: 3px solid var(--candy-strawberrys);
    border-radius: 3px;
    color: var(--candy-strawberrys);
    cursor: pointer;
  }

  button:hover {
    background: var(--candy-strawberrys);
    color: white;
    transition: ease-in-out 0.2s;
  }
`

const Summary = ({ values }) => {
  const [price, setPrice] = useState(0)

  useEffect(() => {
    setPrice(0)

    // Site category
    switch (values.siteCategory) {
      case "static":
        setPrice(price => price + 500)
        break
      case "cms":
        setPrice(price => price + 1000)
        break
      case "ecommerce":
        setPrice(price => price + 2000)
        break
      default:
        break
    }

    // Pages
    switch (values.pages) {
      case "small":
        setPrice(price => price + 150)
        break
      case "medium":
        setPrice(price => price + 500)
        break
      case "large":
        setPrice(price => price + 1000)
        break
      default:
        break
    }

    // Features
    if (values.features.contactForm) setPrice(price => price + 120)
  }, [values])

  return (
    <div>
      <h2>Summary</h2>

      {/* DEBUGGING ONLY – REMOVE BEFORE FLIGHT */}
      <pre style={{ border: "2px solid red", padding: "10px" }}>
        {JSON.stringify(values, null, 2)}
      </pre>
      {/* /DEBUGGING ONLY */}

      {/* SUMMARY LIST */}
      {/* <ul>
        <li>{values.siteCategory === 'static' && 'Statische Seite'}</li>
      </ul> */}

      {/* PRICE */}
      <strong>
        So ca.{" "}
        <span style={{ color: "tomato" }}>
          {new Intl.NumberFormat("de-DE").format(price)}€
        </span>{" "}
        würde dich der ganze Bums kosten
      </strong>
    </div>
  )
}

const EnquiryPage = () => {
  // Get the page content from WordPress
  const { wpPage: page } = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 203 }) {
        title
        metadata {
          description
        }
        heroFields {
          heroHeadline
          heroTagline
          heroText
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={page.title} description={page.metadata.description} />
      <LandingHero
        tagline={page.heroFields.heroTagline}
        headline={page.heroFields.heroHeadline}
        text={page.heroFields.heroText}
      />
      <Container>
        <Formik
          initialValues={{
            name: "",
            email: "",
            company: "",
            type: "",
            pages: "",
            features: {
              contactForm: false,
            },
          }}
          onSubmit={values => {
            console.log(values)
          }}
        >
          {({ values }) => (
            <div>
              <FormStyle>
                {/* --------------------------------------------------------------------------BASE INFO */}

                <div className="flex vertical v-start">
                  <label htmlFor="name">Name</label>
                  <Field id="name" name="name" placeholder="Name" />

                  <label htmlFor="email">E-Mail</label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-Mail"
                  />

                  <label htmlFor="company">Firma</label>
                  <Field id="company" name="company" placeholder="Firma" />
                </div>
                <div className="flex v-start">
                  {/* --------------------------------------------------------------------------PAGE BASICS */}
                  <div className="flex vertical v-start">
                    <h3>Seitenstruktur</h3>
                    <label htmlFor="type">Art der Seite</label>
                    <Field as="select" id="type" name="type">
                      <option defaultValue value="">
                        -- Bitte wählen --
                      </option>
                      <option value="static">Statische Seite</option>
                      <option value="cms">WordPress Seite</option>
                      <option value="shop">Shop</option>
                    </Field>

                    <label htmlFor="pages-small" className="justify">
                      <Field
                        type="radio"
                        name="pages"
                        id="pages-small"
                        value="small"
                      />
                      1-3 Seiten
                    </label>

                    <label htmlFor="pages-medium" className="justify">
                      <Field
                        type="radio"
                        name="pages"
                        id="pages-medium"
                        value="medium"
                      />
                      3-5 Seiten
                    </label>

                    <label htmlFor="pages-large" className="justify">
                      <Field
                        type="radio"
                        name="pages"
                        id="pages-large"
                        value="large"
                      />
                      5-7 Seiten
                    </label>
                  </div>
                  {/* --------------------------------------------------------------------------FEATURES */}
                  <div className="flex vertical v-start">
                    <h3>Zusätzliche Funktionen</h3>
                    <label htmlFor="contact-form" className="justify">
                      <Field
                        type="checkbox"
                        name="features.contactForm"
                        id="contact-form"
                      />
                      Kontaktformular (120€)
                    </label>
                    <label htmlFor="cms-training" className="justify">
                      <Field
                        type="checkbox"
                        name="features.cmsTraining"
                        id="cms-training"
                      />
                      CMS-Schulung(395€)
                    </label>
                    <label htmlFor="seo-analysis" className="justify">
                      <Field
                        type="checkbox"
                        name="features.seoAnalysis"
                        id="seo-analysis"
                      />
                      SEO Analyse (150€)
                    </label>
                    <label htmlFor="content-consulting" className="justify">
                      <Field
                        type="checkbox"
                        name="features.contentConsulting"
                        id="content-consulting"
                      />
                      Contentberatung (195€)
                    </label>
                    <label htmlFor="analytics" className="justify">
                      <Field
                        type="checkbox"
                        name="features.analytics"
                        id="analytics"
                      />
                      Matomo/ Analytics Setup (150€)
                    </label>
                  </div>
                </div>

                <button type="submit">Senden</button>
              </FormStyle>

              {/* --------------------------------------------------------------------------SUMMARY*/}
              {/* <Summary values={values} /> */}
            </div>
          )}
        </Formik>
      </Container>
    </Layout>
  )
}

export default EnquiryPage
