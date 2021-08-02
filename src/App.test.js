import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useInView } from 'react-intersection-observer';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./theme";
import { useDarkMode } from "./hooks";

import App from './App';

const MockApp = ({ options }) => {
  const [ref, inView] = useInView(options);
  const [theme, toggleTheme, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <App />
    </ThemeProvider>
  )
}

test('Renders two theme toggles and the default theme is light', () => {
  render(<MockApp />);
  mockAllIsIntersecting(true);

  expect(screen.getAllByTestId("toggle-theme-input").length).toBe(2);
  expect(screen.getByTestId("header-inner")).toHaveStyle('background-color: #EBEBEB')
});

test('Toggling theme changes background colour', () => {
  render(<MockApp />);
  mockAllIsIntersecting(true);

  const toggleThemeElements = screen.getAllByTestId("toggle-theme-input");

  fireEvent.change(toggleThemeElements[0]);
  expect(screen.getByTestId("header-inner")).toHaveStyle('background-color: #2F2F2F');

  fireEvent.change(toggleThemeElements[0]);
  expect(screen.getByTestId("header-inner")).toHaveStyle('background-color: #EBEBEB');
});
