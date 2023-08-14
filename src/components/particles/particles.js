import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./particles-config.json";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div style={{ position: "relative", zIndex: -1 }}>
      <Particles
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </div>
  );
};

export default ParticlesBackground;
