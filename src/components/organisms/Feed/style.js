import styled from "styled-components";
import COLORS from "../../../common/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background: ${COLORS.WHITE};
`;
export const ContainerFeed = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;
  padding: 0 40px;
  margin-top: 40px;

  height: 100%;

  background: ${COLORS.WHITE};
  overflow-y: scroll;
`;
