import samir from "../images/samir.jpg";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiJavascript, SiBootstrap } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { useState } from "react";

function About() {
  const [toggle, toggleAvtive] = useState(1);
  const toggleTab = (index) => {
    toggleAvtive(index);
  };

  return (
    <section className="about-section container" id="about">
      <div className="row">
        <div className="col-md-5" data-aos="fade-right">
          <img className="about-img" src={samir} alt="aboutImg" />
        </div>
        <div className="col-md-7" data-aos="fade-left">
          <h2 className="sub-title">about me</h2>
          <p className="info">
            I am an experienced front-end developer with a strong command of
            HTML, CSS, and JavaScript. I also have expertise in React and Git. I
            have a Bachelor's degree in Computer Science and a track record of
            delivering high-quality projects. I am dedicated to staying updated
            with the latest technologies and frameworks to improve my innovation
            and efficiency. My previous accomplishments include working on
            projects such as road improvement sites and company management. I am
            eager to contribute my skills to a dynamic team and continue
            expanding my knowledge in computational sciences.
          </p>
          <div className="d-flex my-4">
            <p
              className={toggle === 1 ? "tab-links active-link" : "tab-links"}
              onClick={() => {
                toggleTab(1);
              }}
            >
              skills
            </p>
            <p
              className={toggle === 2 ? "tab-links active-link" : "tab-links"}
              onClick={() => {
                toggleTab(2);
              }}
            >
              education
            </p>
          </div>
          <div
            className={
              toggle === 1
                ? "tab-contents tab-content active-tab"
                : "tab-contents tab-content"
            }
          >
            <ul>
              <li className="skills-bar skills-bar1">
                <div className="p p1"></div>
                <AiFillHtml5 className="icon" />
                HTML
                <span className="percent percent1">90%</span>
              </li>
              <li className="skills-bar skills-bar2">
                <div className="p p2"></div>
                <SiCss3 className="icon" /> CSS
                <span className="percent percent2">85%</span>
              </li>
              <li className="skills-bar skills-bar3">
                <div className="p p3"></div>
                <SiJavascript className="icon" /> JavaScript
                <span className="percent percent3">85%</span>
              </li>
              <li className="skills-bar skills-bar4">
                <div className="p p4"></div>
                <SiBootstrap className="icon" /> BootStrap
                <span className="percent percent4">90%</span>
              </li>
              <li className="skills-bar skills-bar5">
                <div className="p p5"></div>
                <FaReact className="icon" />
                React
                <span className="percent percent5">85%</span>
              </li>
            </ul>
          </div>
          <div
            className={toggle === 2 ? "tab-content active-tab" : "tab-content"}
          >
            <ul>
              <li>
                <span>Computer science</span>
                <br />
                I obtained a bachelor's degree in computer science from,
                <br />
                the Faculty of Science, at Benha University
              </li>
              <li>
                <span>level</span>
                <br />A graduate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
