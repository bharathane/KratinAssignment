import styled from "styled-components";

export const Components = styled.h1`
  background-color: #acadad;
  color: ${(props) => props.color};
  width: ${(props) => props.bgWidth}%;
  margin-bottom: 15px;
  height: 12px;
  border-radius: 8px;
  font-size: 0px;
`;

export const Value = styled.div`
  display: flex;
`;
