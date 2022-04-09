import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #999999;
  gap: 20px;
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
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

  textarea {
    outline: none;
    resize: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    border-radius: 4px;
    padding: 5px;
    color: rgb(0, 0, 0);
  }
`;
