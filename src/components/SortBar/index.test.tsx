import SortBar from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

describe("App", () => {
  test("snapshot", () => {
    const mockProps = {
      selection: -1,
      handleClick: jest.fn,
    };
    const tree = renderer.create(<SortBar {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
