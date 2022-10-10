import { Box, CssBaseline, Container, Toolbar } from '@mui/material'
import Footer from '../components/footer'
import Header from '../components/header'
import SideMenue from '../components/sideMenue'
import { CustomTheme } from './CustomTheme'

interface LayoutProps {
  children: React.ReactNode
}

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CustomTheme>
          <CssBaseline />
          <Header />
          <SideMenue />
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <div className='layout-main'>{children}</div>
          </Box>
        </CustomTheme>
      </Box>
    </>
  )
}
