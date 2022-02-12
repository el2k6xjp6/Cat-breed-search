import styled from "styled-components";

export const Container = styled.div`
  width: calc(33% - 22px);
  margin: 10px 10px;
  height: 400px;
  border-radius: 24px;
  border: 1px solid #c4c4c4;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
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
