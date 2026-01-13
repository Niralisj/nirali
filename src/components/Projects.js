import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  render() {
    const spotlightProjects = {
      "DAIS": {
        title: "dais",
        desc: "A virtual skincare companion that analyzes your skin type and provides personalized product recommendations and skincare tips powered by AI.",
        techStack: "PYTHON, MACHINE LEARNING",
        link: "https://github.com/Niralisj/DAIS",
        open: "",
        image: "/img/dais.png"
      },
      "Kiki AI": {
        title: "kiki ai",
        desc: "An AI-powered Chaos Engineering trainer for Kubernetes that teaches resilience by intelligently breaking things and helping teams learn from failures.",
        techStack: "TYPESCRIPT, KUBERNETES",
        link: "https://github.com/Niralisj/Kiki-ai",
        open: "",
        image: "/img/kiki.png"
      }
    };

    const projects = {
      "DAIS": {
        desc: "A virtual skincare companion that analyzes your skin type and provides personalized product recommendations and skincare tips powered by AI.",
        techStack: "Python, Machine Learning",
        link: "https://github.com/Niralisj/DAIS",
        open: ""
      },
      "Kiki AI": {
        desc: "An AI-powered Chaos Engineering trainer for Kubernetes that teaches resilience by intelligently breaking things and helping teams learn from failures.",
        techStack: "TypeScript, Kubernetes",
        link: "https://github.com/Niralisj/Kiki-ai",
        open: ""
      },
      "Mikrokosmos": {
        desc: "A stunning 3D solar system visualization built with Three.js, featuring realistic planetary orbits and interactive navigation.",
        techStack: "JavaScript, Three.js",
        link: "https://github.com/Niralisj/Mikrokosmos",
        open: ""
      },
      "Smart Bus Optimization": {
        desc: "A hackathon-winning prototype for urban transit optimization using real-time scheduling, predictive analytics, and live monitoring to improve bus efficiency.",
        techStack: "Python, Data Analytics",
        link: "https://github.com/Niralisj/smart-bus-optimization",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">projects</span>
        </div>

        <Carousel>
          {Object.keys(spotlightProjects).map((key) => (
            <Carousel.Item key={key}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key].image}
                alt={key}
              />

              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key].title}</h3>
                  <p>{spotlightProjects[key].desc}</p>
                  <p className="techStack">
                    {spotlightProjects[key].techStack}
                  </p>

                  <ExternalLinks
                    githubLink={spotlightProjects[key].link}
                    openLink={spotlightProjects[key].open}
                  />
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection key={key} delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                    </div>

                    <ExternalLinks
                      githubLink={projects[key].link}
                      openLink={projects[key].open}
                    />
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key].desc}</div>
                  <div className="card-tech">{projects[key].techStack}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;