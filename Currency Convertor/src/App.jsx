import "./App.css";
import { Container, Grid, Typography } from "@mui/material";
import InputAmount from "./Components/InputAmount";
import SelectCountry from "./Components/SelectCountry";
import SwitchCountry from "./Components/SwitchCountry";
import { useEffect, useState } from "react";

function App() {
  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10%",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative",
  };

  const [Amount, setAmount] = useState(1);
  const [fromCur, setfromCur] = useState("USD");
  const [toCur, settoCur] = useState("INR");
  const [Converted, setConverted] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        if (Amount > 0) {
          setisLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${Amount}&from=${fromCur}&to=${toCur}`
          );
          const data = await res.json();
          setConverted(data.rates[toCur]);
          setisLoading(false);
        }
      }
      if (fromCur === toCur) return setConverted(Amount);
      convert();
    },
    [Amount, fromCur, toCur]
  );

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Currency Conversions up to date
      </Typography>
      <Grid container spacing={2}>
        <InputAmount
          amount={Amount}
          setAmount={setAmount}
          isLoading={isLoading}
        />
        <SelectCountry label="From" value={fromCur} setValue={setfromCur} />
        <SwitchCountry
          fromCur={fromCur}
          toCur={toCur}
          setfromCur={setfromCur}
          settoCur={settoCur}
        />
        <SelectCountry label="To" value={toCur} setValue={settoCur} />
      </Grid>
      {Amount > 0 ? (
        <Typography variant="h5" sx={{ marginTop: "2rem" }}>
          {Amount} {fromCur} is equal to {Converted} {toCur}
        </Typography>
      ) : (
        <Typography variant="h5" sx={{ marginTop: "2rem" }}>
          Please Enter some Amount
        </Typography>
      )}
    </Container>
  );
}

export default App;
