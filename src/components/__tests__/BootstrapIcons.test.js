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

    const bsList = 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z';

    const bsX = 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'

    render(<MobileNavToggle onClick={handleClick} />);
    expect(screen.getByTestId('mobile-nav-toggle').querySelector('path')).toHaveAttribute('d', bsList)

    fireEvent.click(screen.getByTestId('mobile-nav-toggle'));

    expect(screen.getByTestId('mobile-nav-toggle').querySelector('path')).toHaveAttribute('d', bsX)

    fireEvent.click(screen.getByTestId('mobile-nav-toggle'));

    expect(screen.getByTestId('mobile-nav-toggle').querySelector('path')).toHaveAttribute('d', bsList)
  })
});
