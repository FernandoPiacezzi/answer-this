import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {

  /* dark mode */
    --text: ${({theme}) => theme === 'dark' ? '#fff' : "#000"};

    --primary: ${({theme}) => theme === 'dark' ? '#bb86fc' : "#f5cccd"};

    --answer-background: ${({theme}) => theme === 'dark' ? '#2d2d2d' : "#fff"};
    --card-background: ${({theme}) => theme === 'dark' ? '#1e1e1e' : "#ebebeb"};
    --background: ${({theme}) => theme === 'dark' ? '#000' : "#fff"};

    --green: ${({theme}) => theme === 'dark' ? '#419c8e' : "#94ce9c"};
    --red: ${({theme}) => theme === 'dark' ? '#7c324a' : "#df6668"};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`