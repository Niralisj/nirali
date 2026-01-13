import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
//import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    return (
      <div id="intro">
        {/* <FractalTree /> */}

        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"nirali"}</span>
            {" here."}
          </span>
        </Typist>

        <FadeInSection>
          <div className="intro-subtitle">
            I build things and learn relentlessly.
          </div>

          <div className="intro-desc">
            I’m a Master of Computer Applications (MCA) student from India,
            passionate about software development, problem-solving, and building
            meaningful products. I enjoy learning by breaking things, fixing
            them, and growing one project at a time.
          </div>

          <a
            href="mailto:niralipatel@example.com"
            className="intro-contact"
          >
            <EmailRoundedIcon />
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
