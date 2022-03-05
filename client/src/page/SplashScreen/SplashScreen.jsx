import React from "react";
import { animated, useSpring, config } from "@react-spring/web";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "react-animated-progress-bar";

const SplashScreen = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    // reset: true,
    delay: 100,
    config: config.molasses,
    // onRest: () => set(!flip),
  });
  return (
    <>
      <div className="SplashScreen">
        <animated.h1 style={props}>Fadelink</animated.h1>
        <ProgressBar width="230" trackWidth="13" percentage="100" />

      </div>
    </>
  );
};

export default SplashScreen;
