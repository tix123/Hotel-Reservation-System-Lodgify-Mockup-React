import { render } from "@testing-library/react";
import React from "react";
import ReservationBody from "./index";

test("renders an h1", () => {
  const { getByText } = render(<ReservationBody />);
  const h1 = getByText(/Reservations/);
  expect(h1).toHaveTextContent(
    "Reservations"
  );
});
