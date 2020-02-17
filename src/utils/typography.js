import Typography from 'typography';
// import funstonTheme from 'typography-theme-funston';
// import doelgerTheme from 'typography-theme-doelger';
const typography = new Typography(
  {
    baseFontSize: '16px',
    baseLineHeight: 1.45,
    googleFonts: [
      {
        name: 'Maven Pro',
        styles: ['300', '400', '700'],
      },
      {
        name: 'Inconsolata',
        styles: ['400', '400i', '700', '700i'],
      },
      {
        name: 'Josefin Sans',
        styles: ['400', '400i', '700', '700i'],
      },
    ],
    headerFontFamily: [
      'Josefin Sans',
      'Helvetica Neue',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
    ],
    bodyFontFamily: ['Maven Pro', 'Georgia', 'serif'],
  }
  // funstonTheme
  // doelgerTheme
);
export default typography;
