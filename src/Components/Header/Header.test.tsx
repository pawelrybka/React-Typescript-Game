import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders header and repository link', () => {
    render(<Header />);
    const title = screen.getByText(/coderoad/i);
    const link = screen.getByRole('link', { name: /repository/i });
    expect(title).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://github.com/pawelrybka/CodeRoad'
    );
  });
});
