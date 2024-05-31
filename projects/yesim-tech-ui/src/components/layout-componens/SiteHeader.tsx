import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';




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
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


function SiteHeader({ open, toggleDrawer }: any) {


  const {i18n} = useTranslation()


  const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng)
      localStorage.setItem("language", lng)
  }


  return <>
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
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
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Yeşim Tech React Demo
        </Typography>
        <IconButton color="inherit">
    
            {/* <NotificationsIcon /> */}
            {/* TR and EN languages button */}

            <Button variant="contained" color="error" onClick={() => changeLanguage("tr")}>
              TR
            </Button>
            <Button variant="contained" color="primary" onClick={() => changeLanguage("en")}>
              EN
            </Button>

        </IconButton>
      </Toolbar>
    </AppBar>
  </>
}

export default SiteHeader