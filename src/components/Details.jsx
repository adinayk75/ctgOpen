import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";

const Details = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      phone: data.get("phone"),
    });
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
      <Title text={"Get In Touch"} textAlign={"center"} />

      {
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
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
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="phone"
            id="phone"
            autoComplete="current-phone"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="Message"
            type="message"
            id="message"
            className="form-control"
            multiline
            rows={7}
            placeholder="Message"
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
            send
          </Button>
        </Box>
      }
    </Stack>
  );
};

export default Details;
