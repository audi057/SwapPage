import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: radial-gradient(50% 50% at 50% 50%, rgba(251, 189, 24, 0.1) 0%, rgba(30, 38, 47, 0) 100%);
    min-height: 100vh;
    background-position: 0px -30vh;
    background-repeat: no-repeat;
    
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
