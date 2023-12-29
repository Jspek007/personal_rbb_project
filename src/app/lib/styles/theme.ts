import { openSans, montserrat } from '@/app/lib/styles/fonts';

const theme = {
  colors: {
    /**
     * Used for the background of the header, sidebar and selected items.
     * Represents trust, efficiency and professionalism
     */
    primary: '#3498db',
    /**
     * Used for highlighting success states, progress bars and call-to-action buttons
     * Represents growth, organization and productivity
     */
    secondary: '#2ecc71',
    /**
     * Used for interactive elements such as buttons, links and important notifications
     * Adds a touch of energy and creativity
     */
    accent: '#f39c12',
    headingColor: '#333333',
    bodyText: '#666666',
    buttonText: '#ffffff',
    dividerLine: '#e0e0e0',
  },
  typography: {
    headings: {
      fontFamily: montserrat.style.fontFamily,
      pageTitle: {
        fontSize: '2.25rem',
        lineHeight: 1.2,
        margin: '1.25rem 0',
      },
      sectionTitle: {
        fontSize: '1.75rem',
        lineHeight: 1.2,
        margin: ' 0.9375rem 0',
      },
      subsectionTitle: {
        fontSize: '1.5rem',
        lineHeight: 1.2,
        margin: '0.625rem 0',
      },
    },
    bodyText: {
      fontFamily: openSans.style.fontFamily,
      fontWeight: 'regular',
      color: '#666666',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
};

export default theme;
