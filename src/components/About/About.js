import React from "react";
import { AboutContainer, BioTexts } from "./styled";

const About = () => {
  return (
    <AboutContainer> 
      <h2 className="whoTitle"> Quem? </h2>
        <BioTexts>
          
          <p className="upperText">
            Meu nome é <strong>Ricardo Ramos</strong>. Com foco em sites e aplicações web, crio soluções
            usando React, Styled Components e React Router.
          </p>
          

          <p className="lowerText">
            <p className="additionalInfo"> Além disso... </p>
            Sou ex-publicitário, formado em Jornalismo e experiente em redação,
            revisão e planejamento criativo. Agora, levo esse conhecimento
            para o desenvolvimento web.
          </p>
        </BioTexts>
    </AboutContainer>
  )
};

export default About;