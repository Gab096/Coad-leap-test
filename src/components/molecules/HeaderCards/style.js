import styled from "styled-components";
import COLORS from "../../../common/colors";

export const Container = styled.div`
  height: 80px;
  padding: 0 20px;

  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h3 {
    word-break: break-all;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
`;
export const DeleteEditContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const ModalButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  justify-content: flex-end;
  button {
    width: 25%;
    height: 30px;
    color: #000000;

    border: 1px solid #000000;
    box-sizing: border-box;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;
export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;

  background: #ffffff;
  color: #000000;
  gap: 20px;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 26px;
    color: #000000;
  }

  button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;

    padding: 5px 30px;
    margin-top: 15px;

    width: fit-content;
    align-self: flex-end;
  }
  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  textarea {
    word-break: break-all;
    border-radius: 4px;
    outline: none;
    resize: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    padding: 5px;
    font-size: 14px;
    line-height: 16px;
    color: rgb(0, 0, 0);
  }
`;
