import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  h1 {}
  h2 {}
  h3 {}

  h4, h5, h6 {}

  a {
    text-decoration: none
  } 

  ul {
    list-style: none
  }
  ol {
    list-style: none
  }
`;
