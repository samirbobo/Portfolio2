import { BsCodeSlash } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaDesktop } from "react-icons/fa";

function Service() {
  return (
    <div className="services" id="services">
      <div className="container">
        <h2 className="sub-title">my services</h2>
        <div className="services-list">
          <div className="box" data-aos="fade-up">
            <BsCodeSlash className="icon" />
            <h2>frontEnd</h2>
            <p>
              I'm a front-end developer who creates responsive user-friendly
              designs.{" "}
            </p>
          </div>
          <div className="box" data-aos="fade-up">
            <AiFillThunderbolt className="icon" />
            <h2>CleanCode</h2>
            <p>
              I can write clean code to make the program faster and more
              readable
            </p>
          </div>
          <div className="box" data-aos="fade-up">
            <FaDesktop className="icon" />
            <h2 className="services-title">Responsive layout</h2>
            <p>
              Created accessible responsive and functional user interfaces to
              allow visitors to interact with a website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
