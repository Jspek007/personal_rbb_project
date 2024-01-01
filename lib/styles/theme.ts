import { css } from 'styled-components';

export const theme = {
  colors: {
    primary: '#3498db',
    primaryDark: '#186091',
    secondary: '#2ecc71',
    secondaryDark: '#169c4e',
    accent: '#f39c12',
    accentDark: '#bd7707',
    charcoal: '#323232',
    white: '#FFFFFF',
    black: 'rgba(0, 0, 0, 0.6)',
    secondaryButtonBlack: 'rgba(0,0,0,20%)',
    gray: '#E3E3E3',
    subtitleGray: '#7C7C7C',
    error: '#E11923',
    eventBackground: '#212327',
  },
  spacing: {
    4: '0.25rem' /* key is px, value is rem of px */,
    8: '0.5rem',
    12: '0.75rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    32: '2rem',
    40: '2.5rem',
    64: '4rem',
    72: '4.5rem',
    112: '7rem',
  },
  boxShadow: {
    small: '0 0 1.5rem rgba(0, 0, 0, 0.16)',
    large: '0 0 1.5rem rgba(0, 0, 0, 0.32)',
    red: '0 0 1.5rem rgba(255, 50, 60, 0.4)',
  },
  borderRadius: {
    small: '0.625rem',
    medium: '1rem',
    large: '3.0625rem',
    xLarge: '4.3125rem',
  },
  fontSize: {
    small: '0.625rem',
    medium: '1rem',
    large: '1.5rem',
    xLarge: '2rem',
    xxLarge: '3rem',
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    background: '#1b1c1d',
    backgroundInverse: '#333333',
    positive: '#9fd986',
    negative: '#df987d',
    primary: '#d43369',
    secondary: '#1b8bd0',
    tertiary: '#DDDDDD',
    text: '#FFFFFF',
  },
};

export const subtitles = {
  sub1: css`
    font-weight: 600;
    font-size: ${theme.fontSize.large};
    line-height: 1.8125rem;
  `,
  sub2: css`
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.375rem;
  `,
  sub3: css`
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.0625rem;
  `,
};

export const headings = {
  h3: css`
    font-weight: 600;
    font-size: ${theme.fontSize.xLarge};
    line-height: 2.1875rem;
  `,
};

export const body = {
  body1: css`
    font-weight: 600;
    font-size: ${theme.fontSize.medium};
    line-height: 1.5rem;
  `,
  body2: css`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3125rem;
  `,
};
