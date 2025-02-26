import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { test } from "vitest";
import routesConfig from "./routes.jsx";

test("Full app rendering and navigating", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/"],
  });
  const user = userEvent.setup();
  render(<RouterProvider router={router} />);

  expect(
    screen.getByText(/this is not a real store, you can't buy stuff here./i)
  ).toBeInTheDocument();

  await user.click(screen.getByText(/cart/i));
  expect(screen.getByText(/this is your shopping cart/i)).toBeInTheDocument();
});
