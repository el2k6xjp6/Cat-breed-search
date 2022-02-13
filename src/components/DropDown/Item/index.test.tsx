import { shallow } from "enzyme";
import Item from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

describe("Item in DropDown", () => {
  const mockProps = {
    option: { text: "test", value: 0 },
    index: 0,
    onOptionClicked: jest.fn(),
  };

  test("Snapshot for Item", () => {
    const tree = renderer.create(<Item {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("item click", () => {
    const wrapper = shallow(<Item {...mockProps} />);
    wrapper.find("[id='option 0']").simulate("click");
    expect(mockProps.onOptionClicked).toBeCalled();
  });
});

export {};
