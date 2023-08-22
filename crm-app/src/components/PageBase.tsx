// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Divider from '@mui/material/Divider';
// import { grey } from '@mui/material/colors';


// const styles = {
//     navigation: {
//         fontSize: 15,
//         fontWeight: 400,
//         color: grey[500],
//         paddingBottom: 15,
//         display: 'block',
//     },
//     title: {
//         fontSize: 24, 
//         fontWeight: 500,
//         marginBottom: 20,
//     },
//     paper: {
//         padding: 10,
//     },
//     main: {
//         paddingTop: 80,
//         paddingLeft: 30,
//         paddingRight: 30,
//     },
//     clear: {
//         clear: 'both' as any
//     }
// }

// interface PageBaseProps {
//     title: string,
//     navigation: string,
//     children: React.ReactElement | null
// };

// const PageBase: React.FC<PageBaseProps> = ({ title, navigation, children}) => {
//     return (
//         <div style={styles.main}>
//             <span style={styles.navigation}>{navigation}</span>

//             <Paper style={styles.paper}>
//                 <h3 style={styles.title}> {title} </h3>

//                 <Divider />
//                 {children}

//                 <div style={styles.clear} />
//             </Paper>
//         </div>
//     );
// };


// export default PageBase;

import * as React from 'react';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {teal} from "@mui/material/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../assets/crm.svg";
import data from '../data';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(0),
      width: 'auto',
    },
  }));
  
  const LogoImage = styled('img')(({ theme }) => ({
      maxWidth: '8%',
      height: 'auto',
      marginRight: theme.spacing(4),
    }));
    
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing()
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

interface PageBaseProps {
    children: React.ReactElement | null;
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const PageBase: React.FC<PageBaseProps> = ({children}) => { 
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ backgroundColor: teal[500]}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            {/* <LogoImage src={logo} alt="logo" /> */}
            
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <LogoImage src={logo} alt="logo" />
            </Typography>


            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account"
            sx={{ marginLeft:'10px', marginRight: '9px' }} 
    

          >
            <AccountCircleIcon />
          </IconButton>
          {/* <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ marginRight:'4px', marginLeft: '4px', ml:0,}}
        
          >
            <MenuIcon />
          </IconButton> */}


            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
         </AppBar>
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}
            {/* <Grid container spacing={3}>
              {/* Chart */}
              {/* <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Chart /> */}
                {/* </Paper>
              </Grid>
              {/* Recent Deposits */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}                > */}
                  {/* <Deposits /> */}
                {/* </Paper>
              </Grid>
              Recent Orders */}
              {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* <Orders /> */}
                {/* {/* </Paper>
              </Grid>
            </Grid> */}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>

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
            { data.mainListItems.map((mainListItems:any, index:number) => (
            <ListItemButton key={`link_${index}`}>
                <ListItemIcon onClick={() => window.location.assign(mainListItems.link)}>
                    {mainListItems.icon}
                </ListItemIcon>
                <ListItemText primary={mainListItems.text} />
            </ListItemButton>
        ))}
            <Divider sx={{ my: 1 }} />
            { data.secondaryListItems.map((secondaryListItems:any, index:number) => (
            <ListItemButton key={`link_${index}`}>
                <ListItemIcon onClick={() => window.location.assign(secondaryListItems.link)}>
                    {secondaryListItems.icon}
                </ListItemIcon>
                <ListItemText primary={secondaryListItems.text} />
            </ListItemButton>
        ))}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default PageBase;