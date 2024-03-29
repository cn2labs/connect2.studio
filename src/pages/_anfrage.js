import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Formik, Field, Form } from "formik"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { LandingHero } from "../components/blocks/hero"
import Container from "../components/styles/container"

import Arrow from "../assets/images/down-arrow.svg"

const FormStyle = styled(Form)`
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
    font-family: inherit;
    border-bottom: 2px solid var(--lavender-soap);
    background: none;
    padding: 3px;
    width: 100%;
    height: 35px;

    @media screen and (min-width: 640px) {
      max-width: 280px;
    }
  }

  input[type="checkbox"],
  input[type="radio"] {
    padding: 0;
    height: 17px;
    width: 17px;
    margin-right: 7px;
  }

  select {
    appearance: none;
    border: none;
    background: none;
    color: var(--almost-white);
    padding: 5px 3px;
    width: 200px;
    font-size: inherit;
    font-family: var(--text-dont);
    margin: 2px 0;
  }

  span.arrow {
    position: relative;
    border-bottom: 2px solid var(--lavender-soap);
    margin-top: 8px;
    :after {
      display: block;
      content: url(${Arrow});
      position: absolute;
      top: 6px;
      right: 0;
      height: 16px;
      width: 16px;
    }
  }

  option {
    background: var(--body-bg);
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

    &:hover {
      background: var(--candy-strawberrys);
      color: white;
      transition: ease-in-out 0.2s;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`

const SummaryStyle = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  ul {
    list-style: square;
    transform: translateX(15px);
    margin-bottom: 2rem;
  }
  span {
    color: var(--mommys-blonde-boy);
  }
`

const Summary = ({ values, price, setPrice }) => {
  useEffect(() => {
    setPrice(0)

    // Site category
    switch (values.type) {
      case "static":
        setPrice(price => price + 995)
        values.pages = "small"
        break
      case "cms":
        setPrice(price => price + 2995)
        break
      case "shop":
        setPrice(price => price + 6495)
        break
      default:
        break
    }

    // Pages
    switch (values.pages) {
      case "small":
        if (values.type !== "cms") {
          setPrice(price => price + 150)
          break
        } else {
          break
        }
      case "medium":
        setPrice(price => price + 600)
        break
      case "large":
        setPrice(price => price + 900)
        break
      default:
        break
    }

    // Features
    if (values.features.contactForm) setPrice(price => price + 150)
    if (values.features.cmsTraining) setPrice(price => price + 450)
    if (values.features.seoAnalysis) setPrice(price => price + 150)
    if (values.features.contentConsulting) setPrice(price => price + 250)
    if (values.features.analytics) setPrice(price => price + 150)
  }, [values, setPrice])

  return (
    <SummaryStyle>
      <h2>Deine Anfrage auf einen Blick</h2>
      {/* SUMMARY LIST */}
      <ul>
        {values.type === "static" && <li>Statische Seite</li>}
        {values.type === "cms" && <li>WordPress Seite</li>}
        {values.type === "shop" && <li>Shop</li>}
        {values.pages === "small" && (
          <li>1-3 Unterseiten{values.type === "cms" && " (inkl.)"}</li>
        )}
        {values.pages === "medium" && <li>3-5 Unterseiten</li>}
        {values.pages === "large" && <li>5-7 Unterseiten</li>}
        {values.features.contactForm && <li>Kontaktformular</li>}
        {values.features.cmsTraining && <li>CMS-Schulung</li>}
        {values.features.seoAnalysis && <li>SEO-Analyse</li>}
        {values.features.contentConsulting && <li>Contentberatung</li>}
        {values.features.analytics && <li>Matomo/ Analytics Setup</li>}
      </ul>

      {/* PRICE */}
      {price > 0 && (
        <strong>
          Das Projekt würde dich so ca.{" "}
          <span>{new Intl.NumberFormat("de-DE").format(price)}€</span> kosten.
        </strong>
      )}
    </SummaryStyle>
  )
}

const EnquiryPage = () => {
  const [price, setPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

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
      <Seo title={page.title} description={page.metadata.description} />
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
          onSubmit={async values => {
            setIsLoading(true)

            const body = {
              recipient: "support@connect2.de",
              subject: "Neue Projektanfrage auf connect2.studio",
              text: `Name: ${values.name}\nE-Mail: ${values.email}\nFirma: ${
                values.company
              }\nSeitentyp: ${values.type}\nSeitenanzahl: ${
                values.pages
              }\n\nCustom Features:\n${Object.keys(values.features).filter(
                f => values.features[f]
              )}\n\nPreis: ${new Intl.NumberFormat("de-DE").format(price)}€`,
            }

            try {
              const res = await fetch("https://api.cn2.it/mailer/", {
                method: "POST",
                withCredentials: true,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${process.env.GATSBY_MAIL_API_KEY}`,
                },
                body: JSON.stringify(body),
              })

              if (!res.ok) {
                throw new Error()
              }

              alert(
                "Vielen Dank für deine Anfrage. Wir werden uns so schnell wie möglich bei dir melden."
              )
            } catch (error) {
              alert(
                "Ein Fehler ist aufgetreten, bitte versuche es später nochmal"
              )
            }

            setIsLoading(false)
          }}
        >
          {({ values }) => (
            <div>
              <FormStyle>
                {/* --------------------------------------------------------------------------BASE INFO */}
                <div className="grid col-1 md-col-2 md-gap-5  l-col-3">
                  <div className="flex vertical v-start">
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="Name" required />

                    <label htmlFor="email">E-Mail</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="E-Mail"
                      required
                    />

                    <label htmlFor="company">Firma</label>
                    <Field
                      id="company"
                      name="company"
                      placeholder="Firma"
                      required
                    />
                  </div>

                  {/* --------------------------------------------------------------------------PAGE BASICS */}
                  <div className="flex vertical v-start">
                    <h3>Seitenstruktur</h3>
                    <label htmlFor="type">Art der Seite</label>
                    <span className="arrow">
                      <Field as="select" id="type" name="type">
                        <option defaultValue value="">
                          -- Bitte wählen --
                        </option>
                        <option value="static">Statische Seite</option>
                        <option value="cms">WordPress Seite</option>
                        <option value="shop">Shop</option>
                      </Field>
                    </span>

                    <label htmlFor="pages-small" className="justify">
                      <Field
                        type="radio"
                        name="pages"
                        id="pages-small"
                        value="small"
                      />
                      1-3 Unterseiten
                    </label>

                    {values.type !== "static" && (
                      <>
                        <label htmlFor="pages-medium" className="justify">
                          <Field
                            type="radio"
                            name="pages"
                            id="pages-medium"
                            value="medium"
                          />
                          3-5 Unterseiten
                        </label>
                        <label htmlFor="pages-large" className="justify">
                          <Field
                            type="radio"
                            name="pages"
                            id="pages-large"
                            value="large"
                          />
                          5-7 Unterseiten
                        </label>
                      </>
                    )}
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
                      Kontaktformular (150€)
                    </label>
                    {values.type !== "static" && (
                      <label htmlFor="cms-training" className="justify">
                        <Field
                          type="checkbox"
                          name="features.cmsTraining"
                          id="cms-training"
                        />
                        CMS-Schulung(450€)
                      </label>
                    )}
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
                      Contentberatung (250€)
                    </label>
                    <label htmlFor="analytics" className="justify">
                      <Field
                        type="checkbox"
                        name="features.analytics"
                        id="analytics"
                      />
                      Matomo/Analytics Setup (150€)
                    </label>
                  </div>
                </div>
                {/* --------------------------------------------------------------------------SUMMARY*/}
                <Summary values={values} price={price} setPrice={setPrice} />
                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Wird gesendet..." : "Anfrage senden"}
                </button>
              </FormStyle>
            </div>
          )}
        </Formik>
      </Container>
    </Layout>
  )
}

export default EnquiryPage
