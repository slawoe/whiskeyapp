import { Global, css } from "@emotion/core";
import React from "react";

const GlobalStyles = () => (
  <Global
    styles={css`
      *:before,
      *:after {
        box-sizing: border-box;
        margin: 0;
      }

      #root {
        @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-rows: 15% 75% 10%;
      }

      body {
        position: fixed;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
