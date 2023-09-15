import Time from "@/app/components/Time";

import {
  render,
  screen,
  fireEvent,
  cleanup,
  
} from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("Test position button component", () => {
  it("Changes green on click", () => {
    const index = "1";
    let value = "4";
    let activeIndex = "2";

    function setActiveIndex(val) {
      activeIndex = val;
    }

    const { rerender } = render(
      <Time
        time="3"
        index={index}
        handleComponentClick={() => setActiveIndex(value)}
        activeIndex={activeIndex}
      />
    );

    const button = screen.getByTestId("testButton");

    expect(button).toHaveClass("bg-gray-300");
    expect(button).not.toHaveClass("bg-emerald-700");

    value = "1";

    fireEvent.click(button);

    rerender(
      <Time
        position="defence"
        index={index}
        handleComponentClick={() => setActiveIndex(value)}
        activeIndex={activeIndex}
      />
    );

    expect(button).toHaveClass("bg-emerald-700");
    expect(button).not.toHaveClass("bg-gray-300");

  });
});
