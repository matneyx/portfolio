import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ChevronDown, MobileNavToggle } from "../BootstrapIcons";

describe('ChevronDown', () => {
  test('renders with default props', () => {
    render(<ChevronDown />);
    expect(screen.getByTestId('chevron-down')).toBeTruthy();
  });

  test('passes props as expected', () => {
    const handleClick = jest.fn();
    render(<ChevronDown onClick={handleClick} />);
    expect(handleClick.mock.calls).toHaveLength(0);

    fireEvent.click(screen.getByTestId('chevron-down'));
    expect(handleClick.mock.calls).toHaveLength(1);
  });
});

describe('MobileNavToggle', () => {
  test('renders with default props', () => {
    render(<MobileNavToggle />);
    expect(screen.getByTestId('mobile-nav-toggle')).toBeTruthy();
  });

  test('passes props as expected', () => {
    const handleClick = jest.fn();
    render(<MobileNavToggle onClick={handleClick} />);
    expect(handleClick.mock.calls).toHaveLength(0);

    fireEvent.click(screen.getByTestId('mobile-nav-toggle'));
    expect(handleClick.mock.calls).toHaveLength(1);
  });

  test('toggles icon when clicked', () => {
    const handleClick = jest.fn();
    render(<MobileNavToggle onClick={handleClick} />);
    expect(screen.getByTestId('mobile-nav-toggle').classList.contains('bi-x')).toBe(false);
    expect(screen.getByTestId('mobile-nav-toggle').classList.contains('bi-list')).toBe(true);

    fireEvent.click(screen.getByTestId('mobile-nav-toggle'));

    expect(screen.getByTestId('mobile-nav-toggle').classList.contains('bi-x')).toBe(true);
    expect(screen.getByTestId('mobile-nav-toggle').classList.contains('bi-list')).toBe(false);

    fireEvent.click(screen.getByTestId('mobile-nav-toggle'));

    expect(screen.getByTestId('mobile-nav-toggle').classList.contains('bi-x')).toBe(false);
    expect(screen.getByTestId('mobile-nav-toggle').classList.contains('bi-list')).toBe(true);
  })
});
