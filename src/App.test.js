import { render, screen } from '@testing-library/react';
import AppContentHeader from './components/AppContentHeader/AppContentHeader';

test('renders learn react link', () => {
  render(<AppContentHeader />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
