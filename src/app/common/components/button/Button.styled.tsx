import styled, { css } from 'styled-components';
import { borderSpacing, focusOutline } from '../../../../../lib/styles/mixins';
import { theme } from '../../../../../lib/styles/theme';
import { ButtonProps } from './Button.types';

const TYPE = {
  primary: css`
    background-color: ${theme.colors.primary};
    box-shadow: 0 0 1.5rem ${theme.colors.primaryDark};
    color: ${theme.colors.white};
    ${borderSpacing}
    &:hover {
      background-color: ${theme.colors.primaryDark};
    }
    &:focus-visible {
      ${focusOutline}
    }
  `,
  secondary: css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    &:hover {
      background-color: ${theme.colors.secondaryDark};
      color: ${theme.colors.white};
      outline: 0.15rem solid ${theme.colors.white};
    }
    &:focus-visible {
      background-color: ${theme.colors.gray};
    }
  `,
  tertiary: css`
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
    font-weight: 400;
    width: auto;
    height: auto;
    padding: ${theme.spacing[8]};
    ${borderSpacing}
    &:hover {
      background-color: ${theme.colors.accentDark};
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: ${theme.colors.gray};
  color: ${theme.colors.charcoal};
  box-shadow: none;
  &:hover {
    background: ${theme.colors.gray};
    color: ${theme.colors.charcoal};
  }
`;

export const Container = styled.button<ButtonProps>`
  ${({ size }) =>
    size === 'small'
      ? css`
          padding: ${theme.spacing[12]} ${theme.spacing[20]};
        `
      : css`
          padding: ${theme.spacing[16]} ${theme.spacing[32]};
          font-size: ${theme.fontSize.medium};
          font-weight: 600;
        `}

  border-radius: ${theme.borderRadius.xLarge};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing[8]};
  line-height: 1rem;
  border: none;
  cursor: pointer;

  ${(props) => props.buttonType && TYPE[props.buttonType]}
  ${(props) => props.disabled && DISABLED}

  &:focus-visible {
    ${focusOutline}
  }
`;
