import { Button, Typography, Toolbar, AppBar } from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'
import styles from './Header.module.css'

export default function Header() {
  const router = useRouter()

  const clickLogo = () => {
    router.push('/')
  }

  return (
    <AppBar
      position='fixed'
      className={styles.header}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} onClick={clickLogo}>
          COOKING APP
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}
