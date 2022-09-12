import { createGlobalStyle } from "styled-components";
import bg from './images/bg3.jpg';

const Global = createGlobalStyle`
  
  {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Ubuntu', Sans-Serif;
    background-image: url(${bg});
  }
`;

export default Global;