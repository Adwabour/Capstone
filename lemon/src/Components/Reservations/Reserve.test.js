import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reserve from "./Reserve";

describe("Reserve component", () => {
  it("renders the form and submits correctly", async () => {
    // render the component with a MemoryRouter
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <Reserve />
      </MemoryRouter>
    );

    // get the name, email and seats fields, and the submit button
    const nameField = getByLabelText("Full name*");
    const emailField = getByLabelText("Email*");
    const dateField = getByLabelText("Date*");
    const timeField = getByLabelText("Time*");
    const tableField = getByLabelText("Seats*");
    const submitButton = getByText("Book");

    // fill in the form fields
    fireEvent.change(nameField, { target: { value: "John Doe" } });
    fireEvent.change(emailField, { target: { value: "johndoe@example.com" } });
    fireEvent.change(dateField, { target: { value: "2023-01-07" } });
    fireEvent.change(timeField, { target: { value: "17:13" } });
    fireEvent.change(tableField, { target: { value: "2" } });
    // submit the form
    fireEvent.click(submitButton);

    // wait for the confirmation message to appear
    await waitFor(() => {
      expect(getByText("Tables successfully booked")).toBeInTheDocument();
    });
  });
});
