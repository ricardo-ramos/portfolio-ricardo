import styled from "styled-components";

export const HelloContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100vh;
  justify-content: center;
`

export const Presentation = styled.div`
  display: flex;
  gap: 28px;

  h1 {
    font-family: "Bebas Neue";
    font-size: 52px;
    letter-spacing: 2px;

    @media (max-width: 440px) {
      font-size: 32px;
    }
  }

  img {
    width: 4em;
  }

  @media (max-width: 550px) {
    align-items: center;
    flex-direction: column;
    gap: 0;
  }
`

export const WorkPosition = styled.div`
  display: flex;
  gap: 32px;

  img {
    width: 8em;
  }

  h1 {
    align-self: center;
    font-family: "Changa";
    font-size: 28px;
    text-align: center;
  }

  @media (max-width: 550px) {
    align-items: center;
    flex-direction: column-reverse;
    gap: 0;
  }
`