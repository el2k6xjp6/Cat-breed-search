import LazyImage from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

const mockProps = {
  isFetching: true,
  actualSrc: "",
};

describe("LazyImage", () => {
  test("snapshot for LazyImage", () => {
    const tree = renderer.create(<LazyImage {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
