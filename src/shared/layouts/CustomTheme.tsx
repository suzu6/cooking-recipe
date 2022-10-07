import { createTheme, ThemeProvider } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

export function CustomTheme({ children }: LayoutProps) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 968, // customized
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'md',
        },
      },
    },
    palette: {
      primary: {
        main: '#0CA7B7',
      },
      secondary: {
        main: '#F96A93',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
