import { useEffect, useState } from "react";
import "./Hero.css";


function Hero({ openBooking }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <section id="home" className="hero">
      <div
        className="hero-content"
        style={{ transform: `translateY(${offsetY * 0.08}px)` }}
      >
        <h1>Reveal Your Natural Beauty</h1>
        <p>Advanced aesthetic treatments with a personal touch.</p>

        <button className="btn btn-primary" onClick={openBooking}>Book Consultation</button>
      </div>

    </section>
  );
}

export default Hero;
