import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundImage:
            "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctor Portal
          </Typography>
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

          {user?.email ? (
            <Box>
              <Link
                style={{ textDecoration: "none", fontSize: 20, color: "white" }}
                to="/dashboard/dashboard"
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
