import { createGlobalStyle } from 'styled-components';
import { background } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body, #root {
    background-color: ${background};
  }
`;