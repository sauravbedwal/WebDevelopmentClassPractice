import React from "react";
import HotelCard from "../components/HotelCard";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
        <Grid item md={4}>
          <HotelCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
