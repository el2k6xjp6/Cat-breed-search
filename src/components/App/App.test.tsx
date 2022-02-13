import App from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

describe("App", () => {
  test("snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
