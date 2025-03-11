import AboutPage from "@/app/about/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it } from "node:test";

describe("AboutPage", () => {
  it("should render", () => {
    // const heading = screen.getByRole("heading", { level: 1 });
    // expect(heading).toBeInTheDocument();

    const { container } = render(<AboutPage />);
    expect(container).toMatchSnapshot();
  });
});
