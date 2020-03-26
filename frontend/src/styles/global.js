import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,400&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  };

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    background: #3a3535;
    font: 14px Roboto, sans-serif;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
