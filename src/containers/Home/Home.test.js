// Need to fix test - look into how we can use Enzyme to shallow test instead

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
    it("renders without crashing", () => {
        render(<Home />);
        screen.debug();
    })
})