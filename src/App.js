import React from "react";
import Header from "../src/components/header/topheader";
import SectionHeader from "../src/components/sectionHeader/sectionHeader";
import CountrySection from "./components/counriesSection/countrySection";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SectionHeader />
      <CountrySection />
    </React.Fragment>
  );
}

export default App;
