import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import cv from "../images/Samir-Abdelrazek-Samir.pdf";

function ContactUs() {
  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <h2 className="sub-title">contact me</h2>
        <div className="mt-5">
          <div className="contact-links">
            <a
              className="more-btn"
              href="mailto:samirelanany555@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              samirelanany555@gmail.com
            </a>
            <a
              className="more-btn"
              href="https://wa.me/+201211672995"
              target="_blank"
              rel="noreferrer"
            >
              +201211672995
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/samirbobo"
              target="_blank"
              rel="noreferrer"
              className="git-hub"
            >
              <ImGithub />
            </a>
            <a
              href="https:www.linkedin.com/in/samir-elanany"
              target="_blank"
              rel="noreferrer"
              className="linked"
            >
              <BsLinkedin />
            </a>
          </div>
          <a href={cv} download className="more-btn btn1">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
