import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import login from "../../../assets/images/login.png";
import useAuth from "../../../hooks/useAuth";
const Login = () => {
  const {loginUser,isLoading,authError,user} = useAuth();
  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email,loginData.password)
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 10 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: 1, m: 2 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
              type="email"
              required
            ></TextField>
            <TextField
              sx={{ width: 1, m: 2 }}
              id="standard-basic"
              label="Password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
              type="password"
              required
            ></TextField>
            <Button variant="contained" sx={{ width: 1, m: 2 }} type="submit">
              submit
            </Button>
            <NavLink to='/register'>New user Register </NavLink>
          </form>
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

export default Login;
