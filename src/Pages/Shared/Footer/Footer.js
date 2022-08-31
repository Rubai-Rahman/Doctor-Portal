import { Grid, Typography } from "@mui/material";
import { Box, fontWeight } from "@mui/system";
import React from "react";
import bgImg from "../../../assets/images/footer.jpg";

const footerBg = {
  background: `url(${bgImg})`,
  backgroundRepeat: "repeat-x",
  width: "100%",
  height:'400px',
  objectFit:'cover',
  marginTop: 50,
  marginBottom: 10,
  paddingTop:20,
};
const Footer = () => {
  return (
    <Box style={footerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
      <Grid
          item
          xs={12} sm={6}
          md={4}        
        >

       <Box style={{ color: "#19D3AE" ,fontWeight:400,marginTop:110,marginLeft:105,textAlign:'start' }}>
       <Typography variant="body1" style={{fontWeight:600}}  >
              SERVICES
            </Typography>
        <Typography variant="body1" >
              Emergency Checkup
            </Typography>
        <Typography variant="body1" >
              Monthly Checkup
            </Typography>
        <Typography variant="body1">
             Deep Checkup
            </Typography>
       </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Box style={{ color: "#19D3AE" ,fontWeight:400,marginTop:110,marginLeft:105,textAlign:'start' }}>
        <Typography variant="body1" style={{ color: "#19D3AE",fontWeight:600}}>
             ORAL HEALTH
            </Typography>
        <Typography variant="body1">
             Fluoride Treatment
            </Typography>
        <Typography variant="body1">
             Cavity Filling
            </Typography>
        <Typography variant="body1" >
         Teeth Whiteing
            </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Box style={{ color: "#19D3AE" ,fontWeight:400,marginTop:110,marginLeft:105,textAlign:'start' }}>
        <Typography variant="body1" style={{ color: "#19D3AE",fontWeight:600 }}>
              OUR ADDRESS
            </Typography>
        <Typography variant="body1" >
              New York - 101010 Hudson
            </Typography>
       </Box>
        </Grid>
      
      </Grid>
      < Typography variant="body1" style={{ color:"black",marginTop:90 }}>
             Copyright  2022 All Rights Reserved
            </Typography>
    </Box>
  );
};

export default Footer;
