import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import { CustomTheme } from "./CustomTheme";
import Header from '../components/header';
import Footer from '../components/footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <CustomTheme>
        <CssBaseline />
        <Header />
        <Container>
          <div className="layout-main">{children}</div>
        </Container>
        <Footer />
      </CustomTheme>
    </>
  );
}