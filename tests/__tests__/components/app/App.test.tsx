import App from "../../../../src/containers/app/App";
import { render } from "../../../testsSetup/test-utils";

describe("App component", () => {
  test("snapshot - app component", () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });
});
