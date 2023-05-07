import React from "react";
import Card from "../common/UI/Card/card";
import FlexRow from "../common/UI/Card/FlexRow";
import Container from "../common/UI/Card/Container";

export default function countriesList({ countries }) {
  return (
    <div className="countriesFlexContainar">
      {countries &&
        countries.map((item) => {
          const countryName = item.flags.alt.slice(0, 22);
          return (
            <Card className="countriesListContainer">
              <Container className="imageContainer">
                <img src={item.flags.png} />
              </Container>

              <Container style={{ padding: "10px" }}>
                <h3 style={{ margin: "15px 0px" }}>{countryName}</h3>
                <p>{item.flags.alt}</p>
              </Container>
            </Card>
          );
        })}
    </div>
  );
}
