import React, { useEffect, useState } from "react";
import Card from "../common/UI/Card/card";
import FlexRow from "../common/UI/Card/FlexRow";

import "./countrySection.css";
import CountriesList from "./countriesList";
export default function CountrySection() {
  const [countries, setcountries] = useState([]);

  const CountriesData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=flags"
    );
    const data = await response.json();
    const mdata = data.slice(1, 10);
    setcountries(mdata);
  };

  useEffect(() => {
    CountriesData();
  }, []);

  console.log("res__", countries);

  return (
    <Card className="CountrySection">
      <h1>
        Most Visited{" "}
        <span style={{ borderBottom: "3px solid red" }}>destinations </span>
      </h1>
      {/* <FlexRow> */}
      <CountriesList countries={countries} />
      {/* </FlexRow> */}
    </Card>
  );
}
