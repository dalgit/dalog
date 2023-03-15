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
    body { 

      overflow-y: scroll;
      font-family:'Noto Sans KR', sans-serif;
    }
    body::-webkit-scrollbar {
      width: 5px;
    }
    body::-webkit-scrollbar-thumb {
      height: 20%;
      background: #b89ef6;
      border-radius: 1px;
    }

    body::-webkit-scrollbar-track {
      background: rgba(33, 122, 244, 0.1);
    }

    button {
      cursor: pointer;
    }
`
