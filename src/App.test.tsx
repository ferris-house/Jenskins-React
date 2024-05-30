import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { act } from "react";

test("renders learn react link", async () => {
  render(<App />);
  const element = screen.queryByTestId("add");
  expect(element).toBeTruthy();
  fireEvent.click(element!);
  fireEvent.click(element!);
  expect(element?.innerHTML).toBe("1");
});
