import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {        
        background-color: ${({ theme }) => theme.defaultBackground};
        color: ${({ theme }) => theme.defaultFontColor};
        margin: 0;  
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;           
    }    
    .cartColors {
        border-color: ${({ theme }) => theme.cards.borderColor};
        background-color: ${({ theme }) => theme.cards.background};

        h1, h2, span {
            color: ${({ theme }) => theme.primaryHeading.fontColor};
            font-weight: normal;  
        }   
        
        h3, h4 {
            color: ${({ theme }) => theme.secandaryHeading.fontColor};
            font-weight: normal;  
        }  
    }

    .starWarsFont {       
        font-family: STARWARS;        
        letter-spacing: 0.1em              
    }    
`;
