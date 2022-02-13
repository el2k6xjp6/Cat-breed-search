import Card from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

const mockProps = {
  name: "test",
  weight: { low: 1, high: 2 },
  lifeSpan: { low: 3, high: 4 },
  referenceImageId: "",
};

describe("Card", () => {
  test("snapshot for Card", () => {
    const tree = renderer.create(<Card {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
