import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/images/login.png";
import useAuth from "../../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";

const Register = () => {
  const { user, registerUser, isLoading, authError } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
   
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password dont match");
      return;
    }
    registerUser(loginData.email, loginData.password,loginData.name, location, navigate);

    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 10 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: 1, m: 2 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
                type="text"
                required
              ></TextField>
              <TextField
                sx={{ width: 1, m: 2 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
                type="email"
                required
              ></TextField>
              <TextField
                sx={{ width: 1, m: 2 }}
                id="standard-basic"
                label="Password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
                type="password"
                required
              ></TextField>
              <TextField
                sx={{ width: 1, m: 2 }}
                id="standard-basic"
                label="Retype Password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
                type="password"
                required
              ></TextField>
              <Button variant="contained" sx={{ width: 1, m: 2 }} type="submit">
                submit
              </Button>
              <NavLink to="/login">Already Register Login </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress color="success" />}

          {user?.email && (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Account Created Successfully
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ objectFit: "cover", width: "90%" }}
            src={login}
            alt="login"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
