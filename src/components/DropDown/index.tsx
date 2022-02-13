import React, { useRef, useEffect, useCallback, useMemo } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  HeaderText,
  DropDownListContainer,
  DropDownList,
  Arrow,
  Placeholder,
} from "./styles";
import Item, { optionType } from "./Item";

interface Props {
  selectedText: string;
  options: Array<optionType>;
  placeHolder: string;
  handleOptionChange: (value: number) => void;
  validateSpy?: () => void;
}

function DropDown(props: Props) {
  const dropdownRef = useRef() as React.RefObject<HTMLDivElement>;
  const [toggle, setToggle] = React.useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        dropdownRef.current != null &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    },
    [dropdownRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const toggling = (): void => setToggle(!toggle);

  const onOptionClicked = useMemo(
    () => (option: optionType) => {
      if (props.validateSpy != null) {
        props.validateSpy();
      }
      const { value } = option;
      setToggle(false);
      props.handleOptionChange(value);
    },
    []
  );

  return (
    <DropDownContainer ref={dropdownRef}>
      <DropDownHeader id="DropDownHeader" onClick={toggling}>
        {props.selectedText == null ? (
          <Placeholder>{props.placeHolder}</Placeholder>
        ) : (
          <HeaderText>{props.selectedText}</HeaderText>
        )}
        <Arrow id="DropDownArrow" isOpen={toggle}>
          ▼
        </Arrow>
      </DropDownHeader>
      {toggle && (
        <DropDownListContainer>
          <DropDownList>
            {props.options.map((option: optionType, index: number) => (
              <Item
                key={"item-" + index}
                option={option}
                index={index}
                onOptionClicked={onOptionClicked}
              />
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default React.memo(DropDown);
