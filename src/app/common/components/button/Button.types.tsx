export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode | string;
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  size?: string;
};
