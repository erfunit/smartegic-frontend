import { render } from "@testing-library/react";

import { Header } from "./index";

describe("Header component testing with testing-library", () => {
    const { getByTestId } = render(<Header />);

    const container = getByTestId("container");

    test("renders without crashing", () => {
        expect(container.parentElement).toBeTruthy();
    });

    test("renders successfuly next.js logo", () => {
        expect(container.firstChild).toBeDefined();
    });
});
