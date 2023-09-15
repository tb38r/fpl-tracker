import Position from "@/app/components/Position";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("Test position button component", () => {
  it("Changes blue on click", () => {
    const index = "1";
    let value = "5";
    let activeIndex = "2";

    function setActiveIndex(val) {
      activeIndex = val;
    }

    const { rerender } = render(
      <Position
        position="defence"
        index={index}
        handleComponentClick={() => setActiveIndex(value)}
        activeIndex={activeIndex}
      />
    );

    const button = screen.getByTestId("positionButton");

    expect(button).toHaveClass("bg-gray-300");

    value = "1";

    fireEvent.click(button);

    rerender(
      <Position
        position="defence"
        index={index}
        handleComponentClick={() => setActiveIndex(value)}
        activeIndex={activeIndex}
      />
    );

    expect(button).toHaveClass("bg-sky-600");
  });
});
