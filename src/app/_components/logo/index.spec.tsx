import { render } from "@testing-library/react";

import { Logo } from "./index";

describe("Logo component testing with testing-library", () => {
    const component = render(<Logo />);

    test("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
