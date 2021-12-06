import "./App.scss";
import Contact from "./Contact";
import Home from "./Home";
import Presentation from "./Presentation";
import Technologies from "./Technologies";
import SideBar from "./SideBar";
import { useState } from "react";
import Darkmode from "./Darkmode";
import Timeline from "./Timeline";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import Parcours from "./Parcours";
import ProgressBar from "./ProgressBar";



function App() {

  const [lightTheme, setLightTheme] = useState(false);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };


  return (
    <div className="app">

        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <Home lightTheme={lightTheme}/>
      <Darkmode toggleTheme={toggleTheme} lightTheme={lightTheme} />
      <Presentation path="/presentation"/>
      <Parcours />
      <Technologies />
      <Timeline />
      <Contact />
      <Footer />
      <ProgressBar />
    </div>
  );
}


export default App;
