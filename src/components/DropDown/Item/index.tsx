import React from "react";
import { ListItem, ListItemText } from "../styles";

export type optionType = {
  text: string;
  value: number;
};

type DropDownListProps = {
  option: optionType;
  index: number;
  onOptionClicked: (option: optionType) => void;
};

const Item = ({ option, index, onOptionClicked }: DropDownListProps) => {
  const { text, value } = option;
  return (
    <ListItem onClick={() => onOptionClicked(option)} key={index} value={value}>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
};

export default Item;
