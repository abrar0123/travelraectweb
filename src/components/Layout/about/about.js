import React from "react";
import Container from "../../common/UI/Card/Container";
import FlexRow from "../../common/UI/Card/FlexRow";
import Victoria from "../../../assets/videos/NewVictoria.mp4";
import Card from "../../common/UI/Card/card";
import PrimaryButton from "../../common/UI/button/PrimaryButton";
import "./about.css";
import { BiCurrentLocation } from "react-icons/bi";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineOrderedList,
  AiOutlineClockCircle,
  AiOutlineAlibaba,
  AiOutlineAmazon,
  AiOutlineCalculator,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function about() {
  return (
    <Container className="aboutvideoContainer">
      <video autoPlay muted loop>
        <source src={Victoria} type="video/mp4" />
      </video>
      <Card className="videoContent1">
        <FlexRow style={{ justifyContent: "center", alignItems: "center" }}>
          <h2>Travel with Us</h2>

          <div style={{}} className="inputContainer1">
            <input type="text" placeholder="Enter Email" />
            <BiCurrentLocation size={20} style={{ marginRight: "10px" }} />
          </div>
          <PrimaryButton style={{ padding: "10px 20px " }}>
            Send Email
          </PrimaryButton>
        </FlexRow>

        <Card className="primaryCardContainer">
          <FlexRow
            style={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            {/* 1st container */}

            <Container style={{ width: "40%" }}>
              <h2 style={{ marginBottom: "10px" }}>Travel</h2>
              <p>
                Vitamin D is primarily obtained through exposure to sunlight,
                and there are few natural food sources that are rich in vitamin
                D. However, some common Pakistani foods that contain vitamin D
                include:
                <p>
                  Fish: Fatty fish like salmon, mackerel, and tuna are good
                  sources of vitamin D.
                </p>
              </p>
              <FlexRow
                style={{ marginTop: "20px", justifyContent: "space-between" }}
              >
                <AiOutlineFacebook size={25} />
                <AiOutlineTwitter size={25} />
                <AiOutlineInstagram size={25} />
                <AiOutlineAlibaba size={25} />
                <AiOutlineAmazon size={25} />
                <AiOutlineLinkedin size={25} />
                <AiOutlineWhatsApp size={25} />
              </FlexRow>
            </Container>

            {/* 2nd container */}

            <Container>
              <h3 className="bottomh2">Our Agency</h3>
              <p className="c2p"> {"> "}Services</p>
              <p className="c2p"> {"> "}Insurance</p>
              <p className="c2p"> {"> "}Agency</p>
              <p className="c2p"> {"> "}Tourism</p>
              <p className="c2p"> {"> "}Payment</p>
            </Container>

            {/* 3rd container */}

            <Container>
              <h3 className="bottomh2">Partners</h3>
              <p className="c2p"> {"> "}Bookinng</p>
              <p className="c2p"> {"> "}RentalCar</p>
              <p className="c2p"> {"> "}HostalWorld</p>
              <p className="c2p"> {"> "}Tourism</p>
              <p className="c2p"> {"> "}TripAdviser</p>
            </Container>

            {/* 4th container */}

            <Container>
              <h3 className="bottomh2">Last Minute</h3>
              <p className="c2p"> {"> "}London</p>
              <p className="c2p"> {"> "}Calefornia</p>
              <p className="c2p"> {"> "}Indonesia</p>
              <p className="c2p"> {"> "}Europe</p>
              <p className="c2p"> {"> "}Dubai</p>
            </Container>
          </FlexRow>
        </Card>
      </Card>
    </Container>
  );
}
