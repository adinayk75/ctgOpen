import React, { Component } from "react";
import classifiedsData from "../data/classifiedsData";
import { Button, Stack } from "@mui/material";
import Title from "../components/Title";
import { Link } from "react-router-dom";

class Classifieds extends Component {
  render() {
    return (
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 10,
          mx: 6,
        }}
      >
        <Title text={"Coming Soon...."} textAlign={"center"} />
      </Stack>
    );
  }
}

export default Classifieds;
