import { useState } from "react";
import "./BookingModal.css";

function BookingModal({ closeModal, doctor }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;

    const newErrors = {};

    // regex
    const nameRegex = /^[A-Za-zА-Яа-я\s]+$/;
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validation
    if (!nameRegex.test(name)) {
      newErrors.name = "Name must contain only letters";
    }

    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }

    // errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // submit
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
         
        <span className="close" onClick={closeModal}>
          ×
        </span>

        <div className="modal-content">
          {!submitted ? (
            <div className="form-content">
              <h2>{doctor ? `Book with ${doctor}` : "Book Consultation"}</h2>

              <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Full Name" />
                {errors.name && <p className="error">{errors.name}</p>}

                <input name="phone" type="tel" placeholder="Phone Number" />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <input name="email" type="email" placeholder="Email" />
                {errors.email && <p className="error">{errors.email}</p>}

                <textarea placeholder="Message"></textarea>

                <button className="btn btn-primary" type="submit">
                  Send Request
                </button>
              </form>
            </div>
          ) : (
            <div className="success">
              <p>Thank You!</p>
              <p>Your request has been sent successfully.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingModal;



