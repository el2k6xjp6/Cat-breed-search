import ErrorBoundary from ".";
import renderer from "react-test-renderer";

describe("ErrorBoundary", () => {
  test("snapshot for ErrorBoundary without error", () => {
    const tree = renderer
      .create(
        <ErrorBoundary>
          <div />
        </ErrorBoundary>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("snapshot for ErrorBoundary with error", () => {
    const ThrowError = () => {
      throw new Error("test");
    };
    const tree = renderer
      .create(
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
