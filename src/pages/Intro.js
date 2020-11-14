import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="intro-page">
      <section className="cd-intro">
        <div className="cd-intro-content mask">
          <h1 data-content="Smart Tasks Organizer">
            <span></span>
          </h1>
          <div className="action-wrapper">
            <p>
              <Link to="/home" className="cd-btn main-action">
                Get started
              </Link>
              <Link to="/about" className="cd-btn">
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
