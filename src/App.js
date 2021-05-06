import React from "react";
import Hello from "./components/Hello/Hello";
import { GlobalStyle } from "./constants/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hello />
    </>
  )
};

export default App;
