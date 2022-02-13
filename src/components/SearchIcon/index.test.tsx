import SearchIcon from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

describe("SearchIcon", () => {
  test("snapshot for SearchIcon", () => {
    const tree = renderer.create(<SearchIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
