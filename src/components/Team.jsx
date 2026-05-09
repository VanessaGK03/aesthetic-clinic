import "./Team.css";

import { useEffect } from "react";

import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";

function Team({ openBooking }) {
  useEffect(() => {
    const cards = document.querySelectorAll(".team-card");

    //browser API for scroll animations
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
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Aesthetic Specialist",
      description:
        "Dr. Sarah Johnson is a highly experienced aesthetic specialist with more than 10 years of practice in non-surgical facial rejuvenation. She specializes in advanced Botox treatments, dermal fillers, and personalized anti-aging solutions designed to enhance natural beauty while maintaining facial harmony. Dr. Johnson believes in a patient-focused approach, carefully analyzing each individual’s facial structure and skin condition before recommending the most suitable treatment plan. Her goal is to deliver subtle, natural-looking results that help patients feel confident and refreshed.",
      image: doctor1,
    },
    {
      name: "Dr. Emily Carter",
      role: "Dermatologist",
      description:
        "Dr. Emily Carter is a board-certified dermatologist with extensive experience in medical and cosmetic dermatology. She focuses on skin health, laser therapies, chemical peels, and advanced skincare treatments aimed at improving skin texture, tone, and overall appearance. Dr. Carter combines the latest medical technologies with a personalized treatment approach to address each patient’s unique skin concerns. Her dedication to patient care ensures safe, effective, and long-lasting results.",
      image: doctor2,
    },
    {
      name: "Dr. Michael Brown",
      role: "Laser Specialist",
      description:
        "Dr. Michael Brown specializes in modern laser technologies and non-invasive skin rejuvenation procedures. With a strong background in aesthetic medicine, he focuses on treatments such as laser hair removal, skin tightening, and advanced skin resurfacing techniques. Dr. Brown is passionate about helping patients achieve smoother, healthier, and more youthful-looking skin using innovative and safe procedures. His precise approach and attention to detail ensure high-quality results tailored to each patient’s needs.",
      image: doctor3,
    },
  ];

  return (
    <section id="team" className="team">
      <h2 className="section-title section-title-center">OUR EXPERTS</h2>

      {teamMembers.map((member, index) => (
        <div className="team-card" key={index}>
          <div className="team-info">
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>

            <button
              className="btn btn-primary"
              onClick={() => openBooking(member.name)}
            >
              Book Consultation
            </button>
          </div>

          <div className="team-image">
            <img src={member.image} alt={member.name} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Team;
