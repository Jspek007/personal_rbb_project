import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../../../lib/styles/theme';

describe('Button', () => {
  it('renders the button with the Primary styling', () => {
    const onClickMock = jest.fn();
    const buttonText = 'Click me';
    const buttonType = 'primary';

    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickMock} $buttonType={buttonType}>
          {buttonText}
        </Button>
      </ThemeProvider>
    );

    const buttonElement = screen.getByRole('button', { name: buttonText });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({ color: `${theme.colors.white}` });
    expect(buttonElement).toHaveStyle({ boxShadow: '0 0 1.5rem' + ` ${theme.colors.primaryDark}` });
    expect(buttonElement).toHaveStyle({ backgroundColor: ` ${theme.colors.primary}` });

    // Trigger click event and assert that onClick function is called
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders the button with the Secondary styling', () => {
    const onClickMock = jest.fn();
    const buttonText = 'Click me';
    const buttonType = 'secondary';

    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickMock} $buttonType={buttonType}>
          {buttonText}
        </Button>
      </ThemeProvider>
    );

    const buttonElement = screen.getByRole('button', { name: buttonText });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({ color: `${theme.colors.white}` });
    expect(buttonElement).toHaveStyle({
      boxShadow: '0 0 1.5rem' + ` ${theme.colors.secondaryDark}`,
    });
    expect(buttonElement).toHaveStyle({ backgroundColor: ` ${theme.colors.secondary}` });

    // Trigger click event and assert that onClick function is called
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders the button with the Tertiary styling', () => {
    const onClickMock = jest.fn();
    const buttonText = 'Click me';
    const buttonType = 'tertiary';

    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickMock} $buttonType={buttonType}>
          {buttonText}
        </Button>
      </ThemeProvider>
    );

    const buttonElement = screen.getByRole('button', { name: buttonText });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({ color: `${theme.colors.white}` });
    expect(buttonElement).toHaveStyle({
      boxShadow: '0 0 1.5rem' + ` ${theme.colors.accentDark}`,
    });
    expect(buttonElement).toHaveStyle({ backgroundColor: ` ${theme.colors.secondary}` });

    // Trigger click event and assert that onClick function is called
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
