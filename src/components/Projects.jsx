import { Link } from "react-router-dom";
import { homeProjects } from "./Data";

function Projects() {
  return (
    <section className="Projects-section" id="portfolio">
      <div className="container">
        <h2 className="sub-title">My Works</h2>
        <div className="row gap-4 justify-content-lg-center justify-content-md-between mt-5">
          {homeProjects.map((project) => (
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
        <Link to="all-projects" className="more-btn">
          see more
        </Link>
      </div>
    </section>
  );
}
export default Projects;
