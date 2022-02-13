import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;
