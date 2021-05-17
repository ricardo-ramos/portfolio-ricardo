import React from "react";
import { HelloContainer, Presentation, WorkPosition } from "./styled";
import CodeImage from "../../assets/images/code.svg";
import DeveloperImage from "../../assets/images/person-computer.svg";

const Hello = () => {
  return (
    <HelloContainer>
      <Presentation>
        <h1 className="name"> Olá, aqui é o Ricardo! </h1>
        <img src={DeveloperImage} className="personIcon" alt="" />
      </Presentation>

      <WorkPosition>
        <img src={CodeImage} className="codeIcon" alt="" />
        <h1 className="occupation"> Sou desenvolvedor frontend júnior. </h1>
      </WorkPosition>
    </HelloContainer>
  )
};

export default Hello;
