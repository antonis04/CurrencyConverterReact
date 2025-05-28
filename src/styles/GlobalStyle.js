import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f9;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url("/landscape.png");
  }
  
  *, ::after, ::before {
    box-sizing: border-box;
  }
`;
