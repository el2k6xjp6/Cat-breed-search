import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 10px 10px;
  height: 400px;
  border-radius: 24px;
  border: 1px solid #c4c4c4;
`;

const Text = styled.div`
  text-indent: 15px;
  height: 30px;
  line-height: 30px;
`;

export const Name = styled(Text)`
  font-size: 18px;
`;

export const LifeSpan = styled(Text)`
  font-size: 14px;
`;

export const Weight = styled(Text)`
  font-size: 14px;
`;
