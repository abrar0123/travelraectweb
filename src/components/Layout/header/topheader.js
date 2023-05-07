import React, { useEffect, useState } from "react";
import { TfiAgenda, TfiClose, TfiLayoutGrid3 } from "react-icons/tfi";
import FlexRow from "../../common/UI/Card/FlexRow";
import "./header.css";
import { SiYourtraveldottv } from "react-icons/si";
import PrimaryButton from "../../common/UI/button/PrimaryButton";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Topheader() {
  const [active, setactive] = useState("navBar");
  const [mywidth, setwidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setwidth(true);
      } else setwidth(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="navBarSection">
      <header className="header flex">
        {/* 1 */}

        <div className="flex">
          <SiYourtraveldottv size={25} color="red" />
          <p className="logo">Travel</p>
        </div>

        {/* 2 */}

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <PrimaryButton>BOOK NOW</PrimaryButton>
          </ul>
          {mywidth && (
            <div
              className="closeNavbar toggleNavbar"
              onClick={() => setactive("navBar removeNavBar")}
            >
              <AiFillCloseCircle size={25} className="icons" />
            </div>
          )}
        </div>

        {/* 3 */}
        {mywidth && (
          <div
            onClick={() => setactive("navBar activeNavBar")}
            className="toggleNavbar"
          >
            <TfiLayoutGrid3 size={22} />
          </div>
        )}
      </header>
    </section>
  );
}
