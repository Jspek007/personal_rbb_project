import styled, { css } from 'styled-components';
import { MEDIA_QUERY } from './mediaQueries';

export const focusOutline = css`
  outline: ${({ theme }) => `0.25rem solid ${theme}`};
  border-radius: 0.25rem;
`;

export const borderSpacing = css`
  border: 0.25rem solid transparent;
`;

export const Divider = styled.div<{ size: number }>`
  ${({ size }) => css`
    width: ${size / 16}rem;
    height: ${size / 16}rem;
  `}
`;

export const LayoutSpacing = css`
  ${MEDIA_QUERY.xs} {
    ${({ theme }) => css`
      padding-left: ${theme.spacing[16]};
      padding-right: ${theme.spacing[16]};
    `}
  }

  ${MEDIA_QUERY.sm} {
    ${({ theme }) => css`
      padding-left: ${theme.spacing[24]};
      padding-right: ${theme.spacing[24]};
    `}
  }

  ${MEDIA_QUERY.md} {
    ${({ theme }) => css`
      padding-left: ${theme.spacing[72]};
      padding-right: ${theme.spacing[72]};
    `}
  }

  ${MEDIA_QUERY.lg} {
    ${({ theme }) => css`
      padding-left: ${theme.spacing[112]};
      padding-right: ${theme.spacing[112]};
    `}
  }
`;

export const LayoutWrapper = styled.div`
  ${LayoutSpacing}
`;
