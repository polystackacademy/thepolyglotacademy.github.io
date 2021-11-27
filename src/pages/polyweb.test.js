import { render, screen } from '@testing-library/react';
import PolyWeb from './polyweb';

test('renders learn react link', () => {
  render(<PolyWeb />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
