import styled from "styled-components";

export const Container = styled.div`
  width: calc(25% - 22px);
  margin: 10px 10px;
  height: 400px;
  border-radius: 24px;
  border: 1px solid #c4c4c4;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 10px 0;
  }

  @media only screen and (min-width: 481px) and (max-width: 900px) {
    width: calc(50% - 22px);
  }

  @media only screen and (min-width: 901px) and (max-width: 1200px) {
    width: calc(33% - 22px);
  }
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
