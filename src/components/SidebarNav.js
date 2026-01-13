import React from "react";
import { Sidenav } from "rsuite";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../styles/SidebarNav.css";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

class SidebarNav extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    const { expanded, activeKey } = this.state;

    const links = [
      { href: "#intro", label: "/home" },
      { href: "#about", label: "/about" },
      { href: "#experience", label: "/experience" },
      { href: "#projects", label: "/software-creations" }
    ];

    return (
      <div className="sidebar-nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            activeKey={activeKey}
            onSelect={this.handleSelect}
            appearance="subtle"
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                  <FadeInSection key={link.href} delay={`${i + 1}00ms`}>
                    <div>
                      <a href={link.href}>{link.label}</a>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        )}

        <div className="sidebar-logos">
          <a href="mailto:nirr0313@gmail.com">
            <EmailRoundedIcon style={{ fontSize: 20 }} />
          </a>
          <a href="https://github.com/your-github">
            <GitHubIcon style={{ fontSize: 19 }} />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin/">
            <LinkedInIcon style={{ fontSize: 21 }} />
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;
