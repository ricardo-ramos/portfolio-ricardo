import styled from "styled-components";

export const AboutContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  .whoTitle {
    font-family: "Bebas Neue";
    font-size: 36px;
    letter-spacing: 2px;
  }
`

export const BioTexts = styled.div`
  display: flex;
  // gap: 32px;
  justify-content: center;
  margin-top: 12px;

  p {
    text-align: center;
    width: 20vw;
  }

  .upperText {
    border-right: 1px solid black;
    height: 240px;
    padding-right: 16px;

    @media screen and (max-width: 1340px) {
      height: 280px;
    }

    @media screen and (max-width: 1040px) {
      height: 340px;
    }
  }

  .lowerText {
    margin-left: 16px;
    position: relative;
    top: 120px;

    @media screen and (max-width: 440px) {
      top: 160px;
    }
  }

  .additionalInfo {
    font-family: "Bebas Neue";
    font-size: 28px;

    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    p {
      width: 40vw;
    }

    .upperText {
      border-right: none;
      height: 0;
    }
  }

  @media screen and (max-width: 854px) {
    p {
      width: 48vw;
    }
  }

  @media screen and (max-width: 712px) {
    p {
      width: 60vw;
    }

  @media screen and (max-width: 570px) {
    p {
      width: 80vw;
    }
  }
`