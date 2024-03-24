import { Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";

const InputAmount = ({ amount, setAmount, isLoading }) => {
  function handleAmount(newValue) {
    if (newValue >= 0) {
      setAmount(newValue);
    }
  }
  return (
    <Grid item xs="12" md>
      <TextField
        label="Amount"
        fullWidth
        readOnly={isLoading}
        onChange={(e) => handleAmount(e.target.value)}
        value={amount}
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">💴</InputAdornment>,
        }}
      ></TextField>
    </Grid>
  );
};

export default InputAmount;
