import StyledComponentsRegistry from './lib/registry';
import GlobalStyles from './lib/styles/GlobalStyles';

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
