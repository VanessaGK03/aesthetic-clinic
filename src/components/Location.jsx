import "./Location.css";

function Location() {
  return (
    <section id="contacts" className="location">

      <h2 className="section-title section-title-center">FIND US</h2>

      <div className="location-container">

        {/* map */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps?q=Sofia%20Bulgaria&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>

        {/* contacts */}
        <div className="contact-info">

          <h3>DermaVie</h3>

          <p><strong>Address:</strong> Sofia Center, Bulgaria</p>
          <p><strong>Phone:</strong> +359 88 123 4567</p>
          <p><strong>Email:</strong> info@aestheticclinic.com</p>

          <div className="hours">
            <h4>Working Hours</h4>
            <p>Mon - Fri: 09:00 - 19:00</p>
            <p>Saturday: 10:00 - 16:00</p>
            <p>Sunday: Closed</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Location;