import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100vh;

  background: rgba(100, 100, 100, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalCard = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: #ffffff;
  padding: 20px;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
  }
`;
