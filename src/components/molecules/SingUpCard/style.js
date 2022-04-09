import styled from "styled-components";
import COLORS from "../../../common/colors";

export const Container = styled.div`
  width: 30%;
  height: auto;
  padding: 20px;
  background: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  gap: 30px;
  h5 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  input {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #777777;
    margin-top: 15px;
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
`;
