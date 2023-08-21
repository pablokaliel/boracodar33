import styled from "styled-components";

import bgticket from "../../assets/background-card-ticket.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const Swapper = styled.div`
  display: flex;
  align-items: center;

  gap: 32px;

  @media (max-width: 770px) {
    flex-direction: column;

    padding: 0px 8px;
  }
`;

export const DivTicket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 32px;
  width: 490px;

  @media (max-width: 770px) {
    width: 100%;

    align-items: center;
    text-align: center;
  }

  h1 {
    background: linear-gradient(
      90deg,
      #dee0fc 0%,
      #996dff 51.04%,
      #bc9fff 100%
    );
    background-clip: text;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 40px;
    font-style: normal;
    text-transform: uppercase;

    font-weight: 400;
    line-height: 130%;

    @media (max-width: 770px) {
      font-size: 36px;
    }
  }
`;

export const DivInfoGitHub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 384px;
  gap: 16px;

  @media (max-width: 770px) {
    width: 100%;
  }

  .download {
    &:hover {
      background: #23123f;
    }
  }

  .success {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;
  }

  .error {
    color: #ff8f8f;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  span {
    font-size: 20px;
    font-style: normal;
    text-transform: uppercase;
    font-weight: 400;

    line-height: 160%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 22px 40px;
    gap: 10px;
    align-self: stretch;

    background: #8860e6;
    color: #fff;
    text-transform: uppercase;

    border: none;

    transition: all 0.3s;

    &:hover {
      background: #5b409b;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: 12px;

  position: relative;

  .icon-container {
    position: absolute;
    left: 12px;

    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 16px 12px 16px 32px;

    color: #202024;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
export const DivResult = styled.div`
  background-image: url(${bgticket});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;

  padding: 38px 45px;

  color: #202024;

  @media (max-width: 770px) {
    width: 100%;
    padding: 15px;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  flex: 1;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  background: #f3f4fe;

  padding: 16px;
  gap: 10px;

  @media (max-width: 770px) {
    width: 50%;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 8px;

  @media (max-width: 770px) {
    gap: 4px;
  }

  .logoperfil {
    width: 127px;
    height: 128px;

    border-radius: 100%;
    overflow: hidden;

    @media (max-width: 770px) {
      width: 48px;
      height: 48px;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  span {
    color: #8860e6;

    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;

    line-height: 125%;
    letter-spacing: 1.26px;

    text-transform: uppercase;
  }

  .info{
    text-align:center;
  }

  p{
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 1.05px;
    text-transform: uppercase;
  }

  h1 {
    color: #202024;

    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  }
`;

export const DivLocation = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 26px;

  @media (max-width: 770px) {
    margin-top: 0;
    gap: 10px;
  }
`;

export const Info = styled.div`
  h1 {
    color: #202024;

    font-size: 10px;
    font-style: normal;
    font-weight: 500;

    line-height: 16px;
    letter-spacing: 1.05px;

    text-transform: uppercase;
  }
`;

export const Response = styled.div`
  h1 {
    color: #202024;

    font-size: 10px;
    font-style: normal;
    font-weight: 500;

    line-height: 16px;
    letter-spacing: 1.05px;

    text-transform: uppercase;
  }
`;
