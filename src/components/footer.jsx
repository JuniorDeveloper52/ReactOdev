import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footers">
      <footer
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <a
            href="https://github.com/JuniorDeveloper-25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              style={{ color: "black", marginRight: "10px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/talha-memi%C5%9F-092441215/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              style={{ color: "black", marginRight: "10px" }}
            />
          </a>
          <a
            href="https://twitter.com/developerjsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              style={{ color: "black", marginRight: "10px" }}
            />
          </a>
        </div>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Talha Memiş Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
