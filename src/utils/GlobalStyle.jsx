import { createGlobalStyle } from 'styled-components';

import pinkElipse from '../assets/images/pink_elipse.svg';
import purpleElipse from '../assets/images/purple_elipse.svg';

export const GlobalStyle = createGlobalStyle`
    *,
::after,
::before {
  box-sizing: border-box;
}

html {
  -moz-tab-size: 4;
  tab-size: 4;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}


body {
  margin: 0;
  font-family: 'Montserrat','Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-weight: 500;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color:#5CD3A8;}
}

@media screen and (min-width: 768px) {
  body {
    background-color: #e7eaf2;
    background-image: url(${pinkElipse}),url(${purpleElipse});
    background-repeat: no-repeat,no-repeat;
    background-position: top -150px right -150px, bottom -130px left -142px;
    background-attachment:fixed;
    z-index: -2;
  }  
}

ul, ol{
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

h1, h2, h3, h4, h5, p{
  margin-top: 0;
  margin-bottom: 0;
}

table {
  text-indent: 0;
  border-color: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button{
  cursor: pointer;
  border: none;
}

a {
  text-decoration: none;
}
`;
