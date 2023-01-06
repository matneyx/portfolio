import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../Header";

test('renders given basic props', () => {
  render(<Header/>);
  expect(screen.getByText('Dave Matney')).toBeTruthy();
});

test('scrolling the window updates the header class', () => {
  render(<Header/>);

  expect(screen.getByTestId('header').classList.contains('header-scrolled')).toBeFalsy();

  fireEvent.scroll(window, { target: { scrollY: 100 } });

  expect(screen.getByTestId('header').classList.contains('header-scrolled')).toBeFalsy();

  fireEvent.scroll(window, { target: { scrollY: 101 } });

  expect(screen.getByTestId('header').classList.contains('header-scrolled')).toBeTruthy();

  fireEvent.scroll(window, { target: { scrollY: 100 } });

  expect(screen.getByTestId('header').classList.contains('header-scrolled')).toBeFalsy();
});
