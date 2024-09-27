import { GiHamburgerMenu } from "react-icons/gi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import ButtonTop from "./ButtonUp";
import { BsWhatsapp } from "react-icons/bs";

function AppNavbar() {
  const [top, setTop] = useState("");
  const [showNav, setshowNav] = useState("");
  const [navBackground, setnavBackground] = useState("");
  const [mode, setMode] = useState("sun");
  window.onscroll = () => {
    if (window.scrollY > 45) {
      setnavBackground("fixed-background");
    } else {
      setnavBackground("");
    }
    if (window.scrollY > 400) {
      setTop("show-btn-top");
    } else {
      setTop("");
    }
  };
  function scrolling(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    const postion = section.offsetTop - 85; // 85 = heigth navbar
    window.scrollTo({
      left: 0,
      top: postion,
    });
    setshowNav("");
  }
  return (
    <nav id="nav" className={navBackground}>
      <div className="nav-center container">
        <div className={"logo " + navBackground}>
          <span>S</span>amir
        </div>
        <div className={"links-container " + showNav}>
          <ul className={"links " + navBackground}>
            <li>
              <a
                href="#home"
                className="scroll-link active"
                onClick={(e) => scrolling(e)}
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="scroll-link"
                onClick={(e) => scrolling(e)}
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="scroll-link"
                onClick={(e) => scrolling(e)}
              >
                services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="scroll-link"
                onClick={(e) => scrolling(e)}
              >
                portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="scroll-link"
                onClick={(e) => scrolling(e)}
              >
                contact
              </a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <FaSun
            className={"icon w-icon " + mode}
            onClick={(e) => {
              setMode("moon-mode");
              document.documentElement.classList.toggle("white-mode");
            }}
          />
          <FaMoon
            className={"icon moon " + mode}
            onClick={(e) => {
              setMode("sun");
              document.documentElement.classList.toggle("white-mode");
            }}
          />
          <button
            className={"nav-toggle " + navBackground}
            onClick={(e) => {
              if (e.currentTarget.classList.contains("show")) {
                e.currentTarget.classList.remove("show");
                setshowNav("");
              } else {
                e.currentTarget.classList.add("show");
                console.log(e.currentTarget);
                setshowNav("show");
              }
            }}
          >
            <GiHamburgerMenu className="icon" />
          </button>
        </div>
      </div>
      <ButtonTop top={top} />
      <div id="whatsapp">
        <a
          href="https://wa.me/+201211672995"
          target="_blank"
          rel="noreferrer"
          className="whats"
        >
          <BsWhatsapp />
        </a>
      </div>
    </nav>
  );
}
export default AppNavbar;
