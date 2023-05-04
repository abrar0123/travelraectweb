import React from "react";
import Container from "../common/UI/Card/Container";
import FlexRow from "../common/UI/Card/FlexRow";
import Victoria from "../../assets/videos/NewVictoria.mp4";
import Card from "../common/UI/Card/card";
import "./sectionHeader.css";

export default function sectionHeader() {
  return (
    <Container className="videoContainer">
      <video autoPlay muted loop>
        <source src={Victoria} type="video/mp4" />
      </video>
      <Card className="videoCoontent">my content</Card>
    </Container>
  );
}
