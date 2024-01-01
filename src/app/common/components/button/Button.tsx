'use client';

import { ButtonProps } from './Button.types';
import { Container } from './Button.styled';

export const Button = ({
  onClick,
  children,
  buttonType,
  disabled,
  size,
  ...props
}: ButtonProps) => {
  return (
    <Container onClick={onClick} buttonType={buttonType} disabled={disabled} size={size} {...props}>
      {children}
    </Container>
  );
};
