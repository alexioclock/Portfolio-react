
import "./particleBackground.scss";
import Particles from "react-particles-js";
import particlesConfig from "./particle-config";

function ParticleBackground() {
  return (
    <Particles width="100vw" height="20vw" params={particlesConfig}></Particles>
  );
}

export default ParticleBackground;
