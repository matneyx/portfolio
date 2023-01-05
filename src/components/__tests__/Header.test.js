import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

test('renders given basic props', () => {
  render(<Header/>);
  expect(screen.getByText('Dave Matney')).toBeTruthy();
});
