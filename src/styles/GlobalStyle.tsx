import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    line-height:1;
    box-sizing:border-box;
  }
  body::-webkit-scrollbar {
    width: 8px;
  }
  body {
    font-family: Roboto,Helvetica Neue,sans-serif;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  a,
  button,
  input,
  select,
  textarea,
  img {
    outline: none;
    border:none;
    appearance:none;
  }

  ul,
  li {
    list-style: none
  }

  a,
  button {
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  a {
    text-decoration:none;
  }

  button[disabled] {
    cursor: not-allowed;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  html, body {
    height: 100%;
  }

  html {
  }
 
  body[data-theme="dark"] {
  }
  body[data-theme="light"] {
  }
`;
export default GlobalStyles;
