import React from "react";
import { shallow, mount } from "enzyme";
import DropDown from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

describe("test DropDown", () => {
  const mockProps = {
    selectedText: "",
    options: [{ text: "test", value: 0 }],
    placeHolder: "",
    handleOptionChange: jest.fn(),
  };

  test("Snapshot for closing DropDown", () => {
    const tree = renderer.create(<DropDown {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Snapshot for opening DropDown", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => [true, setState]);
    const tree = renderer.create(<DropDown {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("toggle open", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => [false, setState]);
    const wrapper = shallow(<DropDown {...mockProps} />);
    wrapper.find("[id='DropDownHeader']").simulate("click");
    expect(setState).toHaveBeenCalledWith(true);
  });

  test("toggle close", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => [true, setState]);
    const wrapper = shallow(<DropDown {...mockProps} />);
    wrapper.find("[id='DropDownHeader']").simulate("click");
    expect(setState).toHaveBeenCalledWith(false);
  });

  test("click option", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => [true, setState]);
    const validateSpy = jest.fn();
    const wrapper = mount(
      <DropDown {...mockProps} validateSpy={validateSpy} />
    );
    wrapper.find("[id='option 0']").first().simulate("click");
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});

export {};
