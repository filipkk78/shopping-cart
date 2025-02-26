import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import App from "../../App";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { test } from "vitest";
import routesConfig from "../../routes.jsx";

test("Navigates to error page upon no route match", () => {
  const badRoute = "/some/random/route";
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [badRoute],
  });
  render(<RouterProvider router={router} />);

  expect(
    screen.getByText(/oh no, this route doesn't exist!/i)
  ).toBeInTheDocument();
});
