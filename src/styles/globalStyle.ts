import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *:focus {
    outline-width: thin;
  }

  *::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #707070;
    background-clip: padding-box;
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  * {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  button {
      cursor: pointer;
    }

  #root {
    background-color: #ec1d24;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: square;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  strong {
    font-weight: bold;
  }

  img {
    border: 0;
    display: block;
    height: auto;
    max-width: 100%;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  
`;
