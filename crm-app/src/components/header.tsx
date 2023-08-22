//import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
//import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {teal} from "@mui/material/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../assets/crm.svg";



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

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="absolute" sx={{ backgroundColor: teal[500]}}>
        <Toolbar>
            <LogoImage src={logo} alt="logo" />
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
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
          {/*<IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ marginRight:'4px', marginLeft: '4px', ml:0,}}
           ////comente icono de menu!!!!!---
          >
            <MenuIcon />
  </IconButton>*/} 
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}