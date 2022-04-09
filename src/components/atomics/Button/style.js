import styled from "styled-components";
import COLORS from "../../../common/colors/index";

export const ButtonCard = styled.button`
  cursor: pointer;
  border: none;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) => (props.background ? props.background : "none")};
  color: ${(props) => (props.color ? props.color : `${COLORS.WHITE}`)};
  .active {
    background: #000000;
  }
`;
