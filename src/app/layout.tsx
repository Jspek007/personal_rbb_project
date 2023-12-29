import StyledComponentsRegistry from '../../lib/registry';
import GlobalStyles from '../../lib/styles/GlobalStyles';
import React from 'react';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {props.children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
