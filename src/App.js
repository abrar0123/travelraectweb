import React from "react";
import Header from "../src/components/Layout/header/topheader"
import SectionHeader from "../src/components/sectionHeader/sectionHeader";
import CountrySection from "./components/counriesSection/countrySection";
import About from "./components/Layout/about/about";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SectionHeader />
      <CountrySection />
      <About />
    </React.Fragment>
  );
}

export default App;
