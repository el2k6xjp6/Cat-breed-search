import { shallow } from "enzyme";
import SearchInput from ".";

import "jest-styled-components";
import renderer from "react-test-renderer";

const mockProps = {
  queryString: "",
  handleQueryInput: jest.fn(),
};

describe("test SearchInput", () => {
  test("Snapshot for SearchInput", () => {
    const tree = renderer.create(<SearchInput {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("input", () => {
    const wrapper = shallow(<SearchInput {...mockProps} />);
    wrapper.find("[id='input']").simulate("change", "a");
    expect(mockProps.handleQueryInput).toHaveBeenCalledTimes(1);
    expect(mockProps.handleQueryInput).toBeCalledWith("a");
  });
});
