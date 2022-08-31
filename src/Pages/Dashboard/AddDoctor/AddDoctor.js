import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Input, TextField } from "@mui/material";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("https://boiling-bastion-80849.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Doctor added successfully");
          console.log("doctor added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h2
        style={{
          color: "#19D3AE",
        }}
      >
        Add A Doctor{" "}
      </h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Name"
          onChange={(e) => setName(e.target.value)}
          required
          variant="standard"
        />{" "}
        <br />
        <TextField
          sx={{ width: "50%", margin: 5 }}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="standard"
        />
        <br />
        <Input
          accept="image/*"
          type="file"
          sx={{ width: "50%", margin: 5 }}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
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
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
