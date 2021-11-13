
import "./particleBackground.scss";
import Particles from "react-particles-js";
import particlesConfig from "./particle-config";

function ParticleBackground() {
  return (
    <Particles width="20vh" params={particlesConfig}></Particles>
  );
}

export default ParticleBackground;
