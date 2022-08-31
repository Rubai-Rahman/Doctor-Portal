import { Grid } from "@mui/material";
import React from "react";

const Doctor = ({ doctor }) => {
  const { name, image } = doctor;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      style={{ paddingRight: 15, borderRadius: 10 }}
    >
      {
        <img
          style={{
            width: "350px",
            borderRadius: 9,
          }}
          src={`data:image/jpeg;base64,${image}`}
          alt=""
        />
      }
      <h3>{name}</h3>
    </Grid>
  );
};

export default Doctor;
