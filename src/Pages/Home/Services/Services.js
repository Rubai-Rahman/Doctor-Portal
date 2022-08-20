import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis eligendi veritatis, labore in nisi.",
    img: fluoride,
  },
  {
    name: "Cavity Treatment",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis eligendi veritatis, labore in nisi.",
    img: cavity,
  },
  {
    name: "Teeth whitening",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis eligendi veritatis, labore in nisi.",
    img: whitening,
  },
];
const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 8 }}>
      <Container>
        <Typography
          style={{
            fontSize: "20",
            fontWeight: 700,
            color: "#19D3AE",
            margin: 5,
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            fontWeight: 400,
            color: "#3A4256",
            marginBottom: 40,
          }}
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
