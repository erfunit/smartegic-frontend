import { render } from "@testing-library/react";

import { Footer } from "./footer";

describe("Footer component testing with testing-library", () => {
    test("renders without crashing", () => {
        const component = render(<Footer />);

        expect(component).toBeTruthy();
    });

    test("renders pankod logo and directed to the correct url", () => {
        const { getByTestId } = render(<Footer />);

        expect(getByTestId("pankod-logo").getAttribute("href")).toStrictEqual(
            "https://github.com/pankod",
        );
    });

    test("should render 4 icons successfully", () => {
        const { getByTestId } = render(<Footer />);

        const icons = getByTestId("icons-container");
        expect(icons.children).toHaveLength(4);
    });
});
