import About from "../components/About";
import ContactUs from "../components/ConntectMe";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Service from "../components/Service";


function Home() {
  return (
    <>
      <Landing />
      <About />
      <Service />
      <Projects />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
