import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

const SelectCountry = ({ label, value, setValue }) => {
  return (
    <Grid item xs="12" md="3">
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"INR"}>INR</MenuItem>
          <MenuItem value={"AUD"}>AUD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectCountry;
