import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "../components/Title";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(""); // 'success', 'failure'

  const handleLogin = async (e) => {
    e.preventDefault();
    // Send a POST request to the Spring Boot backend with username and password
    const response = await fetch(
      "http://localhost:8080/ctgopenapi/v1/member/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    if (response.ok) {
      // Handle successful login
      console.log("Login successful");
      navigate("/leagues");
    } else {
      // Handle unsuccessful login
      console.error("Invalid credentials");
      setLoginStatus("failure");
    }
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      {loginStatus === "failure" && (
        <p style={{ color: "red" }}>
          Login failed. Please check your credentials.
        </p>
      )}

      <Title text={"Login"} textAlign={"center"} />
      {
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            mt: 1,
            py: 2,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            size="medium"
            sx={{
              fontSize: "0.9rem",
              textTransform: "capitalize",
              py: 2,
              mt: 3,
              mb: 2,
              borderRadius: 0,
              backgroundColor: "#14192d",
              "&:hover": {
                backgroundColor: "#1e2a5a",
              },
            }}
          >
            Login
          </Button>
        </Box>
      }
    </Stack>
  );
};

export default Login;
