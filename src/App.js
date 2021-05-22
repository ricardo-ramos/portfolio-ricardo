import React from "react";
import { GlobalStyle } from "./constants/GlobalStyle";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import Hello from "./components/Hello/Hello";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import styled from "styled-components";

const Testeee = styled.button`
  position: fixed;
  z-index: 1;
  top: 4%;
`
const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      {/* <a href="#sectiontest"> testeeeee </a> */}
      <ReactFullpage
        scrollOverflow={true}
        licenseKey={null}
        fixedElements=".fixedHeader"
        render={({ fullpageApi }) => {
          return (
            <>
            <div className="fixedHeader">
              <Testeee onClick={() => fullpageApi.moveSectionDown()}> aaaaaa </Testeee>
            </div>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Hello />
                </div>
                <div className="section">
                  <About />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  )
};

export default App;