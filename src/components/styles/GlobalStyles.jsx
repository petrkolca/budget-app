import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --bs-font-sans-serif: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color: #19262C;
    background-color: #F4FFF9;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-weight: 500;
    color: #17d278;
    text-decoration: inherit;
  }
  a:hover {
    color: #14B567;
  }

  body {
    margin: 0;
    display: grid;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;

    #root {
      width: 100%;
    }
  }

  h1 {
    font-size: 2em;
    line-height: 1.1;
    font-weight: 500;
  }
`