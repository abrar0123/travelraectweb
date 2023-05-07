import React from "react";
import Card from "../../common/UI/Card/card";
import FlexRow from "../../common/UI/Card/FlexRow";
import "./header.css";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import PrimaryButton from "../../common/UI/button/PrimaryButton";
export default function topheader() {
  return (
    <header className="topheader">
      <FlexRow style={{ justifyContent: "space-between" }}>
        <FlexRow>
          <AiOutlineAppstoreAdd size={25} color="red" />
          <p>Travel</p>
        </FlexRow>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <PrimaryButton style={{ padding: "10px 20px" }}>
              Book Now
            </PrimaryButton>
          </ul>
        </nav>
      </FlexRow>
    </header>
  );
}
