import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
    --background: #fffaff;
    --blue: #3e92cc;
    --taskTitle: #0a2463;
    --taskDescription: #829cbc;
    --title: #FFF;
    --button: #FFF;
    

 }
*{
   margin:0;
   padding:0;
   box-sizing: border-box;
}

body {
   background: var(--background);
}
body, input,button, h1, h2, h3, h4, h5, h6, strong, label, title{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

li {
  list-style: none;
}
/*
h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}*/

button {
   cursor: pointer; 
}

html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 780){
        font-size: 85.5%;
    }
}

`;
