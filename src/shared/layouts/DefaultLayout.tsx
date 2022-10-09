import { Box, CssBaseline, Container, Toolbar } from '@mui/material';
import { CustomTheme } from './CustomTheme';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenue from '../components/sideMenue';

interface LayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CustomTheme>
          <CssBaseline />
          <Header />
          <SideMenue />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <div className="layout-main">{children}</div>
          </Box>
        </CustomTheme>
      </Box>
    </>
  );
}
