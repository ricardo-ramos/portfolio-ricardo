import React from "react";
import { HelloContainer, Presentation, WorkPosition } from "./styled";
import CodeImage from "../../assets/images/code.svg";
import DeveloperImage from "../../assets/images/person-computer.svg";

const Hello = () => {
  return (
    <HelloContainer>
      <Presentation>
        <h1> Olá, aqui é o Ricardo! </h1>
        <img src={CodeImage} />
      </Presentation>

      <WorkPosition>
        <img src={DeveloperImage} />
        <h1> Sou desenvolvedor frontend júnior </h1>
      </WorkPosition>
    </HelloContainer>
  )
};

export default Hello;
