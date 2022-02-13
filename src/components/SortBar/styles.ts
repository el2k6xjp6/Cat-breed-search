import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  margin: 10px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    margin: 0;
  }
`;
