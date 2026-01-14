import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  render() {
    const intro = (
      <p>
        Hi, I’m <b>Nirali</b> <br/>
        I’m a software developer who enjoys building things from scratch and
       turning ideas into real, usable products. I’m interested in
     full-stack and cloud technologies. I’m fascinated by
      products that operate at scale,where small engineering decisions can
     impact millions of users. </p>
    );

    const outro = (
      <p>   
        Currently, I am undertaking a <b>Master’s in Computer Applications.</b>
       <p> Outside of work, I enjoy science-related topics,
         quiet creative work and creating youtube videos.
      </p>

      </p>
    );

    const techStack = [

      "Python",
      "JavaScript (ES6+)",
       "HTML & CSS",
      "TypeScript",
      "React.js",
      "Java",
      "Docker(project experience)"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ about me</span>
          </div>

          <div className="about-content">
            <div className="about-description">
              {intro}

              <p>Here are some technologies I’ve been working with:</p>

              <ul className="tech-stack">
                {techStack.map((tech, i) => (
                  <FadeInSection key={tech} delay={`${i + 1}00ms`}>
                    <li>{tech}</li>
                  </FadeInSection>
                ))}
              </ul>

              {outro}
            </div>

            <div className="about-image">
              <img alt="Nirali profile" src="/assets/me2.jpg" />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
