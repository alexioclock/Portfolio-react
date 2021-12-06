
import "./particleBackground.scss";
import Particles from "react-particles-js";
import particlesConfig from "./particle-config";


function ParticleBackground() {

  return (
    <Particles height="20em" width="100vw" params={particlesConfig}></Particles>
  );
}

export default ParticleBackground;
