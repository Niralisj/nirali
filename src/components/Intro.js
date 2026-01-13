import React from "react";
import "../styles/Intro.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import useTypewriter from "../useTypewriter";
import FractalTree from "./FractalTree";

function Intro() {
  const segments = [
    { text: "hi, ", className: "" },
    { text: "nirali", className: "intro-name" },
    { text: " here.", className: "" }
  ];

  const { currentSegment, currentChar, isComplete } = useTypewriter(segments, 90);

  return (
    <div id="intro">
      <FractalTree></FractalTree>
      <span className="intro-title">
        {segments.map((segment, idx) => {
          if (idx < currentSegment) {
            return (
              <span key={idx} className={segment.className}>
                {segment.text}
              </span>
            );
          }
          
          if (idx === currentSegment) {
            return (
              <span key={idx} className={segment.className}>
                {segment.text.slice(0, currentChar)}
              </span>
            );
          }
          
          return null;
        })}
        <span className={`cursor ${isComplete ? 'hidden' : ''}`}>|</span>
      </span>
      <FadeInSection>
        <div className="intro-subtitle">
          I build things and learn relentlessly.
        </div>

        <div className="intro-desc">
          
        </div>
        <a
          href="mailto:nir0313@gmail.com"
          className="intro-contact"
        >
          <EmailRoundedIcon />
          <span> Say hi!</span>
        </a>
      </FadeInSection>
    </div>
  );
}

export default Intro;
