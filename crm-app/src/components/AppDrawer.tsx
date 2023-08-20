import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import data from '../data';




const drawerWidth: number = 240;

const mainListItems = (
    <React.Fragment>
        { data.mainListItems.map((mainListItems:any, index:number) => (
            <ListItemButton key={`link_${index}`}>
                <ListItemIcon onClick={() => window.location.assign(mainListItems.link)}>
                    {mainListItems.icon}
                </ListItemIcon>
                <ListItemText primary={mainListItems.text} />
            </ListItemButton>
        ))}
    </React.Fragment>
);


const secondaryListItems = (
    <React.Fragment>
        { data.secondaryListItems.map((secondaryListItems:any, index:number) => (
            <ListItemButton key={`link_${index}`}>
                <ListItemIcon onClick={() => window.location.assign(secondaryListItems.link)}>
                    {secondaryListItems.icon}
                </ListItemIcon>
                <ListItemText primary={secondaryListItems.text} />
            </ListItemButton>
        ))}
    </React.Fragment>
);




const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default function AppUserMenu() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
        <React.Fragment>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                    }}
                >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {mainListItems}
                <Divider sx={{ my: 1 }} />
                    {secondaryListItems}
                </List>
        </Drawer>
        </React.Fragment>

  );
}