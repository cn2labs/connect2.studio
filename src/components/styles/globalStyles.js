import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* VARIABLES */
  :root {
    --black-carbon: #0F1011;
    --mommys-blonde-boy: #FFEFBD;
    --nets-court: #B5B3AC;
    --candy-strawberrys: #db504a;
    --lavender-soap: #9c82e3;
  }

  /* BASIC STYLES */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: var(--black-carbon);
    color: var(--nets-court);
    font-family: sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--mommys-blonde-boy);
    line-height: 1.2;
  }

  img {
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    line-height: 1.6;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* UTLITY CLASSES */
  .flex {
    display: flex;
    align-items: center;
  }

  .flex.flex--between {
    justify-content: space-between;
  }
`

export default GlobalStyles
