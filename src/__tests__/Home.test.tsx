import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Home', () => {
  it('renders the index file', () => {
    render(<Home />);
    const homeLogo = screen.getByAltText('Next.js Logo');
    expect(homeLogo).toBeInTheDocument();
  });
});
