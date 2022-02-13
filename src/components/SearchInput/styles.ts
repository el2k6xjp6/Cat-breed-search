import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid #5f6368;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  place-items: center;
  width: 60%;
  height: 40px;
  margin: 0 20%;
`;

export const Input = styled.input`
  margin: 0 auto;
  border: none;
  border-radius: 24px;
  height: 38px;
  width: 95%;
  font-size: 18px;
  :focus {
    outline-width: 0;
  }
`;
