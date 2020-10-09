import React from "react";
import {  render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("User Form", async () => { 
  render(<ContactForm />);

  const firstNameInput = screen.getByLabelText(/first Name/i);
  const lastNameInput = screen.getByLabelText(/last Name/i);
  const emailPlace = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);

  fireEvent.change(firstNameInput, { target: { value: "sathya" } });
  fireEvent.change(lastNameInput, { target: { value: "ganesan" } });
  fireEvent.change(emailPlace, { target: { value: "sathya@gmail.com" } });
  fireEvent.change(message, { target: { value: "Welcome!" } });

  expect(firstNameInput).toHaveValue("sathya");
  expect(lastNameInput).toHaveValue("ganesan");
  expect(emailPlace).toHaveValue("sathya@gmail.com");
  expect(message).toHaveValue("Welcome!");

  const submitInput = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitInput);

  const exFirstName = screen.findByText(/sathya/i);
});