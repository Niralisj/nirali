import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  render() {
    const intro = (
      <p>
        Hi, I’m <b>Nirali</b> <br/>
        I’m a <b>Master of Computer Applications (MCA)</b> student with a strong
        interest in <b>Software Development</b>. I enjoy building web
        applications, learning data structures & algorithms, and working on
        real-world projects that challenge me to grow.
      </p>
    );

    const outro = (
      <p>
        Outside of coding, I enjoy self-improvement content, fitness, creating
        aesthetic videos, and exploring new technologies. My long-term goal is
        to work as a <b>Software Engineer</b> at a top tech company and eventually
        move to <b>London</b>.
      </p>
    );

    const techStack = [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Python",
      "Java",
      "C / C++",
      "HTML & CSS"
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
