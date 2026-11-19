import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';
import App from '../App.jsx';

test('renders App component', () => {
  render(<App />);
  const element = screen.getByText(/portfolio/i);
  expect(element).toBeInTheDocument();
});
