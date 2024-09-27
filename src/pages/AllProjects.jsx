import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../components/Data";

function AllProjects() {
  const [mode, setMode] = useState("sun");
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="return-icon">
        <Link to="/Portfolio">
          <BsFillArrowLeftCircleFill className="icon-project" />
        </Link>
        <FaSun
          className={"icon w-icon " + mode}
          onClick={() => {
            setMode("moon-mode");
            document.documentElement.classList.toggle("white-mode");
          }}
        />
        <FaMoon
          className={"icon moon " + mode}
          onClick={() => {
            setMode("sun");
            document.documentElement.classList.toggle("white-mode");
          }}
        />
      </div>
      <section className="Projects-section">
        <div className="container">
          <h2 className="sub-title">My Works</h2>
          <div className="row row-gap-5 gap-lg-4 justify-content-lg-center justify-content-md-between mt-5">
            {projects.map((project) => (
              <div
                className="card col-md-5 col-lg-3"
                key={project.id}
                data-aos="flip-left"
              >
                <a href={project.site} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.name}
                  />
                </a>
                <div className="card-body">
                  <h6 className="card-title">{project.category}</h6>
                  <p className="card-text">{project.name}</p>
                  <a
                    href={project.site}
                    target="_blank"
                    className="view-brn btn"
                    rel="noreferrer"
                  >
                    view website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProjects;
