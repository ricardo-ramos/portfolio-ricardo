import React from "react";
import { GlobalStyle } from "./constants/GlobalStyle";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import Hello from "./components/Hello/Hello";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ReactFullpage
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Hello />
              </div>
              <div className="section">
                <About />
                {/* <button onClick={() => fullpageApi.moveTo(1, 0)}>aaaa</button> */}
              </div>
              
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  )
};

export default App;