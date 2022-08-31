import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://boiling-bastion-80849.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          type="email"
          label="Email"
          id="standard-basic"
          onBlur={handleOnBlur}
          variant="standard"
          sx={{ width: "50%"}}
        ></TextField>
        <Button
          variant="contained"
          type="submit"
          style={{
            margin: 6,

            backgroundColor: "#19D3AE",
            backgroundImage:
              "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
          }}
        >
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
