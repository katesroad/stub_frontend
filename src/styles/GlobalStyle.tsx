import { createGlobalStyle } from 'styled-components'
import { colors } from 'styles/colors'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    line-height: 1;
    box-sizing: border-box;
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  body {
    font-family: Inter, Roboto, Helvetica Neue, sans-serif;
    background-color: #fbfbfb;
  }

  html, body {
    height: 100%;
  }

  a,
  button,
  input,
  select,
  textarea,
  img {
    outline: none;
    border: none;
    appearance: none;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a,
  button {
    cursor: pointer;
    background-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:active {
    color: inherit
  }

  button[disabled] {
    cursor: not-allowed;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  :root {
    --color-c1: ${colors.c1};
    --color-c2: ${colors.c2};
    --color-c3: ${colors.c3};
    --color-c4: ${colors.c4};
    --color-c5: ${colors.c5};
    --color-c6: ${colors.c6};
    --color-c7: ${colors.c7};
    --color-c8: ${colors.c8};
    --color-c9: ${colors.c9};
    --color-c10: ${colors.c10};
    --color-c11: ${colors.c11};
    --color-c12: ${colors.c12};
    --weight-bolder: 700;
    --weight-bold: 500;
    --weight-normal: 400;
    --weight-thin: 300;
    --text-font: Inter, Roboto, Helvetica Neue, sans-serif;
    --title-font: Epilogue, Roboto, Helvetica Neue, sans-serif;
  }

  .container {
    width: 100%
  }

  @media (min-width: 640px) {
    .container {
      max-width: 640px
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 768px
    }
  }

  @media (min-width: 1024px) {
    .container {
      max-width: 1024px
    }
  }

  @media (min-width: 1280px) {
    .container {
      max-width: 1280px
    }
  }

  @media (min-width: 1536px) {
    .container {
      max-width: 1536px
    }
  }

`
export default GlobalStyles
