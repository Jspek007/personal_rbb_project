import { Button } from '../Button';
import { render, screen } from '@testing-library/react';
import { theme } from '../../../../../../lib/styles/theme';
import { ThemeProvider } from 'styled-components';

describe('Button Factory', () => {
  it('Should render a bytton with the primary button styling', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button buttonType="primary">
          <span>Primary</span>
        </Button>
      </ThemeProvider>
    );
    const primaryButton = screen.getByRole('button', { name: /primary/i });
    expect(primaryButton).toHaveStyle({ backgroundColor: `${theme.colors.primary}` });
  });
});
