import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  .container-input {
    position: relative;

    input:focus ~ .label {
      left: 0;
      top: -20px;
      font-size: 12px;
    }
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }
 

    body {
        -webkit-font-smoothing: antialiased;
        background-color: #040b14;
    }

    a {
        text-decoration: none;
    }

    button,a{
        cursor: pointer;
        transition: filter 0.2s;
    }

 

    body,input,button, textarea, select{
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        outline: none;
        font-weight: 600;
    }

    input, select{
        border: none;
        outline: none;
    }


`;