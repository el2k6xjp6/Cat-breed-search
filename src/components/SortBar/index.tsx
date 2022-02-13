import DropDown from "../DropDown";
import { SORT_METHODS, SORT_METHOD_OPTIONS } from "../../constants";
import { Container } from "./styles";

interface Props {
  selection: number;
  handleClick: (value: number) => void;
}

function SortBar(props: Props) {
  return (
    <Container>
      <DropDown
        selectedText={SORT_METHODS[props.selection]}
        placeHolder="Sort By"
        options={SORT_METHOD_OPTIONS}
        handleOptionChange={props.handleClick}
      />
    </Container>
  );
}

export default SortBar;
