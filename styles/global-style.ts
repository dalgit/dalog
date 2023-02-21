import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
       box-sizing: border-box;
     }
    a { 
       cursor: pointer; 
        text-decoration: none; 
       color: black;
    }
`
