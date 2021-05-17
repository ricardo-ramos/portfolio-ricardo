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

  .name {
    align-self: center;
    font-family: "Bebas Neue";
    font-size: 52px;
    letter-spacing: 2px;

    @media screen and (max-width: 440px) {
      font-size: 36px;
    }
  }

  .personIcon {
    width: 6em;
  }

  @media screen and (max-width: 550px) {
    align-items: center;
    flex-direction: column;
    gap: 16px;
  }
`

export const WorkPosition = styled.div`
  display: flex;
  gap: 32px;

  .codeIcon {
    width: 4em;
  }

  .occupation {
    align-self: center;
    font-family: "Changa";
    font-size: 28px;
    text-align: center;

    @media screen and (max-width: 440px) {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 550px) {
    align-items: center;
    flex-direction: column-reverse;
    gap: 16px;
  }
`