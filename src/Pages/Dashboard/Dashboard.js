import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Navigation from "../Shared/Navigation/Navigation";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        height: "100%",
        marginBottom:6,
        backgroundImage:
          "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
      }}
    >
      <Toolbar />

      <Link style={{ textDecoration: "none"}} to="/appointment">
        <Button
          variant="contained"
          style={{
           marginBottom:4,
           width:'120px',
            backgroundColor: "#19D3AE",
            backgroundImage:
              "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
          }}
        >
          Appointment
        </Button>
      </Link>
      <Link style={{ textDecoration: "none",margin:7 }} to="/dashboard">
        <Button
          variant="contained"
          style={{
            marginBottom:4,
            width:'120px',
            backgroundColor: "#19D3AE",
            backgroundImage:
              "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
          }}
        >
          DashBoard
        </Button>
      </Link>

      {admin && (
        <Box>
          <Link style={{ textDecoration: "none" }} to={`/dashboard/makeAdmin`}>
            <Button
              variant="contained"
              style={{
                marginBottom:4,
             
                backgroundColor: "#19D3AE",
                backgroundImage:
                  "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
              }}
            >
              Make Admin
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/dashboard/addDoctor`}>
            <Button
              variant="contained"
              style={{
                marginBottom:4,
             
                backgroundColor: "#19D3AE",
                backgroundImage:
                  "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
              }}
            >
              Add Doctor
            </Button>
          </Link>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Navigation />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
