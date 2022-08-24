import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuth from '../hooks/useAuth';
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ['home', 'About', 'Contact'];

function Navtest(props) {
    const { user, logOut } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctor Portal
          </Typography>
      <Divider />
      <List>
      <Link
            style={{ textDecoration: "none", fontSize: 20, color: "white" }}
            to="/"
          >
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", fontSize: 20, color: "white" }}
            to="/appointment"
          >
            <Button color="inherit">Appointment</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", fontSize: 20, color: "white" }}
            to="/navtest"
          >
            <Button color="inherit">test</Button>
          </Link>
          {user?.email ? (
            <Box>
              <Link
                style={{ textDecoration: "none", fontSize: 20, color: "white" }}
                to="/dashboard"
              >
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Button onClick={logOut} color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <Link
              style={{ textDecoration: "none", fontSize: 20, color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </Link>
          )}
        
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Doctor Portal
          </Typography>
          <div sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link
            style={{ textDecoration: "none", fontSize: 20, color: "white" }}
            to="/"
          >
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", fontSize: 20, color: "white" }}
            to="/appointment"
          >
            <Button color="inherit">Appointment</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", fontSize: 20, color: "white" }}
            to="/navtest"
          >
            <Button color="inherit">test</Button>
          </Link>
          {user?.email ? (
            <Box>
              <Link
                style={{ textDecoration: "none", fontSize: 20, color: "white" }}
                to="/dashboard"
              >
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Button onClick={logOut} color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <Link
              style={{ textDecoration: "none", fontSize: 20, color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </Link>
          )}
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

Navtest.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navtest;
