import { render } from "@test";
import LanguageSwitcher from "./index";

describe("Header component testing with testing-library", () => {
    const { getByTestId } = render(<LanguageSwitcher />);

    const container = getByTestId("container");

    it("renders without crashing", () => {
        expect(container.parentElement).toBeTruthy();
    });
});
