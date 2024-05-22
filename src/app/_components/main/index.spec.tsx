import React from "react";
import { render } from "@testing-library/react";

import { Main } from "./index";

describe("Main component testing with testing-library", () => {
    test("renders without crashing", () => {
        const component = render(<Main />);

        expect(component).toBeTruthy();
    });

    test("renders texts successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("Smartegic");
        getByText("the frontend application of smartegic");
    });

    test("renders button successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("Docs");
    });
});
