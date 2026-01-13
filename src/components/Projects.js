import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  render() {
    const spotlightProjects = {
      "No Man's Land": {
        title: "no man's land",
        desc:
          "A third-person survival-mode game where you battle against time and space to return to Earth.",
        techStack: "C# (UNITY)",
        link: "https://github.com/slakh96/no-mans-land",
        open: "https://gazijarin.itch.io/no-mans-land",
        image: "/assets/nomansland.png"
      },
      Truth: {
        title: "truth",
        desc:
          "A three.js simulation of the planet system revolving around a monolith.",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/gazijarin/truth",
        open: "https://gazijarin.github.io/Truth/",
        image: "/assets/truth.png"
      }
    };

    const projects = {
      "TDSB Homework Management Interface": {
        desc:
          "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
        techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
        link: "https://github.com/gazijarin/TDSBHomeworkManagement",
        open: "https://tdsb-app.herokuapp.com/"
      },
      "Adam A.I.": {
        desc:
          "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/gazijarin/adamai",
        open: "https://gazijarin.github.io/AdamAI/"
      }
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">/ pet projects</span>
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
