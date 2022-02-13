import Card from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

const mockProps = {
  name: "test",
  weight: { metric: "1-2" },
  life_span: "3-4",
  reference_image_id: "",
};

describe("App", () => {
  test("snapshot", () => {
    const tree = renderer.create(<Card {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
