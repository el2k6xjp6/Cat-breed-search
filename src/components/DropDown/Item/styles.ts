import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  list-style-type: none;
  padding: 0 12px;
  cursor: pointer;
  :hover {
    background: #dddddd;
  }
`;

export const ListItemText = styled.div`
  @media (hover: hover) and (pointer: fine) {
    ${ListItem}: hover & {
      color: black;
    }
  }
`;
