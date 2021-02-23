import { createGlobalStyle } from "styled-components"

import grainBg from "../../assets/grain.png"

import NeueMetanaWoff2 from "../../assets/fonts/NeueMetana-Bold.woff2"
import NeueMetanaWoff from "../../assets/fonts/NeueMetana-Bold.woff"
import "@fontsource/ibm-plex-sans"
import "@fontsource/ibm-plex-sans/500.css"

const GlobalStyles = createGlobalStyle`
  /*************************************+++++**++++++****************  FONTS */
  @font-face {
    font-family: 'Neue Metana';
    src: url(${NeueMetanaWoff2}) format('woff2'),
        url(${NeueMetanaWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /**************************************************************** VARIABLES */
  :root {
    --body-bg: #101010;
    --almost-white: #e2e2e2;
    --black-carbon: #0F1011;
    --mommys-blonde-boy: #FFEFBD;
    --nets-court: #B5B3AC;
    --candy-strawberrys: #db504a;
    --lavender-soap: #9c82e3;
    --purple-haze: #817ff9;
    --darker-than-ya-coffee: #0C0C0D;

    --headline-font: 'Neue Metana', sans-serif;
    --body-font: 'IBM Plex Sans', sans-serif;

    --side-notice-distance: 5%;
  }

  /*******************************************************************  BASIC STYLES */
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
    background-color: var(--body-bg);
    color: var(--almost-white);
    font-family: var(--body-font);
    font-size: 1.8rem;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--mommys-blonde-boy);
    font-family: var(--headline-font);
    line-height: 1.2;
  }

  img {
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    line-height: 1.6;
  }

  strong, .is-bold {
    font-weight: 500;
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

  /* NAV */
  nav ul {
    list-style: none;
  }

  /********************************************************* UTILITY CLASSES */
  .flex {
    display: flex;
    align-items: center;
  }

  .flex.flex--between {
    justify-content: space-between;
  }

  .ta-center {
    text-align: center;
  }

  .ta-right {
    text-align: right;
  }

  .ta-left {
    text-align: left;
  }

  .section--title {
    margin-bottom: 8rem;
  }

  /**********************************************++++++++++ TYPOGRAPHY */
  .size-h1 {
    font-size: 7rem;
  }

  .size-h2 {
    font-size: 4rem;
  }

  .size-h3 {
    font-size: 3.8rem;
  }

  .size-h4 {
    font-size: 3.2rem;
  }

  .size-h5 {
    font-size: 2.6rem;
  }

  /* Width in PX > 1200px */
/* ==== = LARGE = ==== */
@media only screen and (min-width: 75em) {
  .size-h1 {
    font-size: 7rem;
  }

  .size-h2 {
    font-size: 6rem;
  }

  .size-h3 {
    font-size: 4.4rem;
  }

  .size-h4 {
    font-size: 3.2rem;
  }

  .size-h5 {
    font-size: 2.6rem;
  }
}

  

  /********************************************************** GRAIN */
  .grain {
    animation: grain 6s steps(10) infinite;
    background-image: url(${grainBg});
    background-repeat: repeat;
    height: 300%;
    width: 300%;
    opacity: .06;
    position: fixed;
    pointer-events: none;
    top: -100%;
    left: -100%;
    will-change: transform;
    z-index: -1;
  }

  @keyframes grain {
    0% {
      transform: translate(20%, -15%);
    }

    10% {
      transform: translate(-20%, -15%);
    }

    20% {
      transform: translate(20%, -5%);
    }

    30% {
      transform: translate(-20%, -5%);
    }

    40% {
      transform: translate(20%, 5%);
    }

    50% {
      transform: translate(-20%, 5%);
    }

    60% {
      transform: translate(20%, 15%);
    }

    70% {
      transform: translate(-20%, 15%);
    }

    80% {
      transform: translate(20%, 5%);
    }

    90% {
      transform: translate(-20%, 5%);
    }

    100% {
      transform: translate(20%, -5%);
    }
  }
`

export default GlobalStyles
