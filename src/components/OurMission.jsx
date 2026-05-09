import { useEffect } from "react";
import "./OurMission.css";

import missionImg from "../assets/our-mission.jpg";

function OurMission() {

  useEffect(() => {
    const section = document.querySelector(".mission-content");

    //Browser API for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

  }, []);

  return (
    <section id="mission" className="mission">

      <div className="mission-container">

        <div className="mission-image">
          <img src={missionImg} alt="Our Mission" />
        </div>

        <div className="mission-content">
          <h2 className="section-title section-title-left">OUR MISSION</h2>

          <p>
            Our mission is to enhance natural beauty through safe, innovative,
            and personalized aesthetic treatments. We are dedicated to providing
            the highest level of care using modern technologies and a patient-centered approach.
          </p>

          <p>
            We believe that confidence starts with feeling comfortable in your own skin.
            That is why we focus on subtle, natural results that highlight your unique features
            while maintaining harmony and balance.
          </p>

        </div>

      </div>

    </section>
  );
}

export default OurMission;