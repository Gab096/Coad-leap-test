import styled from "styled-components";
import COLORS from "../../../common/colors";

export const CardInput = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  input {
    display: flex;
    padding: 5px;
    height: 100%;
    border: 2px solid ${COLORS.BLACK};
    border-radius: 4px;
    overflow-x: hidden;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #cccccc;
    }
  }
`;
