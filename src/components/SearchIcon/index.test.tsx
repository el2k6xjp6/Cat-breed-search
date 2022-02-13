import SearchIcon from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

describe("SearchIcon component", () => {
  test("snapshot", () => {
    const tree = renderer.create(<SearchIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
