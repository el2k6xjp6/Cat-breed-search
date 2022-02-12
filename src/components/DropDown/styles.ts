import styled from "styled-components";

export const DropDownContainer = styled.div`
  cursor: pointer;
  width: 200px;
  height: 40px;
`;

export const DropDownHeader = styled.div`
  position: relative;
  border-radius: 4px;
  border: solid 1px #c4c4c4;
  height: 40px;
  display: flex;
  align-items: center;
  background: white;
  :hover {
    border: solid 1px black;
  }
`;

const Text = styled.div`
  text-indent: 15px;
`;

export const Placeholder = styled(Text)`
  color: #aaaaaa;
`;

export const HeaderText = styled(Text)`
  color: #030303;
`;

export const Arrow = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 10px;
  color: #909090;
  ${({ isOpen }) =>
    isOpen
      ? "transform: rotate(180deg); transition: transform .2s ease-in-out"
      : "transform: rotate(360deg); transition: transform .2s ease-in-out"};
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  margin-top: 10px;
`;

export const DropDownList = styled.ul`
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 12px;
  border-radius: 8px;
  margin: 0;
  min-width: fit-content;
  min-height: fit-content;
  max-height: 250px;
  background: white;
  overflow-y: scroll;
  box-sizing: border-box;
  list-style-type: none;
  text-align: left;
  padding: 10px 5px 10px 10px;
  ::-webkit-scrollbar {
    width: 5px;
    background: rgba(0, 0, 0, 0);
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    width: 5px;
    position: relative;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0);
  }
`;

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
