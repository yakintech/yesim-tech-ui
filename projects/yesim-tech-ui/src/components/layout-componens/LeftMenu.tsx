import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiDrawer from '@mui/material/Drawer';
import styled from '@mui/material/styles/styled';
import { Link } from 'react-router-dom';



const drawerWidth: number = 240;


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


function LeftMenu({ open, toggleDrawer }: any) {


    let leftMenus = [
        {
            name: 'Dashboard',
            icon: require('@mui/icons-material/Dashboard')?.default,
            path: '/dashboard'
        },
        {
            name: 'Products',
            icon: require('@mui/icons-material/ShoppingCart').default,
            path: '/products'
        },
        {
            name: 'Orders',
            icon: require('@mui/icons-material/Receipt').default,
            path: '/orders'
        },
        {
            name: 'Settings',
            icon: require('@mui/icons-material/Settings').default,
            path: '/settings'
        },
        {
            name: 'Memo',
            icon: require('@mui/icons-material/AccountCircle').default,
            path: '/memo'
        },
        {
            name: 'Ref',
            icon: require('@mui/icons-material/AccountCircle').default,
            path: '/ref'
        }
    ]



    return <>
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
                <React.Fragment>

                    {/* <ListItemButton>
                        <ListItemIcon>
                        
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton> */}
                    {leftMenus.map((menu, index) => (
                        <Link to={menu.path} key={index} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {
                                        React.createElement(menu.icon)
                                    }
                                </ListItemIcon>
                                <ListItemText primary={menu.name} />
                            </ListItemButton>
                        </Link>
                    ))}
                  
                  
                </React.Fragment>
            </List>
        </Drawer>
    </>
}

export default LeftMenu