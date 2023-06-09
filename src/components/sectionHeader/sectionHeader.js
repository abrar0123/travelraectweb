import React from "react";
import Container from "../common/UI/Card/Container";
import FlexRow from "../common/UI/Card/FlexRow";
import Victoria from "../../assets/videos/v2.mp4";
import Card from "../common/UI/Card/card";
import PrimaryButton from "../common/UI/button/PrimaryButton";
import "./sectionHeader.css";
import { BiCurrentLocation } from "react-icons/bi";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineOrderedList,
  AiOutlineClockCircle,
} from "react-icons/ai";

export default function sectionHeader() {
  return (
    <Card className="videoContainer">
      <video autoPlay muted loop>
        <source src={Victoria} type="video/mp4" />
      </video>

      {/* insidee content of video  */}

      <Card className="videoContent">
        <p className="videop">Our Packages</p>
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <h1>
            Search Your{" "}
            <span style={{ borderBottom: "4px solid cyan " }}>Holiday</span>
          </h1>
          <PrimaryButton style={{ padding: "10px 20px " }}>
            More Filter
          </PrimaryButton>
        </div>

        {/* centered white  card  */}
        <Card className="primaryCardContainer">
          <div className="flex inputflex">
            <Container>
              <p>Search your destination</p>
              <div className="inputContainer">
                <input type="text" placeholder="Country Name" />
                <BiCurrentLocation size={20} style={{ marginRight: "10px" }} />
              </div>
            </Container>
            <Container>
              <p>Select your Date</p>
              <div className="inputContainer">
                <input type="date" placeholder="Country date" />
              </div>
            </Container>
            <Container>
              <FlexRow>
                <p>Max-price:</p>
                <p>$ 2000</p>
              </FlexRow>
              <div className="inputContainer">
                <input type="range" placeholder="Country date" />
              </div>
            </Container>
          </div>
        </Card>

        {/* icons styles */}
        <Card>
          <FlexRow style={{ marginTop: "20px" }}>
            <FlexRow>
              <AiOutlineFacebook size={25} color="cyan" />
              <AiOutlineTwitter size={25} color="cyan" />
              <AiOutlineInstagram size={25} color="cyan" />
            </FlexRow>
            <FlexRow>
              <AiOutlineOrderedList size={25} color="cyan" />
              <AiOutlineClockCircle size={25} color="cyan" />
            </FlexRow>
          </FlexRow>
        </Card>
      </Card>
    </Card>
  );
}
