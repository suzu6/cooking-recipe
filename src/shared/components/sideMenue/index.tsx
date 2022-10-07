import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import * as React from 'react';
import style from './Sidebar.module.css';
import { AddBox, Folder } from '@mui/icons-material';

const drawerWidth = 240;

type MenueItem = {
  label: string;
  url: string;
  icon: JSX.Element;
};

/**
 * ページリンク
 */
const items: MenueItem[] = [
  {
    label: 'Create Recipe',
    url: '/recipes/create',
    icon: <AddBox />,
  },
  {
    label: 'Recipe List',
    url: '/recipes',
    icon: <Folder />,
  },
];

export default function SideMenue() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {items.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
