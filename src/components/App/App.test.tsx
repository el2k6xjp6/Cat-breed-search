import App from ".";
import "jest-styled-components";
import renderer from "react-test-renderer";

describe("App", () => {
  test("snapshot for App", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
