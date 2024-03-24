import { Button, Grid } from "@mui/material";
import React from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const SwitchCountry = ({ settoCur, setfromCur, toCur, fromCur }) => {
  function handleSwitch() {
    setfromCur(toCur);
    settoCur(fromCur);
  }
  return (
    <Grid item xs={12} md="auto">
      <Button sx={{ borderRadius: 1, height: "100%" }} onClick={handleSwitch}>
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};

export default SwitchCountry;
