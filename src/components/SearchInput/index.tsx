import React from "react";
import { InputContainer, Input } from "./styles";
import SearchIcon from "../SearchIcon";

interface Props {
  queryString: string;
  handleQueryInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput(props: Props) {
  return (
    <InputContainer>
      <SearchIcon />
      <Input
        id="input"
        onChange={props.handleQueryInput}
        value={props.queryString}
        type="text"
        placeholder="The name, or part of the name."
      />
    </InputContainer>
  );
}

export default React.memo(SearchInput);
