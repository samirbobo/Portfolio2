import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProjects from "./pages/AllProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    // Animate on scroll library (AOS)
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/Portfolio">
          <Route index element={<Home />} />
          <Route path="all-projects" element={<AllProjects />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
