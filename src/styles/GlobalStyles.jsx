import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    width:100%;
    height:100%;

    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

  }

  #root,
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: 'Space Grotesk', sans-serif;
    color:#F3F4FE;
  }

  button {
    cursor:pointer;
    font-family: 'Space Grotesk', sans-serif;
  }
`;