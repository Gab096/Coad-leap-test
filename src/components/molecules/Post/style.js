import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #999999;
  box-sizing: border-box;
`;

export const UserContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const UserTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    word-break: break-all;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #777777;
  }
  p {
    word-break: break-all;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #777777;
  }
`;
export const ContentContainer = styled.div`
  p {
    word-break: break-all;
    text-align: left;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`;
