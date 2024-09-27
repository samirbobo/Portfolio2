import { Typewriter } from "react-simple-typewriter";
import AppNavbar from "./AppNavbar";

function Landing() {
  return (
    <header>
      <AppNavbar />
      <div className="banner" id="home">
        <div className="container">
          <h1>
            Hi, I'm{" "}
            <span>
              <Typewriter
                words={["", " Samir,"]}
                typeSpeed={150}
                delaySpeed={200}
                loop={1}
              />
              <br />
            </span>
            <Typewriter
              words={["", "a Frontend Developer."]}
              typeSpeed={150}
              delaySpeed={1000}
              loop={1}
            />
            <span></span>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Landing;