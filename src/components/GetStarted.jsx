import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/ctg4.png";
import imgDetail2 from "../assets/tennis5.jpg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"CTG Open"} textAlign={"start"} />
          <CustomTypography>
            Welcome to the CTG Tennis League's official website, your gateway to
            the exciting world of competitive tennis in our vibrant community.
            Here, we serve up the latest news, match schedules, player profiles,
            and all the information you need to stay connected with our tennis
            community. Whether you're a seasoned pro or a beginner looking to
            join the action, our league offers a range of divisions and
            opportunities for players of all skill levels. Join us as we
            celebrate the love of the game, foster sportsmanship, and bring
            together tennis enthusiasts from all walks of life. Explore our
            website and get ready to ace your tennis journey with CTG!
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"Community Level Tennis"} textAlign={"start"} />
          <CustomTypography>
            Community-level tennis league tournaments bring together local
            tennis enthusiasts for an engaging and spirited competition that
            goes beyond the court. These tournaments serve as a hub for
            fostering a sense of community and camaraderie among players of all
            ages and skill levels. They provide an excellent platform for
            neighbors and friends to connect, encourage each other's passion for
            tennis, and develop lifelong friendships. The beauty of
            community-level tennis leagues is their inclusivity, allowing
            players of various abilities to participate, learn, and grow
            together. These tournaments often feature exciting match-ups,
            friendly rivalries, and enthusiastic spectators, creating an
            atmosphere of excitement and unity that transcends the boundaries of
            the tennis court. Whether you're aiming for the championship or
            simply looking to enjoy some quality time on the court,
            community-level tennis leagues offer an enriching experience for
            everyone involved.
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
