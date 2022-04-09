import styled from "styled-components";
import COLORS from "../../../common/colors";

export const CardInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  input {
    display: flex;
    padding: 5px;
    height: 100%;
    border: 2px solid ${COLORS.BLACK};
    border-radius: 4px;
    overflow-x: hidden;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: #cccccc;
    }
  }
`;
