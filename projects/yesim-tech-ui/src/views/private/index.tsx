import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SiteHeader from '../../components/layout-componens/SiteHeader';
import LeftMenu from '../../components/layout-componens/LeftMenu';
import { Route, Routes } from 'react-router-dom';
import SiteFooter from '../../components/layout-componens/SiteFooter';
import { privateRoutes } from './routes';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function PrivateViews() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* Header */}
        <SiteHeader open={open} toggleDrawer={toggleDrawer} />

        {/* LeftMenu */}
        <LeftMenu open={open} toggleDrawer={toggleDrawer} />

        {/* Content - RenderBody */}
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
            <Grid container spacing={3}>

              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',

                  }}
                >
                  {/* RenderBody */}
                  <Routes>
                    {
                      privateRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />
                      })
                    }
                  </Routes>


                </Paper>
              </Grid>

            </Grid>
            <SiteFooter sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export default PrivateViews;