import { useState, useEffect} from "react";
import "./Procedures.css";

import botox from "../assets/botox.png";
import filler from "../assets/lip-filler.jpg";
import mesotherapy from "../assets/mesotherapy.jpg";
import laser from "../assets/laser.jpg";
import tightening from "../assets/tightening.jpg";
import hydrafacial from "../assets/hydrafacial.png";
import cleaning from "../assets/face-cleaning.jpg";

function Procedures({ openProcedure }) {
  const procedures = [
    {
      name: "Botox",
      description: "Smooths wrinkles and restores a youthful look",
      doctor: "Dr. Maria Ivanova",
      price: "$200",
      image: botox,
    },
    {
      name: "Lip Fillers",
      description: "Shaping the lip and creating natural volume.",
      doctor: "Dr. Emilia Georgieva",
      price: "$250",
      image: filler,
    },
    {
      name: "Mesotherapy",
      description: "Revitalizes and hydrates skin through micro-injections.",
      doctor: "Dr. Alexander Todorov",
      price: "$150",
      image: mesotherapy,
    },
    {
      name: "Laser Hair Removal",
      description: "Permanent reduction of unwanted hair",
      doctor: "Dr. Maria Ivanova",
      price: "$300",
      image: laser,
    },
    {
      name: "Body Sculpting",
      description: "Shapes and tightens the body without surgery",
      doctor: "Dr. Emilia Georgieva",
      price: "$180",
      image: tightening,
    },
    {
      name: "Hydrafacial",
      description: "Deep cleansing and hydration for glowing skin",
      doctor: "Dr. Alexander Todorov",
      price: "$180",
      image: hydrafacial,
    },
    {
      name: "Face Cleaning",
      description: "Removes impurities and refreshes the skin",
      doctor: "Dr. Maria Ivanova",
      price: "$120",
      image: cleaning,
    },
  ];

  const [index, setIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="procedures" className="procedures">
      <h2 className="section-title section-title-center">PROCEDURES</h2>

      <div className="slider-container">
        <button
          className="arrow left"
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
        >
          ❮
        </button>

        <div className="slider-window">
          <div
            className="procedures-slider"
            style={{
              transform: `translateX(-${index * (isMobile ? 100 : 26)}%)`,
            }}
          >
            {procedures.map((proc, i) => (
              <div className="procedure-card" key={i}>
                <img src={proc.image} alt={proc.name} />
                <h4>{proc.name}</h4>
                <p>{proc.description}</p>
                <p>{proc.price}</p>

                <button
                  className="btn btn-secondary"
                  onClick={() => openProcedure(proc)}
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          className="arrow right"
          onClick={() => setIndex(index + 1)}
          disabled={
            isMobile
              ? index === procedures.length - 1
              : index === procedures.length - 4
          }
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default Procedures;
