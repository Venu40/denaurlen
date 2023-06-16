import React from "react";
import { Container, Typography, TextField, Stack, Button } from "@mui/material";
const Login = () => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleuserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handleSubmit = async () => {
    const data = {
      name: name,
      username: username,
      grossCoins: 2100,
      netCoins: 1100,
    };
    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));

        window.location.href = "/valuation";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width={300}
      gap={4}
      margin="auto"
    >
      <Stack alignSelf="flex-start" marginTop={5}>
        <Typography variant="h5">Enter the credentials</Typography>
      </Stack>
      <Stack gap={2} width={300}>
        <TextField
          size="small"
          label="Enter your name"
          fullWidth
          onChange={handleNameChange}
        ></TextField>
        <TextField
          size="small"
          label="Enter your username"
          onChange={handleuserNameChange}
        ></TextField>
      </Stack>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#4B0082" }}
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default Login;
