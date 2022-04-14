import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
      height: 100%;
  }

  body {
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      background: #ecf1f8;
      color: #333;
  }
`;
 
export default GlobalStyle;
